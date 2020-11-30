package xyz.erupt.mongodb.service;

import lombok.SneakyThrows;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import xyz.erupt.core.query.Column;
import xyz.erupt.core.query.Condition;
import xyz.erupt.core.query.EruptQuery;
import xyz.erupt.core.service.IEruptDataService;
import xyz.erupt.core.view.EruptModel;
import xyz.erupt.core.view.Page;

import javax.annotation.Resource;
import javax.persistence.Id;
import java.lang.reflect.Field;
import java.util.*;

/**
 * @author liyuepeng
 * @date 2020-03-06.
 */
@Service
public class EruptMongodbImpl implements IEruptDataService {

    @Resource
    private MongoTemplate mongoTemplate;

    @Override
    public Object findDataById(EruptModel eruptModel, Object id) {
        Query query = new Query(Criteria.where(eruptModel.getErupt().primaryKeyCol()).is(id));
        return mongoTemplate.findOne(query, eruptModel.getClazz());
    }

    @SneakyThrows
    @Override
    public Page queryList(EruptModel eruptModel, Page page, EruptQuery eruptQuery) {
        Query query = new Query();
        for (Condition condition : eruptQuery.getConditions()) {
            switch (condition.getExpression()) {
                case EQ:
                    query.addCriteria(Criteria.where(condition.getKey()).is(condition.getValue()));
                    break;
                case LIKE:
                    query.addCriteria(Criteria.where(condition.getKey()).regex("^.*" + condition.getValue() + ".*$"));
                    break;
                case RANGE:
                    List<?> list = (List<?>) condition.getValue();
                    query.addCriteria(Criteria.where(condition.getKey()).gte(list.get(0)).lte(list.get(1)));
                    break;
                case IN:
                    query.addCriteria(Criteria.where(condition.getKey()).in(condition.getValue()));
                    break;
            }
        }
        page.setTotal(mongoTemplate.count(query, eruptModel.getClazz()));
        if (page.getTotal() > 0) {
            query.limit(page.getPageSize());
            query.skip((page.getPageIndex() - 1) * page.getPageSize());
//            排序
            if (StringUtils.isNotBlank(page.getSort())) {
                for (String s : page.getSort().split(",")) {
                    if (s.split(" ")[1].contains("desc")) {
                        query.with(Sort.by(Sort.Direction.DESC, s.split(" ")[0]));
                    } else {
                        query.with(Sort.by(Sort.Direction.ASC, s.split(" ")[0]));
                    }
                }
            }
            List<Map<String, Object>> newList = new ArrayList<>();
            for (Object obj : mongoTemplate.find(query, eruptModel.getClazz())) {
                newList.add(mongoObjectToMap(obj));
            }
            page.setList(newList);
        }
        return page;
    }

    @SneakyThrows
    private Map<String, Object> mongoObjectToMap(Object obj) {
        Map<String, Object> map = new HashMap<>();
        Class<?> clazz = obj.getClass();
        for (Field field : clazz.getDeclaredFields()) {
            field.setAccessible(true);
            String fieldName = field.getName();
            if (null != field.getAnnotation(Id.class)) {
                map.put(fieldName, field.get(obj).toString());
            } else {
                map.put(fieldName, field.get(obj));
            }
        }
        return map;
    }

    @Override
    public void addData(EruptModel eruptModel, Object object) {
        mongoTemplate.insert(object);
    }

    @Override
    public void editData(EruptModel eruptModel, Object object) {
        mongoTemplate.save(object);
    }

    @Override
    public void deleteData(EruptModel eruptModel, Object object) {
        mongoTemplate.remove(object);
    }

    @Override
    public Collection<Map<String, Object>> queryColumn(EruptModel eruptModel, List<Column> columns, EruptQuery query) {
        return null;
    }
}
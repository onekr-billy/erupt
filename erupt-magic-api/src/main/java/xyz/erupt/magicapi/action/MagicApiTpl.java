package xyz.erupt.magicapi.action;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Component;
import org.ssssssss.magicapi.spring.boot.starter.MagicAPIProperties;
import xyz.erupt.core.util.EruptPropUtil;
import xyz.erupt.tpl.annotation.EruptTpl;
import xyz.erupt.tpl.annotation.TplAction;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * @author YuePeng
 * date 2021/3/28 15:56
 */
@EruptTpl
@Component
public class MagicApiTpl {

    public static final String MAGIC_API_PERMISSION = "magic-api.ftl";

    public static final String RANDOM = RandomStringUtils.randomAlphanumeric(6);

    @Resource
    private MagicAPIProperties magicAPIProperties;

    @TplAction(MAGIC_API_PERMISSION)
    public Map<String, Object> magicApiAction() {
        Map<String, Object> map = new HashMap<>();
        map.put("web", magicAPIProperties.getWeb());
        map.put("random", EruptPropUtil.getEruptVersion());
        return map;
    }

}

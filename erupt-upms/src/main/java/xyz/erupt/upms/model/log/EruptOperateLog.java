package xyz.erupt.upms.model.log;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;
import xyz.erupt.annotation.Erupt;
import xyz.erupt.annotation.EruptField;
import xyz.erupt.annotation.EruptI18n;
import xyz.erupt.annotation.fun.DataProxy;
import xyz.erupt.annotation.sub_erupt.Power;
import xyz.erupt.annotation.sub_field.Edit;
import xyz.erupt.annotation.sub_field.EditType;
import xyz.erupt.annotation.sub_field.View;
import xyz.erupt.annotation.sub_field.ViewType;
import xyz.erupt.annotation.sub_field.sub_edit.CodeEditorType;
import xyz.erupt.annotation.sub_field.sub_edit.DateType;
import xyz.erupt.annotation.sub_field.sub_edit.Search;
import xyz.erupt.jpa.model.BaseModel;
import xyz.erupt.upms.model.EruptUserPostVo;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.util.Map;

/**
 * @author YuePeng
 * date 2020-05-26
 */
@Entity
@Table(name = "e_upms_operate_log")
@EruptI18n
@Erupt(
        name = "操作日志",
        power = @Power(add = false, edit = false, viewDetails = false,
                delete = false, powerHandler = AdminPower.class),
        orderBy = "createTime desc",
        dataProxy = EruptOperateLog.class
)
@Getter
@Setter
public class EruptOperateLog extends BaseModel implements DataProxy<EruptOperateLog> {

    @ManyToOne
    @EruptField(
            views = @View(title = "用户", column = "name"),
            edit = @Edit(title = "用户", type = EditType.REFERENCE_TABLE, search = @Search)
    )
    private EruptUserPostVo eruptUser;

    @EruptField(
            views = @View(title = "IP地址"),
            edit = @Edit(title = "IP地址", search = @Search)
    )
    private String ip;

    @EruptField(
            views = @View(title = "IP来源", desc = "格式：国家 | 大区 | 省份 | 城市 | 运营商", template = "value&&value.replace(/\\|/g,' | ')"),
            edit = @Edit(title = "IP来源", search = @Search(vague = true))
    )
    private String region;

    @EruptField(
            views = @View(title = "功能名称"),
            edit = @Edit(title = "功能名称", search = @Search(vague = true))
    )
    private String apiName;

    @Column(length = 4000)
    @EruptField(
            views = @View(title = "请求参数", type = ViewType.CODE),
            edit = @Edit(title = "请求参数", type = EditType.CODE_EDITOR, codeEditType = @CodeEditorType(language = "json"))
    )
    private String reqParam;

    @EruptField(
            views = @View(title = "是否成功"),
            edit = @Edit(title = "是否成功", search = @Search)
    )
    private Boolean status;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    @EruptField(
            views = @View(title = "错误信息", type = ViewType.HTML)
    )
    private String errorInfo;

    @EruptField(
            views = @View(title = "请求耗时", template = "value && value+'ms'"),
            edit = @Edit(title = "请求耗时", search = @Search(vague = true))
    )
    private Long totalTime;

    @EruptField(
            views = @View(title = "记录时间"),
            edit = @Edit(title = "记录时间", search = @Search(vague = true), dateType = @DateType(type = DateType.Type.DATE_TIME))
    )
    private Date createTime;

    @Column(length = 4000)
    @EruptField(
            views = @View(title = "请求地址", type = ViewType.HTML)
    )
    private String reqAddr;

    @EruptField(
            views = @View(title = "请求方法")
    )
    private String reqMethod;

    @Override
    public void afterFetch(Collection<Map<String, Object>> list) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        Gson gson = builder.create();
        for (Map<String, Object> map : list) {
            Object reqParam = map.get("reqParam");
            if (null != reqParam) {
                try {
                    map.put("reqParam", gson.toJson(gson.fromJson(reqParam.toString(), Object.class)));
                } catch (Exception ignore) {
                }
            }
        }
    }
}

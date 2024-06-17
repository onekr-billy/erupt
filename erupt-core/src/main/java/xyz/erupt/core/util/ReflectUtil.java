package xyz.erupt.core.util;

import xyz.erupt.core.constant.EruptConst;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.*;
import java.util.function.Consumer;

/**
 * @author YuePeng
 * date 2018-11-07.
 */
public class ReflectUtil {

    //递归查找类字段
    public static Field findClassField(Class<?> clazz, String fieldName) {
        Field field;
        while (clazz != null) {
            try {
                field = clazz.getDeclaredField(fieldName);
                field.setAccessible(true);
                return field;
            } catch (NoSuchFieldException e) {
                if (Object.class.equals(clazz = clazz.getSuperclass())) {
                    break;
                }
            }
        }
        return null;
    }

    public static Object findFieldChain(String fieldName, Object obj)
            throws IllegalAccessException {
        String[] fields = fieldName.split("\\.");
        for (String field : fields) {
            Field f = findClassField(obj.getClass(), field);
            if (f == null) {
                throw new RuntimeException(obj.getClass().getName() + EruptConst.DOT + fieldName + " not found");
            }
            if (null == (obj = f.get(obj))) {
                return null;
            }
        }
        return obj;
    }

    public static void findClassAllFields(Class<?> clazz, Consumer<Field> fieldConsumer) {
        Class<?> tempClass = clazz;
        HashSet<String> fields = new HashSet<>();
        while (null != tempClass) {
            for (Field field : tempClass.getDeclaredFields()) {
                int mod = field.getModifiers();
                if (Modifier.isStatic(mod) || Modifier.isInterface(mod)) {
                    continue;
                }
                if(!fields.contains(field.getName())) {
                    // 解决反射字段的时候, 子类重写了父类字段,导致 生成 sql join 的时候, 多个 同名的别名
                    fields.add(field.getName());
                    fieldConsumer.accept(field);
                }
            }
            tempClass = tempClass.getSuperclass();
        }
    }

    //获取继承列表
    public static List<Class<?>> findClassExtendStack(Class<?> clazz) {
        List<Class<?>> list = new ArrayList<>();
        Class<?> tempClass = clazz;
        while (null != tempClass) {
            tempClass = tempClass.getSuperclass();
            if (tempClass != null && tempClass != Object.class) {
                list.add(tempClass);
            }
        }
        if (list.size() > 1) {
            Collections.reverse(list);
        }
        return list;
    }

    //获取字段泛型名
    public static List<String> getFieldGenericName(Field field) {
        List<String> names = new ArrayList<>();
        Type gType = field.getGenericType();
        if (gType instanceof ParameterizedType) {
            Type[] typeArguments = ((ParameterizedType) gType).getActualTypeArguments();
            for (Type typeArgument : typeArguments) {
                String[] gArray = typeArgument.getTypeName().split("\\.");
                names.add(gArray[gArray.length - 1]);
            }
        }
        return names;
    }

}

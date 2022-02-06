package xyz.erupt.core.proxy;

import lombok.SneakyThrows;
import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.springframework.aop.framework.ProxyFactory;

import java.lang.reflect.Field;

/**
 * 注解代理
 *
 * @author YuePeng
 * date 2022/2/5 14:20
 */
public abstract class AnnotationProxy<Annotation> {

    // 注解修饰的类
    protected Class<?> clazz;

    // 注解修饰的字段
    protected Field field;

    // 原始未代理注解
    protected Annotation rawAnnotation;

    protected abstract Object invocation(MethodInvocation invocation);

    //创建注解注解代理类
    public Annotation newProxy(Annotation annotation, Class<?> clazz, Field field) {
        this.clazz = clazz;
        this.field = field;
        this.rawAnnotation = annotation;
        ProxyFactory proxyFactory = new ProxyFactory(annotation);
        proxyFactory.addAdvice((MethodInterceptor) this::invocation);
        Object proxy = proxyFactory.getProxy(AnnotationProxy.class.getClassLoader());
        return (Annotation) proxy;
    }

    public Annotation newProxy(Annotation annotation, Field field) {
        return this.newProxy(annotation, null, field);
    }

    public Annotation newProxy(Annotation annotation, Class<?> clazz) {
        return this.newProxy(annotation, clazz, null);
    }

    // 调用注解方法
    @SneakyThrows
    public Object invoke(MethodInvocation invocation) {
        return invocation.getMethod().invoke(invocation.getThis());
    }

}
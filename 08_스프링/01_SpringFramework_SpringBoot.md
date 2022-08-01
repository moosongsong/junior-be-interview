# 스프링과 스프링부트

## 스프링이란?

:::tip 정의

스프링 프레임워크는 자바 생태계에서 가장 대중적인 응용프로그램 개발 프레임워크입니다. 

:::

- 의존성 주입(DI, Dependency Injection)과 제어의 역전(IOC, Inversion Of Control)은 스프링에서 가장 중요한 특징 중 하나입니다. 
  - 이런 특징으로 인해 결합도를 낮춰(Loose coupling) 유연한 개발이 가능해졌습니다.
  - 이러한 개발방식으로 개발한 응용프로그램은 단위테스트가 용이하기 때문에 보다 퀄리티 높은 프로그램을 개발할 수 있습니다.

## 의존성 주입(Dependency Injection)

:::tip 정의

DI(Dependency Injection)란 스프링이 다른 프레임워크와 차별화되어 제공하는 의존 관계 주입 기능으로, 객체를 직접 생성하는 게 아니라 외부에서 생성한 후 주입 시켜주는 방식입니다.

:::

- 객체 사이에 필요한 의존 관계에 대해서 스프링 컨테이너가 자동으로 연결해 주는 것을 말합니다.
- 스프링 컨테이너는 DI를 이용하여 빈(Bean) 객체를 관리하며, 스프링 컨테이너에 클래스를 등록하면 스프링이 클래스의 인스턴스를 관리해 줍니다.
- DI를 통해서 모듈 간의 결합도가 낮아지고 유연성이 높아집니다.

![image](https://user-images.githubusercontent.com/50647845/182053298-8bc3a0d8-9aef-4bbb-9379-5fdf4f10f0c2.png)

- 스프링에서는 객체를 `Bean`이라고 부르며, 프로젝트가 실행될때 사용자가 `Bean`으로 관리하는 객체들의 생성과 소멸에 관련된 작업을 자동적으로 수행해주는데, 객체가 생성되는 곳을 스프링에서는 `Bean`컨테이너라고 부른다.

### 스프링 컨테이너에 Bean을 등록하는 방법

- XML 설정을 통한 DI
  - ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.springframework.org/schema/beans">
    
    <bean id="UserAddController" class="com.lotts.web.user.UserAddController">
        <property name="userImpl" ref="userImpl"/>
    </bean>

    <bean id="userImpl" class="com.lotts.domain.logic.UserImpl">
        <property name="userDao" ref="userDao"/>
        <property name="orgDao" ref="orgDao"/>
        <property name="uploadpath" value="${file.upload.path}" />
    </bean>
    
    <bean id="sqlMapClient" class="org.springframework.orm.ibatis.SqlMapClientFactoryBean">
        <property name="configLocation" value="WEB-INF/config/SqlMap.xml"/>
        <property name="dataSource" ref="dataSource"/>
    </bean>
    ```
- Java 코드 상에서의 DI
  - ```java{4}
    public class SpringTest {
	    public static void main(String ar[]) {
            ApplicationContext context = new ClassPathXmlApplicationContext("ApplicationContext.xml");
            UserFacade userImpl = (UserImpl) ctx.getBean("userImpl");
        }
    }
    ```
- 어노테이션(Annotations)을 이용한 DI
  - `@Component`를 사용하여 해당 클래스를 찾아 `@Autowired`가 붙은 클래스를 자동적으로 객체로 만들어주고 사용할 수 있게 해 줍니다.


## 제어의 역전(Inversion of Control)

:::tip 정의

IoC(Inversion of Control)란 "제어의 역전" 이라는 의미로, 말 그대로 메소드나 객체의 호출작업을 개발자가 결정하는 것이 아니라, 외부에서 결정되는 것을 의미합니다.

:::

- IoC를 간단히 말해 "제어의 흐름을 바꾼다"라고 합니다.
  - 프로그램의 생명주기에 대한 제어권이 웹 애플리케이션 컨테이너에 있기 때문입니다.
- 사용자가 직접 new 연산자를 통해 인스턴스를 생성하고 메서드를 호출하는 일련의 생명주기에 대한 작업들을 스프링에 위임할 수 있게 됩니다.
- 객체의 의존성을 역전시켜 객체 간의 결합도를 줄이고 유연한 코드를 작성할 수 있게 하여 가독성 및 코드 중복, 유지 보수를 편하게 할 수 있게 합니다.

### 기존에 객체가 생성되는 순서

1. 객체 생성
2. 의존성 객체 생성
   1. 클래스 내부에서 생성
3. 의존성 객체 메소드 호출

```java{3}
@RestController
public class Controller {
    private Service service = new Service();

    @RequestMapping("/welcome")
    public String welcome() {
        return service.retrieveWelcomeMessage();
    }
}
```

### 스프링에서 객체가 생성되는 순서

1. 객체 생성
2. 의존성 객체 주입
   1. 스스로가 만드는것이 아니라 제어권을 스프링에게 위임하여 스프링이 만들어놓은 객체를 주입한다.
3. 의존성 객체 메소드 호출

```java{1,10,11}
@Component
public class Service {
    public String retrieveWelcomeMessage(){
       return "Welcome to InnovationM";
    }
}

@RestController
public class Controller {
    @Autowired
    private Service service;

    @RequestMapping("/welcome")
    public String welcome() {
        return service.retrieveWelcomeMessage();
    }
}
```

::: warning 요점

스프링이 모든 의존성 객체를 스프링이 실행될때 다 만들어주고 필요한곳에 주입시켜줌으로써 Bean들은 싱글턴 패턴의 특징을 지닙니다.   
제어의 흐름을 사용자가 컨트롤 하는 것이 아니라 스프링에게 맡겨 작업을 처리하게 됩니다.

:::

## 스프링 프레임워크의 모듈

![image](https://user-images.githubusercontent.com/50647845/182053937-99c9c6e0-3589-48e2-b245-ac29ae652a25.png)

- 스프링프레임워크는 다른 많은 기능들이 있는데, 해당 기능들은 약 스무개의 모듈로 나위어져 있으며 흔히 발생하는 문제들을 해결하고 있습니다.
- Spring JDBC
- Spring MVC
- Spring AOP
- Spring ORM
- Spring JMS
- Spring Test
- Spring Expression Language( SpEL )

## 스프링 부트

:::tip 정의

Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".

:::

- Transaction Manager, Hibernate Datasource, Entity Manager, Session Factory와 같은 설정을 하는데에 어려움이 많이 있었습니다. 
- 최소한의 기능으로 Spring MVC를 사용하여 기본 프로젝트를 셋팅하는데 개발자에게 너무 많은 시간이 걸렸습니다.
- 우리는 단지 실행만 하면 되고 위처럼 설정할 필요를 없게 만든 것이 바로 Spring Boot입니다.

### Spring Boot Starter

- 기존에는 스프링을 사용할 때 버전까지 명시하고 버전에 맞는 설정을 하였지만, 스프링 부트는 버전 관리를 스프링 부트에 의해서 관리됩니다. 
- 따라서 종속된 모든 라이브러리를 알맞게 찾아서 함께 가져오기 때문에 종속성이나 호환 버전에 대해 신경 쓸 필요가 없게 됩니다.

```xml
<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

- spring-boot-starter-web은 다음과 같은 의존성이 추가됩니다.
  - starter-web
  - starter-webmvc
  - spring-boot-starter-tomcat 
  - tomcat-embed-core
  - tomcat-embed-logging-juli

### Embed Tomcat

- 스프링 부트는 내장형 톰캣을 가지고 있기 때문에 별도의 톰캣을 설정할 필요가 없어졌습니다.
  - 그렇기 때문에 독립적으로 실행 가능한 jar로 손쉽게 배포가 가능해졌습니다.

### AutoConfigurator

- 공통적으로 필요한 `DispatcherServlet`같은 설정을 어노테이션을 이용하여 대신할 수 있도록 해줍니다.
- 스프링 부트의 main 메서드는 `@SpringBootApplication` 어노테이션을 가지고 있는데 이것은 `ComponentScan` + `configuraion` + `EnableAutoConfiguration`를 합친 어노테이션 이라볼 수 있습니다.

### 스프링 부트 스타터 프로젝트 옵션

- spring-boot-starter-web-services : SOAP 웹 서비스
- spring-boot-starter-web : Web, RESTful 응용프로그램
- spring-boot-starter-test : Unit testing, Integration Testing
- spring-boot-starter-jdbc : 기본적인 JDBC
- spring-boot-starter-hateoas : HATEOAS 기능을 서비스에 추가
- spring-boot-starter-security : 스프링 시큐리티를 이용한 인증과 권한
- spring-boot-starter-data-jpa : Spring Data JPA with Hibernate
- spring-boot-starter-cache : 스프링 프레임워크에 캐싱 지원 가능
- spring-boot-starter-data-rest : Spring Data REST를 사용하여 간단한 REST 서비스 노출

### 참고자료

- [msyu1207:tistory](https://msyu1207.tistory.com/entry/Spring-VS-Spring-Boot-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%84-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)
- [sas-study:tistory](https://sas-study.tistory.com/274)
- [gillog:velog](https://velog.io/@gillog/Spring-DIDependency-Injection)

# 스프링 AOP

## AOP

- AOP는 Aspect Oriented Programming의 약자로 관점 지향 프로그래밍이라고 불립니다.

:::tip 관점 지향

관점 지향은 쉽게 말해 어떤 로직을 기준으로 핵심적인 관점, 부가적인 관점으로 나누어서 보고 그 관점을 기준으로 각각 모듈화하겠다는 것을 말합니다.

:::

- 핵심적인 관점은 우리가 적용하고자 하는 핵심 비즈니스 로직입니다.
- 부가적인 관점은 핵심 로직을 실행하기 위해서 행해지는 데이터베이스 연결, 로깅, 파일 입출력 등을 예로 들 수 있습니다.

## 흩어진 관심사

- AOP에서 각 관점을 기준으로 로직을 모듈화한다는 것은 코드들을 부분적으로 나누어서 모듈화하겠다는 의미입니다. 
- 이때, 소스 코드상에서 다른 부분에 계속 반복해서 쓰는 코드들을 발견할 수 있는 데 이것을 `흩어진 관심사 (Crosscutting Concerns)`라 부릅니다.

![image](https://user-images.githubusercontent.com/50647845/182500327-2a4c0a52-c035-489a-8079-dda6919df3f4.png)

:::warning 요점

위와 같이 흩어진 관심사를 Aspect로 모듈화하고 핵심적인 비즈니스 로직에서 분리하여 재사용하겠다는 것이 AOP의 취지입니다.

:::

## 주요 개념

- **Aspect** 
  - 흩어진 관심사(Crosscutting Concerns)를 묶어서 모듈화 한 것입니다. 하나의 모듈. `Advice`와 `Point Cut`이 들어갑니다.
- **Target**  
  - Aspect가 가지고 있는 `Advice`가 적용되는 대상(클래스, 메서드 등등)을 말합니다.
- **Advice**
  - 어떤 일을 해야할 지에 대한 것입니다. 해야할 일들에 대한 정보를 가지고 있다.
- **JointPoint**
  - 가장 흔한 Join Point는 메서드 실행 시점입니다.
  - Advice가 적용될 위치, 끼어들 수 있는 지점. 생성자 호출 직전, 생성자 호출 시, 필드에 접근하기 전, 필드에서 값을 가져갔을 때 등이 있습니다.
- **PointCut**
  - JointPoint의 상세한 스펙을 정의한 것입니다. 'A란 메서드의 진입 시점에 호출할 것'과 같이 더욱 구체적으로 `Advice`가 실행될 지점을 정할 수 있습니다.

## AOP 구현체

- AspectJ
- 스프링 AOP

## AOP 적용 방법

- 컴파일 타임에 적용
  - 컴파일 시점(.java 파일을 .class 파일로 만들 때)에 바이트 코드를 조작하여 조작된(AOP가 적용된) 바이트코드를 생성.
- 로드 타임에 적용
  - 순수하게 컴파일한 뒤, 클래스를 로딩하는 시점에 클래스 정보를 변경(Load Time Weaving, 로드타임 위빙).
- 런타임에 적용
  - 스프링 AOP가 사용하는 방법. A 클래스 타입의 Bean을 만들 때 A 타입의 Proxy Bean2을 만들어 Proxy Bean이 Aspect 코드를 추가하여 동작.

## 스프링 AOP 특징

- 스프링 AOP는 프록시 기반의 AOP 구현체이며, 프록시 객체를 사용하는 이유는 접근 제어 및 부가 기능을 추가하기 위함입니다.
- 스프링 빈에만 AOP를 적용할 수 있습니다.
- 모든 AOP 기능을 제공하는 것이 목적이 아니라, 스프링 IoC와 연동하여 엔터프라이즈 애플리케이션에서 가장 흔한 문제(중복코드, 프록시 클래스 작성의 번거로움, 객체 간 관계 복잡도 증가 등등…)를 해결하기 위한 솔루션을 제공하는 것이 목적입니다.

## @AOP

### 의존성 추가하기

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

### Aspect를 나타내는 클래스

```java{9}
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class PerfAspect {
    @Around("execution(* me.gracenam..*.EventService.*(..))")
    public Object logPerf(ProceedingJoinPoint pjp) throws Throwable {
        long begin = System.currentTimeMillis();
        Object retVal = pjp.proceed();
        System.out.println(System.currentTimeMillis() - begin);
        return retVal;
    }
}
```

- `@Aspect` 애노테이션으로 이 클래스가 `Aspect` 클래스임을 알려줍니다.
- `@Component` 애노테이션을 사용해서 빈으로 등록하는데 이는 애노테이션 기반의 `스프링 IoC`를 사용하기 때문에 `Component Scan`을 통해서 빈 등록을 하기 때문입니다.
- 해야할 일은 **Advice**, 어디에 적용할 것인가는 **Point Cut**에 해당하고 이 두 가지를 정의해야 합니다.
- `ProceedingJoinPoint`, `PJP`는 Advice가 적용되는 대상입니다.
  - 즉, `Advice`가 적용되는 `createEvent`, `publishEvent`와 같은 메서드 자체라고 보면 됩니다.
  - `method invocation`과 비슷한 개념입니다.
- 완성된 `Advice`는 `Around Advice`라고 해서 `@Around` 애노테이션을 붙여줍니다. 
  - 그리고 `value`에 Point Cut 이름을 주거나 직접 정의할 수 있습니다.
- `execution`은 `Point Cut` 표현식인데 이 표현식을 사용해서 어디에 적용할 지를 정의할 수 있습니다.
  - `* me.gracenam..*.EventService.*(..)`는 me.gracenam 패키지 밑에 있는 모든 클래스 중 EventService에 있는 모든 메소드에 Advice를 적용하라고 정의한 것입니다. 

### 특정 메소드만 적용되도록 하기

```java
import java.lang.annotation.*;

@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.CLASS)
public @interface PerfLogging {
}
```

```java{9}
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class PerfAspect {
    @Around("@annotation(PerfLogging)")
    public Object logPerf(ProceedingJoinPoint pjp) throws Throwable {
        long begin = System.currentTimeMillis();
        Object retVal = pjp.proceed();
        System.out.println(System.currentTimeMillis() - begin);
        return retVal;
    }
}
```

```java{5,15}
import org.springframework.stereotype.Service;

@Service
public class SimpleEventService implements EventService {

    @PerfLogging
    @Override
    public void createEvent() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Created an event");
    }

    @PerfLogging
    @Override
    public void publishEvent() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Published an event");
    }

    public void deleteEvent() {
        System.out.println("Delete an event");
    }
}
```

- Aspect에서는 execution 대신 `@annotation`이라는 표현식으로 `PerfLogging`이라는 애노테이션이 달린 곳에 적용되도록 지정했습니다.
- 애노테이션을 만들 때 한 가지 주의해야 할 점은 RetentionPolicy를 Class 이상으로 주어야 합니다. 
  - `RetentionPolicy`라는 것은 기본 값이 Class인데 이 애노테이션 정보를 얼마나 유지할 것인가를 말합니다. 

### @Around 이외의 어노테이션

- @Before (이전) : 어드바이스 타겟 메소드가 호출되기 전에 어드바이스 기능을 수행
- @After (이후) : 타겟 메소드의 결과에 관계없이(즉 성공, 예외 관계없이) 타겟 메소드가 완료 되면 어드바이스 기능을 수행
- @AfterReturning (정상적 반환 이후)타겟 메소드가 성공적으로 결과값을 반환 후에 어드바이스 기능을 수행
- @AfterThrowing (예외 발생 이후) : 타겟 메소드가 수행 중 예외를 던지게 되면 어드바이스 기능을 수행
- @Around (메소드 실행 전후) : 어드바이스가 타겟 메소드를 감싸서 타겟 메소드 호출전과 후에 어드바이스 기능을 수행

### 참고자료

- [engkimbs:tistory](https://engkimbs.tistory.com/746)
- [yadon079:github](https://yadon079.github.io/2021/spring/spring-aop-core)

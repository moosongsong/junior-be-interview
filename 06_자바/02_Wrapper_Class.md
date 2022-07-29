# Wrapper Class

:::tip 정의

기본 자료타입(primitive type)을 객체로 다루기 위해서 사용하는 클래스들을 래퍼 클래스(wrapper class)라고 합니다.

:::

![image](https://user-images.githubusercontent.com/50647845/181657587-33c905b2-e44e-4401-a2b0-496183db8dd7.png)

- 자바는 모든 기본타입(primitive type)은 값을 갖는 객체를 생성할 수 있습니다.
- 이런 객체를 포장 객체라고도 하는데 그 이유는 기본 타입의 값을 내부에 두고 포장하기 때문입니다.
- 불변 객체이기 때문에 값에 대한 변경은 불가능하고 새로운 값(객체)의 할당이나 참조만 가능합니다.

## 박싱(Boxing)과 언박싱(UnBoxing)

:::tip 정의

기본 타입의 값을 포장 객체로 만드는 과정을 `박싱`이라고 하고 반대로 포장객체에서 기본타입의 값을 얻어내는 과정을 `언박싱`이라고 합니다.

:::

![image](https://user-images.githubusercontent.com/50647845/181657688-7461532f-dbb0-459d-8741-37b62e54032f.png)

```java
public class Sample {
    public static void main(String[] args)  {
        Integer num = new Integer(25); // 박싱
        int n = num.intValue(); //언박싱
        System.out.println(n);
    }
}
```

### 자동 박싱(AutoBoxing)과 자동 언박싱(AutoUnBoxing)

```java
public class Sample {
    public static void main(String[] args)  {
        Integer num = 17; // 자동 박싱
        int n = num; //자동 언박싱
        System.out.println(n);
    }
}
```

- 자동 박싱의 포장 클래스 타입에 기본값이 대입될 경우에 발생합니다.
- JDK 1.5부터 지원합니다.

## Wrapper Class를 사용하는 이유

- 객체로 저장해야 할 경우
- 매개변수로 객체가 요구될 경우(ex. 제네릭, Collection의 타입)
- 객체 간의 비교가 필요할 경우
- 제네릭이나 컬렉션에서 사용할 경우, 기본형을 쓸 수 없기 때문에 이를 Wrapping한 형태를 사용해야 합니다.
- 기본 자료형의 값을 단순히 값으로만 사용하지 않고 그 값에 대한 메서드를 사용 혹은 null값을 이용하기 위해 사용합니다.
- Integer Cache라는 곳에서 캐시에 이미 생성한 것이 있으면, 바로 반환하고 아니면 새로 생성합니다.

## Integer의 값 비교하기

Integer.valueOf(127) == Integer.valueOf(127)는 같을까요?

```java
Integer a = 127; 
Integer b = 127;

a == b (true? false?)
```

- Integer 클래스는 내부에서 integer 사용을 위해 IntegerCache를 관리합니다. 
- 이 캐시의 기본 범위는 -128 ~ 127이며, Integer.valueOf() 메소드는 캐시 범위에 해당하는 objects를 리턴합니다. 
- 그렇기에, a와 b 둘다, 같은 object 를 가리키게 되므로, a == b가 true가 됩니다.
- Integer.IntegerCache 처럼 ByteCache, ShortCache, LongCache, CharacterCache도 각각 존재합니다.
  - Byte, Short, Long 타입은 -127부터 127까지의(-127<=, <=127) 고정된 캐시값을 가집니다.
  - 하지만, Character는 0부터 127(0<=, <=127)까지의 고정된 캐시값을 가집니다.

### 참고자료

- [coding-factory:tistory](https://coding-factory.tistory.com/547)
- [ksh9409255:velog](https://velog.io/@ksh9409255/%EB%9E%98%ED%8D%BCwrapper-%ED%81%B4%EB%9E%98%EC%8A%A4%EC%97%90-%EB%8C%80%ED%95%B4...%EC%9E%91%EC%84%B1%EC%A4%91)
- [WooVictory:github](https://github.com/WooVictory/Ready-For-Tech-Interview/blob/master/Java/%5BJava%5D%20Wrapper%20Class.md)
- [meetup.toast](https://meetup.toast.com/posts/185)

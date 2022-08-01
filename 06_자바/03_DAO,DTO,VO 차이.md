# DAO, DTO, VO 차이

## DAO(Data Access Object)란?

:::tip 정의  
데이터베이스의 데이터에 접근하기 위한 객체이며, 데이터베이스 접근을 하기 위한 로직과 비즈니스 로직을 분리하기 위해 사용합니다.
:::

사용자는 자신이 필요한 인터페이스를 DAO에게 던지고 DAO는 이 인터페이스를 구현한 객체를 사용자에게 편리하게 사용할 수 있도록 반환합니다. DAO는 데이터베이스와 연결할 Connection까지 설정되어 있는
경우가 많습니다. 그래서 현재 쓰이는 MyBatis 등을 사용할 경우 커넥션풀까지 제공되고 있기 때문에 DAO를 별도로 만드는 경우는 드뭅니다.

## DTO(Data Transfer Object)란?

:::tip 정의  
계층 간 데이터 교환을 위한 자바 빈즈(Java Beans)입니다. 데이터베이스 레코드의 데이터를 매핑하기 위한 데이터 객체를 말합니다.
:::

DTO는 보통 로직을 가지고 있지 않고 data와 그 data에 접근을 위한 getter, setter만 가지고 있습니다.  
정리하자면, DTO는 데이터베이스에서 data를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체를 말합니다.  
VO라고 표현하기도 합니다.

## VO(Value Object)란?

:::tip 정의  
값 오브젝트로써 값을 그 자체를 나타내는 객체입니다.
:::

자바는 값 타입을 표현하기 위해 불변 클래스를 만들어 사용하는데, 불변이라는 것은 read only 특징을 가집니다. DTO와 VO의 공통점은 넣어진 데이터를 getter를 통해 사용하므로 주 목적은 같으나,
DTO는 가변적인 성격을 가진 클래스이며(setter 활용) 그에 비해 VO는 불변의 성격을 가졌습니다(생성자 사용).  
또한, DTO와 반대로 로직을 포함할 수 있습니다. VO는 서로 다른 이름을 갖는 VO 인스턴스라도 모든 속성 값이 같다면 두 인스턴스는 같은 객체인 것이 핵심입니다.

## DTO vs VO

-|DTO|VO|
-------|----------|-----------|
목적|계층간 데이터 전달|값 자체 표현|
동등성|필드값이 같아도 같은 객체 x |필드값이 같으면 같은 객체|
가변성|setter 존재 시 가변, setter 비 존재 시 불가변| 불변|
로직| getter/setter 외의 로직이 필요하지 않음 | getter/setter외의 로직이 있어도 무방함|

### 참고자료

- https://m.blog.naver.com/cjhol2107/221757079506
- https://maenco.tistory.com/entry/Java-DTO%EC%99%80-VO%EC%9D%98-%EC%B0%A8%EC%9D%B4
- https://velog.io/@livenow/Java-VOValue-Object%EB%9E%80
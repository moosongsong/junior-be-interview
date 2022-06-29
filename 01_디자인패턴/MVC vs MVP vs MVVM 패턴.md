# MVC vs MVP vs MVVM 패턴

## MVC 패턴

::: tip 정의  
MVC 패턴은 모델(Model), 뷰(View), 컨트롤러(Controller)로 이루어진 디자인 패턴입니다.
:::  

![image](https://user-images.githubusercontent.com/50647845/176324270-20c5cd97-249f-43a1-a7a3-348ae5c0cd33.png)

- Controller는 여러개의 View를 선택할 수 있는 1:n 구조입니다.
- Controller는 View를 선택할 뿐 직접 업데이트 하지 않습니다. (View는 Controller를 알지 못합니다.)

### 모델 (Model)

::: tip 정의  
모델은 애플리케이션의 데이터인 데이터베이스, 상수, 변수와 같은 데이터를 처리하는 부분을 뜻합니다.
:::

- 예를 들어 사각형 모양의 박스 안에 글자가 들어 있다면 그 사각형 모양의 박스 위치 정보, 글자 내용, 글자 위치, 글자 포맷(utf-8 등)에 관한 정보를 모두 가지고 있어야 합니다. 
- 뷰에서 데이터를 생성하거나 수정하면 컨트롤러를 통해 모델을 생성하거나 갱신합니다.

### 뷰 (View)

::: tip 정의  
뷰는 inputbox, checkbox, textarea 등 사용자 인터페이스 요소를 나타냅니다.
:::  

- 즉, 모델을 기반으로 사용자가 볼 수 있는 화면을 뜻합니다. 
- 모델이 가지고 있는 정보를 따로 저장하지 않아야 하며 단순히 사각형 모양 등 화면에 표시하는 정보만 가지고 있어야 합니다.
- 또한, 변경이 일어나면 컨트롤러에 이를 전달해야 합니다.

### 컨트롤러 (Controller)

::: tip 정의  
컨트롤러는 하나 이상의 모델과 하나 이상의 뷰를 잇는 다리 역할을 하며 유저 이벤트 등 사용자의 입력(Action)을 받고 처리하는 부분입니다.
:::  

- 또한, 모델과 뷰의 생명주기도 관리하며, 모델이나 뷰의 변경 통지를 받으면 이를 해석하여 각각의 구성 요소에 해당 내용에 대해 알려줍니다.

### MVC 패턴의 동작 방식

1. 사용자의 Action들은 Controller에 들어오게 됩니다.
2. Controller는 사용자의 Action를 확인하고, Model을 업데이트합니다.
3. Controller는 Model을 나타내줄 View를 선택합니다.
4. View는 Model을 이용하여 화면을 나타냅니다.

### MVC 패턴의 장점

- 애플리케이션의 구성 요소를 세 가지 역할로 구분하여 개발 프로세스에서 각각의 구성 요소에만 집중해서 개발할 수 있습니다.
- 재사용성과 확장성이 용이합니다.
- MVC 패턴의 장점은 널리 사용되고 있는 패턴이라는 점에 걸맞게 가장 단순합니다.  
  단순하다 보니 보편적으로 많이 사용되는 디자인패턴입니다.

### MVC 패턴의 단점

- 애플리케이션이 복잡해질수록 모델과 뷰의 관계가 복잡해지는 단점이 있습니다.
- MVC 패턴의 단점은 View와 Model 사이의 의존성이 높다는 것입니다.   
  View와 Model의 높은 의존성은 어플리케이션이 커질 수록 복잡하지고 유지보수가 어렵게 만들 수 있습니다.

### MVC 패턴의 예시

### 스프링 MVC



#### 리액트

- MVC 패턴을 이용한 대표적인 라이브러리로는 리액트(React.js)가 있습니다.
- 리액트는 유저 인터페이스를 구축하기 위한 라이브러리입니다. 
- ‘가상 DOM’을 통해 실제 DOM을 조작하는 것을 추상화해서 성능을 높였습니다.
- 대표적인 특성으로는 불변성(immutable)이 있습니다. 
- 예를 들어 state는 setState를 통해서만 수정이 가능하고, props를 기반으로 해서 만들어지는 컴포넌트인 pureComponent가 있습니다. 
- 단방향 바인딩이 적용되어 있고, 자유도가 높고, 메타(페이스북)가 운영하고 있으며 넷플릭스, 트위터, 드롭박스, 우버, 페이팔, 마이크로소프트 등에서 사용됩니다.

## MVP 패턴

::: tip 정의  
MVP 패턴은 MVC 패턴으로부터 파생되었으며 MVC에서 C에 해당하는 컨트롤러가 프레젠터(presenter)로 교체된 패턴입니다.
:::  

![MVP Image](https://user-images.githubusercontent.com/50647845/176324777-5f701918-5009-4d14-9d32-2650eb016cfd.png)

- Presenter와 View는 1:1 관계입니다.
- 뷰와 프레젠터는 일대일 관계이기 때문에 MVC 패턴보다 더 강한 결합을 지닌 디자인 패턴이라고 볼 수 있습니다.

### 프레젠터 (Presenter)

:::tip 정의  
View에서 요청한 정보로 Model을 가공하여 View에 전달해 주는 부분입니다.   
:::

- View와 Model을 붙여주는 접착제 역할을 합니다.

### MVP 패턴의 동작 방식

1. 사용자의 Action들은 View를 통해 들어오게 됩니다.
2. View는 데이터를 Presenter에 요청합니다.
3. Presenter는 Model에게 데이터를 요청합니다.
4. Model은 Presenter에서 요청받은 데이터를 응답합니다.
5. Presenter는 View에게 데이터를 응답합니다.
6. View는 Presenter가 응답한 데이터를 이용하여 화면을 나타냅니다.

### MVP 패턴의 장점

- View와 Model의 의존성이 없다는 것입니다. MVP 패턴은 MVC 패턴의 단점이었던 View와 Model의 의존성을 해결하였습니다. 

### MVP 패턴의 단점

- View와 Model 사이의 의존성은 해결되었지만, View와 Presenter 사이의 의존성이 높은 가지게 되는 단점이 있습니다. 
  어플리케이션이 복잡해 질 수록 View와 Presenter 사이의 의존성이 강해지는 단점이 있습니다.

## MVVM 패턴

::: tip 정의  
MVVM 패턴은 MVC의 C에 해당하는 컨트롤러가 뷰모델(view model)로 바뀐 패턴입니다.
:::

![MVVM](https://user-images.githubusercontent.com/50647845/176324894-6f8af493-db7c-4026-99bf-9c7daa8f7749.png)

- 여기서 뷰모델은 뷰를 더 추상화한 계층이며, MVVM 패턴은 MVC 패턴과는 다르게 커맨드와 데이터 바인딩을 가지는 것이 특징입니다. 
- 뷰와 뷰모델 사이의 양방향 데이터 바인딩을 지원하며 UI를 별도의 코드 수정 없이 재사용할 수 있고 단위 테스팅하기 쉽다는 장점이 있습니다.
- MVVM 패턴은 Command 패턴과 Data Binding 두 가지 패턴을 사용하여 구현되었습니다.
- Command 패턴과 Data Binding을 이용하여 View와 View Model 사이의 의존성을 없앴습니다.
- View Model과 View는 1:n 관계입니다.

### MVVM 패턴의 동작 방식

1. 사용자의 Action들은 View를 통해 들어오게 됩니다.
2. View에 Action이 들어오면, Command 패턴으로 View Model에 Action을 전달합니다.
3. View Model은 Model에게 데이터를 요청합니다.
4. Model은 View Model에게 요청받은 데이터를 응답합니다.
5. View Model은 응답 받은 데이터를 가공하여 저장합니다.
6. View는 View Model과 Data Binding하여 화면을 나타냅니다.

### MVVM 패턴의 장점

- MVVM 패턴은 View와 Model 사이의 의존성이 없습니다. 또한 Command 패턴과 Data Binding을 사용하여 View와 View Model 사이의 의존성 또한 없앤 디자인패턴입니다. 각각의 부분은 독립적이기 때문에 모듈화 하여 개발할 수 있습니다.

### MVVM 패턴의 단점

- MVVM 패턴의 단점은 View Model의 설계가 쉽지 않다는 점입니다.

### MVVM 패턴의 예시

#### 뷰

- MVVM 패턴을 가진 대표적인 프레임워크로는 뷰(Vue.js)가 있습니다. 
- Vue.js는 반응형(reactivity)이 특징인 프런트엔드 프레임워크입니다. 
- 예를 들어 watch와 computed 등으로 쉽게 반응형적인 값들을 구축할 수 있습니다.
- 함수를 사용하지 않고 값 대입만으로도 변수가 변경되며 양방향 바인딩, html을 토대로 컴포넌트를 구축할 수 있다는 점이 특징입니다. 
- 재사용 가능한 컴포넌트 기반으로 UI를 구축할 수 있으며 BMW, 구글, 루이비통 등에서 사용합니다.

:::warning 용어
**커맨드**  

여러 가지 요소에 대한 처리를 하나의 액션으로 처리할 수 있게 하는 기법이다.  

**데이터 바인딩**  

화면에 보이는 데이터와 웹 브라우저의 메모리 데이터를 일치시키는 기법으로, 뷰모델을 변경하면 뷰가 변경된다.  
:::  

### 참고자료

- [면접을 위한 CS 전공지식 노트:도서](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=292815727)
- [the book:전공지식 노트](https://thebook.io/080326/ch01/02/)
- [beomy:티스토리](https://beomy.tistory.com/43)
- [wordbe:티스토리](https://wordbe.tistory.com/entry/MVC-%ED%8C%A8%ED%84%B4-%EC%98%88%EC%A0%9C)


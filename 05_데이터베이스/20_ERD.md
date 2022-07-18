# ERD

## ERD(Entity Relationship Diagram)란 무엇인가?

- 릴레이션 간의 관계들을 정의한 것입니다.
- 데이터베이스를 구축할 때 가장 기초적인 뼈대 역할을 합니다.
- 시스템의 요구 사항을 기반으로 작성되며 이 ERD를 기반으로 데이터베이스를 구축합니다.
- 데이터베이스를 구축한 이후에도 디버깅 또는 비즈니스 프로세스 재설계가 필요한 경우에도 설계도 역할을 담당하기에 중요합니다.
- 관계형 구조로 표현할 수 있는 데이터를 구성하는데 유용합니다.
- 비정형 데이터를 충분히 표현할 수 없다는 단점이 있습니다.

:::tip 비정형 데이터  
비구조화 데이터를 말하며, 미리 정의된 데이터 모델이 없거나 미리 정의된 방식으로 정리되지 않은 정보를 말한다.
:::

## ERD 작성법

- 선긋기
  - 점선과 실선
    - 점선 : 비식별 관계로, 부모 자식 관계에서 자식이 부모의 키를 일반 속성을 참조할 때 사용합니다.
    - 실선 : 식별 관계로, 부모 자식 관계에서 부모의 키를 외래키로 참조해서 자신의 키로 설정할 때 사용합니다.  
      ![ERD_6](https://user-images.githubusercontent.com/79966015/179431308-d7697a89-bdef-4633-af0e-ecaf4203369d.PNG)  
  - 선의 끝 모양  
    - 1:1 관계 : 부모(SHOP)은 하나의 자식(FOOD)이 있다.  
    ![erd_1](https://user-images.githubusercontent.com/79966015/179431080-77d26cd1-fcb9-4144-8ea8-d9b5b3d83cee.PNG)  

    - 1:N 관계 : 부모(SHOP)은 하나 이상의 자식(FOOD)이 있다.  
    ![ERD_2](https://user-images.githubusercontent.com/79966015/179431081-803c1baf-6088-43a3-bde2-e4a4936b08bc.PNG)

    - N:N 관계 : 하나 이상의 부모(SHOP)은 하나 이상의 자식(FOOD)이 있다.  
    ![ERD_3](https://user-images.githubusercontent.com/79966015/179431083-977b6c2d-155a-4c82-b8a4-70463029986f.PNG)

    - 1:1(0) 관계 : 부모(SHOP)은 하나의 자식(FOOD)이 있을수도 있고 없을 수도 있다.  
    ![ERD_4](https://user-images.githubusercontent.com/79966015/179431078-3ce3f9aa-62c5-42ab-8068-c221e4da595a.PNG)

    - 1:N(0) 관계 : 부모(SHOP)은 여러개의 자식(FOOD)이 있을수도 있고 없을 수 도 있다.  
    ![ERD_5](https://user-images.githubusercontent.com/79966015/179431079-02a43fd2-6c67-4925-b1c5-05df0394c8a4.PNG)

## ERD 작성 사이트

- [ERD CLOUD](https://www.erdcloud.com/)
    - 로그인 해서 사용하는 사이트이고, 팀과 같이 ERD를 작성할 수도 있어서 편리합니다.
    
### 참고자료

- 주홍철.*면접을 위한 CS 전공지식 노트*.서울:길벗,2022.
- [Dev Scroll](https://inpa.tistory.com/entry/DB-%F0%9F%93%9A-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%AA%A8%EB%8D%B8%EB%A7%81-1N-%EA%B4%80%EA%B3%84-%F0%9F%93%88-ERD-%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8)
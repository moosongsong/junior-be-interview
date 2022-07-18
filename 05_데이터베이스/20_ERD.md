# ERD

## 데이터 모델링

:::tip 정의  
정보시스템의 구축의 대상이 되는 업무 내용을 분석하여 이해하고 약속된 표기법에 의해 표현하는 것을 의미합니다.
:::

- 개념적 데이터 모델링
    - 일의 데이터 간의 관계를 구상하는 단계입니다.
    - 엔터티-관계 다이어그램(ERD)를 생성하는 것입니다.
    - 방법  
      ![개념모델링](https://user-images.githubusercontent.com/79966015/179434886-68ba09bd-e038-451b-94b5-f975d915e35d.PNG)
    - 예시
      ![ERD_개념](https://user-images.githubusercontent.com/79966015/179433359-9fc3e5d4-bb98-4bc6-a516-3e6f7c17de8f.PNG)
- 논리적 데이터 모델링
    - 구체화된 업무중심의 데이터 모델을 만들어 내는 단계입니다.
    - Key, 속성, 관계등을 표시하며, 정규화 활동을 수행합니다.
    - 개념적 ERD에 속성과 Key, 데이터타입 등을 포함하여 테이블형식으로 만드는 것입니다.
    - 예시  
      ![예시](https://user-images.githubusercontent.com/79966015/179432492-41aea20f-ba3e-40da-9661-e53c3a1a5f7c.PNG)
- 물리적 데이터 모델링
    - 데이터를 관리할 데이터 베이스를 선택하고, 실제 테이블을 만드는 작업을 말합니다.
    - 시각적인 구조를 실제로 SQL 코딩을 통해 완성하는 단계입니다.
    - 예시  
      ![물리모델링](https://user-images.githubusercontent.com/79966015/179433695-1de762c5-27c0-4607-9606-434cad7357bb.PNG)

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

## (논리적) ERD 작성법

- 엔터티
    - 각각의 엔터디에 필드를 추가하면 됩니다.
    - 보통 필드명과 타입을 필수로 기재합니다.
- 키와 제약조건
    - PK(Primary key)
        - 주로 열쇠 아이콘으로 나타납니다.
        - PK라고 작성하여 표시하기도 합니다.
    - NOT NULL
        - Null을 비허용하면 Not Null이라고 적거나, N을 적습니다.
        - Null을 허용한다면 아무것도 적지 않습니다.
    - FK(Foreign key)
        - PK와 다른색의 열쇠 아이콘으로 나타납니다.
        - FK라고 작성하여 표시하기도 합니다.
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

- 예시
  ![논리ERD예시](https://user-images.githubusercontent.com/79966015/179434163-755519db-6b50-4ef0-8c9d-40f1838283a9.PNG)  
  [김형준님의 샘플 쇼핑 ERD](https://www.erdcloud.com/d/Rk9PzvGHBGBm2QGqN)

## ERD 작성 사이트

- [ERD CLOUD](https://www.erdcloud.com/)
    - 개인 ERD뿐만 아니라 팀과 같이 ERD를 작성할 수도 있어서 편리합니다.
    - 다른 사람들이 작성한 ERD를 찾아볼 수 있습니다.

- [draw.io](https://app.diagrams.net/)
    - ERD뿐만 아니라 다양한 다이어그램을 작성할 수 있는 사이트입니다.
    - 공유가 가능하여 다른 사람들과 같이 작성할 수 있습니다.

### 참고자료

- 주홍철.*면접을 위한 CS 전공지식 노트*.서울:길벗,2022.
- [Dev Scroll](https://inpa.tistory.com/entry/DB-%F0%9F%93%9A-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%AA%A8%EB%8D%B8%EB%A7%81-1N-%EA%B4%80%EA%B3%84-%F0%9F%93%88-ERD-%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8)
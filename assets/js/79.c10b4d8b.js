(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{342:function(t,s,r){"use strict";r.r(s);var e=r(13),a=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"데이터베이스의-종류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#데이터베이스의-종류"}},[t._v("#")]),t._v(" 데이터베이스의 종류")]),t._v(" "),s("h2",{attrs:{id:"관계형-데이터베이스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#관계형-데이터베이스"}},[t._v("#")]),t._v(" 관계형 데이터베이스")]),t._v(" "),s("p",[t._v("관계형 데이터베이스는 행과 열을 가지는 표 형식 데이터를 저장하는 형태의 데이터베이스를 가리키며 SQL이라는 언어를 써서 조작합니다.")]),t._v(" "),s("ul",[s("li",[t._v("관계형 데이터베이스의 경우 표준 SQL을 지키기는 하지만, 각자의 제품에 특화시킨 SQL을 사용합니다.\n"),s("ul",[s("li",[t._v("오라클의 경우 PL/SQL이라고 하며, SQL Server에서는 T-SQL, MySQL은 SQL을 사용합니다.")])])])]),t._v(" "),s("h2",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),s("ul",[s("li",[t._v("MySQL은 대부분의 운영체제와 호환되며 현재 가장 많이 사용하는 데이터베이스입니다.")]),t._v(" "),s("li",[t._v("C, C++로 만들어졌으며, MyISAM 인덱스 압축기술, B-트리 기반의 인덱스, 스레드 기반의 메모리 할당 시스템, 매우 빠른 조인, 최대 64개의 인덱스를 제공합니다.")]),t._v(" "),s("li",[t._v("대용량 데이터베이스를 위해 설계되어 있고 롤백, 커밋, 이중암호 지원 보안등의 기능을 제공합니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/179398739-3854823a-eeba-4596-8ab5-ee5f8acfc896.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("데이터베이스의 심장과도 같은 역할을 하는 곳이 바로 스토리지 엔진인데, 모듈식 아키텍처로 쉽게 스토리지 엔진을 바꿀 수 있으며, 데이터 웨어하우징, 트랜잭션 처리, 고가용성 처리에 강점을 두고 있습니다.")]),t._v(" "),s("li",[t._v("스토리지 엔진 위에는 커넥터 API 및 서비스 계층을 통해 MySQL 데이터베이스와 쉽게 상호 작용할 수 있습니다.")]),t._v(" "),s("li",[t._v("MySQL은 쿼리 캐시를 지원해서 입력된 쿼리 문에 대한 전체 결과 집합을 저장하기 때문에 사용자가 작성한 쿼리가 캐시에 있는 쿼리와 동일하면 서버는 단순히 구문 분석, 최적화 및 실행을 건너 뛰고 캐시의 출력만\n표시합니다.")])]),t._v(" "),s("h2",{attrs:{id:"postgresql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[t._v("#")]),t._v(" PostgreSQL")]),t._v(" "),s("ul",[s("li",[t._v("PostgreSQL은 MySQL 다음으로 개발자들이 선호하는 데이터베이스 기술로 널리 인정받고 있습니다.")]),t._v(" "),s("li",[t._v("디스크 조각이 차지하는 영역을 회수할 수 있는 장치인 VACUUM이 특징입니다.")]),t._v(" "),s("li",[t._v("최대 테이블의 크기는 32TB이며 SQL뿐만 아니라 JSON을 이용해서 데이터에 접근할 수 있습니다.")]),t._v(" "),s("li",[t._v("지정 시간에 복구하는 기능, 로깅, 접근 제어, 중첩된 트랜잭션, 백업 등을 할 수 있습니다.")])]),t._v(" "),s("h2",{attrs:{id:"nosql-데이터베이스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nosql-데이터베이스"}},[t._v("#")]),t._v(" NoSQL 데이터베이스")]),t._v(" "),s("ul",[s("li",[t._v("NoSQL(Not only SQL)이라는 슬로건에서 생겨난 데이터베이스입니다.")]),t._v(" "),s("li",[t._v("SQL을 사용하지 않는 데이터베이스를 말하며, 대표적으로 MongoDB와 Redis등이 있습니다.")])]),t._v(" "),s("h2",{attrs:{id:"mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[t._v("#")]),t._v(" MongoDB")]),t._v(" "),s("ul",[s("li",[t._v("MongoDB는 JSON을 통해 데이터에 접근할 수 있고, Binary JSON 형태(BSON)로 데이터가 저장되며 와이어드타이거 엔진이 기본 스토리지 엔진으로 장착된 키-값 데이터 모델에서 확장된 도큐먼트\n기반의 데이터베이스입니다.")]),t._v(" "),s("li",[t._v("확장성이 뛰어나며 빅데이터를 저장할 때 성능이 좋고 고가용성과 샤딩, 레플리카셋을 지원합니다.")]),t._v(" "),s("li",[t._v("스키마를 정해 놓지 않고 데이터를 삽입할 수 있기 때문에 다양한 도메인의 데이터베이스를 기반으로 분석하거나 로깅 등을 구현할 때 강점을 보입니다.")]),t._v(" "),s("li",[t._v("MongoDB는 도큐먼트를 생성할 때마다 다른 컬렉션에서 중복된 값을 지니기 힘든 유니크한 값이 ObjectID가 생성됩니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/179401531-f01aa07a-1262-4c85-8777-16a4f890f25a.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("기본키로 유닉스 시간 기반의 타임스탬프(4바이트), 랜덤값(5바이트), 카운터(3바이트)로 이루어져 있습니다.")])]),t._v(" "),s("h2",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/179405088-284f715e-5b40-4930-81d9-19a6b349945c.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("redis는 인메모리 데이터베이스이자 키-값 데이터 모델 기반의 데이터베이스입니다.")]),t._v(" "),s("li",[t._v("기본적인 데이터타입은 문자열 이며 최대 512MB까지 저장할 수 있습니다.")]),t._v(" "),s("li",[t._v("이외에도 셋, 해시 등을 지원합니다.")]),t._v(" "),s("li",[t._v("pub/sub 기능을 통해 채팅 시스템, 다른 데이터베이스 앞단에 두어 사용하는 캐싱 계층, 단순한 키-값이 필요한 세션 정보관리, 정렬된 셋 자료구조를 이용한 실시간 순위표 서비스에 사용합니다.")])]),t._v(" "),s("h3",{attrs:{id:"redis의-데이터-구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis의-데이터-구조"}},[t._v("#")]),t._v(" Redis의 데이터 구조")]),t._v(" "),s("ul",[s("li",[t._v("redis 는 key-value 형태의 데이터를 저장소인데, key 하나당 value를 저장하는 형태입니다.")]),t._v(" "),s("li",[t._v("redis는 단순히 string뿐만 아니라 다음과 같은 다양한 종료의 데이터 구조를 지원합니다.\n"),s("ul",[s("li",[t._v("문자열(string)")]),t._v(" "),s("li",[t._v("해시(hashes)")]),t._v(" "),s("li",[t._v("리스트(list)")]),t._v(" "),s("li",[t._v("집합(sets)")]),t._v(" "),s("li",[t._v("정렬된 집합(sorted sets)")]),t._v(" "),s("li",[t._v("비트맵(bitmap)")]),t._v(" "),s("li",[t._v("하이퍼로그 로그(hyperloglog)")]),t._v(" "),s("li",[t._v("지리공간 인덱스(geospatial indexes)")]),t._v(" "),s("li",[t._v("스트림(streams)")])])])]),t._v(" "),s("h3",{attrs:{id:"redis-관리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-관리"}},[t._v("#")]),t._v(" Redis 관리")]),t._v(" "),s("ul",[s("li",[t._v("Redis는 메모리에 데이터를 저장하여 사용하기에, 만약 물리적인 메모리보다 더 많은 용량을 사용하려고 한다면 문제가 발생합니다.")]),t._v(" "),s("li",[t._v("메인 메모리(RAM)가 부족할 경우 메모리에 올린 프로세스들이 부족한 공간을 해결하기 위해 하드디스크에 SWAP 공간을 만들어 임시 저장하게 됩니다.\n"),s("ul",[s("li",[t._v("그러나 SWAP을 하는 동안 레이턴시가 발생합니다.")])])]),t._v(" "),s("li",[t._v("메모리 단편화혹은 파편화가 발생할 수 있습니다.\n"),s("ul",[s("li",[t._v("메모리 단편화는 RAM에서 메모리의 공간이 작은 조각으로 나뉘어져 사용가능한 메모리가 충분히 존재하지만 할당이 불가능한 상태를 말합니다.")]),t._v(" "),s("li",[t._v("다양한 크기의 데이터 사용을 줄이고 유사한 크기의 데이터를 사용하면 메모리 파편화를 줄일 수 있습니다.")])])]),t._v(" "),s("li",[t._v("redis는 싱글 스레드(single thread)로 동작하는데, 동시에 처리할 수 있는 명령어의 갯수는 한 번에 하나입니다.\n"),s("ul",[s("li",[t._v("따라서 O(N) 명령어를 사용하는 것을 자제해야 합니다.")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("용어")]),t._v(" "),s("p",[s("strong",[t._v("인메모리")]),s("br"),t._v("\n인메모리란 컴퓨터의 메인 메모리 RAM에 데이터를 올려서 사용하는 방법을 말하며, 데이터를 가지고 오는 속도를 상향시키기 위해 사용합니다."),s("br"),t._v("\nredis의 장단점을 고려했을 때 가장 적합한 역할은 캐시 데이터베이스 서버역할입니다.")]),t._v(" "),s("p",[s("strong",[t._v("캐시(cache)")]),s("br"),t._v("\ncache란 자주 사용하는 데이터나 값을 미리 복사해 놓는 임시 장소를 말합니다."),s("br"),t._v("\n캐시에 있는 데이터는 시간과 자원 면에서 최소한의 비용으로 반복적으로 접근 할 수 있습니다.")])]),t._v(" "),s("h3",{attrs:{id:"참고자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" 참고자료")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=292815727",target:"_blank",rel:"noopener noreferrer"}},[t._v("면접을 위한 CS 전공지식 노트:도서"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://velog.io/@moonyoung/mongoDB-ObjectID-with-golang",target:"_blank",rel:"noopener noreferrer"}},[t._v("moonyoung:velog"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://wedul.site/449",target:"_blank",rel:"noopener noreferrer"}},[t._v("wedul.site"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zangzangs.tistory.com/72",target:"_blank",rel:"noopener noreferrer"}},[t._v("zangzangs:tistory"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=a.exports}}]);
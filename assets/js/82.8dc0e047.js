(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{345:function(s,t,a){"use strict";a.r(t);var r=a(13),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"조인의-종류"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#조인의-종류"}},[s._v("#")]),s._v(" 조인의 종류")]),s._v(" "),t("h2",{attrs:{id:"조인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#조인"}},[s._v("#")]),s._v(" 조인")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("정의")]),s._v(" "),t("p",[s._v("조인이란 하나의 테이블이 아닌 두개 이상의 테이블을 묶어서 하나의 결과물을 만드는 것을 말합니다.")])]),s._v(" "),t("ul",[t("li",[s._v("MySQL에서는 JOIN 이라는 쿼리로, MongoDB에서는 lookup 이라는 쿼리로 이를 처리할 수 있습니다.")]),s._v(" "),t("li",[s._v("MongoDB의 lookup 연산은 되도록 사용하지 말아야 하는데, MongoDB는 조인 연산에 대해 관계형 데이터베이스보다 성능이 떨어집니다.")]),s._v(" "),t("li",[s._v("따라서 여러 테이블을 조인하는 작업이 많을 경우 MongoDB보다는 관계형 데이터베이스를 써야합니다.")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/180584641-a361ec29-26c9-460e-9564-64f5a46f5c6e.png",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"내부조인-inner-join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#내부조인-inner-join"}},[s._v("#")]),s._v(" 내부조인 INNER JOIN")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("정의")]),s._v(" "),t("p",[s._v("왼쪽 테이블과 오른쪽 테이블의 두행이 모두 일치하는 행이 있는 부분만 표기합니다.")])]),s._v(" "),t("ul",[t("li",[s._v("내부 조인은 두 테이블 간 교집합을 나타냅니다.")]),s._v(" "),t("li",[s._v("ON 절과 함께 사용되며, ON의 조건을 만족하는 데이터만 가져옵니다.")]),s._v(" "),t("li",[s._v("표준 SQL과는 달리 MySQL에서는 JOIN, INNER JOIN, CROSS JOIN이 모두 같은 의미로 사용됩니다.")])]),s._v(" "),t("blockquote",[t("p",[s._v("명시적인 내부 조인")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 조건\n")])])]),t("blockquote",[t("p",[s._v("암시적인 내부 조인")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" B_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" A_TABLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" B_TABLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"왼쪽-조인-left-outer-join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#왼쪽-조인-left-outer-join"}},[s._v("#")]),s._v(" 왼쪽 조인 LEFT OUTER JOIN")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("정의")]),s._v(" "),t("p",[s._v("왼쪽 테이블의 모든 행이 결과 테이블에 표기됩니다.")])]),s._v(" "),t("ul",[t("li",[s._v("만약 오른쪽 테이블에 일치하는 항목이 없으면 해당 값은 null 값이 됩니다.")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 조건\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 조건\n")])])]),t("h2",{attrs:{id:"오른쪽-조인-right-outer-join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#오른쪽-조인-right-outer-join"}},[s._v("#")]),s._v(" 오른쪽 조인 RIGHT OUTER JOIN")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("정의")]),s._v(" "),t("p",[s._v("오른쪽 테이블의 모든 행이결과 테이블에 표기됩니다.")])]),s._v(" "),t("ul",[t("li",[s._v("만약 왼쪽 테이블에 일치하는 항목이 없으면 해당 값은 null 값이 됩니다.")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RIGHT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 조건\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 조건\n")])])]),t("h2",{attrs:{id:"합집합-조인-full-outer-join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#합집합-조인-full-outer-join"}},[s._v("#")]),s._v(" 합집합 조인 FULL OUTER JOIN")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("정의")]),s._v(" "),t("p",[s._v("두 개의 테이블을 기반으로 조인 조건에 만족하지 않는 행까지 모두 표기합니다.")])]),s._v(" "),t("ul",[t("li",[s._v("이때 일치하는 항목이 없으면 누락된 쪽에 null 값이 포함되어 출력됩니다.")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 조건\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 조건\n")])])]),t("ul",[t("li",[s._v("MySQL에서는 FULL JOIN을 지원하지 않기에 다음과 같이 사용해야 합니다.")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 조건\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RIGHT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 조건\n")])])]),t("h2",{attrs:{id:"union"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#union"}},[s._v("#")]),s._v(" UNION")]),s._v(" "),t("ul",[t("li",[s._v("중복되지 않은 유일한 값을 추출하는 경우 or 중복되는 모든 값까지 추출하는 경우에 쓰인다.")])]),s._v(" "),t("h3",{attrs:{id:"union-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#union-2"}},[s._v("#")]),s._v(" UNION")]),s._v(" "),t("ul",[t("li",[s._v("중복되지 않은 유일한 값을 추출")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RIGHT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE\n")])])]),t("h3",{attrs:{id:"union-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#union-all"}},[s._v("#")]),s._v(" UNION ALL")]),s._v(" "),t("ul",[t("li",[s._v("중복되는 모든 값 추출")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RIGHT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE\n")])])]),t("h2",{attrs:{id:"cross-join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cross-join"}},[s._v("#")]),s._v(" CROSS JOIN")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("정의")]),s._v(" "),t("p",[s._v("Cartesian Product(카디션 곱)이라고도 하며 조인되는 두 테이블에서 곱집합을 반환합니다.")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/180585781-05d1e30c-0e1f-4e39-a642-a777cfb2058f.png",alt:"image"}})]),s._v(" "),t("ul",[t("li",[s._v("m열을 가진 테이블과 n열을 가진 테이블이 교차 조인되면 m*n 개의 열을 생성합니다.")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" A_TABLE \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CROSS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" B_TABLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"참고자료"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[s._v("#")]),s._v(" 참고자료")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=292815727",target:"_blank",rel:"noopener noreferrer"}},[s._v("면접을 위한 CS 전공지식 노트:도서"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://velog.io/@inah-_-/MySQL-JOIN-%EC%82%AC%EC%9A%A9%EB%B2%95",target:"_blank",rel:"noopener noreferrer"}},[s._v("inah-_-:velog"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://velog.io/@yanghl98/Database-JOIN",target:"_blank",rel:"noopener noreferrer"}},[s._v("yanghl98:velog"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{307:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"덱-deque"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#덱-deque"}},[t._v("#")]),t._v(" 덱 (Deque)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("정의")]),t._v(" "),s("p",[s("code",[t._v("Deque")]),t._v("(덱 혹은 데크)은 "),s("code",[t._v("Double-Ended Queue")]),t._v("의 줄임말로 큐의 양쪽으로 엘리먼트의 삽입과 삭제를 수행할 수 있는 자료구조(양방향 대기열)입니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/172974741-eda5f98d-8063-43c8-80fe-42696a8c3d14.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("덱은 어떤 쪽으로 입력하고 어떤 쪽으로 출력하느냐에 따라서 스택으로 사용할 수도 있고, 큐로도 사용할 수 있습니다.")]),t._v(" "),s("li",[t._v("특히 한쪽으로만 입력 가능하도록 설정한 덱을 스크롤(scroll)이라고 하며, 한쪽으로만 출력 가능하도록 설정한 덱을 셸프(shelf)라고 합니다.")])]),t._v(" "),s("h2",{attrs:{id:"데이터-삽입-삭제-속도"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#데이터-삽입-삭제-속도"}},[t._v("#")]),t._v(" 데이터 삽입&삭제 속도")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("O(1)")])]),t._v(" "),s("li",[t._v("입구 데이터를 바로 삽입하고, 출구에서 바로 삭제(꺼내기)하면 됩니다.")])]),t._v(" "),s("h2",{attrs:{id:"데이터-탐색-속도"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#데이터-탐색-속도"}},[t._v("#")]),t._v(" 데이터 탐색 속도")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("O(n)")])]),t._v(" "),s("li",[t._v("찾는 데이터가 존재하는지 투입된 순서대로 순차 검색이 필요합니다.")]),t._v(" "),s("li",[t._v("따라서 운이 안 좋으면 저장된 모든 값을 확인해야 할 수 도 있습니다.")])]),t._v(" "),s("h2",{attrs:{id:"자바에서의-deque"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#자바에서의-deque"}},[t._v("#")]),t._v(" 자바에서의 Deque")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/172975629-9a336154-a5fc-485c-b3d2-8cc244392918.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Deque")]),t._v("인터페이스이며, 이를 구현한 ArrayDeque, LinkedBlockingDeque, ConcurrentLinkedDeque, LinkedList 등의 클래스가 있습니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/172975265-e0cedc37-7526-4351-a2f0-62b5e87ece69.png",alt:"image"}})]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Deque")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayDeque")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sample")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 덱 만들기")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Deque")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" deque "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayDeque")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 값을 앞에 삽입")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("offerFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문제가 있으면 NullPointerException ")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 값을 뒤에 삽입")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("offerLast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addLast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문제가 있으면 NullPointerException ")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문제가 있으면 NullPointerException ")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 가장 앞의 값 찍먹하기")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("peekFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문제가 있으면 NullPointerException")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("element")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문제가 있으면 NoSuchElementException")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 가장 뒤의 값 찍먹하기")]),t._v("\n        queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문제가 있으면 NullPointerException")]),t._v("\n        queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("peekLast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 값을 순서대로 삭제하기 (꺼내기)")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pollFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문제가 있으면 NoSuchElementException")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문제가 있으면 NoSuchElementException")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 값을 마지막부터 삭제하기")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pollLast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeLast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문제가 있으면 NoSuchElementException")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/172978335-88400d3f-dc70-4791-9205-9b38ece8f2a5.png",alt:"image"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/172978379-9e68ba3a-2e29-4d35-8b19-91a4c005b9c8.png",alt:"image"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/172978419-4f0c3eae-b38f-47f3-9560-3beb64a4b115.png",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"참고자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" 참고자료")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Deque.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle Doc - Deque"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/HyeminNoh/Tech-Stack",target:"_blank",rel:"noopener noreferrer"}},[t._v("HyeminNoh"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/gyoogle/tech-interview-for-developer",target:"_blank",rel:"noopener noreferrer"}},[t._v("gyoogle"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://creatordev.tistory.com/83",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creator Developer:티스토리"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://soft.plusblog.co.kr/24",target:"_blank",rel:"noopener noreferrer"}},[t._v("월급쟁이의 경제적 자유"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://crazykim2.tistory.com/581",target:"_blank",rel:"noopener noreferrer"}},[t._v("차근차근 개발일기+일상:티스토리"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);
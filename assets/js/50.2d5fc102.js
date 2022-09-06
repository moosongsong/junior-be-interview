(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{316:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"셋-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#셋-set"}},[t._v("#")]),t._v(" 셋 (Set)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("정의")]),t._v(" "),s("p",[t._v("Set은 집합이라는 의미를 가지며, 순서가 없고, 중복되는 요소는 없이 오로지 희소한(unique) 값만 저장하는 자료구조입니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/174505898-edce22d6-8bc5-420d-a208-5a7d285b5cc2.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("중복을 허용하지 않아서 같은 값이 계속해서 삽입하게 되면, 마지막에 삽입한 값 하나만 저장됩니다.")])]),t._v(" "),s("h2",{attrs:{id:"set을-사용해야하는-이유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set을-사용해야하는-이유"}},[t._v("#")]),t._v(" Set을 사용해야하는 이유")]),t._v(" "),s("ul",[s("li",[t._v("집합과 관련한 문제를 해소해야 할 때")]),t._v(" "),s("li",[t._v("중복 처리를 고려해야 할 때")]),t._v(" "),s("li",[t._v("중복 처리와 동시에 빠른 조회가 필요할 때")])]),t._v(" "),s("h2",{attrs:{id:"자바에서의-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#자바에서의-set"}},[t._v("#")]),t._v(" 자바에서의 Set")]),t._v(" "),s("ol",[s("li",[t._v("Hash 알고리즘을 이용한 HashSet")]),t._v(" "),s("li",[t._v("이진 탐색 트리를 사용하여 오름차순 정렬까지 해주는 TreeSet")]),t._v(" "),s("li",[t._v("Set에 순서를 부여해주는 LinkedHashSet")])]),t._v(" "),s("p",[t._v("일반적으로 HashSet, TreeSet, LinkedHashSet 순으로 빠릅니다.")]),t._v(" "),s("h3",{attrs:{id:"hashset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashset"}},[t._v("#")]),t._v(" HashSet")]),t._v(" "),s("ul",[s("li",[t._v("Hash 알고리즘 기반으로 동작합니다.")]),t._v(" "),s("li",[t._v("HashTable 구조를 이용한 HashMap을 이용하여 만들어져 있습니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/174505838-d619e7f9-f5e3-4bda-beea-a7e536b587de.png",alt:"image"}})]),t._v(" "),s("ol",[s("li",[t._v("입력된 키를 해시 코드로 변환합니다.")]),t._v(" "),s("li",[t._v("해시 코드를 인덱스로 한 bucket이라는 array에 해당 인덱스를 찾아 저장합니다."),s("br"),t._v("\n(여기서 배열 길이가 초과하는 경우에는 길이의 나머지를 구해 링크드 리스트로 추가합니다.)")])]),t._v(" "),s("ul",[s("li",[t._v("index가 아닌 key를 이용하여 데이터 저장과 접근이 필요한 경우 사용합니다.")]),t._v(" "),s("li",[t._v("데이터의 크기가 어느 정도 예상되는 경우 사용합니다.")]),t._v(" "),s("li",[t._v("삽입 삭제가 빈번할 경우 사용합니다.")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashSet")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set 생성하기")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" texts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 데이터 삽입하기")]),t._v("\nset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moosong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 값 포함여부 확인하기")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isExist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moosong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 있으면 true, 없으면 false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 데이터 삭제")]),t._v("\nset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moosong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 데이터 출력")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("HashMap을 이용하여 만들어졌으므로, 저장된 값은 정렬되어 있지 않습니다.")])]),t._v(" "),s("h3",{attrs:{id:"treeset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#treeset"}},[t._v("#")]),t._v(" TreeSet")]),t._v(" "),s("ul",[s("li",[t._v("이진트리의 향상된 버전인 Red-Black Tree를 기반으로 만들어집니다.")]),t._v(" "),s("li",[t._v("Tree 구조를 이용한 TreeMap을 이용하여 만들어져 있습니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/50647845/174506069-bd3b730a-6419-41e7-917a-d4c2fb0cb291.png",alt:"image"}})]),t._v(" "),s("ol",[s("li",[t._v("새로운 데이터가 들어오면 루트부터 비교합니다.")]),t._v(" "),s("li",[t._v("비교의 결과에 따라 우측, 좌측으로 갈지 결정됩니다.")]),t._v(" "),s("li",[t._v("더 이상 비교를 할 수 없을 때까지 반복합니다.")]),t._v(" "),s("li",[t._v("추가/삭제는 링크드 리스트 보다 비효율적이지만 검색/정렬은 TreeSet이 더 좋다.")])]),t._v(" "),s("ul",[s("li",[t._v("저장되는 데이터의 개수가 몇개인지 예상되지 않는 경우 사용합니다.")]),t._v(" "),s("li",[t._v("삽입과 삭제가 빈번하지 않을 때 사용합니다.")]),t._v(" "),s("li",[t._v("정렬된 값이 필요할 때 사용합니다.")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeSet")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set 생성하기")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" texts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 데이터 삽입하기")]),t._v("\nset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moosong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 값 포함여부 확인하기")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isExist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moosong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 있으면 true, 없으면 false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 데이터 삭제")]),t._v("\nset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moosong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 데이터 출력")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("TreeMap을 이용하여 만들어졌으므로, 저장된 값은 오름차순으로 정렬되어 출력할 수 있습니다.")])]),t._v(" "),s("h3",{attrs:{id:"linkedhashset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset"}},[t._v("#")]),t._v(" LinkedHashSet")]),t._v(" "),s("ul",[s("li",[t._v("LinkedHashSet은 HashSet을 상속하여 만들어진 클래스입니다.")]),t._v(" "),s("li",[t._v("다만 내부는 LinkedHashMap을 이용하여 구현되어 있습니다.")]),t._v(" "),s("li",[t._v("값의 저장된 순서가 중요할 때 사용합니다.")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashSet")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set 생성하기")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" texts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 데이터 삽입하기")]),t._v("\nset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moosong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 값 포함여부 확인하기")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isExist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moosong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 있으면 true, 없으면 false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 데이터 삭제")]),t._v("\nset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moosong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 데이터 출력")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("LinkedHashMap을 이용하기에, 저장된 값은 저장된 순서대로 출력됩니다.")])]),t._v(" "),s("h2",{attrs:{id:"set으로-집합-연산하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set으로-집합-연산하기"}},[t._v("#")]),t._v(" Set으로 집합 연산하기")]),t._v(" "),s("h3",{attrs:{id:"a가-b의-부분집합인가요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a가-b의-부분집합인가요"}},[t._v("#")]),t._v(" A가 B의 부분집합인가요?")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isContainAll "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("부분집합이면 True, 아니면 False")])]),t._v(" "),s("h3",{attrs:{id:"x가-a의-원소인가요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x가-a의-원소인가요"}},[t._v("#")]),t._v(" x가 A의 원소인가요?")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isContain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("원소가 포함되면 True, 아니면 False")])]),t._v(" "),s("h3",{attrs:{id:"a와-b의-교집합-구하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a와-b의-교집합-구하기"}},[t._v("#")]),t._v(" A와 B의 교집합 구하기")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cloneA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("set1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isModified "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cloneA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("retainAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("반환값은 cloneA 변경 여부를 반환합니다. -> cloneA에 원소가 존재하지 않는 경우를 제외하고는 항상 True를 반환한다고 보면 됩니다.")]),t._v(" "),s("li",[s("code",[t._v("set.retainAll(collection)")]),t._v(" 메서드는 원본의 데이터를 변경하므로, 원본 데이터의 손실을 원하지 않는다면 원본을 복사해서 사용해야 합니다.")])]),t._v(" "),s("h3",{attrs:{id:"a와-b의-합집합-구하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a와-b의-합집합-구하기"}},[t._v("#")]),t._v(" A와 B의 합집합 구하기")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cloneA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("set1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isModified "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cloneA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("반환값은 cloneA 변경 여부를 반환합니다. -> cloneA에 원소가 존재하지 않는 경우를 제외하고는 항상 True를 반환한다고 보면 됩니다.")]),t._v(" "),s("li",[s("code",[t._v("set.addAll(collection)")]),t._v(" 원본의 데이터를 변경하므로, 원본 데이터의 손실을 원하지 않는다면 원본을 복사해서 사용해야 합니다.")])]),t._v(" "),s("h3",{attrs:{id:"a와-b의-차집합-구하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a와-b의-차집합-구하기"}},[t._v("#")]),t._v(" A와 B의 차집합 구하기")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cloneA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("set1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isModified "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cloneA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAlll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("반환값은 cloneA 변경 여부를 반환합니다. -> cloneA에 원소가 존재하지 않는 경우를 제외하고는 항상 True를 반환한다고 보면 됩니다.")]),t._v(" "),s("li",[s("code",[t._v("set.removeAlll(collection)")]),t._v(" 메서드는 원본의 데이터를 변경하므로, 원본 데이터의 손실을 원하지 않는다면 원본을 복사해서 사용해야 합니다.")])]),t._v(" "),s("h3",{attrs:{id:"참고자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" 참고자료")]),t._v(" "),s("ul",[s("li",[t._v("주홍철."),s("em",[t._v("면접을 위한 CS 전공지식 노트")]),t._v(".서울:길벗,2022.")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://nemne.tistory.com/m/8",target:"_blank",rel:"noopener noreferrer"}},[t._v("nemne"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://velog.io/@taeha7b/datastructure-set",target:"_blank",rel:"noopener noreferrer"}},[t._v("taeha7b"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.codelatte.io/courses/java_programming_basic/51BDPYQYSJVHNR4R",target:"_blank",rel:"noopener noreferrer"}},[t._v("codelatte"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://st-lab.tistory.com/240",target:"_blank",rel:"noopener noreferrer"}},[t._v("st-lab"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);
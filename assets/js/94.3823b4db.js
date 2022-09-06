(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{357:function(t,e,v){"use strict";v.r(e);var _=v(13),o=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"window-dom-bom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window-dom-bom"}},[t._v("#")]),t._v(" Window, DOM, BOM")]),t._v(" "),e("h2",{attrs:{id:"window-객체"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window-객체"}},[t._v("#")]),t._v(" Window 객체")]),t._v(" "),e("p",[t._v("자바스크립트의 최상위객체이자 전역객체이면서 모든 객체가 소속된 객체입니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/79966015/184265923-097a24e4-c9b4-4c11-883c-bf41cfd110cc.PNG",alt:"window객체"}}),e("br"),t._v("\n사진과 같이 DOM, BOM, JavaScript가 최상위 객체인 객체 밑에 소속되어 있습니다. 이 객체들은 서로 계층적인 관계로 구조화 되어 있습니다.")]),t._v(" "),e("p",[t._v("window 객체는 주로 자바스크립트의 전역 객체로 동작을 하거나, 브라우저 창을 대변하고 이를 제어할 수 있는 메소드를 제공하는 역할을 합니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("alert(window.innerHeight);  //창 내부 높이를 알람으로 보여주기\n")])])]),e("h2",{attrs:{id:"dom-document-object-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom-document-object-model"}},[t._v("#")]),t._v(" DOM(Document Object Model)")]),t._v(" "),e("p",[t._v("DOM은 객체지향 모델로써 구조화된 문서를 표현하는 형식입니다. 쉽게 말하자면, 브라우저가 웹 문서를 이해할 수 있도록 구성된 것을 DOM이라고 합니다. 즉, 모든 요소들과의 관계를 부자 관계로 표현할 수 있는 트리\n구조로 구성한 것이 DOM입니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/79966015/184267235-65f61ac0-b4e5-4c98-9b31-f9a11f6b9e0b.PNG",alt:"dom구조"}}),e("br"),t._v("\n돔 트리구조에서 노드는 9 종류로 이루어져 있는데 주로 쓰이는 노드는 4종류입니다.")]),t._v(" "),e("ul",[e("li",[t._v("문서노드(Document Node)\n"),e("ul",[e("li",[t._v("트리의 최상위에 존재하며 각각의 하위요소들(엘리먼트, 어트리뷰트, 텍스트 노드)에 접근하려면 문서노드를 통해야 합니다. 즉, 시작점입니다.")])])]),t._v(" "),e("li",[t._v("요소노드(Element Node)\n"),e("ul",[e("li",[t._v("쉽게 말해 태그입니다. "),e("code",[t._v("<p>")]),t._v(", "),e("code",[t._v("<div>")]),t._v(" 등등..")])])]),t._v(" "),e("li",[t._v("어트리뷰트노드(Attribute Node)\n"),e("ul",[e("li",[e("code",[t._v("<input>")]),t._v("태그 안에는 name, value 등의 속성을 사용할 수 있는데 이러한 속성들을 가리키는 노드입니다.")])])]),t._v(" "),e("li",[t._v("텍스트 노드(Text Node)\n"),e("ul",[e("li",[t._v("태그 내 텍스트를 표현합니다. 텍스트 노드는 엘리먼트 노드의 자식이며 자신의 자식 노드를 가질 수 없기 때문에 돔 트리의 최종단입니다.")])])])]),t._v(" "),e("p",[t._v("DOM은 웹페이지 내의 모든 요소들을 객체로 나타내줍니다. 그렇기 때문에 자바스크립트를 이용하여 각 요소에 접근하여 객체를 제어할 수 있습니다.")]),t._v(" "),e("p",[t._v("요소에 대한 접근 방식으로는,")]),t._v(" "),e("ul",[e("li",[t._v("getElementById")]),t._v(" "),e("li",[t._v("getElementByTagName")]),t._v(" "),e("li",[t._v("getElementByClassName")]),t._v(" "),e("li",[t._v("querySelector")])]),t._v(" "),e("p",[t._v("등이 있습니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<button id="test">버튼</button>\n<script>\n    document.getElementById("test");\n<\/script>\n')])])]),e("h2",{attrs:{id:"bom-browser-object-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bom-browser-object-model"}},[t._v("#")]),t._v(" BOM(Browser Object Model)")]),t._v(" "),e("p",[t._v("BOM은 문서 이외의 모든 것을 제어하기 위해 브라우저가 제공하는 추가 객체를 나타냅니다."),e("br"),t._v("\n공식 표준은 아니지만 브라우저 대부분이 자바스크립트와의 상호작용에 있어서 비슷한 메소드와 속성으로 동작하기에 이와 같은 메소드들을 통칭하여 BOM이라고 합니다. window 객체를 통해 접근이 가능합니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("객체")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("location")]),t._v(" "),e("td",[t._v("url 주소에 대한 정보를 제공")])]),t._v(" "),e("tr",[e("td",[t._v("window")]),t._v(" "),e("td",[t._v("최상위 객체로 각 프레임별로 하나씩 존재")])]),t._v(" "),e("tr",[e("td",[t._v("document")]),t._v(" "),e("td",[t._v("현재문서에 대한 정보")])]),t._v(" "),e("tr",[e("td",[t._v("navigator")]),t._v(" "),e("td",[t._v("브라우저명, 코드명, 버전정보 제공")])]),t._v(" "),e("tr",[e("td",[t._v("history")]),t._v(" "),e("td",[t._v("브라우저의 방문기록 정보를 제공")])]),t._v(" "),e("tr",[e("td",[t._v("screen")]),t._v(" "),e("td",[t._v("브라우저의 외부환경에 대한 정보를 제공")])])])]),t._v(" "),e("h2",{attrs:{id:"dom-vs-bom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom-vs-bom"}},[t._v("#")]),t._v(" DOM vs BOM")]),t._v(" "),e("p",[t._v("DOM은 document, 현재 눈에 보이는 웹문서에 대한 제어와 변경을 하고"),e("br"),t._v("\nBOM은 window 속성에 속하여 document가 아닌 window를 제어합니다.")]),t._v(" "),e("h3",{attrs:{id:"참고자료"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" 참고자료")]),t._v(" "),e("ul",[e("li",[t._v("https://cbw1030.tistory.com/46")]),t._v(" "),e("li",[t._v("https://goddino.tistory.com/71")]),t._v(" "),e("li",[t._v("https://velog.io/@dlskaghd234/DOM-BOM%EC%9D%B4%EB%9E%80")]),t._v(" "),e("li",[t._v("https://soyeondev.tistory.com/310")])])])}),[],!1,null,null,null);e.default=o.exports}}]);
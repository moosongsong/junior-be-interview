(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{274:function(t,s,a){"use strict";a.r(s);var v=a(13),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"동기와-비동기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동기와-비동기"}},[t._v("#")]),t._v(" 동기와 비동기")]),t._v(" "),s("h2",{attrs:{id:"데이터-처리-모델"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#데이터-처리-모델"}},[t._v("#")]),t._v(" 데이터 처리 모델")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("데이터 처리 모델을 쉽게 표현하자면 데이터를 받는 방식이라고 할수 있습니다.\n이 방식에는 동기식 처리와 비동기식 처리 모델이 존재합니다.")])]),t._v(" "),s("h2",{attrs:{id:"동기식-처리-모델"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동기식-처리-모델"}},[t._v("#")]),t._v(" 동기식 처리 모델")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("개념")]),t._v(" "),s("p",[t._v("동기는 데이터의 요청과 결과가 한 자리에서 동시에 일어나는것을 말합니다.")])]),t._v(" "),s("ul",[s("li",[t._v("직렬적으로 태스크를 수행합니다.")]),t._v(" "),s("li",[t._v("태스크는 순차적으로 실행되며 어떤 작업이 수행 중이면 다음 작업은 대기하게 됩니다.")]),t._v(" "),s("li",[t._v("요청을 하면 시간이 얼마나 걸리던지 요청한 자리에서 결과가 주어져야 합니다.")]),t._v(" "),s("li",[t._v("사용자가 데이터를 서버에게 요청한다면 그 서버가 데이터 요청에 따른 응답을 사용자에게 다시 리턴해주기 전까지 사용자는 다른 활동을 할 수 없으며 기다려야만합니다.")]),t._v(" "),s("li",[t._v("서버에서 데이터를 가져와서 화면에 표시하는 작업을 수행할 때, 서버에 데이터를 요청하고 데이터가 응답될 때까지 이후 태스크들은 블로킹됩니다.")])]),t._v(" "),s("h3",{attrs:{id:"장점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장점"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),s("ul",[s("li",[t._v("설계가 매우 간단하고 직관적이다.")])]),t._v(" "),s("h3",{attrs:{id:"단점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단점"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),s("ul",[s("li",[t._v("결과가 주어질 때까지 아무것도 못하고 대기해야 합니다.")])]),t._v(" "),s("h2",{attrs:{id:"비동기식-처리-모델"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비동기식-처리-모델"}},[t._v("#")]),t._v(" 비동기식 처리 모델")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("개념")]),t._v(" "),s("p",[t._v("비동기는 동시에 일어나지 않는다는 의미입니다.")])]),t._v(" "),s("ul",[s("li",[t._v("병렬적으로 태스크를 수행합니다.")]),t._v(" "),s("li",[t._v("태스크가 종료되지 않은 상태라 하더라도 대기하지 않고 다음 태스크를 실행합니다.")]),t._v(" "),s("li",[t._v("요청한 결과는 동시에 일어나지 않습니다.")]),t._v(" "),s("li",[t._v("서버에게 데이터를 요청한 후 요청에 따른 응답을 계속 기다리지 않아도되며 다른 외부 활동을 수행하여도되고 서버에게 다른 요청사항을 보내도 상관없습니다")]),t._v(" "),s("li",[t._v("서버에서 데이터를 가져와서 화면에 표시하는 태스크를 수행할 때, 서버에 데이터를 요청한 이후 서버로부터 데이터가 응답될 때까지 대기하지 않고(논블로킹) 즉시 다음 태스크를 수행한다.\n이후 서버로부터 데이터가 응답되면 이벤트가 발생하고 이벤트 핸들러가 데이터를 가지고 수행할 태스크를 계속해서 수행합니다.")])]),t._v(" "),s("h3",{attrs:{id:"장점-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장점-2"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),s("ul",[s("li",[t._v("요청에 따른 결과가 반환되는 시간 동안 다른 작업을 수행할 수 있습니다.")])]),t._v(" "),s("h3",{attrs:{id:"단점-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단점-2"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),s("ul",[s("li",[t._v("동기식보다 설계가 복잡합니다.")])]),t._v(" "),s("h2",{attrs:{id:"블로킹과-논블로킹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#블로킹과-논블로킹"}},[t._v("#")]),t._v(" 블로킹과 논블로킹")]),t._v(" "),s("h3",{attrs:{id:"블로킹-blocking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#블로킹-blocking"}},[t._v("#")]),t._v(" 블로킹 (Blocking)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("정의")]),t._v(" "),s("p",[t._v("그렇지 않고 호출된 함수가 자신의 작업을 모두 마칠 때까지 호출한 함수에게 제어권을 넘겨주지 않고 대기하게 만든다면 Blocking입니다.")])]),t._v(" "),s("ul",[s("li",[t._v("호출된 함수가 자신의 작업을 모두 끝낼때까지 제어권을 가지고 있어 호출한 함수가 대기하도록 만듭니다.")])]),t._v(" "),s("h3",{attrs:{id:"논블로킹-nonblocking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#논블로킹-nonblocking"}},[t._v("#")]),t._v(" 논블로킹 (NonBlocking)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("정의")]),t._v(" "),s("p",[t._v("호출된 함수가 바로 return해서 호출한 함수에게 제어권을 넘겨주고, 호출한 함수가 다른 일을 할 수 있는 기회를 줄 수 있으면 NonBlocking입니다.")])]),t._v(" "),s("ul",[s("li",[t._v("호출된 함수가 바로 return 해서 호출한 함수에게 제어권을 주어 다른 일을 할 수 있게 하는 것입니다.")]),t._v(" "),s("li",[t._v("호출되는 함수가 바로 return 하느냐 마느냐가 중점입니다.")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("주의")]),t._v(" "),s("p",[t._v("동기/비동기는 작업을 수행하는 주체가 2개 이상이어야 합니다. 이 때 작업의 시간(시작, 종료 등)을 서로 맞춘다면 이를 동기라고 부르고, 서로 작업의 시간이 관계없다면 이를 비동기라고 부릅니다.")]),t._v(" "),s("p",[t._v("반면 블로킹/논블로킹은 작업의 대상이 2개 이상이어야 합니다. 두 개념이 서로 바라보는 관점이 다르기 때문에 동기/블로킹, 동기/논블로킹, 비동기/블로킹, 비동기/논블로킹의 다양한 조합이 가능합니다.")])]),t._v(" "),s("h3",{attrs:{id:"참고자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" 참고자료")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/HyeminNoh/Tech-Stack/blob/master/docs/DesignPattern/AsynchronousProcessingModel.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("HyeminNoh:github"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://velog.io/@slobber/%EB%8F%99%EA%B8%B0%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%9D%98-%EC%B0%A8%EC%9D%B4",target:"_blank",rel:"noopener noreferrer"}},[t._v("slobber:velog"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=_.exports}}]);
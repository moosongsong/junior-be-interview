(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{327:function(t,a,s){"use strict";s.r(a);var r=s(13),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"메모리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메모리"}},[t._v("#")]),t._v(" 메모리")]),t._v(" "),a("p",[t._v("메모리는 기억장치로, CPU가 메모리에 올라와 있는 프로그램의 명령어들을 실행한다고 했습니다."),a("br"),t._v("\n이번에는 메모리에 대해 자세히 알아보겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"메모리-계층"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메모리-계층"}},[t._v("#")]),t._v(" 메모리 계층")]),t._v(" "),a("p",[t._v("메모리 계층은 레지스터, 캐시, 메모리, 저장장치로 구성되어 있습니다."),a("br"),t._v(" "),a("img",{attrs:{src:"https://user-images.githubusercontent.com/79966015/177894429-7ffdbbb4-b4a6-4456-a9d4-29878a075409.PNG",alt:"메모리계층구조"}})]),t._v(" "),a("ul",[a("li",[t._v("레지스터 : CPU 안에 있는 작은 메모리, 휘발성, 속도 가장 빠름, 기억 용량이 가장 적음")]),t._v(" "),a("li",[t._v("캐시 : L1, L2캐시를 지칭, 휘발성, 속도 빠름, 기억 용량이 적음")]),t._v(" "),a("li",[t._v("메모리/주기억장치 : RAM을 가리킴, 휘발성, 속도 보통, 기억 용량이 보통")]),t._v(" "),a("li",[t._v("저장장치/보조기억장치 : HDD, SDD를 가리킴, 비휘발성, 속도 낮음, 기억용량이 많음")])]),t._v(" "),a("p",[t._v("계층 위로 올라갈수록 가격은 비싸지는데 용량은 작아지고 속도는 빨라지는 특징이 있습니다. 또한, 레지스터, 캐시, 메모리는 모두 컴퓨터 전원을 끄면 데이터가 지워지는 휘발성 기억장치이기 때문에 보관하고 싶은 데이터는\n보조 기억장치에 저장하여야 한다는 특징이 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"레지스터-register"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#레지스터-register"}},[t._v("#")]),t._v(" 레지스터(Register)")]),t._v(" "),a("p",[t._v("컴퓨터에서 제일 빠른 메모리입니다. 프로세서에 위치한 고속 메모리로 극히 소량의 데이터나 처리 중인 중간 결과와도 같은 프로세서가 바로 사용할 수 있는 데이터를 담고 있는 영역을 레지스터라고 합니다.")]),t._v(" "),a("p",[t._v("레지스터는 용도에 따라 전용 레지스터와 범용 레지스터로 나뉘며, 저장되는 정보의 종류에 따라 데이터 레지스터와 주소 레지스터, 상태 레지스터로 나뉩니다. 또한, 사용자의 정보 변경 가능 유무에 따라 사용자 가시\n레지스터와 사용자 불가시 레지스터로 크게 분류할 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"캐시-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#캐시-cache"}},[t._v("#")]),t._v(" 캐시(Cache)")]),t._v(" "),a("p",[t._v("캐시는 데이터를 미리 복사해 놓는 임시 저장소이자 빠른 장치와 느린 장치에서 속도 차이에 따른 병목 현상을 줄이기 위한 메모리를 말합니다. 이를 통해 데이터를 접근하는 시간이 오래 걸리는 경우를 해결하고 무언가를\n다시 계산하는 시간을 절약할 수 있습니다.")]),t._v(" "),a("p",[t._v("실제로 메모리와 cpu 사이의 속도 차이가 너무 크기 때문에 그 중간에 레지스터 계층을 둬서 속도 차이를 해결하는데, 이렇게 속도 차이를 해결하기 위해 계층과 계층 사이에 있는 계층을 캐시 계층이라고 합니다. 예를\n들어 캐시 메모리와 보조기억장치 사이에 있는 주기억장치를 보조기억장치의 캐싱 계층이라고 할 수 있습니다.")]),t._v(" "),a("h3",{attrs:{id:"캐시를-직접-설정하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#캐시를-직접-설정하기"}},[t._v("#")]),t._v(" 캐시를 직접 설정하기")]),t._v(" "),a("p",[t._v("자주 사용하는 데이터를 기반으로 캐시를 설정해야 합니다. 그러기 위해서는 지역성을 이용하면 되는데, 지역성은 시간 지역성(temporal locality)과 공간 지역성(spatial locality)으로 나뉩니다.")]),t._v(" "),a("ul",[a("li",[t._v("시간 지역성\n"),a("ul",[a("li",[t._v("최근에 사용한 데이터에 다시 접근하려는 특성")]),t._v(" "),a("li",[t._v("ex) for 반복문 (변수 i에 계속해서 접근해서 +1을 연달아서 합니다.)")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])]),t._v(" "),a("li",[t._v("공간 지역성\n"),a("ul",[a("li",[t._v("최근 접근한 데이터를 이루고 있는 공간이나 그 가까운 공간에 접근하는 특성")]),t._v(" "),a("li",[t._v("ex) 배열 (배열 arr의 각 요소들에 i가 할당되며 해당 배열에 연속적으로 접근합니다.)")])])])]),t._v(" "),a("h3",{attrs:{id:"캐시히트와-캐시미스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#캐시히트와-캐시미스"}},[t._v("#")]),t._v(" 캐시히트와 캐시미스")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("캐시히트")]),t._v(" "),a("th",[t._v("캐시미스")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("캐시에서 원하는 데이터를 찾은 경우")]),t._v(" "),a("td",[t._v("원하는 데이터가 캐시에 없는 경우")])]),t._v(" "),a("tr",[a("td",[t._v("해당 데이터를 제어장치를 거쳐 가져온다")]),t._v(" "),a("td",[t._v("메모리에서 데이터를 가져온다")])]),t._v(" "),a("tr",[a("td",[t._v("위치도 가깝고 CPU 내부 버스를 기반으로 작동하기 때문에 빠르다")]),t._v(" "),a("td",[t._v("시스템 버스를 기반으로 작동하기 때문에 느리다")])])])]),t._v(" "),a("h3",{attrs:{id:"캐시매핑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#캐시매핑"}},[t._v("#")]),t._v(" 캐시매핑")]),t._v(" "),a("p",[t._v("캐시매핑이란 캐시가 히트되기 위해 매핑하는 방법을 말하며 CPU의 레지스터와 주 메모리(RAM) 간에 데이터를 주고받을 때를 기반으로 설명합니다.")]),t._v(" "),a("ul",[a("li",[t._v("직접 매핑(directed mapping)\n: 메모리가 1~100이 있고 캐시가 1~10이 있다면 1:1~10, 2:1~20 ... 이런식으로 매핑하는 것을 말합니다. 처리가 빠르지만 충돌 발생이 잦습니다.")]),t._v(" "),a("li",[t._v("연관 매핑(associative mapping)\n: 순서를 일치시키지 않고 관련 있는 캐시와 메모리를 매핑합니다. 충돌이 적지만 모든 블록을 탐색해야 해서 속도가 느립니다.")]),t._v(" "),a("li",[t._v("집합 연관 매핑(set associative mapping)\n: 직접 매핑과 연관 매핑을 합쳐 놓은 것입니다. 순서는 일치시키지만 집합을 둬서 저장하며 블록화되어 있기 때무에 검색은 좀 더 효율적입니다. 예를 들어 메모리가 1~100이 있고 캐시가 1~10이 있다면 캐시\n1~5에는 1~50의 데이터를 무작위로 저장시키는 것을 말합니다.")])]),t._v(" "),a("h3",{attrs:{id:"웹-브라우저의-캐시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#웹-브라우저의-캐시"}},[t._v("#")]),t._v(" 웹 브라우저의 캐시")]),t._v(" "),a("p",[t._v("소프트웨어적인 캐시로는 웹 브라우저의 작은 저장소 쿠키, 로컬 스토리지, 세션 스토리지가 있습니다. 이러한 것들은 보통 사용자의 커스텀한 정보나 인증 모듈관련 사항들을 웹 브라우저에 저장해서 추후 서버에 요청할 때\n자신을 나타내는 아이덴티티나 중복 요청 방지를 위해 쓰입니다.")]),t._v(" "),a("ul",[a("li",[t._v("쿠키 : 만료기한이 있는 키-값 저장소입니다. same site 옵션을 strict로 설정하지 않았을 경우 다른 도메인에서 요청했을 때 자동 전송되며, 4KB까지 데이터를 저장할 수 있고 만료기한을 정할 수\n있습니다. 쿠키를 설정할 때는 document.cookie로 쿠키를 볼 수 없게 httponly 옵션을 거는 것이 중요하며, 클라이언트 또는 서버에서 만료기한등을 정할 수 있는데 보통 서버에서 만료기한을\n정합니다.")]),t._v(" "),a("li",[t._v("로컬 스토리지 : 만료기한이 없는 키-값 저장소입니다. 10MB까지 저장할 수 있으며 웹 브라우저를 닫아도 유지되고 도메인 단위로 저장,생성 됩니다. HTML5를 지원하지 않는 웹 브라우저에서는 사용할 수 없으며\n클라이언트에서만 수정 가능합니다.")]),t._v(" "),a("li",[t._v("세션 스토리지 : 만료기한이 없는 키-값 저장소입니다. 탭 단위로 세션 스토리지를 생성하며, 탭을 닫을 때 해당 데이터가 삭제됩니다. 5MB까지 저장이 가능하며 HTML5를 지원하지 않는 웹 브라우저에서는 사용할\n수 없습니다. 클라이언트에서만 수정가능합니다.")])]),t._v(" "),a("h3",{attrs:{id:"데이터베이스의-캐싱-계층"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데이터베이스의-캐싱-계층"}},[t._v("#")]),t._v(" 데이터베이스의 캐싱 계층")]),t._v(" "),a("p",[t._v("데이터베이스 시스템을 구축할 때도 메인 데이터베이스 위에 레디스(redis) 데이터베이스 계층을 '캐싱 계층'으로 둬서 성능을 향상시키기도 합니다.")]),t._v(" "),a("h2",{attrs:{id:"주기억장치-main-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#주기억장치-main-memory"}},[t._v("#")]),t._v(" 주기억장치(Main Memory)")]),t._v(" "),a("p",[t._v("CPU나 메인보드와 분리되어 있는 메모리 중에서 최상위 메모리이자, CPU에서 직접 접근이 가능한 메모리입니다. 대표적으로 RAM과 ROM 메모리가 존재합니다.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("RAM (Random Access Memory)"),a("br"),t._v(" "),a("img",{attrs:{src:"https://user-images.githubusercontent.com/79966015/177898998-3d4edb40-40a3-4aa8-88b3-53199436873d.PNG",alt:"RAM"}})]),t._v(" "),a("ul",[a("li",[t._v("대표적인 주기억장치")]),t._v(" "),a("li",[t._v("CPU 프로세서가 데이터를 쓰고 지울 수 있는 메모리 기억장치")]),t._v(" "),a("li",[t._v("전원이 차단되면 그동안 저장되었던 데이터가 모두 지워지는 휘발성 메모리")]),t._v(" "),a("li",[t._v("어느 위치에 저장된 데이터든지 접근하는 데 동일한 시간이 걸리기 때문에 랜덤이라는 이름이 붙여졌습니다.")])])]),t._v(" "),a("li",[a("p",[t._v("ROM(Read Only Memory)"),a("br"),t._v(" "),a("img",{attrs:{src:"https://user-images.githubusercontent.com/79966015/177898984-73da8362-69e0-41f2-8972-c264d32d7b14.PNG",alt:"ROM"}})]),t._v(" "),a("ul",[a("li",[t._v("저장된 데이터를 읽을 수만 있는 기억장치")]),t._v(" "),a("li",[t._v("전원이 차단되어도 저장된 데이터가 지워지지않는 비휘발성 메모리")]),t._v(" "),a("li",[t._v("주기억장치로 사용되기보다는 주로 기본 입/출력 시스템(BIOS), 자가 진단 프로그램(POST) 같은 시스템 소프트웨어를 저장하는데 사용됩니다.")])])])]),t._v(" "),a("h2",{attrs:{id:"보조기억장치-hard-drive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보조기억장치-hard-drive"}},[t._v("#")]),t._v(" 보조기억장치(Hard Drive)")]),t._v(" "),a("p",[t._v("CPU에서 직접 접근이 불가능한 메모리입니다. 보조기억장치에 접근하기 위해서는 디바이스 드라이버와 시스템 콜을 통하여 기억장치의 특정 위치의 내용을 주기억장치로 로드한 뒤 읽어야 합니다. 게임을 실행하다 보면 '\n로딩중'이라는 메세지가 나오는 것을 본적이 있을겁니다. 이는 하드디스크 또는 인터넷에서 데이터를 읽어 RAM으로 전송하는 과정이 아직 끝나지 않았음을 의미합니다.")]),t._v(" "),a("p",[t._v("CPU입장에서 보자면 보조기억장치는 여러 종류의 주변장치 중 하나이며 그 중 '저장 기능'을 지니고 있는 장치일 뿐입니다.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SSD(Solid State Drive)")]),t._v(" "),a("ul",[a("li",[t._v("SSD는 순수 전자식으로 작동하므로 기계식인 HDD의 긴 탐색 시간, 반응 시간, 기계적 지연, 실패율, 소음을 크게 줄여줍니다.")])])]),t._v(" "),a("li",[a("p",[t._v("HDD (Hard Disk Drive)")]),t._v(" "),a("ul",[a("li",[t._v("비휘발성, 순차접근이 가능한 컴퓨터의 보조 기억장치입니다.")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/79966015/177898996-2a1bcc33-4f4b-4d29-9bac-5af4d66d7858.PNG",alt:"SSD_HDD"}})]),t._v(" "),a("h3",{attrs:{id:"참고자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" 참고자료")]),t._v(" "),a("ul",[a("li",[t._v("주홍철."),a("em",[t._v("면접을 위한 CS 전공지식 노트")]),t._v(".서울:길벗,2022.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=cjsksk3113&logNo=222246966805",target:"_blank",rel:"noopener noreferrer"}},[t._v("윌리의 Technical Reference"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);
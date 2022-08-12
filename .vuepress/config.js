module.exports = {
    title: '주니어 백엔드 개발자 인터뷰',
    description: 'CS 공부를 위한 저장소',
    base: "/junior-be-interview/",
    dest: 'build',
    themeConfig: {
        logo: 'https://avatars.githubusercontent.com/u/50647845?v=4',
        nav: [
            {text: 'Home', link: '/'}
        ],
        sidebar: [
            {
                title: '💡 IT 상식',
                collapsable: true,
                children: [
                    '/00_IT상식/선언형%20함수형',
                    '/00_IT상식/객체지향%20절차형',
                    '/00_IT상식/프레임워크와%20라이브러리',
                    '/00_IT상식/동기와%20비동기',
                ]
            },
            {
                title: '💽 운영체제',
                collapsable: true,
                children: [
                    '/04_운영체제/10_운영체제의%20역할과%20구조',
                    '/04_운영체제/20_컴퓨터의%20요소',
                    '/04_운영체제/30_메모리',
                    '/04_운영체제/31_메모리관리',
                    '/04_운영체제/32_메모리할당',
                    '/04_운영체제/33_페이지교체알고리즘',
                    '/04_운영체제/40_프로세스',
                    '/04_운영체제/41_PCB_컨텍스트스위칭',
                    '/04_운영체제/42_멀티프로세싱',
                    '/04_운영체제/50_스레드',
                    '/04_운영체제/51_공유자원과%20임계영역',
                    '/04_운영체제/52_교착상태',
                    '/04_운영체제/60_CPU%20스케줄링',
                ]
            },
            {
                title: '💾 데이터베이스',
                collapsable: true,
                children: [
                    '/05_데이터베이스/10_데이터페이스의%20구성',
                    '/05_데이터베이스/20_ERD',
                    '/05_데이터베이스/21_정규화',
                    '/05_데이터베이스/30_트랜잭션과%20무결성',
                    '/05_데이터베이스/40_데이터베이스의%20종류',
                    '/05_데이터베이스/41_SQLvsNoSQL',
                    '/05_데이터베이스/50_인덱스',
                    '/05_데이터베이스/60_조인의%20종류',
                    '/05_데이터베이스/70_조인의%20원리',
                ]
            },
            {
                title: '🎡 네트워크',
                collapsable: true,
                children: [
                    '/03_네트워크/처리량%20지연시간',
                    '/03_네트워크/토폴로지와%20병목현상',
                    '/03_네트워크/네트워크%20분류',
                    '/03_네트워크/네트워크%20성능%20분석명령어',
                    '/03_네트워크/TCP%20IP%204게층',
                    '/03_네트워크/네트워크기기',
                    '/03_네트워크/IP',
                    '/03_네트워크/HTTP%20버전',
                    '/03_네트워크/HTTPS',
                    '/03_네트워크/쿠키와%20세션',
                ]
            },
            {
                title: '📐 자료구조',
                collapsable: true,
                children: [
                    '/02_자료구조/01_시공간복잡도',
                    '/02_자료구조/02_배열',
                    '/02_자료구조/03_연결리스트',
                    '/02_자료구조/04_백터',
                    '/02_자료구조/05_스택',
                    '/02_자료구조/06_큐',
                    '/02_자료구조/07_덱',
                    '/02_자료구조/08_우선순위큐',
                    '/02_자료구조/09_그래프',
                    '/02_자료구조/10_트리',
                    '/02_자료구조/10_트리_이진탐색트리',
                    '/02_자료구조/10_트리_AVL트리',
                    '/02_자료구조/10_트리_레드블랙트리',
                    '/02_자료구조/10_트리_B_B+트리',
                    '/02_자료구조/11_힙',
                    '/02_자료구조/12_셋',
                    '/02_자료구조/13_맵',
                ]
            },
            {
                title: '🧩 디자인패턴',
                collapsable: true,
                children: [
                    '/01_디자인패턴/MVC%20vs%20MVP%20vs%20MVVM%20패턴',
                    '/01_디자인패턴/01_싱글톤',
                    '/01_디자인패턴/02_팩토리메소드',
                    '/01_디자인패턴/03_추상팩토리',
                    '/01_디자인패턴/04_빌더',
                    '/01_디자인패턴/05_프로토타입',
                    '/01_디자인패턴/06_어댑터',
                    '/01_디자인패턴/07_브릿지',
                    '/01_디자인패턴/08_컴포짓',
                    '/01_디자인패턴/09_데코레이터',
                    '/01_디자인패턴/10_퍼사드',
                    '/01_디자인패턴/11_플라이웨이트',
                    '/01_디자인패턴/12_프록시',
                    '/01_디자인패턴/13_책임연쇄',
                    '/01_디자인패턴/14_커맨드',
                    '/01_디자인패턴/15_인터프리터',
                    '/01_디자인패턴/16_이터레이터',
                    '/01_디자인패턴/17_중재자',
                    '/01_디자인패턴/18_메멘토',
                    '/01_디자인패턴/19_옵저버',
                    '/01_디자인패턴/20_상태',
                    '/01_디자인패턴/21_전략',
                    '/01_디자인패턴/22_템플릿',
                    '/01_디자인패턴/23_방문자',
                ]
            },
            {
                title: '☕ JAVA',
                collapsable: true,
                children: [
                    '/06_자바/01_자바버전별차이',
                    '/06_자바/02_Wrapper_Class',
                    '/06_자바/03_DAO,DTO,VO%20차이',
                    '/06_자바/04_해시코드와%20이퀄',
                ]
            },
            {
                title: '⚡ 서블릿',
                collapsable: true,
                children: [
                    '/07_서블릿/서블릿',
                    '/07_서블릿/서블릿의%20라이프%20사이클',
                    '/07_서블릿/포워딩과%20리다이렉트.md',
                ]
            },
            {
                title: '☘ 스프링',
                collapsable: true,
                children: [
                    '/08_스프링/01_SpringFramework_SpringBoot',
                    '/08_스프링/02_Spring_AOP',
                ]
            },
            {
                title: '자바스크립트',
                collapsable: true,
                children: [
                    '/09_자바스크립트/01_Window,DOM,BOM',
                ]
            }
        ]
    }
}

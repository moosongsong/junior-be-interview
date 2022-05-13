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
                title: '디자인패턴',
                collapsable: true,
                children: [
                    '/01_디자인패턴/01_싱글톤',
                    '/01_디자인패턴/02_팩토리메소드',
                    '/01_디자인패턴/03_추상팩토리',
                    '/01_디자인패턴/04_빌더',
                    '/01_디자인패턴/05_프로토타입',
                    '/01_디자인패턴/06_어댑터',
                    '/01_디자인패턴/07_브릿지',
                    '/01_디자인패턴/08_컴포짓',
                ]
            }
        ]
    }
}

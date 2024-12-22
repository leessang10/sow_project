// https://youtu.be/6u80k6d5sCA?si=0Qb58CtsR5U5vwGR
export interface ProjectVideo {
    videoId: string;
    thumbnail: string;
}

export interface ProjectDetail {
    client: string;
    position: string;
    design: string;
    location: string;
    area: {
        site: string;
        building: string;
        total: string;
    };
    scale: string;
    content: string[];
}

export interface Project {
    id: number;
    title: string;
    mainImage: string;
    description: string;
    categories: string[];
    detail?: ProjectDetail
    video?: ProjectVideo
    images?: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "우아당 (wooadang)",
        mainImage: '/project/wooadang/DSC07707.webp',
        description: "우리들의 아름다운 집",
        categories: ["Architecture"],
        detail: {
            client: "Private",
            position: "Architectural Design",
            design: "NOV. 2021-AGU, 2022",
            location: "Boradong, Giheung-gu, Yongin-si, Gyeonggi-do, Republic of Korea",
            area: {
                site: "253㎡",
                building: "70.21㎡",
                total: "195.83㎡"
            },
            scale: "지상 3층",
            content: [
                "우아당의 시작",
                "평소 배움에 열정이었던 건축주와의 인연으로 시작된 프로젝트였다. 프로젝트의 시작부터 마무리까지 '좋은집이란?' 이라는 물음을 우리 모두 좇았던 것 같다. 정답이 없는 물음이지만 건축을 마무리할 때까지 수 많은 선택의 기로에는 좋은집이라는 물음을 같이 고민하며 결정을 해 나아갔다.",
                "우아당이란 이름의 의미",
                "우아당이란 이름은 '우리들의 아름다운집', 자녀인 '나우와 노아의집', '우와~'의 감탄이 섞여있는 등의 많은 중의적인 의미를 담고있다.",
                "보라동 단지의 마지막 땅",
                "해당 사이트는 이미 주택단지로 조성이 되어있는 지역에 마지막으로 남아있던 곳이었다. 그렇기 때문에 기존의 단지단위의 배치에서 느낄 수 있는 리듬과 흐름을 이어받아 대지의 가능성을 최대한 끌어내보고자 하였다.",
                "우아당의 구성",
                "계획의 첫 선을 긋기까지 많은 시간이 걸렸다. 계획의 구��적 방향성이 잡힐 시기에 성장관리계획이 고시되면서 대지의 조건이 바뀌었다. 새로운 가능성이 생긴 대지는 새로운 계획 방향을 갖게 되었다. 변경 전 기존계획은 선큰과 스킵플로어를 통해 물리적으로 공간의 연결에 초점을 맞췄다면 다시 변경된 계획에서는 지하층을 없애고 프로그램을 지상으로 올려 내부에서 시선을 통해 시각적인 연결에 초점을 맞췄다. 때문에 차경에 대한 외부의 확장성, 가족이 갖고있는 휴먼스케일을 좀 더 신중하게 고민하였다.",
                "공간 구성의 특징",
                "우아당은 북쪽에 숲이 우거져 있는 마지막 지점에 위치하고 있었고, 우리는 그러한 이점을 충분히 활용하여 공간적 제약을 극복하고자 하였다. 숲과 우아당의 경계를 동일선상에 두어 극적인 공감각적 경험을 주고자 했고, 북측에 창을 보이드와 함께 크게 두어 개방감을 더했다. 가족에 대한 휴먼스케일에서 제일 중요하게 생각한 요소는 자녀의 시선이었다. 부모의 눈높이로만 볼수있는 공간을 자녀도 동시에 같이 볼 수 있는 시퀀스를 만들고자 했다.",
                "디자인 특징",
                "우아당은 북쪽으로 숲이 펼쳐��� 거실이 숲을 바라보고 있다. 남향으로 배치된 주방으로는 채광을 확보할 수 있는 큰창을 두어 거실에서는 사계절의 변화를 느낄 수 있는 따뜻한 공간을 계획하였다. 박공지붕의 형태는 족들이 생각하는 집의 형태를 뚜렷이 드러내주고자 하였다. 구조는 목구조를 선택하였는데 특수목을 적용하여 3개 층으로 구성하였다. 3개 층으로 이루어진 우아당은 내외부적으로 모든 공간을 채우기보다는 1층에 포치공간과 3층의 테라스를 계획하여 내부이지만 다양한 외부 활동을 할 수 있는 공간을 두었다."
            ]
        },
        images: [
            "/project/wooadang/DJI_0363.webp",
            "/project/wooadang/DJI_0431.webp",
            "/project/wooadang/DSC07441.webp",
            "/project/wooadang/DSC07670.webp",
            "/project/wooadang/DSC07707.webp",
            "/project/wooadang/DSC07761.webp",
            "/project/wooadang/DSC07800.webp",
            "/project/wooadang/DSC07884.webp",
            "/project/wooadang/DSC07887.webp",
            "/project/wooadang/DSC07904.webp",
            "/project/wooadang/DSC07919.webp",
            "/project/wooadang/DSC08021.webp",
            "/project/wooadang/DSC08087.webp",
            "/project/wooadang/DSC08098.webp",
            "/project/wooadang/DSC08119.webp",
            "/project/wooadang/DSC08123.webp",
            "/project/wooadang/DSC08133.webp",
            "/project/wooadang/DSC08145.webp",
            "/project/wooadang/DSC08175.webp",
            "/project/wooadang/DSC08218.webp",
            "/project/wooadang/DSC08221.webp",
            "/project/wooadang/DSC08333.webp",
        ]
    },
    {
        id: 2,
        title: "퓨전일식 전문점 장정정",
        mainImage: 'https://i.ytimg.com/vi/nZ20b553qco/maxresdefault.jpg',
        description: "전통과 현대가 만나는 공간",
        categories: ["Architecture", "Interior", "Branding"],
        detail: {
            client: "장정정",
            position: "Interior Design, Branding",
            design: "2023",
            location: "서울시 강남구",
            area: {
                site: "-",
                building: "-",
                total: "132㎡"
            },
            scale: "1층",
            content: [
                "브랜드 스토리",
                "친절하고 정직한 이미지를 갖고 있는 장.정.정이란 브랜드는 건장하고 젊은 장정들이 모여 장사를 하자! 라는 의미에서 출발한 식당입니다.",

                "디자인 컨셉",
                "아틀리에소우는 장.정.정 만의 젊은 이미지를 디자인하기 위해 철, 불, 돌, 담금질 과 같은 강인함의 상징으로 대장간에서의 열기와 에너지를 컨셉으로 시작하였습니다. 컨셉에 맞는 표현을 하기위해 우리는 종석미장의 거친표현, 천장을 비추는 다홍색의 조명, 가구와 주방에 사용된 스테인리스스틸 등 브랜드의 컨셉을 부각시킬 수 있는 재료를 선정하고 공간을 구성하였습니다."
            ]
        },
        video: {
            videoId: "nZ20b553qco",
            thumbnail: "https://i.ytimg.com/vi/nZ20b553qco/maxresdefault.jpg"
        }
    },
    // {
    //     id: 3,
    //     title: "아리랑 도원",
    //     mainImage: '/project/wooadang/DJI_0363.webp',
    //     description: "한식의 새로운 해석",
    //     categories: ["Architecture", "Interior", "Branding"],
    //     video: {
    //         videoId: "XpkhFXOHJXw",
    //         thumbnail: "https://i.ytimg.com/vi/XpkhFXOHJXw/maxresdefault.jpg"
    //     }
    // },
    // {
    //     id: 4,
    //     title: "삐삣버거 스타필드 수원 지점",
    //     mainImage: '/project/wooadang/DJI_0363.webp',
    //     description: "즐거움이 가득한 버거 레스토랑",
    //     categories: ["Architecture", "Interior", "Branding"],
    //     video: {
    //         videoId: "v2maNVn1Kcs",
    //         thumbnail: "https://i.ytimg.com/vi/v2maNVn1Kcs/maxresdefault.jpg"
    //     }
    // }
];
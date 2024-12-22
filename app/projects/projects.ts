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
                "계획의 첫 선을 긋기까지 많은 시간이 걸렸다. 계획의 구체적 방향성이 잡힐 시기에 성장관리계획이 고시되면서 대지의 조건이 바뀌었다. 새로운 가능성이 생긴 대지는 새로운 계획 방향을 갖게 되었다. 변경 전 기존계획은 선큰과 스킵플로어를 통해 물리적으로 공간의 연결에 초점을 맞췄다면 다시 변경된 계획에서는 지하층을 없애고 프로그램을 지상으로 올려 내부에서 시선을 통해 시각적인 연결에 초점을 맞췄다. 때문에 차경에 대한 외부의 확장성, 가족이 갖고있는 휴먼스케일을 좀 더 신중하게 고민하였다.",
                "공간 구성의 특징",
                "우아당은 북쪽에 숲이 우거져 있는 마지막 지점에 위치하고 있었고, 우리는 그러한 이점을 충분히 활용하여 공간적 제약을 극복하고자 하였다. 숲과 우아당의 경계를 동일선상에 두어 극적인 공감각적 경험을 주고자 했고, 북측에 창을 보이드와 함께 크게 두어 개방감을 더했다. 가족에 대한 휴먼스케일에서 제일 중요하게 생각한 요소는 자녀의 시선이었다. 부모의 눈높이로만 볼수있는 공간을 자녀도 동시에 같이 볼 수 있는 시퀀스를 만들고자 했다.",
                "디자인 특징",
                "우아당은 북쪽으로 숲이 펼쳐진 거실이 숲을 바라보고 있다. 남향으로 배치된 주방으로는 채광을 확보할 수 있는 큰창을 두어 거실에서는 사계절의 변화를 느낄 수 있는 따뜻한 공간을 계획하였다. 박공지붕의 형태는 족들이 생각하는 집의 형태를 뚜렷이 드러내주고자 하였다. 구조는 목구조를 선택하였는데 특수목을 적용하여 3개 층으로 구성하였다. 3개 층으로 이루어진 우아당은 내외부적으로 모든 공간을 채우기보다는 1층에 포치공간과 3층의 테라스를 계획하여 내부이지만 다양한 외부 활동을 할 수 있는 공간을 두었다."
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
        mainImage: "/project/jjj/DSC03202.webp",
        description: "전통과 현대가 만나는 공간",
        categories: ["Architecture", "Interior", "Branding"],
        detail: {
            client: "장정정",
            position: "Interior Design, Branding",
            design: "2023",
            location: "서울시 강남구",
            area: {
                site: "-",
                building: "-",
                total: "132㎡"
            },
            scale: "1층",
            content: [
                "브랜드 스토리",
                "삼성역 포스코 근처에서 직장인들 사이에서 소문난 맛집으로 '낮에는 밥집, 밤에는 술집'이라는 슬로건 아래 낮에는 덮밥 위주로 밤에는 해산물을 활용한 다양한 안주요리와 꼬치구이를 만드는 곳이었습니다. 너무 많은 사랑을 받은 장정정 삼성점을 선릉으로 새롭게 확장이전하며 공간브랜딩을 바탕으로 새롭게 리뉴얼하는 프로젝트가 되었습니다.",
                
                "장정정의 의미",
                "한자의 말 속에 들어있는 뜻과 같이 젊고 기운좋은 남자들이 일하는 모습이 연상됩니다. 더불어 열정 가득한 장정들이 모인 주방에서는 칼과 불을 사용하며 맛있는 요리를 준비하는 모습을 볼 수 있는 공간입니다.",
                
                "디자인 컨셉",
                "이러한 특성을 반영하기 위해, 아틀리에소우는 불, 쇠, 돌을 연상시키는 재료를 사용하여 '대장간'이라는 컨셉으로 공간 디자인을 진행했습니다. 구조와 가구, 마감재에서 느껴지는 모습은 장정정의 아이덴티티를 건축 외관부터 내부 구조, 가구까지 그 정체성이 드러날 수 있도록 시각화 했습니다.",
                
                "공간의 특징",
                "장정정은 열정 가득한 사내들이 모여 정성 가득한 요리를 만들어 내는 공간입니다. 이러한 공간에서 그들의 정직한 마음, 열정 가득한 마음을 방문한 손님들께 고스란히 느껴질 수 있는 모습을 상상했습니다. 그 상상은 장정정의 바테이블에서도 힘껏 표현됩니다. 불과 쇠, 열기와 섬세함. 성질의 조합은 우리가 나아가는 방향성에 있어서 중요한 요소가 됩니다.",
                
                "마무리",
                "이처럼 불, 쇠, 돌이라는 물성을 가진 물체들이 하나로 교차하는 지점에서 장정정의 이야기는 완성됩니다. 아틀리에소우는 장정정 선릉점을 찾는 고객들에게 장정정의 맛과 함께 공간이 주는 이야기를 전달하고, 소통하며 방문해주신 분들에게 새로운 감동을 주는 장소이길 바랍니다."
            ]
        },
        video: {
            videoId: "nZ20b553qco",
            thumbnail: "https://i.ytimg.com/vi/nZ20b553qco/maxresdefault.jpg"
        },
        images: [
            "/project/jjj/DSC03146.webp",
            "/project/jjj/DSC03150.webp",
            "/project/jjj/DSC03152.webp",
            "/project/jjj/DSC03154.webp",
            "/project/jjj/DSC03162.webp",
            "/project/jjj/DSC03164.webp",
            "/project/jjj/DSC03166.webp",
            "/project/jjj/DSC03167.webp",
            "/project/jjj/DSC03170.webp",
            "/project/jjj/DSC03174.webp",
            "/project/jjj/DSC03176.webp",
            "/project/jjj/DSC03179.webp",
            "/project/jjj/DSC03181.webp",
            "/project/jjj/DSC03184.webp",
            "/project/jjj/DSC03185.webp",
            "/project/jjj/DSC03186.webp",
            "/project/jjj/DSC03188.webp",
            "/project/jjj/DSC03196.webp",
            "/project/jjj/DSC03197.webp",
            "/project/jjj/DSC03202.webp",
            "/project/jjj/DSC03205.webp",
            "/project/jjj/DSC03214.webp",
            "/project/jjj/DSC03219.webp",
            "/project/jjj/DSC03220.webp",
            "/project/jjj/DSC03222.webp",
            "/project/jjj/DSC03226.webp",
            "/project/jjj/DSC03227.webp",
            "/project/jjj/DSC03230.webp",
            "/project/jjj/DSC03231.webp",
            "/project/jjj/DSC03234.webp",
            "/project/jjj/DSC03236.webp",
            "/project/jjj/DSC03239.webp",
            "/project/jjj/DSC03240.webp",
            "/project/jjj/DSC03244.webp",
            "/project/jjj/DSC03247.webp",
            "/project/jjj/DSC03250.webp",
            "/project/jjj/DSC03252.webp",
            "/project/jjj/DSC03254.webp",
            "/project/jjj/DSC03256.webp",
            "/project/jjj/DSC03257.webp",
            "/project/jjj/DSC03259.webp",
            "/project/jjj/DSC03263.webp",
            "/project/jjj/DSC03270.webp",
            "/project/jjj/DSC03276.webp",
            "/project/jjj/DSC03284.webp",
            "/project/jjj/DSC03296.webp",
            "/project/jjj/DSC03297.webp",
            "/project/jjj/DSC03300.webp",
            "/project/jjj/DSC03309.webp",
            "/project/jjj/DSC03320.webp",
            "/project/jjj/DSC03321.webp",
            "/project/jjj/DSC03335.webp",
            "/project/jjj/DSC03338.webp",
            "/project/jjj/DSC03342.webp",
            "/project/jjj/DSC03343.webp",
            "/project/jjj/DSC03344.webp",
            "/project/jjj/DSC03349.webp",
            "/project/jjj/DSC03354.webp",
            "/project/jjj/DSC03355.webp",
            "/project/jjj/DSC03356.webp",
            "/project/jjj/DSC03360.webp",
            "/project/jjj/DSC03365.webp",
            "/project/jjj/DSC03375.webp",
            "/project/jjj/DSC03377.webp",
            "/project/jjj/DSC03380.webp",
            "/project/jjj/DSC03381.webp",
            "/project/jjj/DSC03384.webp",
            "/project/jjj/DSC03391.webp",
            "/project/jjj/DSC03394.webp",
            "/project/jjj/DSC03403.webp",
            "/project/jjj/DSC03411.webp",
            "/project/jjj/DSC03425.webp",
            "/project/jjj/DSC03426.webp",
            "/project/jjj/DSC03429.webp",
            "/project/jjj/DSC03430.webp",
            "/project/jjj/DSC03433.webp",
            "/project/jjj/DSC03434.webp",
            "/project/jjj/DSC03435.webp",
            "/project/jjj/DSC03436.webp",
            "/project/jjj/DSC03441.webp",
            "/project/jjj/DSC03444.webp",
            "/project/jjj/DSC03447.webp",
            "/project/jjj/DSC03448.webp",
            "/project/jjj/DSC03455.webp",
            "/project/jjj/DSC03459.webp",
            "/project/jjj/DSC03469.webp",
            "/project/jjj/DSC03473.webp",
            "/project/jjj/DSC03476.webp",
        ]
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
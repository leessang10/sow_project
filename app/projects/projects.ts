// https://youtu.be/6u80k6d5sCA?si=0Qb58CtsR5U5vwGR
export interface Project {
    id: string | number;
    title: string;
    category: string;
    description: string | undefined;
    thumbnail: string;
    videoId: string;
}

export const projects = [
    {
        id: 1,
        title: "59㎡ 투룸 신혼집",
        category: "Interior",
        description: undefined,
        videoId: "6u80k6d5sCA",
        thumbnail: "https://i.ytimg.com/vi/6u80k6d5sCA/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "퓨전일식 전문점 장정정",
        category: "Architecture, Interior, Branding",
        description: undefined,
        videoId: "nZ20b553qco",
        thumbnail: "https://i.ytimg.com/vi/nZ20b553qco/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "아리랑 도원",
        category: "Architecture, Interior, Branding",
        description: undefined,
        videoId: "XpkhFXOHJXw",
        thumbnail: "https://i.ytimg.com/vi/XpkhFXOHJXw/maxresdefault.jpg"
    },
    {
        id: 4,
        title: "삐삣버거 스타필드 수원 지점",
        category: "Architecture, Interior, Branding",
        description: undefined,
        videoId: "v2maNVn1Kcs",
        thumbnail: "https://i.ytimg.com/vi/v2maNVn1Kcs/maxresdefault.jpg"
    },
];
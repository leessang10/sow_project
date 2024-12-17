import PageHeader from "../components/PageHeader";

const projects = [
    {
        id: 1,
        title: "서울 레지던스",
        category: "주거공간",
        description: "도심 속 평화로운 휴식처",
        imageUrl: "/projects/project1.jpg"
    },
    // 더 많은 프로젝트 추가...
];

export default function Projects() {
    return (
        <main>
            <PageHeader
                title="프로젝트"
                description="아틀리에 소우의 대표 프로젝트들을 소개합니다"
            />

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="group cursor-pointer">
                                <div className="relative h-[300px] bg-gray-100 mb-4">
                                    {/* <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  /> */}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-2">{project.category}</p>
                                <p className="text-gray-500">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
} 
import PageHeader from "../../components/PageHeader";
import { getProjects } from "@/lib/notion/notion";
import ProjectGrid from "./ProjectGrid";

// 페이지 동적 설정
export const revalidate = 10; // 10초마다 재검증

export default async function ProjectsV2() {
    const projects = await getProjects();

    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
            <PageHeader
                title="프로젝트"
                description="Notion API로 불러온 프로젝트 목록"
            />
            <section className="py-2 px-2">
                <ProjectGrid projects={projects} />
            </section>
        </main>
    );
} 
'use client';

import PageHeader from "../components/PageHeader";
import {motion} from "framer-motion";
import {projects} from "@/app/projects/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Projects() {
    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
            <PageHeader
                title="프로젝트"
                description="Architecture + Interior + Branding"
            />
            <section className="py-20 px-4">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, margin: "-100px"}}
                >
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {projects.map((project) => (
                            <Link key={project.id} href={`/projects/${project.id}`}>
                                <ProjectCard project={project}/>
                            </Link>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
} 
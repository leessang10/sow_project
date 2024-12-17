'use client';

import PageHeader from "../components/PageHeader";
import {motion} from "framer-motion";

// https://youtu.be/6u80k6d5sCA?si=0Qb58CtsR5U5vwGR
const projects = [
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
    {
        id: 5,
        title: "성수동 주택 프로젝트 4",
        category: "Residential",
        description: "성수동 주택 프로젝트 현장 스케치 4",
        videoId: "Hs0-3qYPCYY",
        thumbnail: "https://i.ytimg.com/vi/Hs0-3qYPCYY/maxresdefault.jpg"
    },
    {
        id: 6,
        title: "성수동 주택 프로젝트 5",
        category: "Residential",
        description: "성수동 주택 프로젝트 현장 스케치 5",
        videoId: "Hs0-3qYPCYY",
        thumbnail: "https://i.ytimg.com/vi/Hs0-3qYPCYY/maxresdefault.jpg"
    },
    {
        id: 7,
        title: "성수동 주택 프로젝트 6",
        category: "Residential",
        description: "성수동 주택 프로젝트 현장 스케치 6",
        videoId: "Hs0-3qYPCYY",
        thumbnail: "https://i.ytimg.com/vi/Hs0-3qYPCYY/maxresdefault.jpg"
    },
];

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function Projects() {
    return (
        <main>
            <PageHeader
                title="Projects"
                description="Architecture + Interior + Branding"
            />

            <section className="py-20 px-4">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="group"
                            >
                                <a
                                    href={`https://www.youtube.com/watch?v=${project.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="relative aspect-video bg-gray-100 mb-4 overflow-hidden">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"/>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center"
                                                whileHover={{scale: 1.1}}
                                            >
                                                <svg
                                                    className="w-8 h-8 text-gray-900"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z"/>
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <motion.h3
                                        className="text-xl font-bold mb-2"
                                        whileHover={{x: 10}}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="text-gray-600 mb-2">{project.category}</p>
                                    <p className="text-gray-500">{project.description}</p>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </main>
    );
} 
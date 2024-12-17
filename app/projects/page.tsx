'use client';

import PageHeader from "../components/PageHeader";
import {motion} from "framer-motion";
import {projects} from "@/constants/projects";

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
        <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                                    className="block bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                                >
                                    <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"/>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                className="w-16 h-16 rounded-full bg-white/80 dark:bg-black/80 flex items-center justify-center"
                                                whileHover={{scale: 1.1}}
                                            >
                                                <svg
                                                    className="w-8 h-8 text-gray-900 dark:text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z"/>
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <motion.h3
                                            className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
                                            whileHover={{x: 10}}
                                        >
                                            {project.title}
                                        </motion.h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-2">{project.category}</p>
                                        {project.description && (
                                            <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                                        )}
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </main>
    );
} 
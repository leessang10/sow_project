'use client';

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
export default function Home() {
    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
            {/* Hero Section */}
            <section
                className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-card">
                <motion.div
                    className="text-center"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.2, duration: 0.6}}
                    >
                        Atelier Sow
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-300 mb-2"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.4, duration: 0.6}}
                    >
                        Sound Of Wisdom
                    </motion.p>
                    <motion.p
                        className="text-lg text-gray-500 dark:text-gray-400"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.6, duration: 0.6}}
                    >
                        김정민 · 이혜은
                    </motion.p>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 bg-white dark:bg-dark-bg">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        아틀리에 소우는 지혜로운 공간을 만듭니다
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            className="space-y-4"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">공간의 본질을 탐구하는 디자인</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                내·외부의 경계를 넘어서는 건축을 추구합니다. 
                                단순한 외관 디자인을 넘어 공간과 관련된 
                                모든 디자인 요소를 섬세하게 다룹니다.
                            </p>
                        </motion.div>
                        <motion.div
                            className="space-y-4"
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.4}}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">정성이 깃든 건축</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                SOW(심다)라는 이름처럼, 각 프로젝트에 
                                정성과 철학을 심어 본질적 의미의 건축을 
                                실현합니다.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Preview Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-dark-card">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        최근 프로젝트
                    </motion.h2>
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
                                        <div
                                            className="relative aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
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
                </div>
            </section>
        </main>
    );
}

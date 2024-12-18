'use client';

import {AnimatePresence, motion} from "framer-motion";
import {Project} from "@/app/projects/projects";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({project, onClose}: ProjectModalProps) {
    return (
        <AnimatePresence>
            {project && (
                <>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/70 z-40"
                        onClick={onClose}
                    />
                    <div className="fixed inset-0 z-50">
                        <div className="flex items-center justify-center h-full p-2">
                            <motion.div
                                initial={{scale: 0.95, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                exit={{scale: 0.95, opacity: 0}}
                                transition={{type: "spring", damping: 30, stiffness: 300}}
                                className="relative w-[90vw] h-[calc(90vh-3rem)] max-h-[800px] max-w-[1400px] bg-white dark:bg-dark-card rounded-lg shadow-xl overflow-hidden"
                            >
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10 bg-white/80 dark:bg-black/80 rounded-full"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>

                                <div className="h-full flex flex-col">
                                    <div className="flex-1 min-h-0">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                                            title={project.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <div className="h-20 px-6 py-4 bg-white dark:bg-dark-card">
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                                            {project.title}
                                        </h2>
                                        <p className="text-base text-gray-600 dark:text-gray-300 truncate">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
} 
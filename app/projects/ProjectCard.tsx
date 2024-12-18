import { motion } from "framer-motion";
import { Project } from "@/app/projects/projects";

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <motion.div
            layoutId={`container-${project.id}`}
            className="group cursor-pointer"
            onClick={onClick}
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 100
                    }
                }
            }}
        >
            <motion.div
                layoutId={`card-${project.id}`}
                className="block bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
                <motion.div
                    layoutId={`image-container-${project.id}`}
                    className="relative aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden"
                >
                    <motion.img
                        layoutId={`image-${project.id}`}
                        src={project.thumbnail}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <motion.div
                        layoutId={`overlay-${project.id}`}
                        className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
                    />
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
                </motion.div>
                <motion.div
                    layoutId={`content-${project.id}`}
                    className="p-4"
                >
                    <motion.h3
                        layoutId={`title-${project.id}`}
                        className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
                    >
                        {project.title}
                    </motion.h3>
                    <motion.p
                        layoutId={`category-${project.id}`}
                        className="text-gray-600 dark:text-gray-300 mb-2"
                    >
                        {project.category}
                    </motion.p>
                    {project.description && (
                        <motion.p
                            layoutId={`description-${project.id}`}
                            className="text-gray-500 dark:text-gray-400"
                        >
                            {project.description}
                        </motion.p>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
} 
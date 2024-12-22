'use client';

import {projects} from "@/app/projects/projects";
import {notFound} from "next/navigation";
import Image from "next/image";
import PageHeader from "@/app/components/PageHeader";
import {motion} from "framer-motion";
import {use} from "react";

interface ProjectDetailProps {
    params: Promise<{ id: string }>;
}

export default function ProjectDetail({params}: ProjectDetailProps) {
    const {id} = use(params);
    const project = projects.find(p => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors">
            <PageHeader
                title={project.title}
                description={project.description}
            />

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="relative aspect-video w-full mb-12 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <Image
                            src={project.mainImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {project.detail && (
                        <div className="prose dark:prose-invert max-w-none">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <motion.div 
                                    className="bg-gray-50 dark:bg-dark-card p-8 rounded-lg"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.2}}
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">프로젝트 정보</h3>
                                    <dl className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                                        <dt className="font-semibold">Client</dt>
                                        <dd>{project.detail.client}</dd>
                                        <dt className="font-semibold">Position</dt>
                                        <dd>{project.detail.position}</dd>
                                        <dt className="font-semibold">Design Period</dt>
                                        <dd>{project.detail.design}</dd>
                                        <dt className="font-semibold">Location</dt>
                                        <dd>{project.detail.location}</dd>
                                    </dl>
                                </motion.div>
                                <motion.div 
                                    className="bg-gray-50 dark:bg-dark-card p-8 rounded-lg"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.3}}
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">건축 개요</h3>
                                    <dl className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                                        <dt className="font-semibold">대지면적</dt>
                                        <dd>{project.detail.area.site}</dd>
                                        <dt className="font-semibold">건축면적</dt>
                                        <dd>{project.detail.area.building}</dd>
                                        <dt className="font-semibold">연면적</dt>
                                        <dd>{project.detail.area.total}</dd>
                                        <dt className="font-semibold">규모</dt>
                                        <dd>{project.detail.scale}</dd>
                                    </dl>
                                </motion.div>
                            </div>

                            <motion.div 
                                className="bg-gray-50 dark:bg-dark-card p-8 rounded-lg mb-12"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.4}}
                            >
                                {project.detail.content.map((text, index) => (
                                    <div key={index} className="mb-6 text-gray-600 dark:text-gray-300">
                                        {text.includes(':') ? (
                                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{text}</h3>
                                        ) : (
                                            <p className="leading-relaxed">{text}</p>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    )}

                    {project.images && (
                        <motion.div 
                            className="grid gap-8"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.5}}
                        >
                            {project.images.map((image, index) => (
                                <div key={index} className="relative aspect-video w-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={`${project.title} 이미지 ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {project.video && (
                        <motion.div 
                            className="relative aspect-video w-full mt-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.6}}
                        >
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${project.video.videoId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
} 
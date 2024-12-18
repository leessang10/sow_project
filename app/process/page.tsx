'use client';

import PageHeader from "../components/PageHeader";
import {motion} from "framer-motion";
import {steps} from "@/app/process/steps";

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
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function Process() {

    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
            <PageHeader
                title="진행 과정"
                description="프로젝트의 시작부터 완성까지"
            />

            <section className="py-20 px-4">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                variants={itemVariants}
                                className={`${step.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative dark:shadow-gray-900/30`}
                            >
                                <motion.div
                                    initial={{scale: 0}}
                                    animate={{scale: 1}}
                                    transition={{delay: index * 0.2, duration: 0.5}}
                                    className="w-16 h-16 rounded-full bg-white dark:bg-dark-card shadow-md flex items-center justify-center mb-6 mx-auto"
                                >
                                    <span
                                        className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                        {step.number}
                                    </span>
                                </motion.div>
                                <motion.h3
                                    className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: index * 0.3}}
                                >
                                    {step.title}
                                </motion.h3>
                                <ul className="space-y-2">
                                    {step.description.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="text-gray-600 dark:text-gray-400 text-sm"
                                            initial={{opacity: 0, x: -10}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{delay: index * 0.3 + i * 0.1}}
                                        >
                                            • {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </main>
    );
} 
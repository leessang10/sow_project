'use client';

import {motion} from "framer-motion";

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
                        공간에 가치를 심다
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
                        본질에 다가가는 건축을 만듭니다
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            className="space-y-4"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">공간의 본질을 담다</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                내·외부의 경계를 넘어서는 공간을 만듭니다.
                                건축과 공간을 기반으로 모든 디자인 요소를
                                섬세하게 다루어 새로운 가치를 창조합니다.
                            </p>
                        </motion.div>
                        <motion.div
                            className="space-y-4"
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.4}}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">정성을 심다</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                각 프로젝트에 정성과 혼을 담아
                                삶에 영감을 주는 공간을 만들어갑니다.
                                이것이 우리가 추구하는 건축입니다.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Preview Section */}
        </main>
    );
}

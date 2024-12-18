'use client';

import PageHeader from "../components/PageHeader";
import {motion} from "framer-motion";

export default function About() {
    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
            <PageHeader
                title="회사 소개"
                description="창의적인 공간 설계로 새로운 가치를 만들어갑니다"
            />

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">아틀리에 소우</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                아틀리에 소우는 Sound Of Wise의 약자로,
                                지혜로운 소리를 의미합니다. 우리는 건축이 단순한
                                구조물이 아닌 삶의 지혜를 담는 그릇이 되어야
                                한다고 믿습니다.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                김정민, 이혜은 부부를 주축으로 성장하고 있는
                                아틀리에 소우는 각 프로젝트에 혼을 담아
                                클라이언트의 꿈을 실현시키고 있습니다.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative h-[400px] bg-gray-100 dark:bg-gray-800"
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            {/* 회사 대표 이미지 */}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-gray-50 dark:bg-dark-card">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">대표 건축가</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            className="text-center"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            <div
                                className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                                {/* 프로필 이미지 */}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">김정민</h3>
                            <p className="text-gray-600 dark:text-gray-400">공동 대표 / 건축가</p>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <div
                                className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                                {/* 프로필 이미지 */}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">이혜은</h3>
                            <p className="text-gray-600 dark:text-gray-400">공동 대표 / 건축가</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
} 
'use client';

import PageHeader from "../components/PageHeader";
import {motion} from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
            <PageHeader
                title="회사 소개"
                description="창의적인 공간 설계로 새로운 가치를 만들어갑니다"
            />

            <section className="py-90 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">아틀리에 소우</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                아틀리에 소우(Atelier SOW)는 '심다'라는 본연의 뜻과 
                                'Sound Of Wise'를 결합한 의미를 담고 있습니다. 
                                우리는 건축이 단순한 구조물이 아닌, 삶의 지혜를 담는 
                                그릇이 되어야 한다고 믿습니다.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                국민대학교 테크노디자인 건축대학원을 졸업한 
                                김정민, 이혜은 부부는 내·외부의 경계가 모호한 
                                건축의 본질에 접근하며, 단순한 외관 디자인을 넘어 
                                공간과 관련된 모든 디자인 요소를 중요하게 다룹니다.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                우리는 정성이 가득한 공간을 만들어내고, 
                                본질적 의미의 'Architecture'에 한걸음 더 
                                다가가고자 합니다.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <Image
                                src="/images/누나매형.jpeg"
                                alt="아틀리에 소우 대표"
                                fill
                                className="object-cover"
                                style={{objectPosition: '50% 38%'}}
                            />
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
                                <Image
                                    src="/images/매형.jpeg"
                                    alt="김정민 대표"
                                    fill
                                    className="object-cover"
                                    style={{
                                        transform: "scale(2.5)", // 확대
                                        objectPosition: "50% 45%", // 중심 유지
                                    }}
                                />
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
                                <Image
                                    src="/images/누나.jpeg"
                                    alt="이혜은 대표"
                                    fill
                                    className="object-cover"
                                />
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
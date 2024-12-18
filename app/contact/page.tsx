'use client';

import PageHeader from "../components/PageHeader";
import {motion} from "framer-motion";
import {useState} from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
            <PageHeader
                title="문의하기"
                description="프로젝트에 대해 상담해보세요"
            />

            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            문의하기
                        </h2>

                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            <div>
                                <label htmlFor="name"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    이름
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-dark-card dark:text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    이메일
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-dark-card dark:text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    연락처
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-dark-card dark:text-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="message"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    문의내용
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-dark-card dark:text-white"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black dark:bg-white text-white dark:text-black py-3 px-6 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                            >
                                문의하기
                            </button>
                        </motion.form>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            오시는 길
                        </h2>

                        <div className="mb-4">
                            <div style={{
                                width: '100%',
                                maxWidth: '768px',
                                height: '632px',
                                color: '#333',
                                position: 'relative',
                                margin: '0 auto'
                            }}>
                                <div style={{height: '600px'}}>
                                    <a href="https://map.kakao.com/?urlX=506290.0&urlY=1109543.0&name=%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C78%EA%B8%B8%2044&map_type=TYPE_MAP&from=roughmap"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="block w-full"
                                    >
                                        <img
                                            className="map rounded-t-md w-full h-[598px] border border-[#ccc] object-cover"
                                            src="http://t1.daumcdn.net/roughmap/imgmap/d2972f680192e336b07b279bc69896aacd2e19543809d996c7f2837ba2c1b403"
                                            width="1278"
                                            height="598"
                                            alt="카카오맵"
                                        />
                                    </a>
                                </div>
                                <div
                                    className="overflow-hidden px-[11px] py-[7px] border border-[rgba(0,0,0,0.1)] rounded-b-md bg-[#f9f9f9] flex justify-between items-center">
                                    <a href="https://map.kakao.com" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                                            width="72"
                                            height="16"
                                            alt="카카오맵"
                                            style={{display: 'block', width: '72px', height: '16px'}}
                                        />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://map.kakao.com/?from=roughmap&eName=%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C78%EA%B8%B8%2044&eX=506290.0&eY=1109543.0"
                                        className="text-xs text-black no-underline h-[15px] leading-[15px] pt-[1px]"
                                    >
                                        길찾기
                                    </a>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400">
                            서울특별시 서초구 서초대로 44길
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
} 
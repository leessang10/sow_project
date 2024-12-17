'use client';

import {motion} from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid md:grid-cols-2 gap-12"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    <div>
                        <h3 className="text-xl font-bold mb-4">Atelier SOW</h3>
                        <p className="text-gray-600 mb-2">44-78gil, Seochodero, Secho-gu, Seoul, South Korea</p>
                        <p className="text-gray-600 mb-2">+82 10 5647-4032</p>
                        <p className="text-gray-600">sowarch@naver.com</p>
                    </div>
                    <div className="flex flex-col md:items-end">
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex gap-6">
                            <a
                                href="https://www.instagram.com/atelier__sow"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.youtube.com/@ateliersow"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                YouTube
                            </a>
                            <a
                                href="https://www.threads.net/@atelier__sow"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Threads
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
} 
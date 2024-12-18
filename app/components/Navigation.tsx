'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import ThemeToggle from './ThemeToggle';
import {AnimatePresence, motion} from 'framer-motion';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const menuItemVariants = {
        closed: {opacity: 0, y: 20},
        open: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    const closeButtonVariants = {
        closed: {
            rotate: 0,
            scale: 0.5,
            opacity: 0
        },
        open: {
            rotate: 180,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const menuItems = [
        {href: "/about", text: "회사소개"},
        {href: "/projects", text: "프로젝트"},
        {href: "/process", text: "진행과정"},
        {href: "/contact", text: "문의하기"}
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 dark:bg-dark-bg/95 shadow-sm' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                        Atelier Sow
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/about"
                              className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            회사소개
                        </Link>
                        <Link href="/projects"
                              className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            프로젝트
                        </Link>
                        <Link href="/process"
                              className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            진행과정
                        </Link>
                        <Link href="/contact"
                              className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            문의하기
                        </Link>
                        <ThemeToggle/>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle/>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12"/>
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16"/>
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                className="fixed inset-0 bg-white dark:bg-dark-bg z-40 md:hidden"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={menuVariants}
                            >
                                <motion.button
                                    className="absolute top-6 right-6 p-2 text-gray-700 dark:text-gray-300"
                                    onClick={() => setIsMenuOpen(false)}
                                    variants={closeButtonVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <svg
                                        className="w-8 h-8"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </motion.button>

                                <div className="flex flex-col items-center justify-center h-full gap-8">
                                    {menuItems.map((item, i) => (
                                        <motion.div
                                            key={item.href}
                                            custom={i}
                                            variants={menuItemVariants}
                                        >
                                            <Link
                                                href={item.href}
                                                className="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.text}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
} 
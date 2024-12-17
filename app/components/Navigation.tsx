'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import "../globals.css";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold">
            Atelier Sow
          </Link>
          <div className="hidden sm:flex gap-16">
            <Link href="/about" className="text-lg px-4 hover:text-gray-600 transition-colors">
              회사소개
            </Link>
            <Link href="/projects" className="text-lg px-4 hover:text-gray-600 transition-colors">
              프로젝트
            </Link>
            <Link href="/process" className="text-lg px-4 hover:text-gray-600 transition-colors">
              진행과정
            </Link>
            <Link href="/contact" className="text-lg px-4 hover:text-gray-600 transition-colors">
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-card">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Atelier Sow
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Sound Of Wisdom
          </motion.p>
          <motion.p 
            className="text-lg text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            아틀리에 소우는 지혜로운 공간을 만듭니다
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">지혜로운 공간 설계</h3>
              <p className="text-gray-600 dark:text-gray-400">
                아틀리에 소우는 공간에 대한 깊은 이해와 창의적인 해석을 통해 
                사용자의 일상에 영감을 불어넣는 건축을 추구합니다.
              </p>
            </motion.div>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">지속가능한 디자인</h3>
              <p className="text-gray-600 dark:text-gray-400">
                환경과 조화를 이루는 지속가능한 건축을 통해 
                더 나은 미래를 설계합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            최근 프로젝트
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project preview cards can be added here */}
            {/* Each card should have dark mode styles */}
          </div>
        </div>
      </section>
    </main>
  );
}

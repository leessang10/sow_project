'use client';

import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "초기 상담",
    description: "클라이언트의 요구사항과 프로젝트의 목표를 파악합니다.",
    color: "bg-orange-50 dark:bg-orange-900/20"
  },
  {
    number: "02",
    title: "기획 및 계획",
    description: "부지 분석과 함께 초기 계획안을 수립합니다.",
    color: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    number: "03",
    title: "디자인 발전",
    description: "상세 설계와 함께 자재, 마감재를 선정합니다.",
    color: "bg-green-50 dark:bg-green-900/20"
  },
  {
    number: "04",
    title: "시공",
    description: "철저한 공정 관리로 품질을 보장합니다.",
    color: "bg-purple-50 dark:bg-purple-900/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
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
          <div className="relative">
            {/* 연결선 */}
            {/* <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 hidden lg:block" /> */}
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className={`${step.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative dark:shadow-gray-900/30`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-white dark:bg-dark-card shadow-md flex items-center justify-center mb-6 mx-auto"
                  >
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                  
                  {/* 화살표 (데스크톱에서만 표시) */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.5 }}
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="text-gray-400 dark:text-gray-600"
                      >
                        <path 
                          d="M5 12H19M19 12L12 5M19 12L12 19" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 
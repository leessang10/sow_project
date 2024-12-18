import { motion } from 'framer-motion';
import Link from 'next/link';

interface MobileMenuItemProps {
    href: string;
    text: string;
    index: number;
    onClick: () => void;
}

export default function MobileMenuItem({ href, text, index, onClick }: MobileMenuItemProps) {
    return (
        <motion.div
            custom={index}
            variants={{
                closed: { opacity: 0, y: 20 },
                open: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: i * 0.1,
                        duration: 0.4,
                        ease: "easeOut"
                    }
                })
            }}
        >
            <Link
                href={href}
                className="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={onClick}
            >
                {text}
            </Link>
        </motion.div>
    );
} 
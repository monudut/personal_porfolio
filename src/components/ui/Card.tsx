import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden ${className}`}
      whileHover={hover ? { y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
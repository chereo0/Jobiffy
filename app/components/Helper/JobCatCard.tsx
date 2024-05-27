'use client'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  image: string;
  category: string;
  openpos: string;
}

const JobCatCard = ({ image, category, openpos }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="p-4 border-2 cursor-pointer border-gray-500 rounded-lg border-opacity-10 bg-white"
      ref={cardRef}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="flex items-center space-x-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, rotate: isVisible ? 0 : -20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image src={image} alt={category} width={60} height={60} />
        </motion.div>

        <motion.div>
          <motion.h1
            className="text-[17px] font-semibold mb-[0.4rem] text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {category}
          </motion.h1>
          <motion.p
            className="text-[14px] font-medium text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            ({openpos} open Position)
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default JobCatCard;

'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '@/public/images/hero.svg';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 10, delay: 0.2 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 50, damping: 10, delay: 0.4 }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 10, delay: 0.6 }
  }
};

const Hero = () => {
  return (
    <motion.section
      className="bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <motion.div
          className="relative w-full h-64 md:h-96 lg:h-[32rem]"
          variants={imageVariants}
        >
          <Image src={heroImage} alt="Hero Image" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
        </motion.div>
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8">
          Get Tasks Done Easily
        </motion.h1>
        <motion.p className="mt-4 text-lg md:text-xl text-gray-700" variants={buttonVariants}>
          Find skilled people to help you with your home services.
        </motion.p>
        <motion.div className="mt-6 flex space-x-4" variants={buttonVariants}>
          <Link href="/browse-tasks" legacyBehavior>
            <a className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-300">
              Browse Tasks
            </a>
          </Link>
          <Link href="/post-task" legacyBehavior>
            <a className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-300">
              Post a Task
            </a>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

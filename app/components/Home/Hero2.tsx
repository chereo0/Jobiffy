'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImage from '@/public/images/hero1.jpg';

const Hero2 = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <motion.div
          className="relative w-full h-64 md:h-96 lg:h-[32rem]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={heroImage} alt="Hero Image" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Always Next to you to find your job.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Find skilled people to help you with your  services.
        </motion.p>
        <div className="mt-6 flex space-x-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link href="/browse-tasks" className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-300">
              Browse Tasks
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Link href="/post-task" className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-300">
              Post a Task
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

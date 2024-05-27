'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const categories = [
    { name: 'Cleaning', href: '/category/cleaning', image: '/images/cleaning.jpg' },
    { name: 'Moving', href: '/category/moving', image: '/images/moving.jpg' },
    { name: 'Handyman', href: '/category/handyman', image: '/images/handyman.jpg' },
    { name: 'Delivery', href: '/category/delivery', image: '/images/delivery.jpg' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="hero bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Top Categories</h1>
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ${styles.categoryGrid}`}
          style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
        >
          {categories.map((category) => (
            <Link key={category.name} href={category.href} passHref>
              <div className={`group block rounded-lg overflow-hidden ${styles.category}`} tabIndex={0}>
                <div className={styles.imageWrapper}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className={`w-full h-48 object-cover ${styles.image}`}
                  />
                  <div className={styles.overlay}>
                    <h2 className="text-lg font-medium text-white">{category.name}</h2>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h2 className="text-lg font-medium text-gray-900">{category.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

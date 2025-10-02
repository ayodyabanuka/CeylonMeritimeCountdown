'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <motion.div
      className='bg-white'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className='max-w-screen-xl mx-auto py-20 md:py-40 lg:py-60 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16'>
        <motion.div
          className='text-black text-lg md:text-2xl lg:text-[32px]/8 font-medium font-instrument-sans flex flex-col items-start gap-4 md:gap-6'
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='text-[#7d7d7d] text-sm md:text-base'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.div>
          <motion.div
            className='text-black text-base md:text-lg lg:text-3xl font-instrument-sans items-start sm:items-center justify-between gap-4 sm:gap-0'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We are a leading shipping and port agency in Sri Lanka, providing a
            full range of high-quality, reliable maritime services to vessels
            calling at all Sri Lankan ports. Our team of professionals leverages
            the latest technology and offers 24/7 support with a personalized
            attention for our clients.
          </motion.div>
        </motion.div>

        <motion.div
          className='h-64 md:h-80 lg:h-full overflow-hidden relative rounded-2xl md:rounded-4xl'
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div ref={parallaxRef} className='absolute inset-0 w-full h-[140%]'>
            <Image
              src='/background.jpg'
              alt='background'
              width={1000}
              height={1000}
              className='w-full h-full object-cover'
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

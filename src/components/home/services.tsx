'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className='max-w-screen-lg mx-auto h-full pb-10 md:pb-20 px-4 md:px-8'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className='text-black text-lg md:text-2xl lg:text-[32px]/8 font-medium font-instrument-sans grid grid-cols-1 lg:grid-cols-2 py-6 md:py-10 gap-4 md:gap-6'
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
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
          Our Services
        </motion.div>
        <motion.div
          className='text-black text-base md:text-lg lg:text-3xl font-bold font-instrument-sans items-start sm:items-center justify-between gap-4 sm:gap-0'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          We offer a comprehensive range of maritime services{' '}
          <span className='text-[#747474]'>
            to meet the diverse needs of our clients.
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-5 h-full'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <Link href='/services#shipping-agency'>
          <motion.div
            className='overflow-hidden rounded-2xl md:rounded-4xl relative group cursor-pointer'
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='overflow-hidden rounded-2xl md:rounded-4xl aspect-square bg-[url(/services/1.png)] bg-cover bg-center group-hover:scale-105 transition-all duration-300'></div>
            <div className='absolute inset-0 flex items-start justify-start p-4 md:p-10 z-20'>
              <div className='text-white text-sm md:text-base font-medium font-instrument-sans'>
                Shipping Agency Services
              </div>
            </div>
            <div className='absolute inset-0 flex items-end justify-end z-20'>
              <div className='text-black bg-white px-4 md:px-10 py-2 md:py-5 rounded-tl-2xl md:rounded-tl-3xl backdrop-blur-sm drop-shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white text-xs md:text-base'>
                Read More
              </div>
            </div>
          </motion.div>
        </Link>

        <Link href='/services#marine-services'>
          <motion.div
            className='overflow-hidden rounded-2xl md:rounded-4xl relative group cursor-pointer'
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='overflow-hidden rounded-2xl md:rounded-4xl aspect-square bg-[url(/services/2.png)] bg-cover bg-center group-hover:scale-105 transition-all duration-300'></div>
            <div className='absolute inset-0 flex items-start justify-start p-4 md:p-10 z-20'>
              <div className='text-white text-sm md:text-base font-medium font-instrument-sans'>
                Marine Services
              </div>
            </div>
            <div className='absolute inset-0 flex items-end justify-end z-20'>
              <div className='text-black bg-white px-4 md:px-10 py-2 md:py-5 rounded-tl-2xl md:rounded-tl-3xl backdrop-blur-sm drop-shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white text-xs md:text-base'>
                Read More
              </div>
            </div>
          </motion.div>
        </Link>

        <Link href='/services#ship-chandelling'>
          <motion.div
            className='overflow-hidden rounded-2xl md:rounded-4xl relative group cursor-pointer'
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='overflow-hidden rounded-2xl md:rounded-4xl aspect-square bg-[url(/services/3.png)] bg-cover bg-center group-hover:scale-105 transition-all duration-300'></div>
            <div className='absolute inset-0 flex items-start justify-start p-4 md:p-10 z-20'>
              <div className='text-white text-sm md:text-base font-medium font-instrument-sans'>
                Ship Chandelling Services
              </div>
            </div>
            <div className='absolute inset-0 flex items-end justify-end z-20'>
              <div className='text-black bg-white px-4 md:px-10 py-2 md:py-5 rounded-tl-2xl md:rounded-tl-3xl backdrop-blur-sm drop-shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white text-xs md:text-base'>
                Read More
              </div>
            </div>
          </motion.div>
        </Link>

        <Link href='/services#logistics-warehousing'>
          <motion.div
            className='overflow-hidden rounded-2xl md:rounded-4xl relative group cursor-pointer'
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='overflow-hidden rounded-2xl md:rounded-4xl aspect-square bg-[url(/services/4.png)] bg-cover bg-center group-hover:scale-105 transition-all duration-300'></div>
            <div className='absolute inset-0 flex items-start justify-start p-4 md:p-10 z-20'>
              <div className='text-white text-sm md:text-base font-medium font-instrument-sans'>
                Logistics & Warehousing Solutions
              </div>
            </div>
            <div className='absolute inset-0 flex items-end justify-end z-20'>
              <div className='text-black bg-white px-4 md:px-10 py-2 md:py-5 rounded-tl-2xl md:rounded-tl-3xl backdrop-blur-sm drop-shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white text-xs md:text-base'>
                Read More
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Services;

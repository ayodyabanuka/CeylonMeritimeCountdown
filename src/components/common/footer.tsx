'use client';
import Image from 'next/image';
import Link from 'next/link';
import ScrollVelocity from '../ScrollVelocity';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.div
      className='py-4 px-4 flex flex-col items-center gap-4 md:gap-6 mb-10 border-t border-black/10 overflow-hidden'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Link href='/ask-for-quote'>
          <ScrollVelocity
            texts={['Request a quote']}
            velocity={40}
            className='font-instrument-sans text-5xl lg:text-[150px] text-black p-4 md:p-10 select-none'
          />
        </Link>
      </motion.div>
      <motion.div
        className='flex justify-center items-center gap-2'
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0.68, -0.55, 0.265, 1.55],
        }}
        viewport={{ once: true }}
      >
        <Image
          src='/Logo.png'
          alt='logo'
          width={80}
          height={80}
          className='md:w-[100px] md:h-[100px]'
        />
      </motion.div>
      <motion.div
        className='flex flex-wrap items-center justify-center gap-2 md:gap-4'
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            className='bg-black/5 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm drop-shadow-sm hover:bg-white/50 transition-all duration-300 text-sm'
            href='/'
          >
            Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            className='bg-black/5 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm drop-shadow-sm hover:bg-white/50 transition-all duration-300 text-sm'
            href='/about'
          >
            About
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            className='bg-black/5 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm drop-shadow-sm hover:bg-white/50 transition-all duration-300 text-sm'
            href='/services'
          >
            Services
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            className='bg-black/5 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm drop-shadow-sm hover:bg-white/50 transition-all duration-300 text-sm'
            href='/ask-for-quote'
          >
            Ask for a quote
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className='flex items-center gap-4 text-xl md:text-2xl text-[#1d60b1]'
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href={'https://www.facebook.com/ceylonmaritime'}
            target='_blank'
            className='hover:text-[#1d60b1]/80 transition-all duration-300'
          >
            <FaFacebook />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href={'https://www.instagram.com/ceylonmaritime'}
            target='_blank'
            className='hover:text-[#1d60b1]/80 transition-all duration-300'
          >
            <FaInstagram />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href={'https://www.linkedin.com/company/ceylonmaritime'}
            target='_blank'
            className='hover:text-[#1d60b1]/80 transition-all duration-300'
          >
            <FaLinkedin />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className='text-sm md:text-base text-black/50 text-center px-4'
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
      >
        Copyright © CEYLON MARITIME - Powered by{' '}
        <Link href={'https://ayodyabanukafernando.com'}>AB</Link>
      </motion.div>
    </motion.div>
  );
};

export default Footer;

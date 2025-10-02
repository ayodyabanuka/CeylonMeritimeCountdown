'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      className='relative py-4 md:py-8 px-4 md:px-10 flex justify-between items-center z-50'
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Mobile Menu Button */}
      <motion.button
        className='md:hidden bg-white/30 p-2 rounded-full backdrop-blur-sm drop-shadow-sm'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </motion.button>

      {/* Desktop Navigation */}
      <motion.div
        className='hidden md:flex items-center gap-2'
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            className='bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm drop-shadow-sm hover:bg-white/50 transition-all duration-300 text-sm'
            href='/'
          >
            Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            className='bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm drop-shadow-sm hover:bg-white/50 transition-all duration-300 text-sm'
            href='/about'
          >
            About
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            className='bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm drop-shadow-sm hover:bg-white/50 transition-all duration-300 text-sm'
            href='/services'
          >
            Services
          </Link>
        </motion.div>
      </motion.div>

      {/* Logo */}
      <motion.div
        className='flex items-center gap-2'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0.68, -0.55, 0.265, 1.55],
        }}
      >
        <Image
          src='/logo.png'
          alt='logo'
          width={60}
          height={60}
          className='md:w-20 md:h-20'
        />
      </motion.div>

      {/* Desktop CTA Button */}
      <motion.div
        className='hidden md:flex items-center gap-2'
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            className='bg-[#1d60b1]/80 text-white px-4 py-2 rounded-full backdrop-blur-sm drop-shadow-sm hover:bg-[#1d60b1]/90 transition-all duration-300 text-sm'
            href='/ask-for-quote'
          >
            Ask for a quote
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile CTA Button */}
      <motion.div
        className='md:hidden'
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className='bg-[#1d60b1]/80 text-white px-3 py-2 rounded-full backdrop-blur-sm drop-shadow-sm hover:bg-[#1d60b1]/90 transition-all duration-300 text-xs'
          href='/ask-for-quote'
        >
          Quote
        </Link>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className='fixed inset-0 z-[200] md:hidden w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className='absolute top-0 right-0 h-full w-full bg-white/40 backdrop-blur-sm p-6 z-[100]'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.button
              className='absolute top-4 right-4 text-black'
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </motion.button>
            <motion.div
              className='flex flex-col gap-4 mt-12'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <Link
                  className='text-black hover:text-[#1d60b1] transition-colors text-lg font-medium'
                  href='/'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <Link
                  className='text-black hover:text-[#1d60b1] transition-colors text-lg font-medium'
                  href='/about'
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <Link
                  className='text-black hover:text-[#1d60b1] transition-colors text-lg font-medium'
                  href='/services'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className='bg-[#1d60b1] text-white px-4 py-2 rounded-full text-center mt-4'
                  href='/ask-for-quote'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ask for a quote
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;

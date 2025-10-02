'use client';
import ScrollVelocity from '../ScrollVelocity';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className='h-[70vh] md:h-[90vh] m-2 md:m-4 rounded-2xl md:rounded-4xl bg-slate-300 -mt-2 relative overflow-hidden'
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className='absolute inset-0 w-full h-full bg-black/20 rounded-2xl md:rounded-4xl flex items-center justify-center z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      ></motion.div>
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-4xl'
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <source
          src='https://drive.google.com/uc?export=download&id=1JoA7mxlU_fHxaySCbkZ7c9NeWvfyKQw9'
          type='video/mp4'
        />
      </motion.video>
      <motion.div
        className='absolute inset-0 w-full h-full flex items-end z-20 overflow-hidden'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      >
        <ScrollVelocity
          texts={['Leading Shipping And Port Agency']}
          velocity={60}
          className='font-instrument-sans text-7xl lg:text-[200px] text-white p-4 md:p-10 select-none'
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;

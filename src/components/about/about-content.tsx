'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutContent = () => {
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
      className='max-w-screen-xl mx-auto py-20 md:py-40 lg:py-60 px-4 md:px-8'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className='flex flex-col gap-8 md:gap-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16'>
          <motion.div
            className='text-black text-lg md:text-2xl lg:text-[32px]/8 font-medium font-instrument-sans flex flex-col items-start gap-4 md:gap-6'
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className='text-black text-base md:text-lg lg:text-3xl font-instrument-sans items-start sm:items-center justify-between gap-4 sm:gap-0'
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ceylon Maritime Agencies (PVT) Ltd, has set itself as one of the
              most renowned and fastest growing Shipping and Port Agency service
              provider in the maritime sector serving all shipping ports in Sri
              Lanka, with a group of highly experienced and competent staff. We
              ensure to maintain the highest level of professionalism and exceed
              the expectations of its clients at all times with the capacity of
              serving both locally and internationally.
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
                src='/about-text.jpg'
                alt='background'
                width={1000}
                height={1000}
                className='w-full h-full object-cover'
              />
            </div>
          </motion.div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 py-15 md:py-30 border-t border-b border-black/10'>
          <div className='text-black text-lg md:text-2xl lg:text-[32px]/8 font-medium font-instrument-sans flex items-start gap-4 sm:gap-0'>
            <div className='text-[#7d7d7d] text-base md:text-lg'>Mission</div>
          </div>
          <div className='text-black text-base md:text-lg lg:text-3xl font-medium font-instrument-sans items-start sm:items-center justify-between gap-4 sm:gap-0'>
            To be the preferred service provider in the Maritime sector in Sri
            Lanka for{' '}
            <span className='text-[#747474]'>
              &quot;Future Maritime Services&quot;
            </span>
          </div>
          <div className='text-black text-lg md:text-2xl lg:text-[32px]/8 font-medium font-instrument-sans flex items-start justify-start gap-4 sm:gap-0 lg:hidden'>
            <div className='text-[#7d7d7d] text-base md:text-lg'>Vision</div>
          </div>
          <ul className='text-black text-base md:text-lg lg:text-3xl font-medium font-instrument-sans items-start sm:items-center justify-between gap-3 md:gap-5 list-disc pl-5 flex flex-col'>
            <li>
              Always maintain a positive brand image that signifies innovative
              development to Maritime stakeholders.
            </li>
            <li>
              To provide maritime-related services focusing on continuous
              improvement with the technology and personalized attention, 24/7,
              365 days.
            </li>
          </ul>
          <div className='text-black text-lg md:text-2xl lg:text-[32px]/8 font-medium font-instrument-sans hidden lg:flex items-start justify-end gap-4 sm:gap-0'>
            <div className='text-[#7d7d7d] text-base md:text-lg '>Vision</div>
          </div>
        </div>
        <motion.div
          className='text-black text-lg md:text-2xl lg:text-[32px]/8 font-medium font-instrument-sans flex items-center justify-center gap-4 sm:gap-0'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <div className='text-[#000000] text-xl md:text-2xl lg:text-3xl font-bold text-center'>
            Members of there associations
          </div>
        </motion.div>
        <motion.div
          className='flex items-center justify-center gap-10 md:gap-20'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            viewport={{ once: true }}
          >
            <Image
              src='/slssa.jpg'
              alt='vision'
              width={150}
              height={150}
              className='object-cover w-24 h-24 md:w-32 md:h-32 lg:w-[200px] lg:h-[200px]'
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            viewport={{ once: true }}
          >
            <Image
              src='/issa.webp'
              alt='vision'
              width={150}
              height={150}
              className='object-cover w-24 h-24 md:w-32 md:h-32 lg:w-[200px] lg:h-[200px]'
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutContent;

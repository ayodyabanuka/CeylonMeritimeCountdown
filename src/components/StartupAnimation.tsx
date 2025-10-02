'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const StartupAnimation = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial state
    gsap.set([logoRef.current, textRef.current], {
      scale: 0,
      opacity: 0,
    });

    gsap.set(overlayRef.current, {
      opacity: 1,
    });

    // Animation sequence
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
    })
      .to(
        textRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.4'
      )
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 0.5,
      })
      .set(overlayRef.current, {
        display: 'none',
      });
  }, []);

  return (
    <div
      ref={overlayRef}
      className='fixed inset-0 bg-black z-[9999] flex items-center justify-center'
    >
      <div className='text-center'>
        <div ref={logoRef} className='mb-8'>
          <Image
            src='/Logo.png'
            alt='Ceylon Maritime'
            width={128}
            height={128}
            className='w-32 h-32 mx-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default StartupAnimation;

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ServicesContent = () => {
  return (
    <motion.div
      className='max-w-screen-xl mx-auto py-10 md:py-20 px-4 md:px-8'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className='grid grid-cols-1 lg:grid-cols-1 gap-8 md:gap-16 mb-15 md:mb-30'>
        <motion.div
          className='text-black text-lg md:text-2xl lg:text-[32px]/8 font-medium font-instrument-sans flex flex-col items-start gap-4 md:gap-6'
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
        </motion.div>
        <motion.div
          className='text-black text-2xl lg:text-6xl font-bold font-instrument-sans items-start sm:items-center justify-between gap-4 sm:gap-0'
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
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 py-15 md:py-30 border-t border-b border-black/10'>
        <div className='h-64 md:h-80 lg:h-110 overflow-hidden relative rounded-2xl md:rounded-4xl'>
          <div className='absolute inset-0 w-full h-[140%]'>
            <Image
              src='/services/1.png'
              alt='services'
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div id='shipping-agency'>
          <div className='text-[#1d60b1] text-lg md:text-xl lg:text-3xl font-bold font-instrument-sans items-start sm:items-center justify-between gap-4 sm:gap-0'>
            Shipping Agency Services
          </div>
          <div className='text-black text-sm md:text-base lg:text-xl font-medium font-instrument-sans items-start justify-between gap-4 sm:gap-0 list-disc pl-5 flex flex-col py-6 md:py-10'>
            <li>
              Handling of Cargo vessels (Containers, Break Bulk, LPG & Tankers
              Etc.){' '}
            </li>
            <li>Crew Changes and Emergency Medical Evacuation </li>
            <li>Cruise, Yacht and Foreign Naval Ships </li>
            <li>Dry Dock Facility Arrangements</li>
            <li>Repairs & Maintenance (Mechanical & Electrical) </li>
            <li>Repair & Maintenance of Navigational Equipment’s</li>
            <li>Cash To Master Delivery Service</li>
            <li>Delivery of Ships Spares</li>
            <li>Off landing of Ships Spares and Exports</li>
            <li>Accommodation & Transport services.</li>
          </div>
        </div>

        <div className='h-64 md:h-80 lg:h-110 overflow-hidden relative rounded-2xl md:rounded-4xl block lg:hidden'>
          <div className='absolute inset-0 w-full h-[140%]'>
            <Image
              src='/services/2.png'
              alt='services'
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div id='marine-services'>
          <div className='text-[#1d60b1] text-lg md:text-xl lg:text-3xl font-bold font-instrument-sans items-start sm:items-center justify-between gap-4 sm:gap-0'>
            Marine Services
          </div>
          <div className='text-black text-sm md:text-base lg:text-xl font-medium font-instrument-sans items-start justify-between gap-4 sm:gap-0 list-disc pl-5 flex flex-col py-6 md:py-10'>
            <li>Bunker Supply Arrangements & Services</li>
            <li>Supply of Lube Oil and other related Marine Oil</li>
            <li>Bunker Supply Related Surveyors</li>
            <li>Supply of Fresh Water</li>
            <li>Under Water Inspections, Hull Cleaning and related services</li>
            <li>Removal and Disposal of Ships Garbage & Sludge</li>
            <li>Tank Inspections and Issuance of Gas Free Certificates</li>
            <li>Tank Cleaning Services</li>
            <li>Tug and Launch Services</li>
          </div>
        </div>
        <div className='h-64 md:h-80 lg:h-110 overflow-hidden relative rounded-2xl md:rounded-4xl hidden lg:block'>
          <div className='absolute inset-0 w-full h-[140%]'>
            <Image
              src='/services/2.png'
              alt='services'
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className='h-64 md:h-80 lg:h-110 overflow-hidden relative rounded-2xl md:rounded-4xl'>
          <div className='absolute inset-0 w-full h-[140%]'>
            <Image
              src='/services/3.png'
              alt='services'
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div id='ship-chandelling'>
          <div className='text-[#1d60b1] text-lg md:text-xl lg:text-3xl font-bold font-instrument-sans items-start sm:items-center justify-between gap-4 sm:gap-0'>
            Ship Chandelling Services
          </div>
          <div className='text-black text-sm md:text-base lg:text-xl font-medium font-instrument-sans items-start justify-between gap-4 sm:gap-0 list-disc pl-5 flex flex-col py-6 md:py-10'>
            <li>Dry and Fresh Provisions</li>
            <li>Fresh, Frozen - Fruits & Vegetables</li>
            <li>Bonded services</li>
            <li>Stationery/Publications</li>
            <li>Cabin Stores / Toiletries</li>
            <li>Safety Equipment’s</li>
            <li>Gases / Welding equipment</li>
            <li>Navigation Equipment</li>
            <li>Marine charts & publications</li>
            <li>Deck & Engine</li>
            <li>Ropes & Ladders</li>
            <li>Anti Piracy Equipment’s</li>
          </div>
        </div>
        <div className='h-64 md:h-80 lg:h-110 overflow-hidden relative rounded-2xl md:rounded-4xl lg:hidden block'>
          <div className='absolute inset-0 w-full h-[140%]'>
            <Image
              src='/services/4.png'
              alt='services'
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div id='logistics-warehousing'>
          <div className='text-[#1d60b1] text-lg md:text-xl lg:text-3xl font-bold font-instrument-sans items-start sm:items-center justify-between gap-4 sm:gap-0'>
            Logistics & Warehousing Solutions
          </div>
          <div className='text-black text-sm md:text-base lg:text-xl font-medium font-instrument-sans items-start justify-between gap-4 sm:gap-0 list-disc pl-5 flex flex-col py-6 md:py-10'>
            <li>Container handling and storage</li>
            <li>Customs clearance and documentation</li>
            <li>Warehouse management and distribution</li>
            <li>Cargo consolidation and deconsolidation</li>
            <li>Supply chain optimization</li>
            <li>Inventory management systems</li>
            <li>Cross-docking services</li>
            <li>Last-mile delivery solutions</li>
          </div>
        </div>
        <div className='h-64 md:h-80 lg:h-110 overflow-hidden relative rounded-2xl md:rounded-4xl lg:block hidden'>
          <div className='absolute inset-0 w-full h-[140%]'>
            <Image
              src='/services/4.png'
              alt='services'
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      <div className='text-black text-sm md:text-base lg:text-lg font-medium font-instrument-sans lg:text-center items-start justify-between gap-4 sm:gap-0 py-6 md:py-10 px-4'>
        Ceylon Maritime Agencies (PVT) Ltd, can provide the above-mentioned Ship
        Agency Services, Marine Services, and Ship Chandling Services at the
        most competitive rates with a focus on looking into the interests of our
        clients, ensuring prompt and effective responses to their queries and
        needs through 24/7 e-mail communications and WhatsApp, with personalized
        attention and service for &quot;Future Maritime Services&quot;.
      </div>
    </motion.div>
  );
};

export default ServicesContent;

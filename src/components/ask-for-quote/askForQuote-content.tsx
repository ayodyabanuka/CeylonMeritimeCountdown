'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const AskForQuoteContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className='max-w-screen-xl mx-auto py-20 px-4 lg:px-0'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
        {/* Contact Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className='text-black text-2xl sm:text-3xl lg:text-[32px]/8 font-medium font-instrument-sans flex flex-col items-start gap-6 mb-8'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className='text-[#7d7d7d] text-base'>Get In Touch</div>
            <div className='text-black text-sm lg:text-4xl font-bold font-instrument-sans'>
              Request a Quote
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Full Name *
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg'
                placeholder='Enter your full name'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Email Address *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg'
                placeholder='Enter your email address'
              />
            </div>

            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Phone Number
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg'
                placeholder='Enter your phone number'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg resize-none'
                placeholder='Tell us about your requirements...'
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className='p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
                Thank you! Your quote request has been sent successfully.
                We&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className='p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
                Sorry, there was an error sending your message. Please try again
                or contact us directly.
              </div>
            )}

            <button
              type='submit'
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-colors duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#1d60b1] hover:bg-[#155a9e]'
              } text-white`}
            >
              {isSubmitting ? 'Sending...' : 'Send Quote Request'}
            </button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          className=''
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className='text-black text-2xl sm:text-3xl lg:text-[32px]/8 font-medium font-instrument-sans flex flex-col items-start gap-6 mb-8'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className='text-[#7d7d7d] text-base'>Contact Information</div>
            <div className='text-black text-sm lg:text-4xl font-bold font-instrument-sans'>
              Get in Touch
            </div>
          </motion.div>

          <div className='space-y-8'>
            {/* Location */}
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-[#1d60b1] rounded-lg flex items-center justify-center flex-shrink-0'>
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
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 '>
                  Location
                </h3>
                <p className='text-gray-600 text-base leading-relaxed'>
                  169/25, John Rodrigo Mw, Katubedda, Moratuwa, Sri Lanka.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-[#1d60b1] rounded-lg flex items-center justify-center flex-shrink-0'>
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
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 '>
                  Call Us
                </h3>
                <p className='text-gray-600 text-base'>
                  <a
                    href='tel:+94719857595'
                    className='hover:text-[#1d60b1] transition-colors'
                  >
                    +94 71 985 7595
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-[#1d60b1] rounded-lg flex items-center justify-center flex-shrink-0'>
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
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 '>
                  Email Us
                </h3>
                <p className='text-gray-600 text-base'>
                  <a
                    href='mailto:info@ceylonmaritime.com'
                    className='hover:text-[#1d60b1] transition-colors'
                  >
                    info@ceylonmaritime.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Google Maps */}
      <motion.div
        className='mt-16'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className='text-black text-2xl sm:text-3xl lg:text-[32px]/8 font-medium font-instrument-sans flex flex-col items-center gap-6 mb-8'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className='text-[#7d7d7d] text-base'>Find Us</div>
          <div className='text-black text-sm lg:text-4xl font-bold font-instrument-sans text-center'>
            Our Location
          </div>
        </motion.div>

        <motion.div
          className='w-full h-[450px] rounded-4xl overflow-hidden shadow-lg'
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7923.4968933846385!2d79.900025!3d6.800428!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDgnMDEuNSJOIDc5wrA1NCcwOS40IkU!5e0!3m2!1sen!2suk!4v1759153922983!5m2!1sen!2suk'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full h-full'
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AskForQuoteContent;

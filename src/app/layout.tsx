import type { Metadata } from 'next';
import { Big_Shoulders, Instrument_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import ScrollWrapper from '@/components/scroll-wrapper';
import StartupAnimation from '@/components/StartupAnimation';

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
});

const bigShoulders = Big_Shoulders({
  variable: '--font-big-shoulders',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ceylon Maritime',
  description: 'Ceylon Maritime',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='/Logo.png' type='image/x-icon' />
      </head>
      <body
        className={`${bigShoulders.variable} ${instrumentSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <StartupAnimation />
        <ScrollWrapper>
          <div className='bg-black py-2 md:py-3 hidden flex-col lg:flex-row items-center justify-between gap-4 md:gap-10 px-4 md:px-10 text-xs font-instrument-sans font-medium'>
            <div className='text-white text-center lg:text-left'>
              <span className='text-white/70'>Location:</span> 169/25, John
              Rodrigo Mw, Katubedda, Moratuwa, Sri Lanka
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4 md:gap-10'>
              <div className='text-white'>
                <span className='text-white/70'>Call Us:</span> +94 71 985 7595
              </div>
              <div className='text-white'>
                <span className='text-white/70'>Email:</span>{' '}
                info@ceylonmaritime.com
              </div>
            </div>
          </div>
          <div>
            <Header />
            <div className='-mt-20 md:-mt-35 lg:-mt-32'>{children}</div>
            <Footer />
          </div>
        </ScrollWrapper>
      </body>
    </html>
  );
}

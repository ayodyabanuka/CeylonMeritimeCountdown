import Head from 'next/head';
import { FaArrowRight } from 'react-icons/fa'

const Home: React.FC = () => {


  return (
    <div className='bg-[#F6FAFF] min-h-screen'>
      <Head>
        <title>Ceylon Maritime</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <meta name="description" content="Ceylon Maritime website" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className=' mx-auto font-inter'>
        {/* mainimage */}

        <div className='relative'>
          <div className='absolute'>
            <div className='z-1 flex px-48 justify-between p-5 items-center w-[1920px] text-inter'>
              <img src="/logo.png" width={60} alt="" />
              <div className='flex gap-10'>
                <a href="/" rel="noopener noreferrer">Home</a>
                <a href="/" rel="noopener noreferrer">About Us</a>
                <a href="/" rel="noopener noreferrer">Contact Us</a>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center px-48 bg-[#E8F2FF] '>

            <div className='flex flex-col gap-0'>
              <div className='font-inter text-3xl font-bold tracking-tighter'>Your Gateway to the</div>
              <div className='font-inter text-9xl font-extrabold tracking-tighter text-[#1D60B1]'>Maritime</div>
              <div className='font-inter text-9xl font-extrabold tracking-tighter text-[#1D60B1] -mt-5'>World</div>
              <div className='font-inter text-lg font-light tracking-tight'>Explore Shipping, Logistics, and Shipbuilding Solutions with Us.</div>
              <a href={'#'}><div className='flex items-center px-3 py-2 bg-[#9C1717] w-fit text-white gap-2 rounded-xl mt-5'>ContactUs <FaArrowRight /> </div></a>

            </div>

            <div>
              <img src="/ceylonMaritimeHome.png" width={900} alt="" />
            </div>
          </div>
        </div>
        {/* AboutUs */}
        <div className=' flex px-52 py-10 items-center justify-between'>
          <div className='w-1/3 flex flex-col gap-1'>
            <div className='text-xs font-inter font-bold text-[#1D60B1] tracking-tighter'>ABOUT US</div>
            <div className='text-4xl font-inter font-bold tracking-tighter'>We are the best Maritime company in Sri Lanka</div>
            <div className='text-md font-inter font-light tracking-tight' >Welcome to Ceylon Maritime. We are dedicated to providing comprehensive and reliable information about the maritime industry. Whether you're a shipping professional, a maritime enthusiast, or a business looking for maritime solutions, we have everything you need to navigate the waters of this dynamic industry.</div>
          </div>
          <div className=''>
            <img src="/image2.png" width={700} alt="" />
          </div>
        </div>
        {/* Services */}

        <div className='bg-[rgb(233,242,253)]'>
          <div className=' flex px-52 py-10 items-center justify-center'>
            <div className='w-1/3 flex flex-col gap-1 justify-center items-center'>
              <div className='text-xs font-inter font-bold text-[#1D60B1] tracking-tighter'>OUR SERVICES</div>
              <div className='text-4xl font-inter font-bold tracking-tighter text-center'>Managing your business</div>
              <div className='text-4xl font-inter font-bold tracking-tighter text-center -my-1'>with our best services</div>
            </div>
          </div>
          <div className='grid grid-cols-4 px-72 gap-4 py-10'>
            <div className='flex flex-col justify-between h-80 p-10 bg-white shadow-lg rounded-lg'></div>
            <div className='flex flex-col justify-between h-80 p-10 bg-white shadow-lg rounded-lg'></div>
            <div className='flex flex-col justify-between h-80 p-10 bg-white shadow-lg rounded-lg'></div>
            <div className='flex flex-col justify-between h-80 p-10 bg-white shadow-lg rounded-lg'></div>
            <div className='flex flex-col justify-between h-80 p-10 bg-white shadow-lg rounded-lg'></div>
            <div className='flex flex-col justify-between h-80 p-10 bg-white shadow-lg rounded-lg'></div>
            <div className='flex flex-col justify-between h-80 p-10 bg-white shadow-lg rounded-lg'></div>
            <div className='flex flex-col justify-between h-80 p-10 bg-white shadow-lg rounded-lg'></div>
          </div>
        </div>
        <div className='grid grid-cols-4 mx-48 font-inter p-5 items-center'>
          <div className='flex flex-col gap-3'>
            <img src="/logo.png" width={60} alt="" />
            <div className='text-4xl font-inter font-bold tracking-tighter'>Ceylon Maritime</div>
            <div className='text-md font-inter font-light tracking-tight' >Welcome to Ceylon Maritime. We are dedicated to providing comprehensive and reliable information about the maritime industry. Whether you're a shipping professional, a maritime enthusiast, or a business looking for maritime solutions, we have everything you need to navigate the waters of this dynamic industry.</div>
            <div className='text-md font-inter font-bold tracking-tight mt-5' >address</div>
            <div className='text-md font-inter font-bold tracking-tight' >Phone Number</div>

          </div>
          <div className='grid justify-start col-span-3 grid-cols-3 mx-12'>
            <div className='flex flex-col gap-5'>
              <div className='text-md font-inter font-bold tracking-tight'>Pages</div>
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='text-md font-inter font-bold tracking-tight'>About</div>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy policy</a>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='text-md font-inter font-bold tracking-tight'>help & Support</div>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center font-base my-3 text-gray-800 text-xs'>
        ©2023 AB | ALL RIGHTS RESERVED.
        </div>
      </div>

    </div>
  );
};

export default Home;

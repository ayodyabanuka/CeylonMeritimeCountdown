import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BsChevronExpand, BsX, BsDashLg, BsCode } from "react-icons/bs";
import Logo from "../public/Logo.png"

const Home: React.FC = () => {
  const targetDate = '2023-08-30'; // Change this to your desired target date

  const [timeLeft, setTimeLeft] = useState<string>('');
  const [day, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [mins, setMins] = useState('');
  const [sec, setSec] = useState('');



  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const timeRemaining = target - now;

      if (timeRemaining <= 0) {
        setTimeLeft('Countdown finished!');
        clearInterval(intervalId);
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        setDays(`${days}`);
        setMins(`${minutes}`);
        setHours(`${hours}`);
        setSec(`${seconds}`)

      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className='bg-cover bg-center bg-no-repeat h-screen w-screen' style={{ backgroundImage: 'url("/background.jpg")' }}>
      <Head>
        <title>Ceylon Maritime</title>
        <meta name="description" content="Ceylon Maritime website" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="h-screen w-screen flex justify-center items-center">
        <div className='xl:w-[700px] xl:h-[450px] lg:w-[550px] lg:h-[350px] md:w-[400px] md:h-[350px] w-[350px] h-[250px]  border  rounded-lg backdrop-blur-md bg-gray-800/40 flex flex-col'>
          <div className='flex border-b py-1 px-2 justify-between'>
            <div className='flex gap-1.5'>
              <BsX className='text-black text-xs p-[1px] font-extralight h-3 w-3 bg-red-400 rounded-full flex items-center justify-center' />
              <BsDashLg className='text-black text-xs h-3 w-3 p-[2px] bg-orange-400 rounded-full flex items-center justify-center' />
              <BsCode className='text-black text-xs h-3 w-3 p-[1px] rotate-45 text-bold bg-green-400 rounded-full flex items-center justify-center' />
            </div>
            <div className='font-bold tracking-tight text-white text-center text-xs'>Ceylon Maritime</div>
            <div className='font-bold tracking-tight text-transparent text-center text-xs'>Ceylonx</div>
          </div>
          <div className='flex items-center justify-center flex-col xl:my-20 lg:my-16 md:my-14 my-4 text-white'>
            <Image height={100} width={100} src={Logo} className='xl:w-32 lg:w-28 md:w-28 w-20 ' alt="logo" />
            <h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-3xl font-bold mb-4 mt-3 ">Coming Soon!</h1>
            <div className='flex gap-4'>
              <div className='flex items-end gap-2 justify-center'>
                <div className="xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-bold">{day}</div>
                <div className='xl:text-md lg:text-md md:text-sm text-xs'>Days</div>
              </div>
              <div className='flex items-end gap-2 justify-center'>
                <div className="xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-bold">{hours}</div>
                <div className='xl:text-md lg:text-md md:text-sm text-xs'>Hours</div>
              </div>
              <div className='flex items-end gap-2 justify-center'>
                <div className="xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-bold">{mins}</div>
                <div className='xl:text-md lg:text-md md:text-sm text-xs'>Minutes</div>
              </div>
              <div className='lg:flex hidden items-end gap-2 justify-center'>
                <div className="xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-bold">{sec}</div>
                <div className='xl:text-md lg:text-md md:text-sm text-xs'>Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // Target date in the format 'YYYY-MM-DD'
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>('');

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
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div>
      <p>Time left: {timeLeft}</p>
    </div>
  );
};

export default Countdown;

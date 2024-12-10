import React, { useState, useEffect } from "react";
import { FcAlarmClock } from "react-icons/fc";

const Timer = () => {
 
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

return (
    <div className=' flex items-center gap-x-2'>
    <span className="text-xl font-bold"> <FcAlarmClock className='text-secondary text-3xl inline' />  {formatTime(timeLeft)}</span>
    </div>
  );
};

export default Timer;

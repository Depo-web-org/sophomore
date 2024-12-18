import React, { useState, useEffect } from "react";
import { FcAlarmClock } from "react-icons/fc";
import './style.css'
const Timer = ({ ExamFinished , isExamFinished }) => {
  const [alert, setAlert] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); 

  useEffect(() => {
    if (timeLeft <= 0) {
      ExamFinished(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 60) setAlert(true);
        return prevTime - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer)
    };
  }, [timeLeft, ExamFinished]);

  useEffect(() => {
    if (timeLeft === 0) {
      setAlert(false);
      ExamFinished(true); 
    } else if (timeLeft <= 60) {
      setAlert(true);
    }
  }, [timeLeft, ExamFinished]);
  
  const formatTime = (time) => {
   if(!isExamFinished){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
   } else{ 
    return `${String(0).padStart(2, "0")}:${String(0).padStart(2, "0")}`;
   }
   
  };
  
  return (
    <div className="flex items-center gap-x-2">
      <span
        className={`text-xl font-bold   `}
      >
       
        <FcAlarmClock className={`text-3xl inline ${alert&& !isExamFinished  ?"wobbleHorBottom" : '' } `} /> 
        <span className={` ${
          alert && ! isExamFinished  ? "text-red-500 border-b border-red-500" : "text-white"
        }`}>
         {formatTime(timeLeft)}
        </span>
      </span>
    </div>
  );
};

export default Timer;

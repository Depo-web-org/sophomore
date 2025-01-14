import { useEffect, useState } from "react";
import style from "../components/LearningHero.module.css";
import { useTranslation } from "react-i18next";


const TimeCard =() => {
  const targetDate = new Date('2025-11-29T00:00:00');

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
      <div className="bg-dark lg:w-52 lg:h-96 text-center p-8 rounded-3xl flex flex-col justify-between">
        <div>
          <p className="font-bold text-base lg:text-xl"> {t("courses.availability")}</p>
          <div className="bg-zinc-300 rounded-3xl overflow-hidden mt-5 m-5 lg:m-9">
            <div className="bg-red-500 p-1">
              <p className="font-bold text-base lg:text-xl">Nov</p>
            </div>
            <p className="text-zinc-800 text-2xl lg:text-3xl font-extrabold py-2">29</p>
          </div>
          <p className="text-white text-base md:text-xl lg:text-2xl font-semibold">2025</p>
        </div>

        <div>
          <p className="text-white text-sm lg:text-base font-semibold  rounded-full text-nowrap">
            {timeLeft.days} <span className="text-sm text-primary">D</span>  {timeLeft.hours} <span className="text-sm text-primary">H</span> {timeLeft.minutes} <span className="text-sm text-primary">M</span>  {timeLeft.seconds}<span className="text-sm text-secondary">S</span> 
          </p>
        </div>

      </div>
    </div>
  );
};


export default function LearningHero() {
  const { t } = useTranslation(); 

  return (
    <section
      className={`text-white relative min-h-[720px] bg ${style.heroBg}  heroBg flex flex-col items-center justify-center`}
    >
      <div className="container w-full md:w-custom-md xl:w-custom-xl mx-auto py-32 grid grid-cols-12 gap-y-3 relative z-10">
        {/* Right */}
        <div className="col-span-12 lg:col-span-7 flex items-center">
          <div>
            <h2 className="text-white text-3xl lg:text-4xl xl:text-6xl font-extrabold text-transparent slide-in-top my-4 text-center lg:text-start">
              {t("my_learning.title")}
            </h2>

            <p className="text-sm lg:text-xl font-normal slide-in-top-slow pb-2 lg:pb-0 text-center lg:text-start leading-7">
              {t("my_learning.description")}
            </p>
          </div>
        </div>

        {/* Left */}
        <TimeCard />
      </div>
      <div className="bg-[#0A142FA6] h-full w-full absolute z-0 inset-0"></div>
    </section>
  );
}
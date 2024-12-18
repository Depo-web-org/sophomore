import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { HiChevronDoubleUp } from "react-icons/hi";

const ButtomTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div  onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }} className="bg-white size-12 fixed bottom-10 right-10 z-40 flex justify-center items-center rounded-xl shadow-xl cursor-pointer">
        <FaLocationArrow  className="text-primary size-7  -rotate-45 mt-1"
        
      />
      </div>
      )}
    </>
  );
};

export default ButtomTop;

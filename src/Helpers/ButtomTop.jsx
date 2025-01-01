import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { VscFoldUp } from "react-icons/vsc";
 

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
        }}
       
        className="  fixed bottom-10 right-10 z-50 flex justify-center items-center shadow-2xl  shadow-black cursor-pointer bg-white border border-gray-200 p-2 rounded-2xl">
        
        <FaLocationArrow    className="text-primary -rotate-45 text-lg lg:size-8 font-bold" />
      </div>
      )}
    </>
  );
};

export default ButtomTop;

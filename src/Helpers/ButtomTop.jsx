import { useEffect, useState } from "react";
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
        }} className="  fixed bottom-10 right-10 z-50 flex justify-center items-center rounded-xl shadow-xl cursor-pointer">
        <VscFoldUp  className="text-blue-600 size-7 font-bold mt-1"
        
      />
      </div>
      )}
    </>
  );
};

export default ButtomTop;

import { useEffect, useState } from "react";
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
        <HiChevronDoubleUp
          className="text-blue-500 size-7 fixed bottom-10 right-10 z-40"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      )}
    </>
  );
};

export default ButtomTop;

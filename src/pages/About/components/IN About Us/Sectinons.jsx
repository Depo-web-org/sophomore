import { useEffect } from "react";
import Aos from "aos";
 
export default function Sectinons() {

  useEffect(() => {Aos.init({duration:2000})}, []);
 
  return (
    <section >
      {/* item 1*/}
      <div className="relative overflow-hidden ">
        <img
          className="w-full min-h-96 object-cover  "
          src="/public/About Us/header1.svg"
          alt="img header1"
        />
        <div data-aos="fade-down" className="  absolute inset-0 pt-28 lg:pt-[15%] px-[3%] lg:px-[24%] text-center text-white font-bold ">
          <span className="text-3xl lg:text-5xl font-bold ">
            About Us
          </span>
          <p className="text-sm lg:text-lg pt-5 lg:pt-10 ">
            At
            <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent pl-1">
              Sophomore
            </span>
            , we believe that education is the key to unlocking potential and
            shaping the future. Our platform is designed to provide students
            with access to high-quality, flexible learning experiences tailored
            to their unique needs and goals.
          </p>
        </div>
      </div>
      {/* item 2*/}
      <div className="relative overflow-hidden">
        <img
          className="w-full min-h-96 object-cover  "
          src="/public/About Us/header2.svg"
          alt="img header2"
        />

        <div  data-aos="fade-right" className=" w-[85%] sm:w-[45%] absolute inset-0 pt-[20%] sm:pt-[10%] pl-[5%] text-left text-white font-medium">
          <span className="text-3xl lg:text-5xl text-[#536CB3] font-bold">
            Mission
          </span>
          <p className="text-sm sm:text-lg pt-3 text-gray-500">
            To be the leading educational platform that empowers learners
            worldwide by providing innovative, accessible, and personalized
            learning experiences, shaping a future where knowledge knows no
            boundaries.
          </p>
        </div>

        </div>  
      {/* item 3 */}
      <div className="relative overflow-hidden">
        <img
          className="w-full min-h-96 object-cover "
          src="/public/About Us/header3.svg"
          alt="img header3"
        />

        <div data-aos="fade-left" className="w-[80%] sm:w-[45%] absolute inset-y-0 right-0 mt-[20%] sm:mt-[10%] pr-[5%]  text-white font-medium ">
          <span className="text-3xl lg:text-5xl text-red-500 font-bold">
            Vision
          </span>
          <p className="text-sm sm:text-lg pt-3">
            To be the leading educational platform that empowers learners
            worldwide by providing innovative, accessible, and personalized
            learning experiences, shaping a future where knowledge knows no
            boundaries.
          </p>
        </div>
      </div>
      {/* item 4 */}
      <div className="relative overflow-hidden">
        <img
          className="w-full min-h-96 object-cover"
          src="/public/About Us/header4.svg"
          alt="img header4"
        />

        <div data-aos="fade-right" className=" w-full lg:w-[45%] absolute inset-0 pt-[23%] sm:pt-[10%] pl-[5%] text-left font-medium  ">
          <span className="text-3xl lg:text-5xl ld text-[#536CB3] font-bold">
            Core Values
          </span>
          <p className="text-sm sm:text-lg pt-3 text-gray-500">
            1. Excellence <br />
            <span className="pl-8 block">2. Innovation</span>
            <span className="pl-14 block">3. Integrity</span>
            <span className="pl-20 block">4. Accessibility</span>
            <span className="pl-28 block">5. Collaboration</span>
          </p>
        </div> 

      
      </div>
      {/* end */}
    </section>
  );
}

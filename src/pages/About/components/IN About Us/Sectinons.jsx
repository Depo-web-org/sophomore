 
export default function Sectinons() {
  return (
    <section>
      {/* item 1*/}
      <div className="relative">
        <img
          className="w-full min-h-96 object-cover "
          src="/public/About Us/header1.svg"
          alt="img header1"
        />
        <div className="absolute inset-0 pt-[25%] md:pt-[15%] px-[3%] lg:px-[24%] text-center text-white font-bold ">
          <span className="text-3xl lg:text-5xl font-bold slide-in-top-slow">
            About Us
          </span>
          <p className="text-lg pt-3 lg:pt-10 slide-in-top-slow ">
            At
            <span className=" bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent pl-1">
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
      <div className="relative">
        <img
          className="w-full min-h-96 object-cover  "
          src="/public/About Us/header2.svg"
          alt="img header2"
        />

        <div className="w-[85%] sm:w-[45%] absolute inset-0 pt-[10%] lg:pt-[10%] pl-[5%] text-left text-white font-medium Vision-slide-in-left-slow">
          <span className="text-3xl lg:text-5xl text-[#536CB3] font-bold">
            Mission
          </span>
          <p className="text-base md:text-lg pt-2 lg:pt-5 text-gray-500">
            To be the leading educational platform that empowers learners
            worldwide by providing innovative, accessible, and personalized
            learning experiences, shaping a future where knowledge knows no
            boundaries.
          </p>
        </div>
      </div>
      {/* item 3 */}
      <div className="relative ">
        <img
          className="w-full min-h-96 object-cover "
          src="/public/About Us/header3.svg"
          alt="img header3"
        />

        <div className="w-[85%] sm:w-[45%] absolute inset-y-0 right-0 mt-[15%] md:mt-[10%] pr-[5%]  text-white font-medium Mission-slide-in-right-slow ">
          <span className="text-3xl lg:text-5xl text-red-500 font-bold">
            Vision
          </span>
          <p className="text-base md:text-lg pt-2 lg:pt-5">
            To be the leading educational platform that empowers learners
            worldwide by providing innovative, accessible, and personalized
            learning experiences, shaping a future where knowledge knows no
            boundaries.
          </p>
        </div>
      </div>
      {/* item 4 */}
      <div className="relative">
        <img
          className="w-full min-h-96 object-cover"
          src="/public/About Us/header4.svg"
          alt="img header4"
        />
        <div className="w-full lg:w-[45%] absolute inset-0 pt-[20%] sm:pt-[10%] pl-[5%] text-left font-medium Vision-slide-in-left-slow">
          <span className="text-3xl lg:text-5xl ld text-[#536CB3] font-bold">
            Core Values
          </span>
          <p className="text-base md:text-lg p-5 lg:pt-5 text-gray-500">
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

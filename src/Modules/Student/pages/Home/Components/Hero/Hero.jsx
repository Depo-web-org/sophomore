import { Link } from 'react-router-dom'
import './style.css'
const Hero = () => {
  return (
    <section className="hero-Background text-white relative  lg:min-h-[520px] xl:h-screen  px-2 lg:px-[124px]"> 
    <div className="mx-auto max-w-screen-xl  py-32 lg:flex lg:items-center  h-full relative z-10 ">
    <div className="mx-auto  text-center   ">
      <h1
        className="text-white text-3xl lg:text-4xl xl:text-6xl font-extrabold text-transparent slide-in-top "
      >
            “Your Path to Knowledge Starts Here”

      </h1>

      <p className="mx-auto sm:text-xl/relaxed font-semibold slide-in-top-slow pb-8 lg:pb-0">
      Learn. Grow. Succeed. Discover courses tailored for your success.
      </p>

      <div className="lg:mt-8 xl:mt-4 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded bg-white mx-2  px-12 py-3 text-sm font-semibold
         text-primary hover:bg-opacity-70 hover:scale-95 duration-700 sm:w-auto"
          to="about"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
   <div className="bg-black bg-opacity-[0.37] h-full w-full absolute z-0 inset-0"></div>
</section>

  )
}

export default Hero

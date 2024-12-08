import style from '../components/LearningHero.module.css'
export default function LearningHero() {
  return (
    <section
      className={`text-white relative min-h-[720px] bg  ${style.heroBg} flex flex-col items-center justify-center`}
  
    > 


<div className="   w-full md:w-custom-md xl:w-custom-xl mx-auto py-32 grid grid-cols-12   relative z-10   ">
  {/* Right  */}
    <div className="col-span-12 lg:col-span-7 flex items-center  ">
    <div className="  text-center   ">
      <h2
        className="text-white text-3xl lg:text-4xl xl:text-6xl font-extrabold text-transparent slide-in-top my-4 text-start "
      >
           Continue your learning Journey

      </h2>

      <p className=" sm:text-xl/relaxed font-normal slide-in-top-slow pb-2 lg:pb-0  text-start leading-7">
      Access all the courses you’ve purchased and continue learning at your own pace.
      </p>




    </div>
    </div>



  {/* Left  */}

    <div className="col-span-12 lg:col-span-5 flex justify-end  ">
      <div className='bg-dark w-52 h-96 text-center p-8 rounded-3xl flex flex-col justify-between '>
       <div>
       <p className='font-bold text-xl ' >
          Available Until
        </p>
        <div className='bg-zinc-300 rounded-3xl  overflow-hidden mt-5  m-9'>
        <div className='bg-red-500 p-1   '>
        <p className='font-bold text-xl ' >
         Nov
        </p>
        </div>
        <p className='text-zinc-800 text-3xl font-extrabold py-2'>
          29  
        </p>


        </div>
        <p className='text-white text-2xl font-semibold '>
        2025
        </p>
       </div>



       <div>
        <p className='text-white font-semibold'>
          328 days left
        </p>
       </div>

      </div>
    </div>

    
  </div>
   <div className="bg-[#0A142FA6] h-full w-full absolute z-0 inset-0"></div>
    </section>
  );
}

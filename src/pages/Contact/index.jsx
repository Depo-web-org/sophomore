import FormContact from './Components/FormContact'
import './style.css'
const Contact = () => {
  return (
    <>
    <section >

{/* Part  One */}
   <div className="contact-Background text-white relative  lg:max-h-[650px] 2xl:max-h-[676px]" > 
    <div className=" pt-28 pb-10  lg:py-32  relative z-10 flex flex-col lg:flex-row container w-full md:w-custom-md xl:w-custom-xl mx-auto  gap-5 ">
    <div className='flex-1  w-full  '>
      <h5
        className="text-white text-3xl lg:text-4xl xl:text-5xl font-extrabold text-transparent text-start "
      >
           Contact US
      </h5>
    <p className='mt-2 lg:mt-4 font-medium'>
       {`Have questions or need assistance? We're here to help! Reach out to us through any of the following channels, and our team will respond as soon as possible.`} 
    </p>
  </div>

<div className='bg-slate-900 flex-grow rounded-2xl  lg:w-1/5  lg:mt-16   '>

<FormContact/>




</div>
    </div>
   <div className="bg-dark bg-opacity-65 h-full w-full absolute z-0 inset-0"></div>
</div>



{/* Part Two */}

<div className='bg-primary lg:min-h-[10vh] xl:min-h-[70vh]   w-full items-center xl:items-start   flex '>
<div className=' py-10 lg:py-32   flex container w-full h-full md:w-custom-md xl:w-custom-xl mx-auto gap-5 flex-col'>
      <h5
        className="  text-white text-2xl lg:text-4xl xl:text-5xl font-extrabold text-transparent  text-start  xl:w-[35%] 2xl:w-[40%]"
      >
         Get in touch with us
      </h5>
    <p className='-mt-4 text-white font-medium   text-sm lg:text-base '>
       
    Have an inquiry or feedback to us ? <br />
    fill out the form to contact our team 
    </p>
  </div>
</div>
    </section>

    
    
    
    
    </>
  )
}

export default Contact

import { Link } from 'react-router-dom'
import WishCartTitle from '../../../../../Components/Common/WishCartTitle/WishCartTitle'
const EmptyCart = () => {
  return (
    <>
     <section className="container w-full md:w-custom-md xl:w-custom-xl mx-auto 3 min-h-[calc(100vh-128px)] h">
        <div className="pt-32 relative ">
            <WishCartTitle name={'Your Cart'} items={' 🙁'}/>

        </div>

      <div className=' flex items-center justify-between flex-col lg:flex-row mt-10 gap-y-5  lg:mt-20' >
                <div className='flex items-center justify-center   flex-1 flex-col  gap-y-2 lg:gap-y-5'>
                    <p className="text-white  text-2xl lg:text-4xl xl:text-6xl font-semibold   ">
                        Your Cart Is Empty
                    </p>
                    
                    <button
          type="submit"
          className="bg-primary w-4/5 lg:w-1/2 text-sm lg:text-base rounded-[5px] text-white px-8 py-4 font-bold transition-colors ease-out duration-300 hover:bg-primary-hover"
        >
            <Link to='/'>
                  Start Shopping
            </Link>
        </button>
                    <div >
                     </div>
                </div>
                <div className='xl:w-2/5  '>

            <img src='/empty.svg' alt="" className='w-full '/>
                </div>
            </div>
            </section>
    </>
  )
}

export default EmptyCart
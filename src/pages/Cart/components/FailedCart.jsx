import TitlePage from "../../../Components/Common/TitlePage/Titlepage"
import CourseCard from "./CourseCard/CourseCard"
import OrderSummary from "./OrderDetails/OrderSummary"

const FailedCart = ({info}) => {
  return (
    <>
     <section className="min-h-screen ">

<div className=" pt-32 relative container w-full md:w-custom-md xl:w-custom-xl mx-auto   ">
    <TitlePage name={'Your Cart'} items={info?.numberOfItems}/>

</div>
<div className='w-full min-h-96 lg:pt-9   mr-auto  xl:w-[90%]   '>
  <div className='grid grid-cols-12  xl:gap-16  '>
    <div className=" col-span-12 lg:col-span-6 xl:col-span-7 ">


{/* CourseCard  */}
  {info?.cartItems?.map(course=> <CourseCard key={course.subject+course.price}  course={course}/>)}
    </div>
{/* Order Summary  */}
      <OrderSummary       
      style={'col-span-12 lg:col-span-6  xl:col-span-5 bg-dark rounded-xl shadow-[4px_4px_0px_0px_#536CB3] container w-full md:w-custom-md xl:w-full"'}
      cartItems={info?.cartItems}
      cartInfo={info?.cartItems}
      pricesInfo={info}
      onPay={() => console.log("Pay clicked!")}
      onApply={() => console.log("Apply clicked!")}
      />
  </div>
</div>

</section>
    
    
    
    
    </>
  )
}

export default FailedCart
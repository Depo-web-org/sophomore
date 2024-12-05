import TitlePage from "../../../Components/Common/TitlePage/Titlepage"
import CourseCard from "./CourseCard/CourseCard"
import OrderSummary from "./OrderDetails/OrderSummary"

const FailedCart = ({info}) => {
  return (
    <>
     <section className="min-h-screen ">

<div className="pt-32 relative container w-full md:w-custom-md xl:w-custom-xl mx-auto   ">
    <TitlePage name={'Your Cart'} items={info.numberOfItems}/>

</div>
<div className='w-full min-h-96 pt-9   mr-auto  xl:w-[90%]   '>
  <div className='grid grid-cols-12  xl:gap-16  '>
    <div className="col-span-6 xl:col-span-7 ">


{/* CourseCard  */}
  {info.cartItems?.map(course=> <CourseCard key={course.subject+course.price}  course={course}/>)}
    </div>
{/* Order Summary  */}
<OrderSummary       
cartItems={info.cartItems}
cartInfo={info.cartItems}
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
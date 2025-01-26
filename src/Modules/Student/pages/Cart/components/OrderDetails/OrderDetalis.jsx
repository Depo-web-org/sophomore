import { v4 as uuidv4 } from 'uuid';
import { useCheckoutCartMutation } from '../../../../../../Redux/data/postDataApiSlice';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../../../../Redux/cart/cartSlice';
import { toast } from 'react-toastify';

export const OrderDetalis = ({ cartItems }) => {
  const dispatch=useDispatch()

  console.log(cartItems)
  
  const [checkoutCart, isLoading, isError]=   useCheckoutCartMutation();
  const totalPrices = cartItems
    ?.map((item) => +item.price)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(totalPrices);

 
  const items = cartItems.map((item) => {
    if (item.type === 'course') {
      return {
        course: item.id,
        price: item.price,
      };
    }
    if (item.type === 'lesson') {
      return {
        content: item.id,
        price: item.price,
      };
    }
    return null; 
  });

  const handleCheckout = async () => {
    try {
      const dataToSend = {
        total: totalPrices,
        identifier:uuidv4(),
        items,
      };
  
      const response = await checkoutCart(dataToSend).unwrap();
      console.log(dataToSend);
  
      if (response.code === 0) {
        toast.success("Your order has been placed successfully! Thank you for shopping with us.");
        dispatch(clearCart())
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };
  
  

  
  console.log(items)
  return(
    <div>
      <p className="text-white font-semibold text-3xl">Order Summary</p>
      <div className="py-2">
        {cartItems?.map((course) => (
          <span key={course.id + course.subjectName} className="block text-gray-300 text-xs text-start uppercase">
            <span className='text-secondary text-base'>{course.subjectName} </span>({course.enrolledLessons})
            
          </span>
        ))}
      </div>
      <div className="w-full my-5 flex flex-col gap-y-2">
      {/* Subtotal */}
      <div className="flex justify-between items-center text-white font-semibold">
        <p className="text-lg">Subtotal</p>
        <span>{totalPrices} EGP</span>
      </div>
      {/* Discount */}
      <div className="flex justify-between items-center text-white font-semibold">
        <p className="text-lg">Discount</p>
        <span>0 EGP</span>
      </div>
      {/* Total */}
      <div className="flex justify-between items-center text-white font-semibold">
        <p className="text-lg">Total</p>
        <span>{totalPrices} EGP</span>
      </div>
      <button
      onClick={handleCheckout}
       className="buttonHover text-white rounded-md p-2 xl:p-3 text-center font-semibold mt-3">
        Checkout
      </button>
    </div>
    </div>
  )
};
  
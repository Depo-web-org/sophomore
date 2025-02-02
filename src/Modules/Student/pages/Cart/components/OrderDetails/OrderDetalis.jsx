// import { v4 as uuidv4 } from 'uuid';
// import { useCheckoutCartMutation } from '../../../../../../Redux/data/postDataApiSlice';
// import { useDispatch } from 'react-redux';
// import { clearCart } from '../../../../../../Redux/cart/cartSlice';
// import { toast } from 'react-toastify';
// import { ImSpinner9 } from 'react-icons/im';
// import { useGetStudentCoursesQuery } from '../../../../../../Redux/data/getDataApiSlice';
// import { useTranslation } from 'react-i18next';

// export const OrderDetalis = ({ cartItems }) => {
//   const {i18n}=useTranslation()

//     const {refetch}= useGetStudentCoursesQuery()
  
//   const dispatch=useDispatch()

  
//   const [checkoutCart, {isLoading, isError}]=   useCheckoutCartMutation();
//   const totalPrices = cartItems
//     ?.map((item) => +item.price)
//     .reduce((acc, curr) => acc + curr, 0);


 
//   const items = cartItems.map((item) => {
//     if (item.type === 'course') {
//       return {
//         course: item.id,
//         price: item.price,
//       };
//     }
//     if (item.type === 'lesson') {
//       return {
//         content: item.id,
//         price: item.price,
//       };
//     }
//     return null; 
//   });

//   const handleCheckout = async () => {
//     try {
//       const dataToSend = {
//         total: totalPrices,
//         identifier:uuidv4(),
//         items,
//       };
  
//       const response = await checkoutCart(dataToSend).unwrap();
  
//       if (response.code === 0) {
//         toast.success("Your order has been placed successfully! Thank you for shopping with us.");
//         dispatch(clearCart())
//         refetch();
//       }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//     }
//   };
  
  
//   return(
//     <div>
//       <p className="text-white font-semibold text-3xl">Order Summary</p>
//       <div className="py-2">
//         {cartItems?.map((course) => (
//           <span key={course.id + course.subjectName} className="block text-gray-300 text-xs text-start uppercase">
//             <span className='text-secondary text-base'>{course.subjectName} </span>({course.enrolledLessons})
            
//           </span>
//         ))}
//       </div>
//       <div className="w-full my-5 flex flex-col gap-y-2">
//       {/* Subtotal */}
//       <div className="flex justify-between items-center text-white font-semibold">
//         <p className="text-lg">Subtotal</p>
//         <span>{totalPrices} EGP</span>
//       </div>
//       {/* Discount */}
//       <div className="flex justify-between items-center text-white font-semibold">
//         <p className="text-lg">Discount</p>
//         <span>0 EGP</span>
//       </div>
//       {/* Total */}
//       <div className="flex justify-between items-center text-white font-semibold">
//         <p className="text-lg">Total</p>
//         <span>{totalPrices} EGP</span>
//       </div>
//       <button
//       onClick={handleCheckout}
//        className="buttonHover flex items-center justify-center text-white rounded-md p-2 xl:p-3 text-center font-semibold mt-3">
//        {isLoading?<ImSpinner9 className="animate-spin text-3xl text-secondary" />:"Checkout"}
//       </button>
//     </div>
//     </div>
//   )
// };
  
import { v4 as uuidv4 } from 'uuid';
import { useCheckoutCartMutation } from '../../../../../../Redux/data/postDataApiSlice';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../../../../Redux/cart/cartSlice';
import { toast } from 'react-toastify';
import { ImSpinner9 } from 'react-icons/im';
import { useGetStudentCoursesQuery } from '../../../../../../Redux/data/getDataApiSlice';
import { useTranslation } from 'react-i18next';

export const OrderDetalis = ({ cartItems }) => {
  const { t, i18n } = useTranslation();
  const { refetch } = useGetStudentCoursesQuery();
  const dispatch = useDispatch();
  const [checkoutCart, { isLoading, isError }] = useCheckoutCartMutation();

  const totalPrices = cartItems
    ?.map((item) => +item.price)
    .reduce((acc, curr) => acc + curr, 0);

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
        identifier: uuidv4(),
        items,
      };

      const response = await checkoutCart(dataToSend).unwrap();

      if (response.code === 0) {
        toast.success(t('order.successMessage'));  
        dispatch(clearCart());
        refetch();
      }else if( response.data ==='Courses for different teachers are not allowed in the same order' && response.code === 1){
        toast.error(`${i18n.language==='ar'? ' العمليتن مختلفين ﻻ يمكنك شراء في نفس العمليه ':'Courses for different teachers are not allowed in the same order'}`);

      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div>
      <p className="text-white font-semibold text-3xl">{t('order.summaryTitle')}</p>
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
          <p className="text-lg">{t('order.subtotal')}</p>
          <span>{totalPrices} EGP</span>
        </div>
        {/* Discount */}
        <div className="flex justify-between items-center text-white font-semibold">
          <p className="text-lg">{t('order.discount')}</p>
          <span>0 EGP</span>
        </div>
        {/* Total */}
        <div className="flex justify-between items-center text-white font-semibold">
          <p className="text-lg">{t('order.total')}</p>
          <span>{totalPrices} EGP</span>
        </div>
        <button
          onClick={handleCheckout}
          className="buttonHover flex items-center justify-center text-white rounded-md p-2 xl:p-3 text-center font-semibold mt-3"
        >
          {isLoading ? <ImSpinner9 className="animate-spin text-3xl text-secondary" /> : t('order.checkoutButton')}
        </button>
      </div>
    </div>
  );
};

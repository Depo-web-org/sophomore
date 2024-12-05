/* eslint-disable no-unused-vars */
import TitlePage from '../../Components/Common/TitlePage/Titlepage'
import { cartInfo } from './cartInfo'
import CourseCard from './components/CourseCard/CourseCard'
import EmptyCart from './components/EmptyCart'
import FailedCart from './components/FailedCart'
import OrderSummary from './components/OrderDetails/OrderSummary'

const Cart = () => {
  const {numberOfItems,cartItems}=cartInfo
  return (
    <>
    
        {
          numberOfItems ===0 &&  <EmptyCart/>
        }
        <FailedCart info={cartInfo}/>
         
        </>
  )
}

export default Cart 
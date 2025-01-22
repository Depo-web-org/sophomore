/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import useFetch from '../../../../Hooks/UseFetch';
import EmptyCart from './components/EmptyCart'
import FullCart from './components/fullCart'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
        { cartItems?.length ===0 ? <EmptyCart/> :   <FullCart /> }
        {/* <EmptyCart/> */}
        </>
  )
}

export default Cart 
/* eslint-disable no-unused-vars */
import useFetch from '../../../../Hooks/UseFetch';
import EmptyCart from './components/EmptyCart'
import FullCart from './components/fullCart'

const Cart = () => {
  const { data, error, loading } = useFetch(
    "https://os1907.github.io/Schools/CartInfo/cartInfo.json"
  ); 
  return (
    <>
        { data?.numberOfItems ===0 ? <EmptyCart/> :   <FullCart info={data}/> }
        {/* <EmptyCart/> */}
        </>
  )
}

export default Cart 
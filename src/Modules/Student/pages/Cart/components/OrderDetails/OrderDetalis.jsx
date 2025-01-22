export const OrderDetalis = ({ cartItems }) => {
  console.log(cartItems)
  const totalPrices = cartItems
    ?.map((item) => item.price)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(totalPrices);  console.log(totalPrices)
  return(
    <div>
      <p className="text-white font-semibold text-3xl">Order Summary</p>
      <div className="py-2">
        {cartItems?.map((course) => (
          <span key={course.id + course.subjectName} className="block text-white text-start uppercase">
            {course.subjectName}
            
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
      <button className="buttonHover text-white rounded-md p-2 xl:p-3 text-center font-semibold mt-3">
        Checkout
      </button>
    </div>
    </div>
  )
};
  
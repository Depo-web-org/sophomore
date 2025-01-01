export const PriceSummary = ({ cartInfo }) => {
 return <>
    <div className="w-4/5 my-5 flex flex-col gap-y-2">
      {/* Subtotal */}
      <div className="flex justify-between items-center text-white font-semibold">
        <p className="text-lg">Subtotal</p>
        <span>{cartInfo?.subtotal} EGP</span>
      </div>
      {/* Discount */}
      <div className="flex justify-between items-center text-white font-semibold">
        <p className="text-lg">Discount</p>
        <span>{cartInfo?.Discount} EGP</span>
      </div>
      {/* Total */}
      <div className="flex justify-between items-center text-white font-semibold">
        <p className="text-lg">Total</p>
        <span>{cartInfo?.Total} EGP</span>
      </div>
      <button className="buttonHover text-white rounded-md p-2 xl:p-3 text-center font-semibold mt-3">
        Checkout
      </button>
    </div>
  
</>
}
  
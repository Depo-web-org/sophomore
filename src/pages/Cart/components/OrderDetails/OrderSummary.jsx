import { DiscountCode } from "./DiscountCode";
import { OrderDetalis } from "./OrderDetalis";
import { PaymentMethod } from "./PaymentMethod";
import { PriceSummary } from "./PriceSummary";

 const OrderSummary = ({ cartItems, cartInfo, onPay, onApply }) => {
  return (
    <div className="col-span-6 xl:col-span-5 bg-dark rounded-xl shadow-[4px_4px_0px_0px_#536CB3] container w-full md:w-custom-md xl:w-full">
      {/* Order Details */}
      <div className="flex flex-col items-center py-2">
        {/* Order Summary */}
        <OrderDetalis cartItems={cartItems} />

        {/* Payment Method */}
        <PaymentMethod onPay={onPay} />

        {/* Discount Code */}
        <DiscountCode onApply={onApply} />

        {/* Items Price */}
        <PriceSummary cartInfo={cartInfo} />
      </div>
    </div>
  );
};


export default OrderSummary
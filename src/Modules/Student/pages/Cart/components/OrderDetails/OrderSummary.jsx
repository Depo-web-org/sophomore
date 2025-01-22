import { DiscountCode } from "./DiscountCode";
import { OrderDetalis } from "./OrderDetalis";
import { PaymentMethod } from "./PaymentMethod";

 const OrderSummary = ({ cartItems,  onPay, onApply , style , pricesInfo }) => {
  return (
    <div className={style}>
      {/* Order Details */}
      <div className="flex flex-col items-center py-2">
        {/* Order Summary */}
        <OrderDetalis cartItems={cartItems} />

        {/* Payment Method */}
        {/* <PaymentMethod onPay={onPay} /> */}

        {/* Discount Code */}
        {/* <DiscountCode onApply={onApply} /> */}

        {/* Items Price */}
        {/* <PriceSummary cartInfo={pricesInfo} /> */}
      </div>
    </div>
  );
};


export default OrderSummary
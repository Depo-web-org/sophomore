import creditCard from '/public/Cart/CreditCard.svg'

export const PaymentMethod = ({ onPay }) => (
    <div>
      <p className="text-white font-semibold text-3xl">Payment Method</p>
      <div
        onClick={onPay}
        className="my-5 py-2 bg-white rounded-lg flex flex-col justify-center cursor-pointer"
      >
        <img src={creditCard} alt="Credit Card" className="w-1/5 mx-auto pb-2" />
        <span className="text-black font-semibold text-center">Pay with Credit Card</span>
      </div>
    </div>
  );
  
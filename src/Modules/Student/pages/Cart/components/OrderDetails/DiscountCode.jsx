export const DiscountCode = ({ onApply }) => (
    <div>
      <p className="text-white font-semibold text-base xl:text-xl mb-4 text-center">
        Do you have any discount code?
      </p>
      <div className="flex w-4/5 xl:w-11/12 gap-x-3 m-auto">
        <input
          placeholder="Your code here"
          type="text"
          className="bg-dark p-2 border-white border rounded-md w-4/5 text-white placeholder:text-gray-500 placeholder:font-semibold"
        />
        <button
          className="buttonHover text-white rounded-md p-2 xl:p-3 w-1/5 text-center font-semibold"
          onClick={onApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
  
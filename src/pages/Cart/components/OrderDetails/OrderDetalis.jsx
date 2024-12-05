export const OrderDetalis = ({ cartItems }) => (
    <div>
      <p className="text-white font-semibold text-3xl">Order Summary</p>
      <div className="py-2">
        {cartItems.map((course) => (
          <span key={course.price + course.subject} className="block text-white text-start">
            {course.subject}
          </span>
        ))}
      </div>
    </div>
  );
  
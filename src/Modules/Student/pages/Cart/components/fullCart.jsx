import React from "react";
import CourseCard from "./CourseCard/CourseCard";
import OrderSummary from "./OrderDetails/OrderSummary";
import WishCartTitle from "../../../../../Components/Common/WishCartTitle/WishCartTitle";
import { useTranslation } from "react-i18next";
import { RiDeleteBin6Line } from "react-icons/ri"; // Importing missing icon
import i18n from "i18next"; // Import i18n for language reference
import courseSVG from "/images/Cart/Course.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../../../Redux/cart/cartSlice";
import {baseUrl} from "../../../../../App"



const FullCart = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    const handleRemoveItem = (id) => {
      dispatch(removeFromCart(id));
    };


  return (
    <>
      <section className="min-h-screen ">
        <div className="pt-24 lg:pt-32 relative container w-full md:w-custom-md xl:w-custom-xl mx-auto">
          {/* Translated WishCartTitle */}
          <WishCartTitle name={t("cart.title")} items={cartItems.length} />
        </div>
        <div className="w-full min-h-96 lg:pt-9 mr-auto xl:w-[90%]">
          <div className="grid grid-cols-12 xl:gap-16">
            <div className="col-span-12 lg:col-span-6 xl:col-span-7">
              {/* Course Cards */}
              {cartItems?.map((course, index) => (
                <div
                  key={index}
                  className={`bg-dark my-1  ${
                    i18n.language === "en"
                      ? "lg:rounded-ee-full lg:rounded-tt-full lg:rounded-r-full"
                      : "lg:rounded-ss-full lg:rounded-bb-full lg:rounded-l-full"
                  } py-3 shadow-sm shadow-gray-600 flex items-center`}
                >
                  <div className="container w-full md:w-custom-md mx-auto flex justify-between">
                    {/* Course Information */}
                    <div className="flex gap-x-3 items-center">
                      <div>
                        <img
                 src={course?.courseImageh? `${baseUrl}${course.imagePath}${course.courseImage}`:"data:image/png;base64,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"}
                          alt={course.teacherName}
                          className="size-20 object-cover rounded-full"
                        />
                      </div>
                      <div className="text-white">
                        <p className="text-lg md:text-xl lg:text-2xl font-medium uppercase">
                          {course.subjectName}
                        </p>
                        <p className="font-medium text-sm lg:text-base">
                          {course.teacherName                          }
                        </p>
                        <span className="text-gray-300 text-sm sm:text-base">
                          {course.gradeName}
                        </span>
                        <p className="text-gray-300 text-sm"> <span className="text-secondary text-base">lessons:</span> {course?.enrolledLessons}</p>

                      </div>
                    </div>
                    {/* Price and Delete */}
                    <div className="flex flex-col items-center justify-between">
                      <span className="text-white text-sm text-nowrap lg:text-base font-medium block bg-primary px-2 rounded-full">
                        {course.price} EGP
                      </span>
                      <button

  onClick={() => handleRemoveItem(course.id)}    className="text-secondary text-2xl md:text-3xl mb-3 cursor-pointer"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Order Summary */}
            {/* Uncomment if needed */}
            <OrderSummary
              style="col-span-12 lg:col-span-6  xl:col-span-5 bg-dark rounded-xl shadow-[4px_4px_0px_0px_#536CB3] container w-full md:w-custom-md xl:w-full"
              cartItems={cartItems}
              cartInfo={cartItems}
              // pricesInfo={info}
              onPay={() => console.log("Pay clicked!")}
              onApply={() => console.log("Apply clicked!")}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FullCart;

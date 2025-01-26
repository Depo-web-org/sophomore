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
    console.log(cartItems)

    const handleRemoveItem = (id) => {
      dispatch(removeFromCart(id));
    };


  return (
    <>
      <section className="min-h-screen">
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
                  className={`bg-dark my-1 ${
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
                          src={`${baseUrl}${course.imagePath}${course.courseImage}`}
                          alt="Course"
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
                      <span className="text-white text-base lg:text-xl font-medium block bg-primary px-2 rounded-full">
                        {course.price} EGP
                      </span>
                      <button

  onClick={() => handleRemoveItem(course.id)}                        className="text-secondary text-2xl md:text-3xl mb-3 cursor-pointer"
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
              style="col-span-12 lg:col-span-6 xl:col-span-5 bg-dark rounded-xl shadow-[4px_4px_0px_0px_#536CB3] container w-full md:w-custom-md xl:w-full"
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

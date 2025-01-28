import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style/style.css";
import { Pagination } from "swiper/modules";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Carusoul = ({ totalsNum }) => {
  const{i18n}=useTranslation()
  const response = {
    data: [
      {
        title: "Enroll Students",
        title_ar: "الطﻻب المشتركين",
        value: totalsNum,
        percentageChange: "+1.01%",
        icon: IoMdTrendingUp,
      },
    ],
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const breakpoints =  {
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        528: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }
  

  return (
    <div className="bg-[#F8F9FA] flex flex-col justify-start items-start gap-8 w-full">
      <div className="bg-white w-full h-[180px] rounded-3xl px-8 pt-4">
      <Swiper
  // breakpoints={response.data.length > 0 ? breakpoints : undefined} // Use `undefined` when no breakpoints are required
  slidesPerView={1}
  spaceBetween={15}
  navigation={true}
  pagination={pagination}
  modules={[Pagination]}
  className="mySwiper"
>
          {response.data.map((detail, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-28 gap-y-2 px-4 flex justify-center flex-col items-start ${
                  index % 2 === 0 ? "bg-[#edeefc]" : "bg-[#e6f1fd]"
                } rounded-lg w-full`}
              >
                <span className="text-[12px] xl:text-sm xl:text-nowrap font-medium text-start">
                  {`${i18n.language==="ar" ?  detail.title_ar :detail.title }`}
                </span>
                <p className="text-xl font-semibold inline-flex gap-x-6 items-center w-full">
                  {detail.value}
                  <span className="text-sm mb-1 font-normal mx-1">
                    {detail.percentageChange}
                    {detail.icon && React.createElement(detail.icon, { className: "inline" })}
                  </span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carusoul;

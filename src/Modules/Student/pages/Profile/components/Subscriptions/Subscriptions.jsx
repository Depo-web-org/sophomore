import React, { useEffect, useState } from "react";
import CardImage from "/images/Profile/a57668df10fd5bd8d75fd99351111818.jpeg";
import useFetch from "../../../../../../Hooks/UseFetch";
import Invoice from "./Invoice";
import { useTranslation } from "react-i18next";
export default function Subscriptions() {
  const { t  } = useTranslation();
  const { data } = useFetch(
    "https://os1907.github.io/Schools/Profile/Profile.json"
  );
  // const Subscriptions = [
  //   {
  //     id: "0987",
  //     name: "Math ",
  //     grade: "Grade 1",
  //     img: CardImage,
  //   },
  //   {
  //     id: "7654",
  //     name: "French",
  //     grade: "Grade 2",
  //     img: CardImage,
  //   },
  // ];

  const [invoice, setInvoice] = useState(false);
  const toggleInvoice = () => {
    setInvoice(!invoice);
  };

  return (
    <>
      <div className="container pr-8">
        {/* top Text */}
        <div className="flex w-full justify-start lg:justify-between flex-wrap items-center gap-y-2">
      <div className="flex flex-col justify-between">
        <p className="text-white font-bold text-sm md:text-lg">
          {t("subscriptions.title")}
        </p>
        <span className="text-gray-500 font-normal text-xs lg:text-sm">
          {t("subscriptions.description")}
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-white font-bold text-sm md:text-lg">
          {t("subscriptions.availableUntil")}
        </p>
        <span className="text-gray-500 font-normal text-xs lg:text-sm">
          {t("subscriptions.date")}
        </span>
      </div>
    </div>
        {/* Card Subscriptions*/}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3  lg:gap-5 pt-2 lg:pt-10">
          {data?.Subscriptions.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  onClick={toggleInvoice}
                  className="flex flex-col hover:opacity-45 transition-all duration-300"
                >
                  <div className="relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg">
                    <img
                      src={item.img}
                      alt="learning card"
                      className="w-full object-cover rounded-lg transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>

                  <div className="flex items-center justify-between w-full pt-2">
                    <p className="text-xs sm:text-sm lg:text-xl font-medium text-white">
                      {item.name}
                    </p>
                    <p className="text-xs sm:text-sm lg:text-xl font-normal text-[#FFFFFF57]">
                      {item.grade}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {invoice && <Invoice toggleInvoice={toggleInvoice} />}
    </>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";

export default function ModalPackages({
  setIsModalPackagesOpen,
  handleUnitsPackages,
  handleButtonClick,
}) {
  const { t } = useTranslation();

  return (
    <div
      onClick={() => setIsModalPackagesOpen(false)}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
    >
      <div
        className="bg-slate-900 rounded-lg p-6 w-full max-w-[90%] md:w-2/3 lg:w-1/2 h-full max-h-[70%] absolute top-32 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <button
          onClick={() => setIsModalPackagesOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-400"
        >
          <IoClose size={24} />
        </button>

        {/* Modal Content */}
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 w-full h-full overflow-y-auto scrollbar-hide">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8 h-full">
            {/* Full Pack */}
            <FullPackage handleButtonClick={handleButtonClick} />

            {/* Unit by Unit */}
            <UnitPackage handleUnitsPackages={handleUnitsPackages} />
          </div>
        </div>
      </div>
    </div>
  );
}

function UnitPackage({ handleUnitsPackages }) {
  const { t } = useTranslation();

  return (
    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12 b">
      <div className="text-center">
        <h2 className="text-lg font-medium text-white">
          {t("modal.unit_by_unit.title")} <span className="sr-only">Plan</span>
        </h2>
        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-white sm:text-4xl">
            {t("modal.unit_by_unit.price")}
          </strong>
          <span className="text-sm font-medium text-gray-300">
            {t("modal.unit_by_unit.period")}
          </span>
        </p>
      </div>
      <ul className="mt-6 space-y-2">
        {t("modal.unit_by_unit.features", { returnObjects: true }).map(
          (feature, index) => (
            <li key={index} className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#09B285]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-gray-300">{feature}</span>
            </li>
          )
        )}
      </ul>
      <button
        onClick={handleUnitsPackages}
        className="mt-8 block rounded-full border border-primary bg-white px-12 py-3 text-center text-sm font-medium text-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring active:text-indigo-500"
      >
        {t("modal.unit_by_unit.button")}
      </button>
    </div>
  );
}

function FullPackage({ handleButtonClick }) {
  const { t } = useTranslation();

  return (
    <div className="rounded-2xl border border-secondary p-6 shadow-sm sm:order-last sm:px-8 lg:p-12">
      <div className="text-center">
        <h2 className="text-lg font-medium text-white">
          {t("modal.full_pack.title")} <span className="sr-only">Plan</span>
        </h2>
        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-white sm:text-4xl">
            {t("modal.full_pack.price")}
          </strong>
          <span className="text-sm font-medium text-gray-300">
            {t("modal.full_pack.period")}
          </span>
        </p>
      </div>
      <ul className="mt-6 space-y-2">
        {t("modal.full_pack.features", { returnObjects: true }).map(
          (feature, index) => (
            <li key={index} className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#09B285]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-gray-300">{feature}</span>
            </li>
          )
        )}
      </ul>
      <button
        onClick={handleButtonClick}
        className="mt-8 block rounded-full border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
      >
        {t("modal.full_pack.button")}
      </button>
    </div>
  );
}

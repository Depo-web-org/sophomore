import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function ModalPackages({
  setIsModalPackagesOpen,
  handleUnitsPackages,
  handleButtonClick,
}) {
  return (
    <div
      onClick={() => setIsModalPackagesOpen(false)}
      className="fixed inset-0 bg-slate-600 bg-opacity-50 flex items-center justify-center"
    >
      <div
        className="bg-slate-900 rounded-lg p-6 relative"
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
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
            {/* Full Pack */}
            <div className="rounded-2xl border border-secondary p-6 shadow-sm sm:order-last sm:px-8 lg:p-12">
              <div className="text-center">
                <h2 className="text-lg font-medium text-white">
                  Full Pack <span className="sr-only">Plan</span>
                </h2>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-white sm:text-4xl">
                    30$
                  </strong>
                  <span className="text-sm font-medium text-gray-300">
                    /month
                  </span>
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-1">
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
                  <span className="text-gray-300"> 20 users included </span>
                </li>
                <li className="flex items-center gap-1">
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
                  <span className="text-gray-300"> 5GB of storage </span>
                </li>
                <li className="flex items-center gap-1">
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
                  <span className="text-gray-300"> Email support </span>
                </li>
                <li className="flex items-center gap-1">
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
                  <span className="text-gray-300"> Help center access </span>
                </li>
                <li className="flex items-center gap-1">
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
                  <span className="text-gray-300"> Phone support </span>
                </li>
                <li className="flex items-center gap-1">
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
                  <span className="text-gray-300"> Community access </span>
                </li>
              </ul>
              <button
                onClick={handleButtonClick}
                className="mt-8 block rounded-full border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get Started
              </button>
            </div>

            {/* Unit by Unit */}
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
              <div className="text-center">
                <h2 className="text-lg font-medium text-white">
                  Unit by Unit <span className="sr-only">Plan</span>
                </h2>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-white sm:text-4xl">
                    20$
                  </strong>
                  <span className="text-sm font-medium text-gray-300">
                    /month
                  </span>
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-1">
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
                  <span className="text-gray-300"> 10 users included </span>
                </li>
                <li className="flex items-center gap-1">
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
                  <span className="text-gray-300"> 2GB of storage </span>
                </li>
                <li className="flex items-center gap-1">
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
                  <span className="text-gray-300"> Email support </span>
                </li>
                <li className="flex items-center gap-1">
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
                  <span className="text-gray-300"> Help center access </span>
                </li>
              </ul>
              <button
                onClick={handleUnitsPackages}
                className="mt-8 block rounded-full border border-primary bg-white px-12 py-3 text-center text-sm font-medium text-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring active:text-indigo-500"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MoadlUnits({ setIsModalUnitsOpen, handleButtonClick }) {
  const [selectedUnits, setSelectedUnits] = useState([]);
  const unitPrice = 300;

  const handleUnitToggle = (unit) => {
    setSelectedUnits((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  const calculateTotal = () => {
    return selectedUnits.length * unitPrice;
  };

  return (
    <div
      onClick={() => setIsModalUnitsOpen(false)}
      className="fixed inset-0 bg-slate-600 bg-opacity-50 flex items-center justify-center"
    >
      <div
        className="bg-slate-900 rounded-lg  p-6 w-[90%] max-w-md shadow-[4px_4px_0px_0px_#F15C54]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-white">Choose Your Package</h1>
          <button
            onClick={() => setIsModalUnitsOpen(false)}
            className="text-white hover:text-gray-700"
          >
            <IoClose size={24} />
          </button>
        </div>

        <div className="space-y-4">
          {["Unit 1", "Unit 2", "Unit 3", "Unit 4"].map((unit) => (
            <label
              key={unit}
              className="flex items-center space-x-3 bg-slate-900 rounded-lg px-4 py-2 text-primary hover:bg-slate-700 transition"
            >
              <input
                type="checkbox"
                className="w-5 h-5 text-primary border-gray-300 rounded checked:accent-primary"
                checked={selectedUnits.includes(unit)}
                onChange={() => handleUnitToggle(unit)}
              />
              <span className="text-white">{unit}</span>
            </label>
          ))}
        </div>

        <div className="mt-6 text-lg font-bold text-white">
          Total: <span className="text-primary">{calculateTotal()} LE</span>
        </div>

        <button
          className="mt-6 bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg w-full transition duration-200"
          onClick={handleButtonClick}
        >
          Continue Payment
        </button>
      </div>
    </div>
  );
}

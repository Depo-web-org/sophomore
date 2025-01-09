import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Alert = ({ showAlert, setShowAlert, Name, title, color }) => {
  return (
    <>
      <div
        className={`fixed top-20 right-0 max-w-[350px] rounded-xl border border-gray-100 bg-white z-[9999] p-4 shadow-lg transform transition-transform duration-700 ease-in-out ${
          showAlert ? "translate-x-0 right-2" : "translate-x-full"
        }`}
      >
        <div className="flex items-start gap-4">
          <span className={`${color}`}>
                                                
            <FaCheckCircle className="text-3xl"/>
          </span>
          <div className="flex-1">
            <strong className="block font-medium text-gray-900">
              {/* Password changed successfully!  */}
              {Name}
            </strong>
            <p className="mt-1 text-sm text-gray-700">
              {/* Your password has been updated successfully. */}
              {title}
            </p>
          </div>
          <button
            className="text-gray-500 transition hover:text-gray-600"
            onClick={() => setShowAlert(false)}
          >
            <span className="sr-only">Dismiss popup</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Alert;

import React from "react";
import { Link } from "react-router-dom";

const DownText = ({allApproved}) => {
  return (
    <div className="relative inset-x-0 text-center py-14">
      <p className="text-lg sm:text-2xl lg:text-3xl text-white font-bold">
        Kindly wait until you get approved
      </p>

      {allApproved && (
        <Link to="/teacherPanel">
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
          >
            Get Started
          </button>
        </Link>
      )}
    </div>
  );
};

export default DownText;

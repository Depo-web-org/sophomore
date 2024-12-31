import React from "react";
import { FaUserGraduate } from "react-icons/fa6";

export default function Activity() {
  return (
    <div className="bg-white rounded-xl flex flex-col justify-start items-start p-4 gap-4 min-w-[274px] w-full group hover:shadow-lg ">
      <p className="text-[18px] font-semibold text-black">Recent Activity</p>
      <div className="flex items-start justify-start gap-3">
          <span className="bg-primary p-3 rounded-full text-white text-xl cursor-pointer">
        <FaUserGraduate />
                    </span>
        <div>
          <p className="text-[16px] font-normal text-gray-600">
            New student enrollment in
          </p>
          <p className="text-[16px] font-medium text-black">
            Introduction to math
          </p>
        </div>
      </div>
     
      <div className="flex items-start justify-start gap-3">
          <span className="bg-primary p-3 rounded-full text-white text-xl cursor-pointer">
              <FaUserGraduate />
                    </span>
        <div>
          <p className="text-[16px] font-normal text-gray-600">
            New student enrollment in
          </p>
          <p className="text-[16px] font-medium text-black">
            Introduction to math
          </p>
        </div>
      </div>
    </div>
  );
}

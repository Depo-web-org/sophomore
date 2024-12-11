import React from "react";

export default function Activity() {
  return (
    <div className="bg-white rounded-xl flex flex-col justify-start items-start p-4 gap-4 min-w-[274px] w-full">
      <p className="text-[18px] font-semibold text-black">Recent Activity</p>
      <div className="flex items-start justify-start gap-3">
        <img src="/dashboard/Group 12.svg" alt="activity" className="w-8 h-8" />
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
        <img src="/dashboard/Group 12.svg" alt="activity" className="w-8 h-8" />
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

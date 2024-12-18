import React from "react";

export default function QuickAction() {
  return (
    <div className="bg-white rounded-xl flex flex-col justify-start items-start p-4 gap-4 w-full min-w-[274px] group hover:shadow-lg ">
      <p className="text-[18px] font-semibold text-black">Quick Actions</p>
      <button className="bg-primary rounded-md text-nowrap  px-8 py-4 min-w-[213px]  text-[18px] font-semibold text-white text-center">
        Upload a new course
      </button>
    </div>
  );
}

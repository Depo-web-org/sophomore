import React from "react";

export default function QuickAction() {
  return (
    <div className="bg-white rounded-xl flex flex-col justify-start items-start p-4 gap-4">
      <p className="text-[18px] font-semibold text-black">Recent Activity</p>
      <button className="bg-primary rounded px-8 py-4 min-w-[213px]  text-[18px] font-semibold text-white text-center">
        Upload a new course
      </button>
    </div>
  );
}

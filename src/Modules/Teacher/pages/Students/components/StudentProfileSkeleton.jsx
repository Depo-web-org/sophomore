import React from "react";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { BsCalendar2Check } from "react-icons/bs";

export default function StudentProfileSkeleton() {
  return (
    <div className="w-full min-h-40 animate-pulse">
      {/* Header Section */}
      <div className="relative bg-gradient-to-l from-[#F15C54] from-10% to-[#536CB3] to-90% w-full h-48 rounded-tl-lg rounded-tr-lg">
        <div className="absolute top-32 md:top-[102px] left-2 md:left-24 flex items-center gap-4">
          <div className="border-4 border-white w-24 h-24 md:w-36 md:h-36 rounded-full bg-gray-300"></div>
          <div>
            <div className="h-6 w-32 md:w-48 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-5 w-20 bg-green-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white min-h-32 flex flex-col md:flex-row items-center justify-start pl-[8%] pt-16 md:pt-5 gap-8">
        <div className="flex items-center gap-1 text-[#4B5563]">
          <IoMdMail className="text-xl text-gray-400" />
          <div className="h-4 w-40 bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex items-center gap-1 text-[#4B5563]">
          <MdLocalPhone className="text-xl text-gray-400" />
          <div className="h-4 w-40 bg-gray-300 rounded-md"></div>
        </div>
      </div>

      {/* Course Section */}
      <div className="w-full flex flex-col gap-4 pt-8">
        <div className="h-6 w-32 bg-gray-300 rounded-md"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <CoursesCardSkeleton key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

function CoursesCardSkeleton() {
  return (
    <div className="flex flex-col w-[auto] animate-pulse">
      {/* Card Image */}
      <div className="relative w-full">
        <div className="w-full min-h-[168px] bg-gray-300 rounded-t-lg"></div>
      </div>

      {/* Card Details */}
      <div className="w-full p-2 bg-white min-h-10 rounded-b-lg">
        <div className="h-6 w-40 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-5 w-24 bg-gray-300 rounded-md"></div>
        <div className="flex items-center justify-between pt-8">
          <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
          <div className="h-4 w-28 bg-gray-300 rounded-md flex gap-2 items-center"></div>
        </div>
      </div>
    </div>
  );
}

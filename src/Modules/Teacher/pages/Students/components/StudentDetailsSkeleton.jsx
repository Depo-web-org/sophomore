import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function StudentDetailsSkeleton() {
  return (
    <div className="bg-white rounded-2xl w-full p-6 animate-pulse">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center w-full">
        <div className="h-6 w-40 bg-gray-300 rounded-md"></div>
        <div className="flex items-center flex-col md:flex-row justify-center md:justify-evenly w-full md:w-1/2">
          <div className="relative w-4/5 md:w-1/2">
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <div className="h-6 w-20 bg-gray-300 rounded-md mt-3 md:mt-0 md:ml-4"></div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto mt-4">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="py-4 px-6">
                <div className="h-4 bg-gray-300 rounded-md w-24"></div>
              </th>
              <th className="py-4 px-6">
                <div className="h-4 bg-gray-300 rounded-md w-20"></div>
              </th>
              <th className="py-4 px-6">
                <div className="h-4 bg-gray-300 rounded-md w-28"></div>
              </th>
              <th className="py-4 px-6">
                <div className="h-4 bg-gray-300 rounded-md w-20"></div>
              </th>
              <th className="py-4 px-6">
                <div className="h-4 bg-gray-300 rounded-md w-32"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#E6F1FD]" : "bg-[#C3CCE5]"
                  } border-b-4 border-white`}
                >
                  <td className="py-4 px-6">
                    <div className="h-4 bg-gray-300 rounded-md w-32"></div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="h-4 bg-gray-300 rounded-md w-20"></div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="h-4 bg-gray-300 rounded-md w-28"></div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="h-4 bg-gray-300 rounded-md w-20"></div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="h-4 bg-gray-300 rounded-md w-32"></div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

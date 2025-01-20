import React from "react";

export default function CourseManagementSkeleton() {
  return (
    <div className="w-full lg:w-[80%] bg-white rounded-[20px] py-4 group hover:shadow-lg animate-pulse">
      <div className="text-center py-4">
        <div className="w-48 h-8 bg-gray-200 mx-auto rounded"></div> {/* Title Skeleton */}
      </div>

      <div className="overflow-x-auto px-4">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead>
            <tr>
              {[...Array(3)].map((_, index) => (
                <th
                  key={index}
                  className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-300"
                >
                  <div className="w-24 h-6 bg-gray-200 rounded"></div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {[...Array(3)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(3)].map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="whitespace-nowrap px-4 py-2 text-gray-700"
                  >
                    <div className="w-full h-6 bg-gray-200 rounded"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

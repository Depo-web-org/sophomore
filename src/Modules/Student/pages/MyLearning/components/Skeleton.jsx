import { useTranslation } from "react-i18next";

export default function CoursesSkeleton() {


  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col gap-4">
        <p className="text-2xl font-semibold text-white py-8">My courses</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {/* Render placeholders */}
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex flex-col w-[auto] min-h-[328px] animate-pulse">
              <div className="relative w-full min-h-[285px] bg-gray-700 rounded-lg">
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-600 rounded-full"></div>
                <div className="absolute inset-0 bg-gray bg-opacity-75"></div>
              </div>
              <div className="flex items-center justify-between w-full pt-2">
                <div className="h-6 w-2/3 bg-gray-700 rounded"></div>
                <div className="h-6 w-1/4 bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaSackDollar } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { ImBooks } from "react-icons/im";

export const statisticsData = [
  {
    image: <ImBooks />,
    title: "Total Courses",
    stats: 12,
  },
  {
    image: <HiUserGroup />,
    title: "Active Users",
    stats: 34,
  },
  {
    image: <FaSackDollar />,
    title: "Total Profit",
    stats: 56,
  },
];

export default function Statistics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {statisticsData.map((item, index) => (
        <StatisticCard
          style={
            "flex justify-center items-center gap-8 bg-white p-8 group hover:shadow-lg rounded-md "
          }
          key={index}
          image={item.image}
          title={item.title}
          stats={item.stats}
        />
      ))}
    </div>
  );
}

export function StatisticCard({ image, title, stats, style }) {
  return (
    <div className={`${style}`}>
      <span  className=" text-5xl lg:text-6xl mb-4 text-primary  inline" >
      {image}
      </span>
      {/* <img src={image} alt={title} className="w-12 lg:w-14 h-12 lg:h-14 mb-4" /> */}
      <div className="flex flex-col items-start justify-start ">
        <p className="text-base lg:text-lg font-medium text-gray-500 group-hover:text-secondary duration-300 transition-all ">
          {title}
        </p>
        <p className="text-base lg:text-2xl font-bold text-gray-900  ">
          {stats}
        </p>
      </div>
    </div>
  );
}

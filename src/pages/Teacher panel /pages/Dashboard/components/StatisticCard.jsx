import React from "react";

export const statisticsData = [
  {
    image: "/dashboard/Vector (3).svg",
    title: "Total Courses",
    stats: 12,
  },
  {
    image: "/dashboard/Group.svg",
    title: "Active Users",
    stats: 34,
  },
  {
    image: "/dashboard/Group (1).svg",
    title: "Completed Tasks",
    stats: 56,
  },
];

export default function Statistics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {statisticsData.map((item, index) => (
        <StatisticCard
        style={"flex justify-center items-center gap-8 bg-white p-8 group hover:shadow-lg rounded-md"}
          key={index}
          image={item.image}
          title={item.title}
          stats={item.stats}
        />
      ))}
    </div>
  );
}

export function StatisticCard({ image, title, stats , style }) {
  return (
    <div className={`${style}`}>
      <img src={image} alt={title} className="w-14 h-14 mb-4" />
      <div className="flex flex-col items-start justify-start ">
       
        <p className="text-lg font-medium text-gray-500 group-hover:text-secondary duration-300 transition-all ">{title}</p>
        <p className="text-2xl font-bold text-gray-900  ">{stats}</p>
      </div>
    </div>
  );
}

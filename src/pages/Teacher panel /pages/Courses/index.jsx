import React from "react";
import { StatisticCard, statisticsData } from "../Dashboard/components/StatisticCard";
import CourseManagement from "../Dashboard/components/CourseManagement";
export default function Courses() {
  return  <div className="min-h-screen bg-[#F8F9FA] flex flex-col p-4 px-8 justify-start items-start  gap-8">
    <div className="grid grid-cols-1   gap-8 w-full ">
      {statisticsData.filter(i=> i.title != 'Completed Tasks').map((item, index) => (
        <StatisticCard
          key={index}
          style={"flex justify-start rounded-xl items-center gap-8 bg-white p-8 group hover:shadow-lg rounded-md"}
          image={item.image}
          title={item.title}
          stats={item.stats}
        />
      ))}
    </div>
    <CourseManagement/>
  </div>;
}

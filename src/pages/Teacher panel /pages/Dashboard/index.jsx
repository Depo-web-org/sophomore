import React from "react";
import Statistics from "./components/StatisticCard";
import CourseManagement from "./components/CourseManagement";
import Activity from "./components/Activity";
import QuickAction from "./components/QuickAction";
import ApexChart from "./components/Chart";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col p-4 lg:px-8 justify-start items-start  gap-8">
      <Statistics />
      <CourseManagement />
      <div className="flex flex-col xl:flex-row items-start w-full justify-between gap-8">
        <div className="flex flex-wrap lg:flex-col items-start justify-start gap-8 w-full xl:w-[25%] ">
          <Activity />
          <QuickAction Text={'Upload a new course'}/>
        </div>
        <ApexChart />
      </div>
    </div>
  );
}

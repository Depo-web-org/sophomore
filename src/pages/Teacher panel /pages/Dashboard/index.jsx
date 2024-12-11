import React from "react";
import Statistics from "./components/StatisticCard";
import CourseManagement from "./components/CourseManagement";
import Activity from "./components/Activity";
import QuickAction from "./components/QuickAction";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col p-4 justify-start items-start  gap-8">
      <Statistics />
      <CourseManagement />
      <div className="flex items-start w-full justify-start">
        <div className="flex flex-col items-start justify-start gap-8">
          <Activity />
          <QuickAction />
        </div>
      </div>
    </div>
  );
}

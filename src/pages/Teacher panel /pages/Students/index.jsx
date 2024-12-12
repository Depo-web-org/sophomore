import React from "react";
import TotalChart from "./components/Charts";
import StudentDetails from "./components/StudentDetails";

const Students = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col p-4 lg:px-8 justify-start items-start  gap-8">
      <div className="w-full flex items-center justify-between">
        <TotalChart />
      </div>
      <StudentDetails />
    </div>
  );
};

export default Students;

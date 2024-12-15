import React from "react";
import TotalChart from "./Charts";
import StudentDetails from "./StudentDetails";

export default function StudentStatistics() {
  return (
    <>
      {" "}
      <div className="w-full flex items-center justify-between">
        <TotalChart />
      </div>
      <StudentDetails />
    </>
  );
}

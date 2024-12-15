import React from "react";
import TotalChart from "./Charts";
import StudentDetails from "./StudentDetails";
import EnrollmentProgress from "./EnrollmentProgress";

export default function StudentStatistics() {
  return (
    <>
      {" "}
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around">
        <EnrollmentProgress />
        <TotalChart />
      </div>
      <StudentDetails />
    </>
  );
}

import React, { useEffect } from "react";
import Statistics from "./components/StatisticCard";
import CourseManagement from "./components/CourseManagement";
import Activity from "./components/Activity";
import QuickAction from "./components/QuickAction";
import ApexChart from "./components/Chart";
import { useGetTeacherCoursesQuery } from "../../../../Redux/data/getDataApiSlice";
import CourseManagementSkeleton from "../../components/Skeletons/CourseManagementSkeleton";

export default function Dashboard() {
  const {data,isLoading, isFetching,isError} = useGetTeacherCoursesQuery()
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col p-4 lg:px-8 justify-start items-start  gap-8">
      <Statistics numberOfCourses={data?.data?.length}  />
      {  isFetching ? <CourseManagementSkeleton/>  :<CourseManagement data={data}  /> }
      <div className="flex flex-col xl:flex-row items-start w-full justify-between gap-8">
        <div className="flex flex-wrap lg:flex-col items-start justify-start gap-8 w-full xl:w-1/4 ">
          <Activity />
          <QuickAction Text={'Upload a new course'}/>
        </div>
        <ApexChart />
      </div>
    </div>
  );
}

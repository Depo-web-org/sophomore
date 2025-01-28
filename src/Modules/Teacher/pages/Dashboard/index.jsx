import React, { useEffect, useMemo } from "react";
import Statistics from "./components/StatisticCard";
import CourseManagement from "./components/CourseManagement";
import Activity from "./components/Activity";
import QuickAction from "./components/QuickAction";
import ApexChart from "./components/Chart";
import { useGetTeacherCoursesQuery, useGetTeacherSubscripersQuery } from "../../../../Redux/data/getDataApiSlice";
import CourseManagementSkeleton from "../../components/Skeletons/CourseManagementSkeleton";


export function getUniqueData(data, uniqueKey) {
  if (!Array.isArray(data)) return [];
  const seen = new Set();
  return data.filter((item) => {
    if (seen.has(item[uniqueKey])) return false;
    seen.add(item[uniqueKey]);
    return true;
  });
}

export default function Dashboard() {
 
  const { data: coursesData, isFetching: isFetchingCourses } = useGetTeacherCoursesQuery();
  const { data: subscribersData, isFetching: isFetchingSubscribers } = useGetTeacherSubscripersQuery();


  const finalFilterData = useMemo(() => getUniqueData(subscribersData?.data, "consumer"), [subscribersData]);
  const numberOfTotalProfit = useMemo(
    () =>
      subscribersData?.data
        ?.map((item) => Number(item.total))
        .reduce((sum, value) => sum + value, 0) || 0,
    [subscribersData]
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col p-4 lg:px-8 justify-start items-start gap-8">
      {/* Statistics */}
      <Statistics
        numberOfCourses={coursesData?.data?.length || 0}
        numberOfStudents={finalFilterData?.length || 0}
        numberOfTotalProfit={numberOfTotalProfit}
      />

      {/* Course Management */}
      {isFetchingCourses ? (
        <CourseManagementSkeleton />
      ) : (
        <CourseManagement data={coursesData} subscribersData={subscribersData} />
      )}

      {/* Activity, Quick Action, and Chart */}
      <div className="flex flex-col xl:flex-row items-start w-full justify-between gap-8">
        <div className="flex flex-wrap lg:flex-col items-start justify-start gap-8 w-full xl:w-1/4">
          <Activity />
          <QuickAction Text="Upload a new course" />
        </div>
        <ApexChart />
      </div>
    </div>
  );
}

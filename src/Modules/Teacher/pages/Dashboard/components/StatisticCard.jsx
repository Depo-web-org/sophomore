import React from "react";
import { useTranslation } from "react-i18next";
import { GiMoneyStack } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { ImBooks } from "react-icons/im";

// Statistic data template (will be dynamically updated based on props)
export const statisticsData = [
  {
    image: <ImBooks />,
    title: "Total Courses",
    title_ar: "أجمالي الكورسات",
    stats: 0, // Will be updated dynamically
  },
  {
    image: <HiUserGroup />,
    title: "Active Students",
    title_ar: "الطلاب الناشطين",
    stats: 0, // Will be updated dynamically
  },
  {
    image: <GiMoneyStack />,
    title: "Total Profit ",
    title_ar: "الطلاب الناشطين",
    stats: 0, // Will be updated dynamically
  },
];

export default function Statistics({ numberOfCourses, numberOfStudents }) {
  const { i18n, t } = useTranslation();

  // Update the statisticsData array with the props
  const updatedStatisticsData = statisticsData.map((item) => {
    if (item.title === "Total Courses") {
      return { ...item, stats: numberOfCourses || 0 };
    } else if (item.title === "Active Students") {
      return { ...item, stats: numberOfStudents || 0 };
    }
    return item;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-4 w-full">
      {updatedStatisticsData.map((item, index) => (
        <StatisticCard
          style={
            "flex justify-center items-center gap-8 bg-white p-3 md:p-8 group hover:shadow-lg rounded-md"
          }
          key={index}
          image={item.image}
          title={`${i18n.language === "en" ? item.title : item.title_ar}`}
          stats={item.stats}
        />
      ))}
    </div>
  );
}

export function StatisticCard({ image, title, stats, style }) {
  return (
    <div className={`${style}`}>
      <span className="text-5xl lg:text-6xl mb-4 text-primary inline">
        {image}
      </span>
      <div className="flex flex-col items-start justify-start">
        <p className="text-base lg:text-lg font-medium text-gray-500 group-hover:text-secondary duration-300 transition-all">
          {title}
        </p>
        <p className="text-base lg:text-2xl font-bold text-gray-900">{stats}</p>
      </div>
    </div>
  );
}
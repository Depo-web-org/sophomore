import React from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function Activity() {
  const { t, i18n } = useTranslation(); // Initialize useTranslation and get the current language

  const activities = [
    {
      id: 1,
      messageAR: "تم تسجيل طالب جديد",
      messageEn: "New student enrolled", 
      courseNameAR: "الجبر", 
      courseNameEn: "Math", 
    },
    {
      id: 2,
      messageAR: "تم تسجيل طالب جديد",
      messageEn: "New student enrolled", 
      courseNameAR: "التاريخ", 
      courseNameEn: "History", 

    },
  ];

  return (
    <div className="bg-white rounded-xl flex flex-col justify-start items-start p-4 gap-4 min-w-[274px] w-full group hover:shadow-lg">
      <p className="text-[18px] font-semibold text-black">
        {t("activity.recentActivity")} 
      </p>
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start justify-start gap-3">
          <span className="bg-primary p-3 rounded-full text-white text-xl cursor-pointer">
            <FaUserGraduate />
          </span>
          <div>
            <p className="text-[16px] font-normal text-gray-600">
              {i18n.language === "ar" ? activity.messageAR : activity.messageEn} 
            </p>
            <p className="text-[16px] font-medium text-black">
              {i18n.language === "ar" ? activity.courseNameAR : activity.courseNameEn} 
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
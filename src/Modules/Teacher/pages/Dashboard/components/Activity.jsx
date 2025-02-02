import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { useGetTeacherSubscripersQuery } from "../../../../../Redux/data/getDataApiSlice";

export default function Activity() {
  const { t, i18n } = useTranslation(); 
  const { data: subscripers, isLoading: subLoading, isFetching: subFetching, isError: subError, refetch: subRefetch } = useGetTeacherSubscripersQuery();
  const students = subscripers?.data;
  return (
    <div className="bg-white rounded-xl flex flex-col justify-start items-start p-4 gap-4 min-w-[274px] w-full group hover:shadow-lg">
      <p className="text-[18px] font-semibold text-black">
        {t("activity.recentActivity")} 
      </p>
      {subscripers?.data?.slice(0,2).map((activity) => {
      const lessons = activity?.items[0].contents.length > 0 ? "full course" : activity?.items[0]?.content_data_object?.title;
        return (
          <div key={activity.id} className="flex items-start justify-start gap-3">
            <span className="bg-primary p-3 rounded-full text-white text-xl cursor-pointer">
              <FaUserGraduate />
            </span>
            <div>
              <p className="text-[16px] font-normal text-gray-600">
              {
  i18n.language === "ar" 
    ? `قام ${activity?.consumer_data_object?.first_name} ${activity?.consumer_data_object?.last_name} بشراء ${lessons ? "كورس" : "حصه"} الخاص بك ${activity?.items[0].course_data_object?.title}` 
    : `${activity?.consumer_data_object?.first_name} ${activity?.consumer_data_object?.last_name} has purchased your ${lessons ? "course" : "session"} ${activity?.items[0].course_data_object?.title}.`
}

                <span className="text-sm text-green-600 px-1">{activity?.items[0].course_data_object?.title &&  lessons} </span>
              </p>
              <p className="text-[16px] font-medium text-black">
                {i18n.language === "ar" ? activity.courseNameAR : activity.courseNameEn} 
              </p>
            </div>
          </div>
        )
      }
      )}
      
    </div>
  );
}
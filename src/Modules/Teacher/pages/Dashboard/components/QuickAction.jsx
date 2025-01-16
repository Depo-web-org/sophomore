import React from "react";
import { UploadCourse } from "../../Courses/Page/CourseStatistics";
import { useTranslation } from "react-i18next"; // Import useTranslation for translation

export default function QuickAction() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="bg-white rounded-xl flex flex-col justify-start items-start p-4 gap-4 w-full min-w-[274px] group hover:shadow-lg">
      <p className="text-[18px] font-semibold text-black">
        {t("quickActions.title")} {/* Translated title */}
      </p>

      <UploadCourse
        title={t("quickActions.addNewCourse")} // Translated button text
        path={"/teacherPanel/courses/addnewcourse"}
        width={"w-full"}
      />
    </div>
  );
}
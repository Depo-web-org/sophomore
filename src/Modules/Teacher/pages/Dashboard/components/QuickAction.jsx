import React from "react";
import { UploadCourse } from "../../Courses/Page/CourseStatistics";

export default function QuickAction() {
  return (
    <div className="bg-white rounded-xl flex flex-col justify-start items-start p-4 gap-4 w-full min-w-[274px] group hover:shadow-lg ">
      <p className="text-[18px] font-semibold text-black">Quick Actions</p>

      <UploadCourse title={"Add A New Course"} path={"/teacherPanel/courses/addnewcourse"} width={'w-full'}/>

    </div>
  );
}

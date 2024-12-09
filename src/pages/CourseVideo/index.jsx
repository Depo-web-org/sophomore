import React from "react";
import CourseInfos from "./components/CourseInfos/CourseInfos";
import Video from "./components/CourseVideo/CourseVideo";

export default function CourseVideo() {
  return (
    <div className="min-h-screen w-full pt-24 container md:w-custom-md xl:w-custom-xl mx-auto 3">
      <div className="flex flex-col items-start justify-start gap-8 ">
        <Video />
        <CourseInfos />
      </div>
    </div>
  );
}

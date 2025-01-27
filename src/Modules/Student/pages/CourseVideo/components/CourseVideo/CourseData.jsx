import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CourseInfos from "../CourseInfos/CourseInfos";
import { useLocation, useParams } from "react-router-dom";

export default function CourseData() {
  const{state}=useLocation()
  console.log(state)
  const {lessonID, courseID}= useParams();
  console.log(lessonID, courseID)

  const selectedVideo= state.filter((selected)=> selected.id=== lessonID)[0]
  console.log(selectedVideo)

  return (
    <div className=" w-full ">
      <div className="flex flex-col items-start justify-start gap-2 w-full lg:w-3/4 ">
        <iframe
          src="https://www.youtube.com/embed/OQjkFQAIOck?si=wEdNFopy_U2h5_tD"
          // title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full    h-[315px] rounded-lg"
        ></iframe>
        <div className="flex flex-row w-full  justify-between items-center  lg:flex-col lg:items-start gap-2 mt-4">

        <p className=" text-lg lg:text-2xl text-white font-medium ">{selectedVideo?.title}</p>
        {/* <p className=" text-sm lg:text-2xl text-[#FFFFFF70] font-medium">
          Introduction to mathematics
        </p> */}
        </div>
      </div>
      <CourseInfos/>
    </div>
  );
}



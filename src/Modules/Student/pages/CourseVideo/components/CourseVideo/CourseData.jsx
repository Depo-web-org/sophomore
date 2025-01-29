import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CourseInfos from "../CourseInfos/CourseInfos";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../../../../../App";

export default function CourseData() {
  const{state}=useLocation()
  const {lessonID, courseID}= useParams();
  const selectedVideo= state?.filter((selected)=> selected.id=== lessonID)[0]

  return (
    <div className=" w-full ">
      <div className="flex flex-col items-start justify-start gap-2 w-full   ">
        <iframe
          src={`${baseUrl}${selectedVideo?.path}${selectedVideo?.video}`}
          // title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full    object-cover lg:h-[315px] rounded-lg"
        ></iframe>
        <div className="flex flex-row w-full  justify-center items-center   lg:flex-col lg:items-start gap-2 mt-4">

        <p className=" text-lg lg:text-2xl text-white font-medium uppercase text-center  ">{selectedVideo?.title}</p>
       
        </div>
      </div>
      <CourseInfos/>
    </div>
  );
}



import React, { useEffect } from "react";
import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";
import useFetch from "../../../../Hooks/UseFetch";
import EnrollCard from "./components/EnrollCard";
import TeacherInfos from "./components/TeacherInfos";
import { useDispatch } from 'react-redux';
import { setTeacherData } from '../../../../Redux/CourseInformationSlice/CourseInformationSlice.js';
import { useParams } from 'react-router-dom';
import { useGetSubjectTeachersQuery } from "../../../../Redux/data/getDataApiSlice.js";
import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard.jsx";
import SkeletonCourseInfo from "../../../../Components/Common/SkeletonCard/SkeletonCourseInfo.jsx";

export default function TeacherDetails() {
  const dispatch = useDispatch();
  const { subjectName , teacherName} = useParams()
  const pathEndPoint=`${subjectName}&only=${teacherName}`
  const { data, isLoading,isFetching } = useGetSubjectTeachersQuery(pathEndPoint);

  const teacher = data?.data?.providers[0];
  const subject = data?.data?.subject;
  const course = data?.data?.course;

  // Dispatch the Redux action inside useEffect
  useEffect(() => {
    if (data) {
      dispatch(setTeacherData({ teacher, subject, course }));
    }
  }, [data, dispatch, teacher, subject, course]);
  if (isFetching) {
    return <SkeletonCourseInfo/>
  }
  return (
    <div className="min-h-screen w-full pt-24 container md:w-custom-md xl:w-custom-xl mx-auto 3    ">
      {/* <Breadcrumbs /> */}
      <div className="flex items-start gap-4 flex-col lg:flex-row justify-between pt-4 lg:pt-8 ">
        <TeacherInfos teacher={teacher} subject={subject} />
        <EnrollCard course={course} />
      </div>
    </div>
  );
}
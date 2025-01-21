import React, { useEffect } from "react";
import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";
import useFetch from "../../../../Hooks/UseFetch";
import EnrollCard from "./components/EnrollCard";
import TeacherInfos from "./components/TeacherInfos";
import { useDispatch } from 'react-redux';
import { setTeacherData } from '../../../../Redux/CourseInformationSlice/CourseInformationSlice.js';
import { useParams } from 'react-router-dom';

export default function TeacherDetails() {
  const dispatch = useDispatch();
  const { subjectName , teacherName} = useParams()
  console.log({ subjectName , teacherName})
  
  const { data, error, loading } = useFetch(
    "https://dev.depowebeg.com/education/api/getSubjectProviders.php?subject=31&only=91"
  );

  const teacher = data?.data?.providers[0];
  const subject = data?.data?.subject;
  const course = data?.data?.course;

  // Dispatch the Redux action inside useEffect
  useEffect(() => {
    if (data) {
      dispatch(setTeacherData({ teacher, subject, course }));
    }
  }, [data, dispatch, teacher, subject, course]);

  return (
    <div className="min-h-screen w-full pt-24 container md:w-custom-md xl:w-custom-xl mx-auto 3">
      <Breadcrumbs />
      <div className="flex items-start gap-4 flex-col lg:flex-row justify-between pt-4 lg:pt-8 ">
        <TeacherInfos teacher={teacher} subject={subject} />
        <EnrollCard course={course} />
      </div>
    </div>
  );
}
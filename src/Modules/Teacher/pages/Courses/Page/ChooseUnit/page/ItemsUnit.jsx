import React, { useState } from 'react';
import GoBack from '../../../components/GoBack';
import { Link, useLocation, useParams } from 'react-router-dom';
import SubmitUnitsModel from './components/SubmitUnitsModel';
import { useSelector } from 'react-redux';
import { useGetTeacherCoursesQuery } from '../../../../../../../Redux/data/getDataApiSlice';
import { useTranslation } from 'react-i18next';
import { FaPlusCircle } from 'react-icons/fa';





const ItemsUnit = () => {
    const { t, i18n } = useTranslation();
  const [modelOpen, setModelOpen] = useState()
  const location = useLocation();
  const {courseID}= useParams()

  const {data,isLoading, isFetching, isError}= useGetTeacherCoursesQuery();

  const selectedCourse= data?.data.filter((course)=> course.id===courseID)[0];

 
  
  
  return (
    <>
      <div className=" w-full  ">
        <GoBack  title={location.pathname.split('/')[3]=== 'editUnit' ? "Edit Lessons" :t("actions.chooseLessons")}/>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  my-8 w-full ">
          {
            selectedCourse?.contents?.length === 0 ? <>
            <div className=" bg-mainGray   bg-opacity-80   text-white h-32  rounded-lg  font-semibold flex justify-center items-center text-center"><p>
              {i18n.languages[0]==="ar" ? " ﻻ يوجد دروس مضافة " : "Empty there is no lessons added"}
              </p>
              </div>
              <div className=" bg-teal-600 hover:scale-105 duration-150 transition-all    text-white h-32  rounded-lg  font-semibold flex justify-center items-center">
              <Link 
                  state={{ selectedCourse }}
                  to={`/teacherPanel/courses/${selectedCourse?.id}`}
                className='h-full w-full flex items-center justify-center  '>
                <FaPlusCircle className='mx-2'/>
                {i18n.languages[0]==="ar" ? " أضف درس  " : "Add Lesson"}
                </Link>
              </div>

            </> :selectedCourse?.contents?.map((i, index) => {
            return (
              <div
                key={i+index} 
                className=" bg-mainGray   text-white h-32  rounded-lg  font-semibold"
              >
                <Link 
                  state={{ selectedCourse }}
                  to={`/teacherPanel/courses/EditLessons/lesson/${i.id}`}
                className='h-full w-full flex items-center justify-center'>
                {i.title}
                </Link>
              </div>
            );
          })}
        </div>
        
        {/* Submit Button  */}
        {/* <div className="w-full  flex items-center justify-end">
          <button onClick={()=>setModelOpen(true)} className="bg-primary py-2 px-10 text-white rounded-md">
            Submit All
          </button>
        </div> */}
        {
          modelOpen&&<SubmitUnitsModel setModelOpen={setModelOpen}/>
        }
      </div>
    </>
  );
};

export default ItemsUnit;

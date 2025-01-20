import React, { useState } from 'react';
import GoBack from '../../../components/GoBack';
import { Link, useLocation, useParams } from 'react-router-dom';
import SubmitUnitsModel from './components/SubmitUnitsModel';
import { useSelector } from 'react-redux';
import { useGetTeacherCoursesQuery } from '../../../../../../../Redux/data/getDataApiSlice';





const ItemsUnit = () => {
  const [modelOpen, setModelOpen] = useState()
  const location = useLocation();
  const {lessonID}= useParams()

  const {data,isLoading, isFetching, isError}= useGetTeacherCoursesQuery();

  const selectedCourse= data?.data.filter((course)=> course.id===lessonID)[0];
  console.log(selectedCourse)
  // Log All CourseInfo which added by teacher
  
  
  return (
    <>
      <div className=" w-full">

        
        {/* Head Title */}
        {/* location.pathname.split('/')[3]=== 'editUnit' ? "Edit Units" :"Choose Unit" */}
        <GoBack  title={location.pathname.split('/')[3]=== 'editUnit' ? "Edit Lessons" :"Choose Lessons"}/>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  my-8 w-full ">
          {selectedCourse?.contents?.map((i, index) => {
            return (
              <div
                key={i+index} 
                className=" bg-mainGray   text-white h-32  rounded-lg  font-semibold"
              >
                <Link   to={`/teacherPanel/courses/EditLessons/lessons/${i.title}`}
 className='h-full w-full flex items-center justify-center'>
                {i.title}
                </Link>
              </div>
            );
          })}
        </div>
        
        {/* Submit Button  */}
        <div className="w-full  flex items-center justify-end">
          <button onClick={()=>setModelOpen(true)} className="bg-primary py-2 px-10 text-white rounded-md">
            Submit All
          </button>
        </div>
        {
          modelOpen&&<SubmitUnitsModel setModelOpen={setModelOpen}/>
        }
      </div>
    </>
  );
};

export default ItemsUnit;

import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function LearningCard({ course, path, image,contents }) {
const lessonName =contents.length>1?"full course": contents[0]?.title
const courseName =contents.length>0?contents[0]?.course_data?.title: course?.title

  return (
    <div>
      <div className="flex flex-col w-[auto]   group">
        <Link state={contents} to={path}>
          <div className="relative w-full group   rounded-lg">
            <img
              src={image}
              alt="learning card"
              width={300}  
              height={200} 
                loading="lazy"
              className="w-full  object-cover   rounded-lg duration-200 transition-all"
            />
            <div className="absolute -bottom-5 left-[50%] translate-x-[-50%] group-hover:bottom-1/2 duration-300  group-hover:scale-105 transition-all z-10">
              <img
                src={
                  course?.isFinished
                    ? "/images/MyLearning/Group.svg"
                    : "/images/MyLearning/Group1.svg"
                }
                alt="play"
                className="w-8 lg:w-  "
              />
            </div>
            <div className="bg-black bg-opacity-75 inset-0 h-0 absolute group-hover:h-full group-hover:w-full duration-500 transition-all "/>
            
          </div>
          <div className="flex items-center justify-between w-full pt-5 lg:pt-6 flex-wrap">
            <p className="text-sm lg:text-xl font-medium text-white">{course?.title || courseName}</p>
            <p className="text-xs lg:text-sm font-normal my-4 text-[#FFFFFF57]">
             ({lessonName})
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

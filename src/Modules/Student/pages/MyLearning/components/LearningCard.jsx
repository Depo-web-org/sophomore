import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function LearningCard({ course, path, image,contents }) {
  console.log(contents.length)
  console.log(contents)
  
const lessonName =contents.length>1?"full course": contents[0].title


  return (
    <div>
      <div className="flex flex-col w-[auto]  min-h-[328px] group">
        <Link state={contents} to={path}>
          <div className="relative w-full min-h-[285px] group   rounded-lg">
            <img
              src={image}
              alt="learning card"
              className="w-full min-h-[285px] object-cover   rounded-lg duration-200 transition-all"
            />
            <div className="absolute -bottom-5 left-[50%] translate-x-[-50%] group-hover:bottom-1/2 duration-300  group-hover:scale-105 transition-all z-10">
              <img
                src={
                  course.isFinished
                    ? "/images/MyLearning/Group.svg"
                    : "/images/MyLearning/Group1.svg"
                }
                alt="play"
                className="w-12 lg:w-14  "
              />
            </div>
            <div className="bg-black bg-opacity-75 inset-0 h-0 absolute group-hover:h-full group-hover:w-full duration-500 transition-all ">

            </div>
          </div>
          <div className="flex items-center justify-between w-full pt-2">
            <p className="text-xl font-medium text-white">{course.title}</p>
            <p className="text-sm font-normal my-4 text-[#FFFFFF57]">
             ({lessonName})
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

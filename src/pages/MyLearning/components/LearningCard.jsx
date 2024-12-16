import { Link } from "react-router-dom";

export default function LearningCard({ course, path ,image }) {
  return (
    <div>
      <div className="flex flex-col w-[auto]  min-h-[328px]">
        <Link to={path}>
          <div className="relative w-full min-h-[285px]">
            <img
              src={image}
              alt="learning card"
              className="w-full min-h-[285px] object-cover rounded-lg"
            />
            <div className="absolute bottom-[-38px] left-[50%] translate-x-[-50%]">
              <img
                src={
                  course.isFinished
                    ? "/MyLearning/Group.svg"
                    : "/MyLearning/Group1.svg"
                }
                alt="play"
                className="w-16 lg:w-20 h-20"
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full pt-2">
            <p className="text-xl font-medium text-white">{course.name}</p>
            <p className="text-base font-normal  text-[#FFFFFF57]">
              {course.grade}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

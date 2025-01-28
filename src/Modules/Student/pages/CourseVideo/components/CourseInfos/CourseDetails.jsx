import { HiInformationCircle } from "react-icons/hi";
import { useLocation, useParams } from "react-router-dom";

export default function CourseDetails() {
  const{state}=useLocation()
  const {lessonID, courseID}= useParams();

  const selectedVideo= state.filter((selected)=> selected.id=== lessonID)[0]

  return (
    <div className="flex items-start justify-center lg:justify-start gap-2 ">
      
      <p className="text-sm lg:text-xl  font-medium text-gray-300 ">
      <HiInformationCircle className="text-lg size-7 text-start text-secondary inline-block " /> 
      {selectedVideo?.description}
      </p>
    </div>
  );
}

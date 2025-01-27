import React from "react";
import { Link,  useLocation,  useParams } from "react-router-dom";

export default function CourseMaterial() {
  const {courseID}=useParams()

  return (
    <div className="flex flex-col items-start justify-start gap-4 lg:gap-8">
      <UnitTest params={courseID} />
      <Material />
    </div>
  );
}

function UnitTest({params}) {
  return (
    <div className="flex flex-col md:items-start justify-center w-full gap-2">
      <p className="text-lg md:text-xl font-bold text-white">Unit Test</p>
      <div className="flex justify-between items-center gap-2 w-full border p-2 lg:p-4 rounded-lg">
        <p className="text-base md:text-lg font-semibold text-white">
          Unit Test
        </p>
        <button className="text-white text-sm md:text-lg font-semibold buttonHover px-2  lg:px-4 py-2  rounded-md">
        <Link to={`/mylearning/course/${params.toLowerCase()}/quiz`}>
          Start Test
          </Link>
        </button>
      </div>
    </div>
  );
}

function Material() {
  const{state}=useLocation()
  console.log(state)
  const {lessonID, courseID}= useParams();

  const selectedVideo= state.filter((selected)=> selected.id=== lessonID)[0]
  console.log(selectedVideo)

  return (
    <>
      <div className="flex flex-col items-start justify-center w-full gap-2">
        <p className="text-lg md:text-xl font-bold text-white">
          Course Material
        </p>
     
          <div
 
            className="flex justify-between items-center w-full gap-2 border p-2 lg:p-4 rounded-lg"
          >
            <p className="text-sm md:text-lg font-semibold text-white">
              {selectedVideo.title}
            </p>
            <a
              href={selectedVideo.pdf}
              download={selectedVideo.pdf}
            className="text-white text-sm md:text-lg font-semibold  px-2  lg:px-4 py-2 buttonHover  rounded-md">
              Download
            </a>
          </div>

      </div>
    </>
  );
}

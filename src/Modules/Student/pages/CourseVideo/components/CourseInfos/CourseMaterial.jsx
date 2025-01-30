import React from "react";
import { Link,  useLocation,  useParams } from "react-router-dom";
import { baseUrl } from "../../../../../../App";
import { useTranslation } from "react-i18next";

export default function CourseMaterial() {
  const {courseID}=useParams()
const {i18n}=useTranslation()

// console.log(i18n.language)
  return (
    <div className="flex flex-col items-start justify-start gap-4 lg:gap-8">
      <UnitTest params={courseID} i18n={i18n} />
      <Material i18n={i18n} />
    </div>
  );
}

function UnitTest({params,i18n}) {
  return (
    <div className="flex flex-col md:items-start justify-center w-full gap-2 ">
      <p className="text-lg md:text-xl font-bold text-white">  {
            i18n.language === 'ar' ? "أختبار الدرس" : " Unit Test"
          }
          </p>
      <div className="flex justify-between items-center gap-2 w-full border p-2 lg:p-4 rounded-lg">
        <p className="text-base md:text-lg font-semibold text-white">
          {
            i18n.language === 'ar' ? "أختبار الدرس" : " Unit Test"
          }
        </p>
        <button className="text-white text-sm md:text-lg font-semibold buttonHover px-2  lg:px-4 py-2  rounded-md">
        <Link to={`/mylearning/course/${params.toLowerCase()}/quiz`}>
         
          {
            i18n.language === 'ar' ? "ابدء الآختبار" : " Start Test"
          }
          </Link>
        </button>
      </div>
    </div>
  );
}

function Material({i18n}) {
  const { state } = useLocation();
  const { lessonID } = useParams();

  // Assuming `state` is an array
  const selectedVideo = state.filter((selected) => selected.id === lessonID)[0];

  return (
    <>
      <div className="flex flex-col items-start justify-center w-full gap-2 ">
        <p className="text-lg md:text-xl font-bold text-white">
         
          {
            i18n.language === 'ar' ? " ملخص الدرس" : " Course Material"
          }
        </p>

        <div className="flex justify-between items-center w-full gap-2 border p-2 lg:p-4 rounded-lg">
          <p className="text-sm md:text-lg font-semibold text-white">
            {selectedVideo.title}
          </p>
          <a
            href={`${baseUrl}${selectedVideo.path}${selectedVideo.pdf}`} 
            download={selectedVideo.pdf} 
            className="text-white text-sm md:text-lg font-semibold px-2 lg:px-4 py-2 buttonHover rounded-md"
          >
             {
            i18n.language === 'ar' ? "  تحميل" : " Download"
          }
            
          </a>
        </div>
      </div>
    </>
  );
}


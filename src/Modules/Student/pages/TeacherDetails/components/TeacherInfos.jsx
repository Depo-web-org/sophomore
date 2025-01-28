import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";
import { useTranslation } from "react-i18next";
import { baseUrl } from "../../../../../App";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { useSelector } from 'react-redux';


export default function TeacherInfos({teacher,subject}) {
  const { t,i18n } = useTranslation();
  return (
    <>
      <div className=" flex items-start justify-start flex-col lg:gap-6 w-full  ">
        <div className="flex justify-start items-center gap-4 xl:gap-8  ">
          <img 
          alt="teacher"
          className="w-2/5 rounded-3xl "
          src={teacher?.photo? `${baseUrl}${teacher?.path}${teacher?.photo}`:"data:image/png;base64,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"}
           />
          <div  className="flex items-start justify-start flex-col gap-2   ">
            <p dir="ltr" className="text-xl lg:text-3xl  xl:text-3xl font-semibold leading-6 text-white now">
                {teacher?.first_name} {teacher?.last_name}
            </p>
            <p className="text-sm md:text-base  font-normal leading-5 text-[#FFFFFF66] uppercase">
            {/* {t("teacherInfos.jobTitle")} */}
              {i18n.languages[0]==="ar" ? subject?.name_ar : subject?.name}
            </p>

         
            <div className="flex items-center justify-between gap-2">
        
          <div  onClick={() => window.location.href = `mailto:${teacher?.email}`} className="bg-white rounded-md overflow-hidden p-1">
          <SiGmail   className="text-lg text-red-800 cursor-pointer"/>
          </div>
          {/* <img src="/images/TeacherDetails/Facebook.svg" alt="facebook" className="cursor-pointer"   onClick={() => window.location.href = "mailto:example@example.com"}/> */}
          <div className="bg-green-500 rounded-full overflow-hidden">
          <IoLogoWhatsapp onClick={() => window.location.href = `tel:${teacher?.phone_number }`}   className="text-3xl text-white cursor-pointer"/>
          </div>
          </div>

          </div>
        </div>

        <div className="  ">
          <Tabs />
        </div>

        <div className=" py-4 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export function AboutTab() {
  const { t ,i18n} = useTranslation();
  const { teacher, subject, course } = useSelector((state) => state.courseInformation); 
  // console.log(i18n.language)
  return (
    <div className="text-white flex items-start justify-start w-full xl:w-3/4  ">
      <p className="text-base lg:text-lg font-medium lg:font-semibold leading-7 ">
      <img src="/images/TeacherDetails/About.svg" alt="svg" className="pt-1 inline-block mx-1  " />

      {i18n.language === "ar" ? (
          // Arabic content
          <>
            {teacher?.first_name} {teacher?.last_name} هو مدرس {subject?.name_ar} متحمس وملتزم يتمتع بخبرة
            في إلهام الطلاب عبر الصفوف. بقدرته القوية على تبسيط المفاهيم المعقدة،
            يقوم {teacher?.first_name} بإنشاء دروس تفاعلية وجذابة تلائم أنماط التعلم المتنوعة.
          </>
        ) : (
          // English content
          <>
            {teacher?.first_name} {teacher?.last_name} is a passionate and dedicated {subject?.name} teacher
            with experience inspiring students across grades. With a strong ability to simplify
            complex concepts, {teacher?.first_name} creates engaging and interactive lessons tailored
            to diverse learning styles.
          </>
        )}





      </p>
    </div>
  );
}

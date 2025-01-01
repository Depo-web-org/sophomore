import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

export default function TeacherInfos() {
  return (
    <>
      <div className=" flex items-start justify-start flex-col lg:gap-6 w-full ">
        <div className="flex justify-start items-start gap-4 xl:gap-8">
          <img src="/images/TeacherDetails/Frame 38.png" alt="teacher" />
          <div className="flex items-start justify-start flex-col gap-2 lg:gap-3 ">
            <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-6 text-white">
              Omar Gad
            </p>
            <p className="text-sm md:text-base  font-normal leading-5 text-[#FFFFFF66]">
              Math Teacher
            </p>
            <div className="flex items-center justify-between gap-4">
              <img src="/images/TeacherDetails/Facebook.svg" alt="facebook" />
              <img src="/images/TeacherDetails/ig.svg" alt="ig" />
            </div>
          </div>
        </div>
        <div className=" ">
          <Tabs />
        </div>

        <div className=" py-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export function AboutTab() {
  return (
    <div className="text-white flex items-start justify-start w-full xl:w-3/4 ">
      <p className="text-base lg:text-lg font-medium lg:font-semibold leading-7 ">
      <img src="/images/TeacherDetails/About.svg" alt="svg" className="pt-1 inline mr-2  " />
        Omar is a passionate and dedicated Math teacher with 4 years of
        experience inspiring students across Grade 1 to Grade 12. With a strong
        ability to simplify complex concepts, Ayman creates engaging and
        interactive lessons tailored to diverse learning styles.
      </p>
    </div>
  );
}

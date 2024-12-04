import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

export default function TeacherInfos() {
  return (
    <>
      <div className="flex items-start justify-start flex-col gap-6">
        <div className="flex justify-start items-start gap-8">
          <img src="/TeacherDetails/Frame 38.png" alt="teacher" />
          <div className="flex items-start justify-start flex-col gap-3">
            <p className="text-[36px] font-semibold leading-[54px] text-white">
              Omar Gad
            </p>
            <p className="text-[16px] font-normal leading-[18.75px] text-[#FFFFFF66]">
              Math Teacher
            </p>
            <div className="flex items-center justify-center gap-2">
              <img src="/TeacherDetails/Facebook.svg" alt="facebook" />
              <img src="/TeacherDetails/ig.svg" alt="ig" />
            </div>
          </div>
        </div>
        <Tabs />
        <div className="pt-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export function AboutTab() {
  return (
    <div className="text-white flex items-start justify-start w-3/4 gap-2">
      <img src="/TeacherDetails/About.svg" alt="svg" className="pt-1" />
      <p className="text-[18px] font-semibold leading-[27px]">
        Omar is a passionate and dedicated Math teacher with 4 years of
        experience inspiring students across Grade 1 to Grade 12. With a strong
        ability to simplify complex concepts, Ayman creates engaging and
        interactive lessons tailored to diverse learning styles.
      </p>
    </div>
  );
}

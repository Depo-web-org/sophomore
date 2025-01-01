import React from "react";
import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

export default function CourseInfos() {
  return (
    <div className="w-full md:w-2/3">
      <div className="w-full lg:w-[257px]">
        <Tabs />
      </div>

      <div className="py-6">
        <Outlet />
      </div>
    </div>
  );
}

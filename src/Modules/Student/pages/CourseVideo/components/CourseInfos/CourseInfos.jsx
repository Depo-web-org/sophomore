import React from "react";
import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

export default function CourseInfos() {
  return (
    <div className="w-full md:w-2/3 pt-12">
      <div className="w-full lg:w-72">
        <Tabs />
      </div>

      <div className="py-6">
        <Outlet />
      </div>
    </div>
  );
}

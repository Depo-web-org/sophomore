import React from "react";
import Tabs from "./Tabs";
import { Outlet } from "react-router-dom";

export default function CourseInfos() {
  return (
    <div>
      <div className="">
        <Tabs />
      </div>

      <div className="py-6">
        <Outlet />
      </div>
    </div>
  );
}

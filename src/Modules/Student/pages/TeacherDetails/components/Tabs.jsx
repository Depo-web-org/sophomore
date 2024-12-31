import { NavLink, useParams } from "react-router-dom";

export default function Tabs() {
  const { schoolName, gradeName, subjectName, teacherName } = useParams();
  return (
    <div>
      <div className=" pt-5 ">
        <div className="border-b  border-gray-200    ">
          <nav className="mb-1 flex gap-6  w-auto " aria-label="Tabs">
            <NavLink
              to={`/school/${schoolName}/grade/${gradeName}/subject/${subjectName}/teacher/${teacherName}`}
              end
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              About
            </NavLink>

            <NavLink
              to="course-details"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Course Details
            </NavLink>

            <NavLink
              to="reviews"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Reviews
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

import { NavLink, useParams } from "react-router-dom";

export default function Tabs() {
  const { courseName } = useParams();
  return (
    <div>
      <div className="">
        <div className="border-b  border-gray-200">
          <nav className="mb-[4px] flex gap-6" aria-label="Tabs">
            <NavLink
              to={`/mylearning/course/${courseName}`}
              end
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Details
            </NavLink>

            <NavLink
              to="comments"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Comments
            </NavLink>

            <NavLink
              to="material"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Material
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

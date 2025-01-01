import { NavLink, useParams } from "react-router-dom";

export default function Tabs() {
  const { courseName } = useParams();
  return (
    <div>
      <div className="w-full ">
        <div className="border-b  border-gray-200 ">
          <nav className="mb-1 flex gap-6 justify-center lg:justify-start" aria-label="Tabs">
            <NavLink
              to={`/mylearning/course/${courseName}`}
              end
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm lg:text-base font-medium text-white hover:text-secondary"
            >
              Details
            </NavLink>

            <NavLink
              to="comments"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm lg:text-base font-medium text-white hover:text-secondary"
            >
              Comments
            </NavLink>

            <NavLink
              to="material"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm lg:text-base font-medium text-white hover:text-secondary"
            >
              Material
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

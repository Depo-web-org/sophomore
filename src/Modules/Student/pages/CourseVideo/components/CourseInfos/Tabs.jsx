import { NavLink, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export default function Tabs() {
  const {lessonID, courseID}= useParams();
  const { t } = useTranslation(); // Initialize translation hook
  const{state}=useLocation()

  
  return (
    <div>
      <div className="w-full border-b border-gray-200 ">

          <nav className="mb-1 flex gap-6 justify-center lg:justify-start" aria-label="Tabs">
            <NavLink
            state={state}
              to={`/mylearning/course/${courseID}/lesson/${lessonID}`}
              end
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm lg:text-base font-medium text-white hover:text-secondary"
            >
              {t("tabs.details")} {/* Translated */}
            </NavLink>

            <NavLink
                        state={state}

              to="comments"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm lg:text-base font-medium text-white hover:text-secondary"
            >
              {t("tabs.comments")} 
            </NavLink>

            <NavLink
                        state={state}

              to="material"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm lg:text-base font-medium text-white hover:text-secondary"
            >
              {t("tabs.material")} {/* Translated */}
            </NavLink>
          </nav>
        </div>
      </div>
  );
}

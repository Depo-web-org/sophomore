import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  
  
  const breadcrumbs = useMemo(
    () =>
      pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        if (
          ["school", "grade", "subject", "teacher"].includes(name.toLowerCase())
        ) {
          return null;
        }

        const displayName =
          decodeURIComponent(name).charAt(0).toUpperCase() +
          decodeURIComponent(name).slice(1).replace(/-/g, " ");

        return (
          <li key={routeTo} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mx-1"
              viewBox="0 0 20 20"
              fill="#536CB3"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {!isLast ? (
              <Link to={routeTo} className="text-white hover:text-primary">
                {displayName}
              </Link>
            ) : (
              <span className="text-gray-500">{displayName}</span>
            )}
          </li>
        );
      }),
    [pathnames]
  );

  return (
    <nav aria-label="Breadcrumb" className="py-2 px-4">
      <ol className="flex flex-wrap items-center text-sm gap-2">
        <li className="flex">
          <Link to="/" className="text-white hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </li>
        {breadcrumbs.filter(Boolean)}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

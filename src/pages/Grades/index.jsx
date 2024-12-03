import { staticSchools } from "../../Helpers/Static";
import { Link, useParams, Outlet } from "react-router-dom";

export const Grade = () => {
  const { schoolId } = useParams();
  console.log(schoolId);
  const school = staticSchools.find((s) => s.id === schoolId);
  console.log(school);
  return (
    <div>
      <h2>{school.name} - Grades</h2>
      <ul>
        {school.grades.map((grade) => (
          <li key={grade.id}>
            <Link
              to={`/school/${schoolId}/grade/${grade.id}`}
              className="bg-red-400"
            >
              {grade.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

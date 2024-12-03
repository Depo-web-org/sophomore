// import { staticSchools } from "../../Helpers/Static";
// import { Link, useParams, Outlet } from "react-router-dom";

export const Grade = () => {
  //   const { schoolId } = useParams();
  //   console.log(schoolId);
  //   const school = staticSchools.find((s) => s.id === schoolId);
  //   console.log(school);
  return (
    <>
      <div className="bg-slate-900 min-h-screen pt-24 px-4 lg:px-[124px]">
        <div className="w-full">
          <p className="text-4xl text-white font-semibold leading-[54px] text-left">
            What is your current school grade ?
          </p>
        </div>
      </div>
    </>
    // <div>
    //   <h2>{school.name} - Grades</h2>
    //   <ul>
    //     {school.grades.map((grade) => (
    //       <li key={grade.id}>
    //         <Link
    //           to={`/school/${schoolId}/grade/${grade.id}`}
    //           className="bg-red-400"
    //         >
    //           {grade.name}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    //   <Outlet />
    // </div>
  );
};

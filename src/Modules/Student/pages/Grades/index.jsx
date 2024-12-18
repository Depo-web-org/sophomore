import { useParams } from "react-router-dom";
import useFetch from "../../../../Hooks/UseFetch";
import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";
import CardInfo from "../../../../Components/Common/CardInfo/CardInfo";
import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard";

/* eslint-disable no-unused-vars */

export const Grade = () => {
  const { data, error, loading } = useFetch(
    "https://os1907.github.io/Schools/grades/Schoolgrades.json"
  );
  const { schoolName } = useParams();
  return (
    <>
      <div className="bg-slate-900 min-h-screen py-32 container w-full md:w-custom-md xl:w-custom-xl mx-auto ">
        <div className="w-full">
          <Breadcrumbs />
          <p className="text-4xl text-white font-semibold leading-[54px] text-left pb-4 md:pb-10 xl:pb-20">
            What is your current school grade?
          </p>
        </div>
        <div className="flex flex-col py-3 lg:gap-y-10 ">
          {
            data ? data?.Schoolgrades.map((grade) => (
              <div className="pt-8" key={grade.name}>
                <p className="text-white text-2xl font-semibold leading-[42px]">
                  {grade.name}
                </p>
                <div className="grid grid-cols-6  lg:grid-cols-12 gap-4 ">
                  {grade.grades.map((gradeItem) => (
                    <div
                      key={gradeItem.imageUrl}
                      className="col-span-3 lg:col-span-4"
                    >
                      <CardInfo
                        item={gradeItem}
                        path={`/school/${schoolName}/grade/${gradeItem.name}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )) : <div className=" w-full grid grid-cols-1 lg:grid-cols-3 "><SkeletonCard/></div>
          }


        </div>
      </div>
    </>
  );
};

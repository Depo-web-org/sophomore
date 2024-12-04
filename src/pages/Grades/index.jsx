import { useParams } from "react-router-dom";
import CardInfo from "../../Components/Common/CardInfo/CardInfo";
import useFetch from "../../Hooks/UseFetch";
/* eslint-disable no-unused-vars */

export const Grade = () => {
  const { data, error, loading } = useFetch(
    "https://os1907.github.io/Schools/grades/Schoolgrades.json"
  );
  const { schoolName } = useParams();
  return (
    <>
      <div className="bg-slate-900 min-h-screen pt-24 px-4 lg:px-[124px]">
        <div className="w-full">
          <p className="text-4xl text-white font-semibold leading-[54px] text-left">
            What is your current school grade?
          </p>
        </div>
        <div className="flex flex-col py-3">
          {data?.Schoolgrades.map((grade) => (
            <div className="pt-8" key={grade.name}>
              <p className="text-white text-2xl font-semibold leading-[42px]">
                {grade.Name}
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
          ))}
        </div>
      </div>
    </>
  );
};

import { useParams } from "react-router-dom";
import CardInfo from "../../Components/Common/CardInfo/CardInfo";
import useFetch from "../../Hooks/UseFetch";
/* eslint-disable no-unused-vars */

const Subjects = () => {
  const { data, error, loading } = useFetch(
    "https://os1907.github.io/Schools/grades/subject/subject.json"
  );
  const { gradeName, schoolName } = useParams();

  return (
    <>
      <section className="min-h-screen container w-full md:w-custom-md xl:w-custom-xl mx-auto 3 pt-32 ">
        <div>
          <h2 className="text-white  text-lg lg:text-4xl font-semibold  pb-4 md:pb-10 xl:pb-20">
            What Subject do you want ?
          </h2>
        </div>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4">
          {data?.subject.map((subj) => (
            <div key={subj.id} className=" col-span-3 lg:col-span-4">
              <CardInfo
                item={subj}
                path={`/school/${schoolName}/grade/${gradeName}/subject/${subj.name}`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Subjects;

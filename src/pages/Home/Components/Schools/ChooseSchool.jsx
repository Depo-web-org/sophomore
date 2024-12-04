import CardInfo from "../../../../Components/Common/CardInfo/CardInfo";
import useFetch from "../../../../Hooks/UseFetch";

export default function ChooseSchool() {
const {data,error,loading}=useFetch('https://os1907.github.io/Schools/Schools.json')
console.log(data,error,loading)
  return (
    <section className="my-20">
      <div className="text-white font-bold">
        <span className="block text-2xl md:text-4xl pb-2">
          Get Started Now!
        </span>
        <span className="text-2xl cursor-pointer leading-10">
          What type of school do you attend ?
        </span>
      </div>

      <div className="grid grid-cols-6  lg:grid-cols-12 gap-4 ">
        {data?.Schools?.map((item) => {
          return (
            <div key={item.id} className=" col-span-3 lg:col-span-4">
              <CardInfo item={item} path={`/school/${item.Name}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

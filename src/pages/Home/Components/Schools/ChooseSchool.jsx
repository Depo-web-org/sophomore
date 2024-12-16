import CardInfo from "../../../../Components/Common/CardInfo/CardInfo";
import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard";
import useFetch from "../../../../Hooks/UseFetch";

export default function ChooseSchool() {
  const { data } = useFetch(
    "https://os1907.github.io/Schools/Schools.json"
  );
  return (
    <section className="py-8 lg:py-20">
      <div className="text-white font-bold pb-4 lg:pb-8">
        <p className=" text-2xl lg:text-3xl
          xl:text-4xl pb-1 sm:pb-2">
          Get Started Now!
        </p>
        <p className="text-sm md:text-base lg:text-2xl cursor-pointer lg:leading-10">
          What type of school do you attend ?
        </p>
      </div>

      <div className="grid grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-4 ">
{
  data ? 
    data?.Schools?.map((item) => {
      return (
        <div key={item.id} className="col-span-6 sm:col-span-3 lg:col-span-4"> 
          <CardInfo item={item} path={`/school/${item.name}`} />
        </div>
      );
    }) : <div  className="col-span-12 w-full grid grid-cols-1 lg:grid-cols-3 "> 
     <SkeletonCard/>
  </div>
}

      </div>
    </section>
  );
}



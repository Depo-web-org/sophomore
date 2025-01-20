import { Link } from "react-router-dom";
import { SkeletonCard } from "../../../../../../Components/Common/SkeletonCard/SkeletonCard";
import useFetch from "../../../../../../Hooks/UseFetch";
import { useTranslation } from "react-i18next";
import { baseUrl } from "../../../../../../App";
import { useGetSchoolsQuery } from "../../../../../../Redux/data/getDataApiSlice";

export default function ChooseSchool() {
  const {data}=useGetSchoolsQuery()
  const { t,i18n } = useTranslation();
  const token=localStorage.getItem('Token') 
  return (
    <section className="py-8 lg:py-20">
      <div className="text-white font-bold pb-4 lg:pb-8">
        {
         token ?   <p className="text-2xl lg:text-3xl xl:text-4xl pb-1 sm:pb-2">
         {t("chooseSchool.title2")}
       </p>:  <>
             <p className="text-2xl lg:text-3xl xl:text-4xl pb-1 sm:pb-2">
          {t("chooseSchool.title")}
        </p>
        <p className="text-sm md:text-base lg:text-2xl cursor-pointer lg:leading-10">
          {t("chooseSchool.subtitle")}
        </p>
            </>

        }
       
      </div>

      <div className="grid grid-cols-6 lg:grid-cols-12 gap-4">
        {data ? (
          // data?.Schools?.map((item) => (
          //   <div key={item.id} className="col-span-3 lg:col-span-4">
          //     <CardInfo item={item} path={`/school/${item.name}`} />
          //   </div>
          // ))
          data?.data?.map((item)=>(
            <div key={item.id} className="col-span-6 lg:col-span-12 grid grid-cols-6 lg:grid-cols-12   gap-2 sm:gap-4 mb-10">
             <div className="col-span-6 lg:col-span-12">
             <h4
          className="lg:text-xl
             xl:text-3xl font-bold text-white bg-[#1E2A4A] border border-primary rounded-full inline-block py-2 px-4 "
        >
         {i18n.language === "ar" ? item.name_ar:item.name}
              </h4>
             </div>
            {
              item.grades.map((grade)=>(
                <div key={grade.id} className="col-span-3 lg:col-span-4 rounded-2xl">
                {/* <CardInfo item={item} path={`/school/${item.name}`} /> */}
                <div className="relative overflow-hidden mt-2 lg:mt-4 rounded-3xl group ">
            <Link to={`/school/${item.name}/grade/${grade.id}`} >
              <img
              // src= {` /education/assets/meta/ ${item.image }`}.
                // src={'/images/Grade/HighSchool.webp'}
                src = { `${ baseUrl +grade.path+grade.image }`}
              alt={i18n.language === "ar" ? item.name_ar:item.name   }
              className="h-32 w-full sm:h-full object-cover group-hover:scale-110 group-hover:opacity-30 transition duration-500 ease-in-out"
              />
              
            <h4
              className="absolute bottom-[5%] left-[5%] text-nowrap text-sm sm:text-xl 
                 xl:text-2xl font-bold text-white   group-hover:bottom-1/2  group-hover:translate-y-1/2 
                 group-hover:left-1/2 group-hover:-translate-x-1/2 duration-300 transition-all "
            >
              {i18n.language === "ar" ? grade.name_ar:grade.name}
             
            </h4>
          </Link>
        
        </div>
            </div>
              ))
            }
        </div>
          ))
        ) : (
          <div className="col-span-12 w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
            <SkeletonCard />
          </div>
        )}
      </div>
    </section>
  );
}




// old 
// {data ? (
//   // data?.Schools?.map((item) => (
//   //   <div key={item.id} className="col-span-3 lg:col-span-4">
//   //     <CardInfo item={item} path={`/school/${item.name}`} />
//   //   </div>
//   // ))
//   data?.data?.map((item)=>(
//     <div key={item.id} className="col-span-3 lg:col-span-4 rounded-2xl">
//     {/* <CardInfo item={item} path={`/school/${item.name}`} /> */}
//     <div className="relative overflow-hidden mt-2 lg:mt-4 rounded-3xl group ">
// <Link to={`/school/${item.name}`} >
//   <img
//   // src= {` /education/assets/meta/ ${item.image }`}
//   alt={i18n.language === "ar" ? item.name_ar:item.name   }
//   className="h-32 w-full sm:h-full object-cover group-hover:scale-110 group-hover:opacity-30 transition duration-500 ease-in-out"
//   />
// <h4
//   className="absolute bottom-[5%] left-[5%] text-nowrap text-sm sm:text-xl lg:text-2xl
//      xl:text-4xl font-bold text-white   group-hover:bottom-1/2  group-hover:translate-y-1/2 
//      group-hover:left-1/2 group-hover:-translate-x-1/2 duration-300 transition-all "
// >
//   {i18n.language === "ar" ? item.name_ar:item.name}
// </h4>
// </Link>
// </div>
// </div>
//   ))
// ) : (
//   <div className="col-span-12 w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
//     <SkeletonCard />
//   </div>
// )}
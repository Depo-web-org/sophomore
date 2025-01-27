import { Link, useParams } from "react-router-dom";
import useFetch from "../../../../Hooks/UseFetch";
import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";
import CardInfo from "../../../../Components/Common/CardInfo/CardInfo";
import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard";
import { useTranslation } from "react-i18next";
import { baseUrl } from "../../../../App";
import { useGetGradesQuery } from "../../../../Redux/data/getDataApiSlice";

const subjectImageMap = {
  algebra: '/education/assets/meta/subjects/algebra.webp',
  arabic: '/education/assets/meta/subjects/arabic.webp',
  art: '/education/assets/meta/subjects/art.webp',
  chemistry: '/education/assets/meta/subjects/chemistry.webp',
  english: '/education/assets/meta/subjects/english.webp',
  geography: '/education/assets/meta/subjects/geography.webp',
  history: '/education/assets/meta/subjects/history.webp',
  math: '/education/assets/meta/subjects/math.webp',
  physics: '/education/assets/meta/subjects/physics.webp',
  science: '/education/assets/meta/subjects/science.webp',
  social: '/education/assets/meta/subjects/social.webp',
};
const Subjects = () => {
  const { t, i18n } = useTranslation();
  const { gradeName, schoolName } = useParams();
  
const {data}= useGetGradesQuery()

// function to filter data
const nameOfGrade=data?.data.filter(i=>i.id === gradeName)[0]
const Subjects = data?.data.filter(i=>i.id === gradeName)[0]?.subjects

// console.log(data?.data.filter(i=>i.id === gradeName)[0])

  return (
    <>
      <section className="min-h-screen container w-full md:w-custom-md xl:w-custom-xl mx-auto py-24 lg:py-32  ">
        <div>
          {/* <Breadcrumbs /> */}
          <h2 className="text-white text-lg lg:text-4xl font-semibold pb-4 md:pb-10 xl:pb-20">
            {t("subjectsPage.title")} {/* Translated title */}
          </h2>
        </div>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4">
        { 
  Subjects && Subjects.length > 0 ? (
    [...Subjects].reverse().map((subject, index) => {

      // Get the image path based on the subject name (convert to lowercase for consistency)
      const imagePath = subjectImageMap[subject.name.toLowerCase()] || '/education/assets/meta/subjects/default.webp';

      return (
        <div key={subject.id} className="col-span-3 lg:col-span-4 rounded-2xl">
          <div className="relative overflow-hidden mt-2 lg:mt-4 rounded-3xl group">
            <Link to={`/school/${schoolName}/grade/${gradeName}/subject/${subject.id}`}>
            {/* <Link to={`/school/${subject.name}/subject/${subject.id}`}> */}
            {/* /school/${schoolName}/grade/${gradeName}/subject/${englishSubj?.name} */}
              <img
                src={`${baseUrl+imagePath}`}
                alt={i18n.language === "ar" ? subject.name_ar : subject.name}
                className="h-32 w-full sm:h-full object-cover group-hover:scale-110 group-hover:opacity-30 transition duration-500 ease-in-out"
              />
              <h4
                className="absolute uppercase bottom-[5%] left-[5%] text-nowrap text-sm sm:text-xl xl:text-2xl font-bold text-white group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 duration-300 transition-all"
              >
                {i18n.language === "ar" ? subject.name_ar : subject.name.toLowerCase()}
              </h4>
            </Link>
          </div>
        </div>
      );
    })
  ) : (
    <div className="col-span-12 w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
      <SkeletonCard />
    </div>
  )
}
        </div>
      </section>
    </>
  );
};

export default Subjects;




// old Data
  // data ? translatedData?.map((subj, index) => {
          //     // Use English name for the URL

          //     return (
          //       <div key={subj.id} className="col-span-3 lg:col-span-4">
          //         <CardInfo
          //           item={subj}
          //           path={`/school/${schoolName}/grade/${gradeName}/subject/${englishSubj?.name}`}
          //         />
          //       </div>
          //     );
          //   })
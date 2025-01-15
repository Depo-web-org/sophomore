import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../../../Hooks/UseFetch";
import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";
import CardInfo from "../../../../Components/Common/CardInfo/CardInfo";
import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard";
import { useTranslation } from "react-i18next";

const AsData={
  "Schoolgrades": [
    {
      "nameAr": "الابتدائية",
      "nameEn": "Elementary",
      "grades": [
        {
          "nameAr": "الصف الأول الابتدائي",
          "nameEn": "1st grade",
          "imageUrl": "/images/Grade/Elementary.webp"
        },
        {
          "nameAr": "الصف الثاني الابتدائي",
          "nameEn": "2nd grade",
          "imageUrl": "/images/Grade/Elementary.webp"
        },
        {
          "nameAr": "الصف الثالث الابتدائي",
          "nameEn": "3rd grade",
          "imageUrl": "/images/Grade/Elementary.webp"
        },
        {
          "nameAr": "الصف الرابع الابتدائي",
          "nameEn": "4th grade",
          "imageUrl": "/images/Grade/Elementary.webp"
        },
        {
          "nameAr": "الصف الخامس الابتدائي",
          "nameEn": "5th grade",
          "imageUrl": "/images/Grade/Elementary.webp"
        },
        {
          "nameAr": "الصف السادس الابتدائي",
          "nameEn": "6th grade",
          "imageUrl": "/images/Grade/Elementary.webp"
        }
      ]
    },
    {
      "nameAr": "الإعدادية",
      "nameEn": "Preparatory School",
      "grades": [
        {
          "nameAr": "الصف الأول الإعدادي",
          "nameEn": "1st Preparatory",
          "imageUrl": "/images/Grade/MiddleSchool.webp"
        },
        {
          "nameAr": "الصف الثاني الإعدادي",
          "nameEn": "2nd Preparatory",
          "imageUrl": "/images/Grade/MiddleSchool.webp"
        },
        {
          "nameAr": "الصف الثالث الإعدادي",
          "nameEn": "3rd Preparatory",
          "imageUrl": "/images/Grade/MiddleSchool.webp"
        }
      ]
    },
    {
      "nameAr": "الثانوية العامة",
      "nameEn": "Secondary School",
      "grades": [
        {
          "nameAr": "الصف الأول الثانوي",
          "nameEn": "1st Secondary",
          "imageUrl": "/images/Grade/HighSchool.webp"
        },
        {
          "nameAr": "الصف الثاني الثانوي",
          "nameEn": "2nd Secondary",
          "imageUrl": "/images/Grade/HighSchool.webp"
        },
        {
          "nameAr": "الصف الثالث الثانوي",
          "nameEn": "3rd Secondary",
          "imageUrl": "/images/Grade/HighSchool.webp"
        }
      ]
    }
  ]
}

export const Grade = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const { t, i18n } = useTranslation();
  const { data, error, loading } = useFetch(
    "https://os1907.github.io/Schools/grades/Schoolgrades.json"
  );
  const { schoolName } = useParams();

  // Determine the current language
  const currentLanguage = i18n.language;

  // Fetch English data for links (always use English for URLs)
  const englishData = data?.en?.Schoolgrades || [];
  // Fetch translated data for display
  const translatedData = data?.[currentLanguage]?.Schoolgrades || [];

  return (
    <>

    {/*  */}
      <div className={`bg-[your-background-color] min-h-screen py-24 ${pathnames.length > 0 ? " lg:py-32 container w-full md:w-custom-md xl:w-custom-xl mx-auto" :""}`}>
        <div className="w-full">
          <p className="text-lg lg:text-4xl text-white font-semibold text-start pb-4 md:pb-10 xl:pb-20">
            {t("gradePage.title")}
          </p>
        </div>
        <div className="flex flex-col py-3 gap-y-4 lg:gap-y-10">
          {loading ? (
            <div className="col-span-12 w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
              <SkeletonCard />
            </div>
          ) : error ? (
            <p className="text-white">{t("gradePage.error")}</p>
          ) : translatedData ? (
            translatedData.map((grade, index) => {
              // Use English grade name for the URL
              const englishGrade = englishData[index];
              return (


              <div className="pt-2" key={grade.name}>
                  <div className="grid grid-cols-6 lg:grid-cols-12 gap-4">
                    {grade.grades.map((gradeItem, gradeIndex) => {
                      // Use English grade item name for the URL
                      const englishGradeItem = englishGrade?.grades[gradeIndex];
                      return (
                        <div
                          key={gradeItem.imageUrl + gradeIndex}
                          className="col-span-3 lg:col-span-4"
                        >
                          <CardInfo
                            item={gradeItem}
                            path={`/school/${schoolName}/grade/${englishGrade?.name}}`}
                          />
                        </div>
                      );
                    })}
                  </div>

                </div>
              );
            })
          ) : (
            <p className="text-white">{t("gradePage.noData")}</p>
          )}
        </div>
      </div>
    </>
  );
};








// import { useLocation, useParams } from "react-router-dom";
// import useFetch from "../../../../Hooks/UseFetch";
// import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";
// import CardInfo from "../../../../Components/Common/CardInfo/CardInfo";
// import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard";
// import { useTranslation } from "react-i18next";

// export const Grade = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);
//   const { t, i18n } = useTranslation();
//   const { data, error, loading } = useFetch(
//     "https://os1907.github.io/Schools/grades/Schoolgrades.json"
//   );
//   const { schoolName } = useParams();

//   // Determine the current language
//   const currentLanguage = i18n.language;

//   // Fetch data for display (based on current language)
//   const schoolGrades = data?.Schoolgrades || [];

//   return (
//     <>
//       <div
//         className={`bg-[your-background-color] min-h-screen py-24 ${
//           pathnames.length > 0
//             ? "lg:py-32 container w-full md:w-custom-md xl:w-custom-xl mx-auto"
//             : ""
//         }`}
//       >
//         <div className="w-full">
//           <p className="text-lg lg:text-4xl text-white font-semibold text-start pb-4 md:pb-10 xl:pb-20">
//             {t("gradePage.title")}
//           </p>
//         </div>
//         <div className="flex flex-col py-3 gap-y-4 lg:gap-y-10">
//           {loading ? (
//             <div className="col-span-12 w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
//               <SkeletonCard />
//             </div>
//           ) : error ? (
//             <p className="text-white">{t("gradePage.error")}</p>
//           ) : schoolGrades.length > 0 ? (
//             schoolGrades.map((grade, index) => {
//               // Use the correct name based on the current language
//               const gradeName =
//                 currentLanguage === "ar" ? grade.nameAr : grade.nameEn;

//               return (
//                 <div className="pt-2" key={gradeName}>
//                   <p className="text-white text-base lg:text-2xl font-semibold lg:leading-[42px]">
//                     {gradeName}
//                   </p>
//                   <div className="grid grid-cols-6 lg:grid-cols-12 gap-4">
//                     {grade.grades.map((gradeItem, gradeIndex) => {
//                       // Use the correct grade name based on the current language
//                       const gradeItemName =
//                         currentLanguage === "ar"
//                           ? gradeItem.nameAr
//                           : gradeItem.nameEn;

//                       return (
//                         <div
//                           key={gradeItem.imageUrl + gradeIndex}
//                           className="col-span-3 lg:col-span-4"
//                         >
//                           <CardInfo
//                             item={{
//                               ...gradeItem,
//                               name: gradeItemName, // Use the translated name
//                             }}
//                             path={`/school/${schoolName}/grade/${gradeItemName}`}
//                           />
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <p className="text-white">{t("gradePage.noData")}</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };



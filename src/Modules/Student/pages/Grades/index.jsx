import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../../../Hooks/UseFetch";
import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";
import CardInfo from "../../../../Components/Common/CardInfo/CardInfo";
import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard";
import { useTranslation } from "react-i18next";

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
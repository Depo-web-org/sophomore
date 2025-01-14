import { useParams } from "react-router-dom";
import useFetch from "../../../../Hooks/UseFetch";
import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";
import CardInfo from "../../../../Components/Common/CardInfo/CardInfo";
import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard";
import { useTranslation } from "react-i18next";

const Subjects = () => {
  const { t, i18n } = useTranslation();
  const { data } = useFetch(
    "https://os1907.github.io/Schools/grades/subject/subject.json"
  );
  const { gradeName, schoolName } = useParams();

  // Get the current language
  const currentLanguage = i18n.language;

  // Fetch English data for links (always use English for URLs)
  const englishData = data?.en?.subject || [];
  // Fetch translated data for display
  const translatedData = data?.[currentLanguage]?.subject || [];

  return (
    <>
      <section className="min-h-screen container w-full md:w-custom-md xl:w-custom-xl mx-auto py-24 lg:py-32">
        <div>
          <Breadcrumbs />
          <h2 className="text-white text-lg lg:text-4xl font-semibold pb-4 md:pb-10 xl:pb-20">
            {t("subjectsPage.title")} {/* Translated title */}
          </h2>
        </div>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4">
          {translatedData ? (
            translatedData.map((subj, index) => {
              // Use English name for the URL
              const englishSubj = englishData[index];
              return (
                <div key={subj.id} className="col-span-3 lg:col-span-4">
                  <CardInfo
                    item={subj}
                    path={`/school/${schoolName}/grade/${gradeName}/subject/${englishSubj?.name}`}
                  />
                </div>
              );
            })
          ) : (
            <div className="col-span-12 w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
              <SkeletonCard />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Subjects;
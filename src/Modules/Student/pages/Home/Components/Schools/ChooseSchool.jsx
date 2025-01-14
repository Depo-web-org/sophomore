import CardInfo from "../../../../../../Components/Common/CardInfo/CardInfo";
import { SkeletonCard } from "../../../../../../Components/Common/SkeletonCard/SkeletonCard";
import useFetch from "../../../../../../Hooks/UseFetch";
import { useTranslation } from "react-i18next";

export default function ChooseSchool() {
  const { data } = useFetch("https://os1907.github.io/Schools/Schools.json");
  const { t } = useTranslation();

  return (
    <section className="py-8 lg:py-20">
      <div className="text-white font-bold pb-4 lg:pb-8">
        <p className="text-2xl lg:text-3xl xl:text-4xl pb-1 sm:pb-2">
          {t("chooseSchool.title")}
        </p>
        <p className="text-sm md:text-base lg:text-2xl cursor-pointer lg:leading-10">
          {t("chooseSchool.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-4">
        {data ? (
          data?.Schools?.map((item) => (
            <div key={item.id} className="col-span-3 lg:col-span-4">
              <CardInfo item={item} path={`/school/${item.name}`} />
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

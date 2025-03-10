
 const Sophomore = [
   {
     id: "Personalized",
     Name: "Personalized Learning Paths",
     dec: "Customized curriculum based on your goals and current skill level",
     img: "/images/Schools/Group-1.svg",
   },
   {
     id: "Expert",
     Name: "Expert Instructors",
     dec: "Learn from industry professionals with real-world experience",

     img: "/images/Schools/Icon-2.svg",
   },
   {
     id: "Interactive",
     Name: "Interactive Content",
     dec: "Engage with hands-on projects and real-time feedback",

     img: "/images/Schools/Icon-3.svg",
   },
 ];

import { useTranslation } from "react-i18next";

const ChooseCard = () => {
  const { t } = useTranslation();
  const features = t("chooseCard.features", { returnObjects: true });

  return (
    <section className="min-h-[498px] pb-8 lg:pb-20">
      <div className="text-white pb-4 lg:pb-8">
        <p className="text-2xl lg:text-4xl font-bold md:leading-10 inline text-nowrap">
          {t("chooseCard.title")}
          <span className="text-lg lg:text-4xl mx-2  bg-gradient-to-r from-primary via-primary uppercase to-secondary bg-clip-text text-transparent inline-block">
            {t("chooseCard.sophomore")}
          </span>
        </p>
      </div>
      <div className="flex justify-center md:justify-between items-center flex-wrap md:flex-row gap-4 pt-6">
        {features.map((item ,index) => (
          <div
            key={item.id}
            className="sm:h-60 xl:h-auto w-full flex-initial sm:flex-auto md:flex-1 rounded-md bg-white cursor-pointer flex flex-col items-center justify-center lg:gap-y-5 py-6 px-4 xl:py-14 xl:px-8 hover:shadow-[4px_4px_0px_0px_#b54d2f] duration-500"
          >
            <div className="choose-icon">
              <img
                src={item.img}
                alt={item.name}
                className="size-16 md:size-20 xl:size-32 rounded-md"
              />
            </div>
            <div className="min-h-24 text-sm sm:text-sm xl:text-lg font-normal text-center">
              <p className="leading-[18.75px] py-1 text-black font-semibold">
                {item.name}
              </p>
              <p className="leading-[16.41px] font-medium pt-1 text-[#0000007D] mx-10 lg:mx-0">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseCard;


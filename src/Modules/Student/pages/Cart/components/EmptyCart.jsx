import { Link } from "react-router-dom";
import WishCartTitle from "../../../../../Components/Common/WishCartTitle/WishCartTitle";
import { useTranslation } from "react-i18next";

const EmptyCart = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="container w-full md:w-custom-md xl:w-custom-xl mx-auto min-h-[calc(100vh-128px)]">
        <div className="pt-32 relative">
          {/* Translated WishCartTitle */}
          <WishCartTitle name={t("cart.title")} items={" 🙁"} />
        </div>

        <div className="flex items-center justify-between flex-col lg:flex-row mt-10 gap-y-5 lg:mt-20">
          <div className="flex items-center justify-center flex-1 flex-col gap-y-2 lg:gap-y-5">
            {/* Translated Empty Cart Message */}
            <p className="text-white text-2xl lg:text-4xl xl:text-6xl font-semibold">
              {t("cart.emptyMessage")}
            </p>

            {/* Translated Start Shopping Button */}
           <Link to="/" className="bg-primary w-4/5 lg:w-1/2 text-sm lg:text-base rounded-[5px] text-white px-8 py-4 font-bold transition-colors ease-out duration-300 hover:bg-primary-hover">   <button
              type="submit"
              
            >
            {t("cart.startShopping")}
            </button></Link>
          </div>
          <div className="xl:w-2/5">
            <img src="/images/empty.svg" alt="" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default EmptyCart;
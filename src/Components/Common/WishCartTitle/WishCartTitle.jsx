import { useTranslation } from "react-i18next";

const WishCartTitle = ({name, items}) => {
  const { t,i18n } = useTranslation(); 
  const currentLanguage = i18n.language;

  return (
    <>
    <div className="my-5 flex justify-between border-b border-white items-center pb-4 w-full  "> 
            <h2 className="text-white  text-3xl lg:text-4xl font-semibold  ">
           {name} 
          </h2>
          <p className="text-2xl text-white font-semibold">
         {items}  
         <span className="mx-1">
         { typeof(items) === "number"&& `${currentLanguage==="ar" ? "عناصر" :"Items"}`       }
         </span>
          </p>
            </div>
    </>
  )
}

export default WishCartTitle
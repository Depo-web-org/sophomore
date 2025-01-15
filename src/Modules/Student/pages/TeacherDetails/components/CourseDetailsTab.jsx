import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";


const CourseDetailsTab = () => { 
   const { t } = useTranslation();
  // Sample data
  const accordionData = [
    {
      id: "item1",
      title: t("accordion.0.title"),
      content: t("accordion.0.content"),
    },
    {
      id: "item2",
      title: t("accordion.1.title"),
      content: t("accordion.1.content"),
    },
    {
      id: "item3",
      title: t("accordion.2.title"),
      content: t("accordion.2.content"),
    },
    {
      id: "item4",
      title: t("accordion.3.title"),
      content: t("accordion.3.content"),
    },
  ];

  

  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter((item) => item !== id)
        : [...prevOpenItems, id]
    );
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-4 text-white">
      {accordionData.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div
            key={item.id}
            className=" border-gray-200 bg-[#FFFFFF26] rounded-xl border-l-2 border-l-secondary"
          >
            <button
              className="flex justify-between items-center w-full py-4 px-6 text-left"
              onClick={() => toggleItem(item.id)}
            >
              <span className="font-medium">{item.title}</span>
              <FiPlus
                className={`w-6 h-6 border rounded-full transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="py-4 px-6  border-t-gray-700">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseDetailsTab;

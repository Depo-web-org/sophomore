import { useState } from "react";
import { FiPlus } from "react-icons/fi";

// Sample data
const accordionData = [
  {
    id: "item1",
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: "item2",
    title: "What are React Hooks?",
    content:
      "Hooks are functions that let you use state and other React features without writing a class.",
  },
  {
    id: "item3",
    title: "What is JSX?",
    content:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
  },
  {
    id: "item4",
    title: "What is the Virtual DOM?",
    content:
      'The Virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM.',
  },
];

const CourseDetailsTab = () => {
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
                className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
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

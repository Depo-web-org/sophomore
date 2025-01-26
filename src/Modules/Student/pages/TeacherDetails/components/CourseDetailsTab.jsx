import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { TbPhotoVideo } from "react-icons/tb";
import { useSelector } from "react-redux";

// // const CourseDetailsTab = () => {
// //    const { t } = useTranslation();
// //   // Sample data
// //   const accordionData = [
// //     {
// //       id: "item1",
// //       title: t("accordion.0.title"),
// //       content: t("accordion.0.content"),
// //     },
// //     {
// //       id: "item2",
// //       title: t("accordion.1.title"),
// //       content: t("accordion.1.content"),
// //     },
// //     {
// //       id: "item3",
// //       title: t("accordion.2.title"),
// //       content: t("accordion.2.content"),
// //     },
// //     {
// //       id: "item4",
// //       title: t("accordion.3.title"),
// //       content: t("accordion.3.content"),
// //     },
// //   ];

// //   const [openItems, setOpenItems] = useState([]);
// //   const { i18n } = useTranslation();

// //   const toggleItem = (id) => {
// //     setOpenItems((prevOpenItems) =>
// //       prevOpenItems.includes(id)
// //         ? prevOpenItems.filter((item) => item !== id)
// //         : [...prevOpenItems, id]
// //     );
// //   };
// // // console.log()
// //   return (
// //     <div className="w-full mx-auto flex flex-col gap-4 text-white ">
// //       {accordionData.map((item , i) => {
// //         const isOpen = openItems.includes(item.id);
// //         return (
// //           <div
// //             key={item.id}
// //             className={` border-gray-200 bg-[#FFFFFF26] rounded-xl border-s-4 ${i===0 ?  "border-s-emerald-600" : "border-s-secondary" }`}
// //           >
// //             <button
// //               className="flex justify-between items-center w-full py-4 px-6 text-left"
// //               onClick={() => toggleItem(item.id)}
// //             >
// //               <p className="font-medium">{i===0 ? ` ${i18n.languages[0] === "ar" ? "التجربة المجانية ":" Free Trial" } ` : item.title }</p>
// //               {/* <FiPlus

// //               /> */}
// //               <MdKeyboardArrowUp  className={`w-6 h-6  transition-transform duration-300 ease-in-out ${
// //                   isOpen ? "rotate-180" : ""
// //                 }`} />
// //             </button>
// //             <div
// //               className={`transition-all duration-300 ease-in-out overflow-hidden ${
// //                 isOpen ? "max-h-screen" : "max-h-0"
// //               }`}
// //             >
// //               <div className="py-4 px-6  border-t-gray-700">
// //                 {/* <p>{item.content}</p> */}
// // {/* Title */}
// //                 <div className="flex items-center justify-start gap-x-2 ">
// //                 <TbPhotoVideo className="text-3xl" />
// //                 <p className="text-sm md:text-base  font-normal  text-white uppercase">Lesson One</p>
// //                 </div>
// //                 {/* Description */}
// //                 <div className="flex items-center justify-start gap-x-2 mt-4 ">
// //                 <p className="text-sm md:text-base  font-normal  text-white uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
// //                 </div>

// //   {/* Material */}
// //         <div className="flex items-start  gap-x-2 mt-4 flex-col w-full ">
// //                 <div className="flex items-center justify-start gap-x-2  ">
// //                 <FaFilePdf />
// //                 <p className="text-sm md:text-base  font-normal  text-white ">PDF ( For Lesson )</p>
// //                 </div>

// //                 <div className="flex items-center justify-start gap-x-2  ">
// //                 <PiExamFill />
// //                 <p className="text-sm md:text-base  font-normal  text-white "> {i18n.languages[0] === "ar" ? "أمتحان الدؤس" : "Lesson Exam"}   </p>
// //                 </div>

// //                 </div>

// // {/* Buttons */}
// //                 <div className="flex items-center justify-between gap-x-4   min-w-full my-2">
// //             <button
// //               className="buttonHover cursor-pointer text-white rounded-md p-2 w-full font-semibold  "
// //             >
// //                   {t('enroll_now')}
// //             </button>
// //             <button
// //               className="font-semibold bg-white cursor-pointer text-primary rounded-md p-2  w-full hover:bg-primary hover:text-white duration-200 transition-all"
// //             >
// //           {t('add_to_cart')}
// //             </button>
// //           </div>
// //               </div>
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default CourseDetailsTab;

// // const accordionData = [
// //   {
// //     id: "61",
// //     title: "Lesson one",
// //     content: {
// //       course: "93",
// //       dateof: "2025-01-26 09:49:53",
// //       dateof_stamp: 1737877793,
// //       description: "intro to Lesson One",
// //       path: "/education/assets/courses/2/18/30/110/",
// //       pdf: "1737877793.3685.pdf",
// //       price: "100.00",
// //       provider: "110",
// //       video: "1737877793.3626.mp4",
// //     },
// //   },
// //   {
// //     id: "62",
// //     title: "Lesson two",
// //     content: {
// //       course: "94",
// //       dateof: "2025-01-27 10:00:00",
// //       dateof_stamp: 1737964200,
// //       description: "intro to Lesson Two",
// //       path: "/education/assets/courses/2/19/31/111/",
// //       pdf: "1737964200.4786.pdf",
// //       price: "120.00",
// //       provider: "111",
// //       video: "1737964200.4725.mp4",
// //     },
// //   },
// //   {
// //     id: "63",
// //     title: "Lesson three",
// //     content: {
// //       course: "95",
// //       dateof: "2025-01-28 11:30:00",
// //       dateof_stamp: 1738050600,
// //       description: "intro to Lesson Three",
// //       path: "/education/assets/courses/2/20/32/112/",
// //       pdf: "1738050600.5887.pdf",
// //       price: "150.00",
// //       provider: "112",
// //       video: "1738050600.5823.mp4",
// //     },
// //   },
// //   {
// //     id: "64",
// //     title: "Lesson four",
// //     content: {
// //       course: "96",
// //       dateof: "2025-01-29 14:00:00",
// //       dateof_stamp: 1738138800,
// //       description: "intro to Lesson Four",
// //       path: "/education/assets/courses/2/21/33/113/",
// //       pdf: "1738138800.6987.pdf",
// //       price: "180.00",
// //       provider: "113",
// //       video: "1738138800.6923.mp4",
// //     },
// //   },
// // ];

// const CourseDetailsTab = () => {
//   const { course } = useSelector((state) => state.courseInformation); 
// const contents = [...(course?.contents || [])].reverse(); 
//   const { t } = useTranslation();
//   const [openItems, setOpenItems] = useState([]);
//   const { i18n } = useTranslation();

//   const toggleItem = (id) => {
//     setOpenItems((prevOpenItems) =>
//       prevOpenItems.includes(id)
//         ? prevOpenItems.filter((item) => item !== id)
//         : [...prevOpenItems, id]
//     );
//   };
//   return (
//     <div className="w-full  flex flex-col gap-4 text-white  ">
//       {contents?.map((item, i) => {
//         const isOpen = openItems.includes(item.id);
//         return (
//           <div
//             key={item.id}
//             className={` border-gray-200 bg-[#FFFFFF26] rounded-xl border-s-4 w-full ${
//               i === 0 ? "border-s-emerald-600" : "border-s-secondary"
//             }`}
//           >
//             <button
//               className="flex justify-between items-center w-full py-4 px-6 text-left"
//               onClick={() => toggleItem(item.id)}
//             >
//               <p className="font-medium">
//                 {i === 0
//                   ? ` ${
//                       i18n.languages[0] === "ar"
//                         ? "التجربة المجانية "
//                         : " Free Trial"
//                     } `
//                   : item.title}
//               </p>
//               <MdKeyboardArrowUp
//                 className={`w-6 h-6  transition-transform duration-300 ease-in-out ${
//                   isOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//             <div
//               className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                 isOpen ? "max-h-screen" : "max-h-0"
//               }`}
//             >
//               <div className="py-4 px-6  border-t-gray-700">
//                 <div className="flex items-center justify-start gap-x-2 ">
//                   <TbPhotoVideo className="text-3xl" />
//                   <p className="text-sm md:text-base  font-normal  text-white uppercase">
//                     {item.description}
//                   </p>
//                 </div>

//                 <div className="flex items-start  gap-x-2 mt-4 flex-col w-full ">
//                   <div className="flex items-center justify-start gap-x-2  ">
//                     <FaFilePdf />
//                     <p className="text-sm md:text-base  font-normal  text-white ">
//                       PDF ( {item.pdf} )
//                     </p>
//                   </div>

//                   <div className="flex items-center justify-start gap-x-2  ">
//                     <PiExamFill />
//                     <p className="text-sm md:text-base  font-normal  text-white ">
//                       {" "}
//                       {i18n.languages[0] === "ar"
//                         ? "أمتحان الدؤس"
//                         : "Lesson Exam"}{" "}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between gap-x-4   min-w-full my-2">
//                   <button className="buttonHover cursor-pointer text-white rounded-md p-2 w-full font-semibold  ">
//                     {t('enroll_now')}
//                   </button>
//                   <button className="font-semibold bg-white cursor-pointer text-primary rounded-md p-2  w-full hover:bg-primary hover:text-white duration-200 transition-all">
//                     {t('add_to_cart')}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CourseDetailsTab;



const CourseDetailsTab = () => {
  const { course } = useSelector((state) => state.courseInformation); 
  const contents = [...(course?.contents || [])].reverse(); 
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState([]);
  const { i18n } = useTranslation();

  const toggleItem = (id) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter((item) => item !== id)
        : [...prevOpenItems, id]
    );
  };

  return (
    <div className="w-full flex flex-col gap-4 text-white">
      {contents.length === 0 ? (
        <div className="text-center py-6">
          <p className=" font-medium text-gray-300 text-2xl ">
            {/* {t("no_lessons_added")}  */}
            { i18n.languages[0] === "ar" ? " لم يتم إضافة دروس بعد !" : " No lessons added ! "}
          </p>
        </div>
      ) : (
        contents.map((item, i) => {
          const isOpen = openItems.includes(item.id);
          return (
            <div
              key={item.id}
              className={`border-gray-200 bg-[#FFFFFF26] rounded-xl border-s-4 ${
                i === 0 ? "border-s-emerald-600" : "border-s-secondary"
              }`}
            >
              <button
                className="flex justify-between items-center w-full py-4 px-6 text-left"
                onClick={() => toggleItem(item.id)}
              >
                <p className="font-medium">
                  {i === 0
                    ? ` ${
                        i18n.languages[0] === "ar"
                          ? "التجربة المجانية "
                          : " Free Trial"
                      } `
                    : item.title}
                </p>
                <MdKeyboardArrowUp
                  className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="py-4 px-6 border-t-gray-700">
                  <div className="flex items-center justify-start gap-x-2 ">
                    <TbPhotoVideo className="text-3xl" />
                    <p className="text-sm md:text-base font-normal text-white uppercase">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-start gap-x-2 mt-4 flex-col w-full ">
                    <div className="flex items-center justify-start gap-x-2">
                      <FaFilePdf />
                      <p className="text-sm md:text-base font-normal text-white">
                        PDF ({item.pdf})
                      </p>
                    </div>

                    <div className="flex items-center justify-start gap-x-2 ">
                      <PiExamFill />
                      <p className="text-sm md:text-base font-normal text-white">
                        {i18n.languages[0] === "ar"
                          ? "أمتحان الدرس"
                          : "Lesson Exam"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 min-w-full my-2 flex-wrap ">
                    <button
                    onClick={()=> console.log(item)}
                    className="buttonHover cursor-pointer text-white rounded-md p-2 w-full font-semibold">
                      {t("enroll_now")}
                    </button>
                    <button 
      onClick={()=> console.log(item)}
                    className="font-semibold bg-white cursor-pointer text-primary rounded-md p-2 w-full hover:bg-primary hover:text-white duration-200 transition-all">
                      {t("add_to_cart")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CourseDetailsTab;

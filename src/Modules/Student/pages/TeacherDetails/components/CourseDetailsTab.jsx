import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { TbPhotoVideo } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../../../../Redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useGetStudentCoursesQuery } from "../../../../../Redux/data/getDataApiSlice";

const CourseDetailsTab = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { course, teacher,subject } = useSelector((state) => state.courseInformation); 
  const contents = [...(course?.contents || [])].reverse(); 
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState([]);
  const { i18n } = useTranslation();
  
const { data, isLoading, isError } = useGetStudentCoursesQuery();
const LessonsStudent = Array.isArray(data?.data)
  ? data?.data
      .map(i => i.items)
      .filter(items => Array.isArray(items) && items.length > 0)
      .map(i => i[0])
      .filter(item => item !== undefined)
      .map(i => i.content)
  : [];

const LessonsStudentFullContent = Array.isArray(data?.data) &&
  Array.isArray(data?.data[0]?.items) &&
  Array.isArray(data?.data[0]?.items[0]?.contents)
  ? data?.data[0]?.items[0]?.contents.map(i => i.id)
  : [];


  const isEnrolled = useMemo(() => {
    if (!isLoading && !isError && Array.isArray(data?.data)) {
      const coursesEnrolled = data?.data.flatMap((course) =>
        Array.isArray(course?.items)
          ? course.items.map((item) => item.course)
          : []
      );
      return coursesEnrolled?.includes(course?.id);
    }
    return false; 
  }, [data, isLoading, isError, course?.id]);

  const toggleItem = (id) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter((item) => item !== id)
        : [...prevOpenItems, id]
    );
  };
  
  const handleAddLessonToCart = (lesson) => {
    const lessonInfo = {
      teacherName: `${teacher?.first_name} ${teacher?.last_name}`,
      subjectName: subject?.name,
      courseName: course?.title,
      id: lesson?.id, // Course ID
      courseImage: teacher?.photo,
      imagePath: teacher?.path,
      gradeName: subject?.grade_data?.grade_no,
      enrolledLessons:lesson.title,
      price: lesson.price, // Set the price for the lesson (adjust as needed)
      type: "lesson", // Indicate this is a lesson
    };
    // Dispatch the addToCart action
    dispatch(addToCart(lessonInfo));
    // toast.success("Lesson added to cart successfully!");
  };

  const handleBuyFullCourse = (lesson) => {
    handleAddLessonToCart(lesson)
    navigate("/cart"); // Navigate to cart page
  };

  const cartItems = useSelector((state) => state.cart.items);
  // check if all course in cart 
  const isFullCourseSelected = cartItems?.some(
    (item) => item.id === course?.id );

  return (
    <div className="w-full flex flex-col gap-4 text-white  ">
      {contents.length === 0 ? (
        <div className="text-center  py-2 lg:py-6">
          <p className=" font-medium text-gray-300 text-base  lg:text-2xl ">
            {/* {t("no_lessons_added")}  */}
            { i18n.languages[0] === "ar" ? " لم يتم إضافة دروس بعد !" : " No lessons added ! "}
          </p>
        </div>
      ) : (
        contents.map((item, i) => {
          const isOpen = openItems.includes(item.id);
          const isLessonSelected = cartItems?.some(cartItem => cartItem.id === item.id);

          return (
            <div
              key={item.id}
              className={`border-gray-200 bg-[#FFFFFF26] rounded-xl border-s-4 ${
                item.price === "0.00" ? "border-s-emerald-600" : "border-s-secondary"
              }`}
            >
              <button
                className="flex justify-between items-center w-full py-4 px-6 text-left"
                onClick={() => toggleItem(item.id)}
              >
                <p className="font-medium">
                  { item.price === "0.00"
                    ? ` ${
                        i18n.languages[0] === "ar"
                          ? ` مجاني : ${item.title}`
                          : ` Free :  ${item.title}`
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


            {
              ! LessonsStudent?.includes(item.id) && !LessonsStudentFullContent?.includes(item.id)  &&   <div className="flex items-center justify-between gap-4 min-w-full my-2 flex-wrap  ">
              <button
disabled={isFullCourseSelected ||isLessonSelected}
className={`rounded-md p-2 w-full text-white ${
isFullCourseSelected || isLessonSelected ? "bg-gray-400 cursor-not-allowed" : "buttonHover cursor-pointer"
}`}
onClick={()=> handleBuyFullCourse(item)}
>
{
i18n.language ==='ar'? "سجل الآن":"Enroll Now"
}
              
                </button>
                <button 
                 disabled={isFullCourseSelected ||isLessonSelected}
  onClick={()=> handleAddLessonToCart(item)}
                className={`font-semibold bg-white text-primary rounded-md p-2 w-full hover:bg-primary hover:text-white duration-200 transition-all  ${
isFullCourseSelected || isLessonSelected ? "cursor-not-allowed" : " cursor-pointer"
}`}>
                 {isFullCourseSelected || isLessonSelected? `${ i18n.language ==='ar'? "موجود مسبقا ":'already in cart'}`: t('add_to_cart')}
                </button>
              </div>
            }     

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

// import { useMemo, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { FaFilePdf } from "react-icons/fa6";
// import { FiPlus } from "react-icons/fi";
// import { MdKeyboardArrowUp } from "react-icons/md";
// import { PiExamFill } from "react-icons/pi";
// import { TbPhotoVideo } from "react-icons/tb";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { addToCart } from "../../../../../Redux/cart/cartSlice";
// import { useNavigate } from "react-router-dom";
// import { useGetStudentCoursesQuery } from "../../../../../Redux/data/getDataApiSlice";
// import { parseJSONSafely } from "../../MyLearning/components/Courses";

// const CourseDetailsTab = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { course, teacher, subject } = useSelector((state) => state.courseInformation); 
//   const contents = [...(course?.contents || [])].reverse(); 
//   const { t } = useTranslation();
//   const [openItems, setOpenItems] = useState([]);
//   const { i18n } = useTranslation();
  
//   const { data, isLoading, isError } = useGetStudentCoursesQuery();
//   const LessonsStudent=data?.data?.map(i=>i.items)?.map(i=>i[0]).map(i=>i.
//     content
//     )

  
//   const isEnrolled = useMemo(() => {
//     if (!isLoading && !isError && Array.isArray(data?.data)) {
//       const coursesEnrolled = data?.data.flatMap((course) =>
//         Array.isArray(course?.items)
//           ? course.items.map((item) => item.course)
//           : []
//       );
//       return coursesEnrolled?.includes(course?.id);
//     }
//     return false; 
//   }, [data, isLoading, isError, course?.id]);
//   const isLessonPurchased = useMemo(() => {
//     if (!isLoading && !isError && Array.isArray(data?.data)) {
//       const purchasedLessons = data?.data.flatMap((course) =>
//         Array.isArray(course?.items)
//           ? course.items.flatMap((item) => item.content_data_object?.id) 
//           : []
//       );
//       return purchasedLessons?.includes("27"); 
//     }
//     return false;
//   }, [data, isLoading, isError]);
  
//   console.log(isLessonPurchased);
  
  
//   const toggleItem = (id) => {
//     setOpenItems((prevOpenItems) =>
//       prevOpenItems.includes(id)
//         ? prevOpenItems.filter((item) => item !== id)
//         : [...prevOpenItems, id]
//     );
//   };
  
//   const handleAddLessonToCart = (lesson) => {
//     const lessonInfo = {
//       teacherName: `${teacher?.first_name} ${teacher?.last_name}`,
//       subjectName: subject?.name,
//       courseName: course?.title,
//       id: lesson?.id, // Course ID
//       courseImage: teacher?.photo,
//       imagePath: teacher?.path,
//       gradeName: subject?.grade_data?.grade_no,
//       enrolledLessons: lesson.title,
//       price: lesson.price, // Set the price for the lesson (adjust as needed)
//       type: "lesson", // Indicate this is a lesson
//     };
//     // Dispatch the addToCart action
//     dispatch(addToCart(lessonInfo));
//   };

//   const handleBuyFullCourse = (lesson) => {
//     handleAddLessonToCart(lesson);
//     navigate("/cart"); // Navigate to cart page
//   };

//   const cartItems = useSelector((state) => state.cart.items);
  
//   // Check if the course is already selected in the cart
//   const isFullCourseSelected = cartItems?.some(
//     (item) => item.id === course?.id
//   );

//   return (
//     <div className="w-full flex flex-col gap-4 text-white">
//       {contents.length === 0 ? (
//         <div className="text-center py-2 lg:py-6">
//           <p className="font-medium text-gray-300 text-base lg:text-2xl">
//             {i18n.languages[0] === "ar"
//               ? "لم يتم إضافة دروس بعد!"
//               : "No lessons added!"}
//           </p>
//         </div>
//       ) : (
//         contents.map((item, i) => {
//           const isOpen = openItems.includes(item.id);
//           const isLessonSelected = cartItems?.some(
//             (cartItem) => cartItem.id === item.id
//           );

//           return (
//             <div
//               key={item.id}
//               className={`border-gray-200 bg-[#FFFFFF26] rounded-xl border-s-4 ${
//                 item.price === "0.00" ? "border-s-emerald-600" : "border-s-secondary"
//               }`}
//             >
        
            
//               <button
//                 className="flex justify-between items-center w-full py-4 px-6 text-left"
//                 onClick={() => toggleItem(item.id)}
//               >
//                 <p className="font-medium">
//                   {item.price === "0.00"
//                     ? `${
//                         i18n.languages[0] === "ar"
//                           ? ` مجاني : ${item.title}`
//                           : `Free :  ${item.title}`
//                       }`
//                     : item.title}
//                 </p>
//                 <MdKeyboardArrowUp
//                   className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
//                     isOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <div
//                 className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                   isOpen ? "max-h-screen" : "max-h-0"
//                 }`}
//               >
//                 <div className="py-4 px-6 border-t-gray-700">
//                   <div className="flex items-center justify-start gap-x-2">
//                     <TbPhotoVideo className="text-3xl" />
//                     <p className="text-sm md:text-base font-normal text-white uppercase">
//                       {item.description}
//                     </p>
//                   </div>

//                   <div className="flex items-start gap-x-2 mt-4 flex-col w-full">
//                     <div className="flex items-center justify-start gap-x-2">
//                       <FaFilePdf />
//                       <p className="text-sm md:text-base font-normal text-white">
//                         PDF ({item.pdf})
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-start gap-x-2">
//                       <PiExamFill />
//                       <p className="text-sm md:text-base font-normal text-white">
//                         {i18n.languages[0] === "ar"
//                           ? "أمتحان الدرس"
//                           : "Lesson Exam"}
//                       </p>
//                     </div>
//                   </div>
//     {
// ! LessonsStudent?.includes(item.id) &&    <div className="flex items-center justify-between gap-4 min-w-full my-2 flex-wrap">
//                     <button
//                       disabled={isFullCourseSelected || isLessonSelected}
//                       className={`rounded-md p-2 w-full text-white ${
//                         isFullCourseSelected || isLessonSelected
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : "buttonHover cursor-pointer"
//                       }`}
//                       onClick={() => handleBuyFullCourse(item)}
//                     >
//                       {i18n.language === "ar" ? "سجل الآن" : "Enroll Now"}
//                     </button>
//                     <button
//                       disabled={isFullCourseSelected || isLessonSelected}
//                       onClick={() => handleAddLessonToCart(item)}
//                       className={`font-semibold bg-white text-primary rounded-md p-2 w-full hover:bg-primary hover:text-white duration-200 transition-all ${
//                         isFullCourseSelected || isLessonSelected
//                           ? "cursor-not-allowed"
//                           : "cursor-pointer"
//                       }`}
//                     >
//                       {isFullCourseSelected || isLessonSelected
//                         ? `${
//                             i18n.language === "ar" ? "موجود مسبقا" : "Already in cart"
//                           }`
//                         : t("add_to_cart")}
//                     </button>
//                   </div>
// }
               

//                 </div>
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default CourseDetailsTab;


// const CourseDetailsTab = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { course, teacher, subject } = useSelector((state) => state.courseInformation);
//   const contents = [...(course?.contents || [])].reverse();
//   const { t, i18n } = useTranslation();
//   const [openItems, setOpenItems] = useState([]);

//   const { data, isLoading, isError } = useGetStudentCoursesQuery();

 
//   const LessonsStudent = Array.isArray(data?.data)
//     ? data?.data?.map(i => i.items)?.map(i => i[0])?.map(i => i.content)
//     : [];

//   const isEnrolled = useMemo(() => {
//     if (!isLoading && !isError && Array.isArray(data?.data)) {
//       const coursesEnrolled = data?.data.flatMap((course) =>
//         Array.isArray(course?.items)
//           ? course.items.map((item) => item.course)
//           : []
//       );
//       return coursesEnrolled?.includes(course?.id);
//     }
//     return false;
//   }, [data, isLoading, isError, course?.id]);

//   const isLessonPurchased = useMemo(() => {
//     if (!isLoading && !isError && Array.isArray(data?.data)) {
//       const purchasedLessons = data?.data.flatMap((course) =>
//         Array.isArray(course?.items)
//           ? course.items.flatMap((item) => item.content_data_object?.id)
//           : []
//       );
//       return purchasedLessons?.includes("27");
//     }
//     return false;
//   }, [data, isLoading, isError]);

//   const toggleItem = (id) => {
//     setOpenItems((prevOpenItems) =>
//       prevOpenItems.includes(id)
//         ? prevOpenItems.filter((item) => item !== id)
//         : [...prevOpenItems, id]
//     );
//   };

//   const handleAddLessonToCart = (lesson) => {
//     const lessonInfo = {
//       teacherName: `${teacher?.first_name} ${teacher?.last_name}`,
//       subjectName: subject?.name,
//       courseName: course?.title,
//       id: lesson?.id, // Course ID
//       courseImage: teacher?.photo,
//       imagePath: teacher?.path,
//       gradeName: subject?.grade_data?.grade_no,
//       enrolledLessons: lesson.title,
//       price: lesson.price, // Set the price for the lesson (adjust as needed)
//       type: "lesson", // Indicate this is a lesson
//     };
//     dispatch(addToCart(lessonInfo));
//   };

//   const handleBuyFullCourse = (lesson) => {
//     handleAddLessonToCart(lesson);
//     navigate("/cart");
//   };

//   const cartItems = useSelector((state) => state.cart.items);

//   const isFullCourseSelected = cartItems?.some(
//     (item) => item.id === course?.id
//   );

//   return (
//     <div className="w-full flex flex-col gap-4 text-white ">
//       {contents.length === 0 ? (
//         <div className="text-center py-2 lg:py-6">
//           <p className="font-medium text-gray-300 text-base lg:text-2xl">
//             {i18n.languages[0] === "ar"
//               ? "لم يتم إضافة دروس بعد!"
//               : "No lessons added!"}
//           </p>
//         </div>
//       ) : (
//         contents.map((item) => {
//           const isOpen = openItems.includes(item.id);
//           const isLessonSelected = cartItems?.some(
//             (cartItem) => cartItem.id === item.id
//           );

//           return (
//             <div
//               key={item.id}
//               className={`border-gray-200 bg-[#FFFFFF26] rounded-xl border-s-4 ${
//                 item.price === "0.00" ? "border-s-emerald-600" : "border-s-secondary"
//               }`}
//             >
//               <button
//                 className="flex justify-between items-center w-full py-4 px-6 text-left"
//                 onClick={() => toggleItem(item.id)}
//               >
//                 <p className="font-medium">
//                   {item.price === "0.00"
//                     ? `${
//                         i18n.languages[0] === "ar"
//                           ? ` مجاني : ${item.title}`
//                           : `Free :  ${item.title}`
//                       }`
//                     : item.title}
//                 </p>
//                 <MdKeyboardArrowUp
//                   className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
//                     isOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <div
//                 className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                   isOpen ? "max-h-screen" : "max-h-0"
//                 }`}
//               >
//                 <div className="py-4 px-6 border-t-gray-700">
//                   <div className="flex items-center justify-start gap-x-2">
//                     <TbPhotoVideo className="text-3xl" />
//                     <p className="text-sm md:text-base font-normal text-white uppercase">
//                       {item.description}
//                     </p>
//                   </div>

//                   <div className="flex items-start gap-x-2 mt-4 flex-col w-full">
//                     <div className="flex items-center justify-start gap-x-2">
//                       <FaFilePdf />
//                       <p className="text-sm md:text-base font-normal text-white">
//                         PDF ({item.pdf})
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-start gap-x-2">
//                       <PiExamFill />
//                       <p className="text-sm md:text-base font-normal text-white">
//                         {i18n.languages[0] === "ar"
//                           ? "أمتحان الدرس"
//                           : "Lesson Exam"}
//                       </p>
//                     </div>
//                   </div>

//                   {!LessonsStudent?.includes(item.id) && (
//                     <div className="flex items-center justify-between gap-4 min-w-full my-2 flex-wrap">
//                       <button
//                         disabled={isFullCourseSelected || isLessonSelected}
//                         className={`rounded-md p-2 w-full text-white ${
//                           isFullCourseSelected || isLessonSelected
//                             ? "bg-gray-400 cursor-not-allowed"
//                             : "buttonHover cursor-pointer"
//                         }`}
//                         onClick={() => handleBuyFullCourse(item)}
//                       >
//                         {i18n.language === "ar" ? "سجل الآن" : "Enroll Now"}
//                       </button>
//                       <button
//                         disabled={isFullCourseSelected || isLessonSelected}
//                         onClick={() => handleAddLessonToCart(item)}
//                         className={`font-semibold bg-white text-primary rounded-md p-2 w-full hover:bg-primary hover:text-white duration-200 transition-all ${
//                           isFullCourseSelected || isLessonSelected
//                             ? "cursor-not-allowed"
//                             : "cursor-pointer"
//                         }`}
//                       >
//                         {isFullCourseSelected || isLessonSelected
//                           ? `${
//                               i18n.language === "ar" ? "موجود مسبقا" : "Already in cart"
//                             }`
//                           : t("add_to_cart")}
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default CourseDetailsTab;

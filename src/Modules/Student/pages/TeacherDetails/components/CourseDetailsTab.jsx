import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { TbPhotoVideo } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../../../../Redux/cart/cartSlice";

const CourseDetailsTab = () => {
  const dispatch = useDispatch();
  const { course, teacher,subject } = useSelector((state) => state.courseInformation); 
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
  console.log(subject)
  console.log(teacher)
  console.log(contents)
  console.log(course)
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
console.log(lessonInfo)
    // Dispatch the addToCart action
    dispatch(addToCart(lessonInfo));
    toast.success("Lesson added to cart successfully!");
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
      onClick={()=> handleAddLessonToCart(item)}
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

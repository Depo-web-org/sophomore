import { useMemo, useState } from "react";
import ModalPackages from "./ModalPackages";
import ModalOops from "./ModalOops";
import { ModalUnits } from "./ModalUnits";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../../Redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import {
  useGetStudentCoursesQuery,
  useGetWishListsQuery,
} from "../../../../../Redux/data/getDataApiSlice";
import {
  useCreateWishListMutation,
  useDeleteWishListMutation,
} from "../../../../../Redux/data/postDataApiSlice";
import { toast } from "react-toastify";

export default function EnrollCard() {
  const navigate = useNavigate();

  const [createWishList] = useCreateWishListMutation();
  const { data: wishlistData, refetch } = useGetWishListsQuery();
  const [deleteWishList] = useDeleteWishListMutation();
  const { teacher, subject, course } = useSelector(
    (state) => state.courseInformation
  );

  const Token = localStorage.getItem("Token");
  const alreadyInWishList = Array.isArray(wishlistData?.data)
    ? wishlistData.data.some((i) => i.course === course?.id)
    : false;

  const WishListItem = Array.isArray(wishlistData?.data)
    ? wishlistData.data.find((i) => i.course === course?.id)
    : null;

  const WishListID = WishListItem ? WishListItem.id : null;

  const handleToggleWishlist = async () => {
    if (!Token)
      toast.warning(
        i18n.language === "ar"
          ? "يجب عليك تسجيل الدخول أولاً!"
          : "You have to login first!"
      );

    try {
      if (alreadyInWishList) {
        if (!WishListID) {
          toast.error(
            i18n.language === "ar"
              ? "لم يتم العثور على العنصر في قائمة الرغبات!"
              : "Wishlist item not found!"
          );
          return;
        }
        const res = await deleteWishList({ id: WishListID });
        if (res.data.code === 0) {
          toast.success(
            i18n.language === "ar"
              ? "تم حذف العنصر من قائمة الرغبات بنجاح!"
              : "Deleted wish list item successfully!"
          );
          await refetch();
        } else {
          toast.error(
            i18n.language === "ar"
              ? "حدث خطأ أثناء إزالة الدورة من قائمة الرغبات!"
              : "Error while removing course from your wishlist!"
          );
        }
      } else {
        const res = await createWishList({ course: course.id });
        if (res.data.code === 0) {
          toast.success(
            i18n.language === "ar"
              ? "تمت إضافة الدورة إلى قائمة الرغبات بنجاح!"
              : "Added course to wishlist successfully!"
          );
          await refetch();
        } else {
          toast.error(
            i18n.language === "ar"
              ? "حدث خطأ أثناء إضافة الدورة إلى قائمة الرغبات!"
              : "Error while adding course to your wishlist!"
          );
        }
      }
    } catch (err) {
      console.log(err);
      if (Token)
        toast.error(
          i18n.language === "ar"
            ? "حدث خطأ ما. يرجى المحاولة مرة أخرى!"
            : "Something went wrong. Please try again!"
        );
    }
  };

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [isModalOopsOpen, setIsModalOopsOpen] = useState(false);
  const [isModalPackagesOpen, setIsModalPackagesOpen] = useState(false);
  const [isModalUnitsOpen, setIsModalUnitsOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const { data, isLoading, isError } = useGetStudentCoursesQuery();

  const isEnrolled = useMemo(() => {
    if (!isLoading && !isError && Array.isArray(data?.data)) {
      const coursesEnrolled = data?.data.flatMap((course) =>
        Array.isArray(course?.items)
          ? course.items.map((item) => item.course)
          : []
      );
      return coursesEnrolled?.includes(course?.id);
    }
    return false; // Default to false if data is unavailable or invalid
  }, [data, isLoading, isError, course?.id]);
  const handleButtonClick = () => {
    // setIsModalUnitsOpen(false);
    // setIsModalPackagesOpen(false);
    // setIsModalOopsOpen(true);
  };
  // Define CourseInfo object
  const CourseInfo = {
    teacherName: `${teacher?.first_name} ${teacher?.last_name}`,
    subjectName: subject?.name,
    courseName: course?.title,
    id: course?.id,
    courseImage: teacher?.photo,
    imagePath: teacher?.path,
    gradeName: subject?.grade_data?.grade_no,
    price: course?.price, // Price of the course or lesson
    enrolledLessons: "full course",
    type: "course", // Default to "course"
  };

  // Handle adding to cart
  const handleAddToCart = (type = "course", lessonId = null) => {
    const itemToAdd = {
      ...CourseInfo,
      type,
      lessonsId: type === "lesson" ? [lessonId] : [], // Set lessonsId for lessons
    };

    dispatch(addToCart(itemToAdd));
  };

  // Handle buying full course
  const handleBuyFullCourse = () => {
    handleAddToCart("course");
    navigate("/cart"); // Navigate to cart page
  };

  const isSelected = cartItems?.some((item) => item.id === CourseInfo.id);

  const handleUnitsPackages = () => {
    setIsModalPackagesOpen(false);
    setIsModalUnitsOpen(true);
  };
  const handleModalPackages = () => {
    setIsModalPackagesOpen(true);
  };
  //   const handleToggleWishlist = async () => {
  //     try {
  //         if (alreadyInWishList) {
  //             const res = await deleteWishList({ id: WishListID });
  //             if (res.data.code === 0) {
  //                 toast.success("Deleted wish list item successfully!");
  //                 refetch()
  //             } else {
  //                 toast.error("Error while removing course from your wishlist!");
  //             }
  //         } else {
  //             const res = await createWishList({ course: course.id });
  //             if (res.data.code === 0) {
  //                 toast.success("Added course to wishlist successfully!");
  //                 refetch()
  //             } else {
  //                 toast.error("Error while adding course to your wishlist!");
  //             }
  //         }
  //     } catch (err) {
  //         console.log(err);
  //         toast.error("Something went wrong. Please try again!");
  //     }
  // };
  return (
    <>
      <div className=" w-full md:min-w-[376px]  bg-slate-600 bg-opacity-25 border border-slate-700 rounded-lg flex flex-col justify-start items-start gap-2 p-4 shadow-[4px_4px_0px_0px_#F15C54] mb-6">
        <p className="text-base lg:text-lg font-semibold lg:leading-[27px] text-primary uppercase">
          {/* {t('course_title')} */}
          {course?.title}
        </p>
        <p className=" text-sm lg:text-base  lg:pt-3 font-normal lg:leading-[18.75px] text-[#FFFFFF66]">
          {/* {t('course_description')} */}
          {course?.notes}
        </p>
        <div className="flex flex-col items-start justify-start gap-4 pt-2 lg:pt-4">
          <div className="flex items-center justify-center gap-1 lg:gap-2  ">
            <img src="/images/TeacherDetails/Frame.svg" alt="Duration icon" />
            <p className="text-sm lg:text-base font-normal leading-[18.75px] text-white">
              {t("duration")}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/TeacherDetails/Frame (1).svg"
              alt="Sessions icon"
            />
            <p className="text-sm lg:text-base  font-normal leading-[18.75px] text-white">
              {t("session_type")}
            </p>
          </div>
          {!isEnrolled && (
            <div className="flex items-center justify-center gap-3 lg:gap-5 min-w-full flex-wrap">
              <button
                disabled={isSelected}
                className={`rounded-md text-sm  lg:text-base p-2   text-white ${
                  isSelected
                    ? "bg-gray-400 cursor-not-allowed"
                    : "buttonHover cursor-pointer"
                }`}
                onClick={handleBuyFullCourse}
              >
                {t("enroll_now")}
              </button>
              <button
                className="bg-white cursor-pointer text-primary rounded-md text-sm  lg:text-base p-2  hover:bg-primary hover:text-white duration-200 transition-all"
                onClick={() => handleAddToCart("course")}
              >
                {isSelected
                  ? `${
                      i18n.language === "ar"
                        ? "موجود مسبقا "
                        : "already in cart"
                    }`
                  : t("add_to_cart")}
              </button>
              <button
                className="bg-white cursor-pointer text-primary rounded-md text-sm  lg:text-base p-2  hover:bg-primary hover:text-white duration-200 transition-all"
                onClick={() => handleToggleWishlist()}
              >
                {/* {isSelected ? `${ i18n.language ==='ar'? "اضف الي السله ":'add to wishlist'}` : t("add_to_cart")} */}

                {alreadyInWishList
                  ? ` ${
                      i18n.language === "ar"
                        ? "حذف  من الرغبات "
                        : "remove wishlist"
                    }`
                  : ` ${
                      i18n.language === "ar"
                        ? "اضف الي الرغبات "
                        : "add to wishlist"
                    }`}
              </button>
            </div>
          )}
        </div>
      </div>

      {isModalOopsOpen && !localStorage.getItem("Token") && (
        <ModalOops setIsModalOopsOpen={setIsModalOopsOpen} />
      )}
      {isModalPackagesOpen && (
        <ModalPackages
          setIsModalPackagesOpen={setIsModalPackagesOpen}
          handleUnitsPackages={handleUnitsPackages}
          handleButtonClick={handleButtonClick}
        />
      )}
      {isModalUnitsOpen && (
        <ModalUnits
          setIsModalUnitsOpen={setIsModalUnitsOpen}
          handleButtonClick={handleButtonClick}
        />
      )}
    </>
  );
}

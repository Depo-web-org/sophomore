import { useDispatch, useSelector } from "react-redux";
import { TeacherCard } from "../Teachers";
import Wishlistempty from "./components/Wishlistempty";
import { removeFromWishlist } from "../../../../Redux/wishlist/wishlistSlice";
import { useTranslation } from "react-i18next";
import { useGetWishListsQuery } from "../../../../Redux/data/getDataApiSlice";
import { useDeleteWishListMutation } from "../../../../Redux/data/postDataApiSlice";

export default function WishList() {
    const {data}=useGetWishListsQuery();
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  // const handleToggleWishlist = (teacher) => {
  //   dispatch(removeFromWishlist({ id: teacher.id, subjectID: teacher.subjectID }));
   
  // };
    const [deleteWishList]=useDeleteWishListMutation()
  const {i18n}=useTranslation()

  return (
    <div className="min-h-screen w-full pt-4 lg:pt-24 container md:w-custom-md xl:w-custom-xl mx-auto">

      {data?.data?.length > 0 ? (
        <>
              
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 w-full pb-5">
        <h2 className="text-white text-xl lg:text-4xl font-semibold pt-20 lg:py-10 text-center block col-span-6 lg:col-span-12 ">
              {i18n.language==="ar"? "قائمة الرغبات الخاصة بك": "Your Wishlist"}
            </h2>
          {data?.data.map((teacher) =>{
            console.log(teacher,{
              subjectID:teacher.course_data.subject,
              teacher:teacher.course_data.provider,
              grade:teacher.course_data.grade,

            })
            return  (
              <div className="col-span-3    lg:col-span-4gap-4 w-full pb-5"  key={`${teacher.id}-${teacher.subjectID}`}> 
              <TeacherCard
              style='" items-center justify-center rounded-md transition hover:shadow-[4px_4px_0px_0px_#F15C54]  "'
                teacher={teacher.course_data?.provider_data}
                subjectData={teacher.course_data?.provider_data}
                // handleToggleWishlist={() => handleToggleWishlist(teacher)}
                wishlist={wishlist}
                linkTo={`/school/${ teacher.schoolName}/grade/${teacher?.course_data.grade}/subject/${ teacher.course_data.subject}/teacher/${teacher.course_data.provider}`}
              />
              </div>
            )
          }
          )}
        </div>
        </>) : (
        <Wishlistempty lang={i18n.language} />
      )}
    </div>
  );
}

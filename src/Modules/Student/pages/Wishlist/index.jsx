import { useDispatch, useSelector } from "react-redux";
import { TeacherCard } from "../Teachers";
import Wishlistempty from "./components/Wishlistempty";
import { removeFromWishlist } from "../../../../Redux/wishlist/wishlistSlice";
import { useTranslation } from "react-i18next";

export default function WishList() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleToggleWishlist = (teacher) => {
    dispatch(removeFromWishlist({ id: teacher.id, subjectID: teacher.subjectID }));
  };
  const {i18n}=useTranslation()

  return (
    <div className="min-h-screen w-full pt-4 lg:pt-24 container md:w-custom-md xl:w-custom-xl mx-auto">

      {wishlist.length > 0 ? (
        <>
              
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 w-full pb-5">
        <h2 className="text-white text-xl lg:text-4xl font-semibold pt-20 lg:py-10 text-center block col-span-6 lg:col-span-12 ">
              {i18n.language==="ar"? "قائمة الرغبات الخاصة بك": "Your Wishlist"}
            </h2>
          {wishlist.map((teacher) => (
            <TeacherCard
              key={`${teacher.id}-${teacher.subjectID}`}
              teacher={teacher}
              subjectData={teacher}
              handleToggleWishlist={() => handleToggleWishlist(teacher)}
              wishlist={wishlist}
            />
          ))}
        </div>
        </>) : (
        <Wishlistempty lang={i18n.language} />
      )}
    </div>
  );
}

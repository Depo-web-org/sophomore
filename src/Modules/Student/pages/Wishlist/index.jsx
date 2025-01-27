import { useDispatch, useSelector } from "react-redux";
import { TeacherCard } from "../Teachers";
import Wishlistempty from "./components/Wishlistempty";
import { removeFromWishlist } from "../../../../Redux/wishlist/wishlistSlice";

export default function WishList() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleToggleWishlist = (teacher) => {
    dispatch(removeFromWishlist({ id: teacher.id, subjectID: teacher.subjectID }));
  };

  return (
    <div className="min-h-screen w-full pt-24 container md:w-custom-md xl:w-custom-xl mx-auto">

      {wishlist.length > 0 ? (
        <>
              <h2 className="text-white text-3xl lg:text-4xl font-semibold pb-4 md:pb-10 xl:pb-20">
              Your Wishlist
            </h2>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 w-full">
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
        <Wishlistempty />
      )}
    </div>
  );
}

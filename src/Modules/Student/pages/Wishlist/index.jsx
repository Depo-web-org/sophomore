import { useSelector } from "react-redux";
import { TeacherCard } from "../Teachers";
import Wishlistempty from "./components/Wishlistempty";

export default function WishList() {
  // Get the wishlist items from Redux
  const wishlist = useSelector((state) => state.wishlist.items);
  console.log(wishlist)

  return (
    <div className="min-h-screen w-full pt-24 container md:w-custom-md xl:w-custom-xl mx-auto">
      <div>
        <h2 className="text-white text-3xl lg:text-4xl font-semibold pb-4 md:pb-10 xl:pb-20">
          Your Wishlist
        </h2>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 w-full">
          {wishlist.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      ) : (
      <Wishlistempty/>
      )}
    </div>
  );
}

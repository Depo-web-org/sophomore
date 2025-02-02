import { Link } from "react-router-dom";

export default function Wishlistempty({lang}) {
  return (
    <>
      <section className="text-center  p-5">
       
        <div className="w-full flex justify-center pt-20">
          <img
            className="object-cover pb-[5%]"
            src="/images/Cart/Wishlistempty.svg"
            alt="Wishlistempty"
          />
        </div>
        <span className="text-[#FF3D81] text-2xl lg:text-4xl font-bold">
         
          {lang==="ar"? "القائمة فارغة"  :" Your wishlist is empty"}
        </span>
        <Link to='/'>
        <button
          type="button"
          className="block m-auto rounded bg-primary hover:bg-opacity-70 my-5 px-8 pb-2 pt-2.5 text-white font-bold hover:bg-blue-500 transition duration-150 ease-in-out"
        >
          {lang==="ar"? "ابدء التعلم "  :" Start Learning"}

          
        </button>
        </Link>

      </section>
    </>
  );
}

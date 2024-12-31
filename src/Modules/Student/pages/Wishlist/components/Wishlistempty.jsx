export default function Wishlistempty() {
  return (
    <>
      <section className="text-center mt-[25%] sm:mt-[12%] lg:mt-[10%] p-5">
        <div className="border-b-2 border-b-white flex justify-between md:px-14 pb-5 text-white">
          <span className="font-bold text-3xl md:text-4xl">Your Wishlist</span>
          <p className="text-4xl font-bold ">:(</p>
        </div>
        <div className="w-full flex justify-center pt-20">
          <img
            className="object-cover pb-[5%]"
            src="images/Cart/Wishlistempty.svg"
            alt="Wishlistempty"
          />
        </div>
        <span className="text-[#FF3D81] text-2xl lg:text-4xl font-bold">
          Your wishlist is empty
        </span>
        <button
          type="button"
          className="block m-auto rounded bg-primary my-5 px-8 pb-2 pt-2.5 text-white font-bold hover:bg-blue-500 transition duration-150 ease-in-out"
        >
          Start Shopping
        </button>
      </section>
    </>
  );
}

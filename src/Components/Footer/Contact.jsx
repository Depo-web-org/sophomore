import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="text-center">
      <p className="bg-gradient-to-r from-primary  via-primary uppercase   to-secondary bg-clip-text text-transparent text-2xl font-bold inline-block">
        Sophomore
      </p>
      <h2 className="text-3xl font-extrabold text-white sm:text-5xl font-serif ">
        Request More Information
      </h2>

      <p className="mx-auto mt-4 max-w-sm text-white">
        Learn. Grow. Succeed. Discover courses tailored for your success.
      </p>

      <Link
        to="/contact"
        className="mt-8 inline-block rounded-full bg-blue-500 border border-blue-500 px-12 py-3 text-sm font-medium  hover:bg-blue-500 text-white focus:outline-none focus:ring active:bg-sky-500"
      >
        Contact Us
      </Link>
    </div>
  );
}

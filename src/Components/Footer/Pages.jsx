import { Link } from "react-router-dom";
import logo from "/logos/logo.svg";

export default function Pages() {
  return (
    <>
      <div className="flex justify-center w-1/5  lg:justify-start items-center">
        <img src={logo} alt="" className="ml-5" />
      </div>
      <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
        <li>
          <Link to="/" className="text-white transition hover:opacity-75">
            {" "}
            Home{" "}
          </Link>
        </li>

        <li>
          <Link to="about" className="text-white transition hover:opacity-75">
            {" "}
            About Us{" "}
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="text-white transition hover:opacity-75"
          >
            {" "}
            Contact Us{" "}
          </Link>
        </li>
      </ul>
    </>
  );
}

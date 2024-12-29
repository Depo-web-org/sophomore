import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Link
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="flex items-center gap-4"
      to={"/teacherPanel/profile"}
    >
      <div className="ml-3 overflow-hidden rounded-full border border-gray-300 shadow-inner">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile avatar"
          className="size-9 object-cover"
        />
      </div>{" "}
      <span className="hidden text-right lg:block ">
        <span className="block text-xl font-bold text-[#4B5563]">
          Mr.Teacher
        </span>
      </span>
    </Link>
  );
};

export default DropdownUser;

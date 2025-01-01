import { setRole } from "../../../../../../../Redux/RoleSlice/RoleSlice";

export default function UserRole(props) {
    return (
      <div className="w-full flex justify-center items-center gap-4 lg:gap-8 flex-wrap ">
        <button
          onClick={() => props.dispatch(setRole("student"))}
          type="button"
          className={`text-white text-sm lg:text-base font-bold px-5 lg:px-10 py-2 outline-none ${
            props.role === "student"
              ? "bg-secondary "
              : "bg-opacity-0  border border-gray-600"
          } rounded-lg duration-200 transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => props.dispatch(setRole("teacher"))}
          type="button"
          className={`text-white text-sm lg:text-base font-bold px-5 lg:px-10 py-2 outline-none ${
            props.role === "teacher"
              ? "bg-secondary "
              : "bg-opacity-0  border border-gray-600"
          } rounded-lg duration-200 transition-all`}
        >
          Teacher
        </button>
      </div>
    );
  }
  
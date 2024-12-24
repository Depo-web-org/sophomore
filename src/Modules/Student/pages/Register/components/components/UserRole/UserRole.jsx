import { setRole } from "../../../../../../../Redux/RoleSlice/RoleSlice";

export default function UserRole(props) {
    return (
      <div className="w-full flex justify-center items-center gap-4 lg:gap-8">
        <button
          onClick={() => props.dispatch(setRole("consumer"))}
          type="button"
          className={`text-white text-base font-bold px-10 py-2 outline-none ${
            props.role === "consumer"
              ? "bg-secondary "
              : "bg-opacity-0  border border-gray-600"
          } rounded-lg duration-200 transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => props.dispatch(setRole("provider"))}
          type="button"
          className={`text-white text-base font-bold px-10 py-2 outline-none ${
            props.role === "provider"
              ? "bg-secondary "
              : "bg-opacity-0  border border-gray-600"
          } rounded-lg duration-200 transition-all`}
        >
          Teacher
        </button>
      </div>
    );
  }
  
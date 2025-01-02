import React from "react";
import { useStudent_logoutMutation } from "../../../../../../Redux/Auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../../../../Redux/Auth/authSlice";
import { ImSpinner9 } from "react-icons/im";

const OpseModels = ({ setOpseModel }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [student_logout, { isLoading, isError, error }] =
    useStudent_logoutMutation();

  // Inside your handleLogout function:
  const handleLogout = async () => {
    const refresh_token =localStorage.getItem("RE_REV2_2024");
    console.log(refresh_token);
    if (!refresh_token) {
      console.error("Refresh token is missing!");
      return;
    }

    // Try to log out
    try {
      const response = await student_logout({ refresh_token }).unwrap();
      console.log("Logout successful:", response);

      // Clear localStorage and Redux store
      localStorage.removeItem("RE_REV2_2024");
      dispatch(logOut()); // Dispatch logout action
      navigate("/register");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <div
        onClick={() => {
          setOpseModel(false);
        }}
        className=" px-8 bg-slate-600 bg-opacity-50
        fixed inset-0 flex items-center justify-center z-[9999]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="scale-in-center  bg-slate-900 w-[500px] px-8 py-4 rounded-2xl border-r-4 border-b-4 border-primary"
        >
          <div className=" w-full text-center">
            {/*top text model  */}
            <div>
              <p className="text-2xl font-semibold pt-4 text-white">
                logout confirmation
              </p>

              <p className="mt-3  text-gray-500">
                Logging out will end your current session. You can always log
                back in to access your account.
              </p>
            </div>

            {/* buttom */}
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => {
                  handleLogout();
                }}
                type="button"
                className={`my-7 w-full inline-flex justify-center items-center rounded-3xl bg-primary text-center  px-2 py-2 text-md font-semibold text-white transition-all duration-300 ${
                  isLoading && "bg-white"
                }`}
              >
                {isLoading ? (
                  <ImSpinner9 className="animate-spin text-3xl text-secondary" />
                ) : (
                  "Logout"
                )}{" "}
              </button>

              <button
                onClick={() => {
                  setOpseModel(false);
                }}
                type="button"
                className={`my-7 w-full rounded-3xl hover:bg-secondary  border border-gray-500 hover:border-secondary px-2 py-2 text-md font-semibold text-white transition-all duration-300`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpseModels;

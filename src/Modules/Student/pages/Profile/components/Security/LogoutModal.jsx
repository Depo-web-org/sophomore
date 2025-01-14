import React from "react";
import { useLogoutMutation } from "../../../../../../Redux/Auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../../../../Redux/Auth/authSlice";
import { ImSpinner9 } from "react-icons/im";
import { useTranslation } from "react-i18next";

const LogoutModal = ({ setOpseModel }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {role} = useSelector((state)=>state.role)
  const provider= role==='teacher'?true:false;


  const [student_logout, { isLoading, isError, error }] =
  useLogoutMutation();

  // Inside your handleLogout function:
  const handleLogout = async () => {
    const Token =localStorage.getItem("Token");
    if (!Token) {
      console.error("Refresh token is missing!");
      return;
    }
    // Try to log out
    try {
      const userData={}
      if (provider) {
        userData.provider = provider;
      }
      const response = await student_logout({ userData }).unwrap();
      // Clear localStorage and Redux store
      localStorage.removeItem("Token");
      dispatch(logOut()); // Dispatch logout action
      navigate("/register");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div
    onClick={() => {
      setOpseModel(false);
    }}
    className="px-8 bg-slate-600 bg-opacity-50 fixed inset-0 flex items-center justify-center z-[9999]"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="scale-in-center bg-slate-900 w-[500px] px-8 py-4 rounded-2xl border-r-4 border-b-4 border-primary"
    >
      <div className="w-full text-center">
        {/* Top text modal */}
        <div>
          <p className="text-2xl font-semibold pt-4 text-white">
            {t("logoutModal.title")}
          </p>
          <p className="mt-3 text-gray-500">
            {t("logoutModal.description")}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => {
              handleLogout();
            }}
            type="button"
            className={`my-7 w-full inline-flex justify-center items-center rounded-3xl bg-primary text-center px-2 py-2 text-md font-semibold text-white transition-all duration-300 ${
              isLoading && "bg-white"
            }`}
          >
            {isLoading ? (
              <ImSpinner9 className="animate-spin text-3xl text-secondary" />
            ) : (
              t("logoutModal.logoutButton")
            )}
          </button>

          <button
            onClick={() => {
              setOpseModel(false);
            }}
            type="button"
            className={`my-7 w-full rounded-3xl hover:bg-secondary border border-gray-500 hover:border-secondary px-2 py-2 text-md font-semibold text-white transition-all duration-300`}
          >
            {t("logoutModal.cancelButton")}
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LogoutModal;

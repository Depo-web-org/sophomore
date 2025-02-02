import { toast } from "react-toastify";
import { useChange_passwordMutation } from "../Redux/Auth/authApiSlice";
import { useTranslation } from "react-i18next";

const useChangePassword = ({ role, reset, handleAlert }) => {
  const [changePassword, { isLoading, isError }] = useChange_passwordMutation();
  const provider = role === 'teacher' ? true : false;
const {i18n} =useTranslation()
  const submitChangePassword = async (data) => {
    const Token = localStorage.getItem("Token");
    const infos = {
      current_password: data.old_password,
      password: data.new_password,
      password2: data.confirm_password,
    };

    if (provider) {
      infos.provider = provider;
    }

    try {
      const response = await changePassword({ data: infos, role }).unwrap();

      if (response.code === 0) {
        toast.success(`${i18n.language==='ar'? "تم التغير بنجاح ":"Password changed successful"}`)
        reset();  
      } else if (response.code === 1) {
        toast.error(`${i18n.language==='ar'? "لم يتم التغير   ":"Password changed failed to change"}`)

      }
    } catch (error) {
      console.error("Error changing password::::", error);
    }
  };

  return { submitChangePassword, isLoading, isError };
};

export default useChangePassword;
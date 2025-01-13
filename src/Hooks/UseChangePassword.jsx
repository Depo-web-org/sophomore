import { useChange_passwordMutation } from "../Redux/Auth/authApiSlice";

const useChangePassword = ({ role, handleShowAlert, reset }) => {
  const [changePassword, { isLoading, isError }] = useChange_passwordMutation();
  const provider= role==='teacher'?true:false;


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
      await changePassword({ data: infos, role }).unwrap();
      handleShowAlert();
      reset();
    } catch (err) {
      console.error("Error changing password:", err);
    }
  };

  return { submitChangePassword, isLoading, isError };
};

export default useChangePassword;

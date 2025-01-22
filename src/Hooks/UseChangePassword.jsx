import { useChange_passwordMutation } from "../Redux/Auth/authApiSlice";

const useChangePassword = ({ role, reset, handleAlert }) => {
  const [changePassword, { isLoading, isError }] = useChange_passwordMutation();
  const provider = role === 'teacher' ? true : false;

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
        handleAlert('success'); 
        reset();  
      } else if (response.code === 1) {
        handleAlert('error');
      }
    } catch (error) {
      console.error("Error changing password::::", error);
      handleAlert('error');
    }
  };

  return { submitChangePassword, isLoading, isError };
};

export default useChangePassword;
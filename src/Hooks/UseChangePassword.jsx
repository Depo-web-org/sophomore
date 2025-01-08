import { useChange_passwordMutation } from "../Redux/Auth/authApiSlice";

const useChangePassword = ({ role, handleShowAlert, reset }) => {
  const [changePassword, { isLoading, isError }] = useChange_passwordMutation();

  const submitChangePassword = async (data) => {
    const refresh_token = localStorage.getItem("refresh_token");
    const infos = {
      old_password: data.old_password,
      new_password: data.new_password,
      confirm_password: data.confirm_password,
      refresh_token,
    };

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

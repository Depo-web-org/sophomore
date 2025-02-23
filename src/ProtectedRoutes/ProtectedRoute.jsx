import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "../Modules/Student/pages/Register";
import { encodeEmail } from "../Helpers/enCodedMail";

const ProtectedRoute = (email) => {
      const enCodedMail = encodeEmail(email);
  
  const isVerified = useSelector((state) => state.student.isVerified); 

  return isVerified ?<Navigate to={`/register/otp/${enCodedMail}` } replace /> : <Register />  ;
};

export default ProtectedRoute;

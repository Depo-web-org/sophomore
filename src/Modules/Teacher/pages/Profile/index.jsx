import React from "react";
import Form from "./components/Form";
import MinProfile from "./components/MinProfile";
import Profile from "./components/Profile";

const TeacherProfile = () => {
  return (
    <>
     <div className="min-h-screen ">
       {/* Profile */}
       <Profile />
      <div >
        {/* MinProfile */}
        {/* <MinProfile /> */}
        {/* form */}
      </div>
        <Form />
     </div>
    </>
  );
};

export default TeacherProfile;

import React from "react";
import Form from "./components/Form";
import MinProfile from "./components/MinProfile";
import Profile from "./components/Profile";

const TeacherProfile = () => {
  return (
    <>
      {/* Profile */}
      <Profile />
      <div className="conatiner">
        {/* MinProfile */}
        <MinProfile />

        {/* form */}
        <Form />
      </div>
    </>
  );
};

export default TeacherProfile;

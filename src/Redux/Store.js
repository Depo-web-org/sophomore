import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSclice";
import authReducer from "./Auth/authSlice";
import { roleUser } from "./RoleSlice/RoleSlice";
import { userInformationReducer } from "./ UserInformation/ UserInformationSlice";
import { AddCourse } from "./TeacherAddCourse/TeacherAddCourse";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    role: roleUser,
    userInformation: userInformationReducer,
    AddTeacherCourse:AddCourse,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSclice";
import authReducer from "./Auth/authSlice";
import { roleUser } from "./RoleSlice/RoleSlice";
import { AddCourse } from "./TeacherAddCourse/TeacherAddCourse";
import studentReducer from "./StudentSlices/StudentSlice"; 
import AddNewCourse from "../Modules/Teacher/pages/Courses/Page/AddNewCourse";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    role: roleUser,
    AddTeacherCourse:AddCourse,
    student: studentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

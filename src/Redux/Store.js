import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSclice";
import authReducer from "./Auth/authSlice";
import { roleUser } from "./RoleSlice/RoleSlice";
import { AddCourse } from "./TeacherAddCourse/TeacherAddCourse";
import studentReducer from "./StudentSlices/StudentSlice"; 
import AddNewCourse from "../Modules/Teacher/pages/Courses/Page/AddNewCourse";
import courseInformationReducer from './CourseInformationSlice/CourseInformationSlice';
import wishlistReducer from "./wishlist/wishlistSlice"
import {studentCoursesReducer} from "./data/studentCourses"
import cartReducer from"./cart/cartSlice"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    role: roleUser,
    AddTeacherCourse:AddCourse,
    student: studentReducer,
    courseInformation: courseInformationReducer,
    wishlist: wishlistReducer,
    cart:cartReducer,
    studentCourses:studentCoursesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

import { lazy, Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardLayout, PublicLayout, NavTeacher } from "./layouts";
import { LoadingComponents } from "../App";

// import Home from '../Modules/Student/pages/Home/index';

// Lazy-loaded components
const Home = lazy(() => import("../Modules/Student/pages/Home/index"));
const About = lazy(() => import("../Modules/Student/pages/About/index"));
const Contact = lazy(() => import("../Modules/Student/pages/Contact/index"));
const Cart = lazy(() => import("../Modules/Student/pages/Cart/index"));
const CourseVideo = lazy(() => import("../Modules/Student/pages/CourseVideo/index"));
const CourseDetails = lazy(() => import("../Modules/Student/pages/CourseVideo/components/CourseInfos/CourseDetails"));
const CourseComments = lazy(() => import("../Modules/Student/pages/CourseVideo/components/CourseInfos/CourseComments"));
const CourseMaterial = lazy(() => import("../Modules/Student/pages/CourseVideo/components/CourseInfos/CourseMaterial"));
const WishList = lazy(() => import("../Modules/Student/pages/Wishlist/index"));
const Wishlistempty = lazy(() => import("../Modules/Student/pages/Wishlist/components/Wishlistempty"));
const Grade = lazy(() => import("../Modules/Student/pages/Grades/index"));
const Subjects = lazy(() => import("../Modules/Student/pages/Subjects/index"));
const Teachers = lazy(() => import("../Modules/Student/pages/Teachers"));
const TeacherDetails = lazy(() => import("../Modules/Student/pages/TeacherDetails/index"));
const AboutTab = lazy(() => import("../Modules/Student/pages/TeacherDetails/components/TeacherInfos"));
const CourseDetailsTab = lazy(() => import("../Modules/Student/pages/TeacherDetails/components/CourseDetailsTab"));
const ReviewsTab = lazy(() => import("../Modules/Student/pages/TeacherDetails/components/ReviewsTab"));
const Profile = lazy(() => import("../Modules/Student/pages/Profile/index"));
const MyProfile = lazy(() => import("../Modules/Student/pages/Profile/components/MyProfile/MyProfile"));
const Subscriptions = lazy(() => import("../Modules/Student/pages/Profile/components/Subscriptions/Subscriptions"));
const Security = lazy(() => import("../Modules/Student/pages/Profile/components/Security/Security"));
const Register = lazy(() => import("../Modules/Student/pages/Register/index"));
const IndexTeacher = lazy(() => import("../Modules/Teacher/pages"));
const TeacherUpload = lazy(() => import("../Modules/Teacher/components/TeacherUpload/Teacher"));
const Dashboard = lazy(() => import("../Modules/Teacher/pages/Dashboard/index"));
const Courses = lazy(() => import("../Modules/Teacher/pages/Courses/Index"));
const CourseStatistics = lazy(() => import("../Modules/Teacher/pages/Courses/Page/CourseStatistics"));
const AddNewCourse = lazy(() => import("../Modules/Teacher/pages/Courses/Page/AddNewCourse"));
const ChooseUnit = lazy(() => import("../Modules/Teacher/pages/Courses/Page/ChooseUnit/Index"));
const ItemsUnit = lazy(() => import("../Modules/Teacher/pages/Courses/Page/ChooseUnit/page/ItemsUnit"));
const Unit = lazy(() => import("../Modules/Teacher/pages/Courses/Page/ChooseUnit/page/Unit/Unit"));
const Test = lazy(() => import("../Modules/Teacher/pages/Courses/Page/Test"));
const Students = lazy(() => import("../Modules/Teacher/pages/Students/index"));
const StudentStatistics = lazy(() => import("../Modules/Teacher/pages/Students/components/StudentStatistics"));
const StudentProfile = lazy(() => import("../Modules/Teacher/pages/Students/components/StudentProfile"));
const TeacherProfile = lazy(() => import("../Modules/Teacher/pages/Profile/index"));
const Quiz = lazy(() => import("../Modules/Student/pages/Quiz/Index"));
const MyLearning = lazy(() => import("../Modules/Student/pages/MyLearning/index"));
const ResetPassword = lazy(() => import("../Modules/Student/pages/Register/components/ResetPassword/ResetPassword"));
const VerifyAccount = lazy(() => import("../Modules/Student/pages/Register/components/VerifyAccount/VerifyAccount"));
const NotFound = lazy(() => import("../Modules/Student/pages/404/NotFound"));
import ScrollTop from '../Helpers/ScrollTop';
import ButtomTop from '../Helpers/ButtomTop';
import StudentProtectedRoute from '../ProtectedRoutes/StudentProtected';
import TeacherProtectedRoute from '../ProtectedRoutes/TeacherProtectedRoute';

export function AppRoutes() {
  return (
    <>
      <ScrollTop />
      <ButtomTop />
      <Suspense fallback={<LoadingComponents />}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <StudentProtectedRoute>
                  <Cart />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/mylearning"
              element={
                <StudentProtectedRoute>
                  <MyLearning />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/mylearning/course/:courseName/quiz"
              element={<Quiz />}
            />
            <Route path="/mylearning/course/:courseName" element={<CourseVideo />}>
              <Route element={<CourseDetails />} index />
              <Route path="comments" element={<CourseComments />} />
              <Route path="material" element={<CourseMaterial />} />
            </Route>
            <Route
              path="/wishlist"
              element={
                <StudentProtectedRoute>
                  <WishList />
                </StudentProtectedRoute>
              }
            />
            <Route path="/Wishlistempty" element={<Wishlistempty />} />
            <Route path="/school/:schoolName" element={<Grade />} />
            <Route
              path="/school/:schoolName/grade/:gradeName"
              element={<Subjects />}
            />
            <Route
              path="/school/:schoolName/grade/:gradeName/subject/:subjectName"
              element={<Teachers />}
            />
            <Route
              path="/school/:schoolName/grade/:gradeName/subject/:subjectName/teacher/:teacherName"
              element={<TeacherDetails />}
            >
              <Route element={<AboutTab />} index />
              <Route path="course-details" element={<CourseDetailsTab />} />
              <Route path="reviews" element={<ReviewsTab />} />
            </Route>
            <Route
              path="/profile"
              element={
                <StudentProtectedRoute>
                  <Profile />
                </StudentProtectedRoute>
              }
            >
              <Route index element={<Navigate to="myprofile" />} />
              <Route
                path="myprofile"
                element={
                  <StudentProtectedRoute>
                    <MyProfile />
                  </StudentProtectedRoute>
                }
              />
              <Route
                path="subscriptions"
                element={
                  <StudentProtectedRoute>
                    <Subscriptions />
                  </StudentProtectedRoute>
                }
              />
              <Route
                path="security"
                element={
                  <StudentProtectedRoute>
                    <Security />
                  </StudentProtectedRoute>
                }
              />
            </Route>
          </Route>

          {/* Login and Register */}
          <Route path="/register">
            <Route index element={<Register />} />
            <Route path="reset-password/">
              <Route index path=":userMail" element={<ResetPassword />} />
            </Route>
            <Route path="verify-account/">
              <Route index path=":userMail" element={<VerifyAccount />} />
            </Route>
          </Route>

          {/* Teacher Routes */}
          <Route path="/" element={<NavTeacher />}>
            <Route index path="/teacherupload" element={<IndexTeacher />} />
            <Route path="/Teacherdocs" element={<TeacherUpload />} />
          </Route>

          <Route path="/teacherPanel" element={<DashboardLayout />}>
            <Route
              index
              element={
                <TeacherProtectedRoute>
                  <Dashboard />
                </TeacherProtectedRoute>
              }
            />
            <Route
              path="courses"
              element={
                <TeacherProtectedRoute>
                  <Courses />
                </TeacherProtectedRoute>
              }
            >
              <Route
                element={
                  <TeacherProtectedRoute>
                    <CourseStatistics />
                  </TeacherProtectedRoute>
                }
                index
              />
              <Route
                path="addnewcourse"
                element={
                  <TeacherProtectedRoute>
                    <AddNewCourse />
                  </TeacherProtectedRoute>
                }
              />
              <Route path="chooseunit" element={<ChooseUnit />}>
                <Route index element={<ItemsUnit />} />
                <Route path=":unit" element={<Unit />} />
                <Route path=":unit/test" element={<Test />} />
              </Route>
            </Route>
            <Route path="students" element={<Students />}>
              <Route element={<StudentStatistics />} index />
              <Route path="studentprofile" element={<StudentProfile />} />
            </Route>
            <Route
              path="profile"
              element={
                <TeacherProtectedRoute>
                  <TeacherProfile />
                </TeacherProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

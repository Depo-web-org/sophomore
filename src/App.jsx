// // import { useEffect, useState } from "react";
// // import { AppRoutes } from "./utils/Routes";

// // export function LoadingComponents() {
// //   return (
// //     <div className="min-h-screen bg-dark flex justify-center items-center flex-col">
// //       <span className=" text-white text-4xl md:text-6xl lg:text-8xl text-gradient font-extrabold my-5">
// //         Sophomore
// //       </span>
// //       <span className="loader"></span>
// //     </div>
// //   );
// // }

// // function App() {
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const handleResourceLoad = async () => {
// //       await new Promise((resolve) => setTimeout(resolve, 2000));
// //       setLoading(false);
// //     };

// //     handleResourceLoad();
// //   }, []);

// //   return <>{loading ? <LoadingComponents /> : <AppRoutes/>}</>;
// // }

// // export default App;


// // 

// import ScrollTop from "./Helpers/ScrollTop";
// import ButtomTop from "./Helpers/ButtomTop";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./Modules/Student/pages/Home/index";
// import About from "./Modules/Student/pages/About/index";
// import Contact from "./Modules/Student/pages/Contact/index";
// import Cart from "./Modules/Student/pages/Cart/index";
// import CourseVideo from "./Modules/Student/pages/CourseVideo/index";
// import CourseDetails from "./Modules/Student/pages/CourseVideo/components/CourseInfos/CourseDetails";
// import CourseComments from "./Modules/Student/pages/CourseVideo/components/CourseInfos/CourseComments";
// import CourseMaterial from "./Modules/Student/pages/CourseVideo/components/CourseInfos/CourseMaterial";
// import WishList from "./Modules/Student/pages/Wishlist/index";
// import Wishlistempty from "./Modules/Student/pages/Wishlist/components/Wishlistempty";
// import { Grade } from "./Modules/Student/pages/Grades/index";
// import Subjects from "./Modules/Student/pages/Subjects/index";
// import Teachers from "./Modules/Student/pages/Teachers";
// import TeacherDetails from "./Modules/Student/pages/TeacherDetails/index";
// import { AboutTab } from "./Modules/Student/pages/TeacherDetails/components/TeacherInfos";
// import CourseDetailsTab from "./Modules/Student/pages/TeacherDetails/components/CourseDetailsTab";
// import ReviewsTab from "./Modules/Student/pages/TeacherDetails/components/ReviewsTab";
// import Profile from "./Modules/Student/pages/Profile/index";
// import MyProfile from "./Modules/Student/pages/Profile/components/MyProfile/MyProfile";
// import Subscriptions from "./Modules/Student/pages/Profile/components/Subscriptions/Subscriptions";
// import Security from "./Modules/Student/pages/Profile/components/Security/Security";
// import Register from "./Modules/Student/pages/Register/index";
// import IndexTeacher from "./Modules/Teacher/pages";
// import TeacherUpload from "./Modules/Teacher/components/TeacherUpload/Teacher";
// import Dashboard from "./Modules/Teacher/pages/Dashboard/index";
// import Courses from "./Modules/Teacher/pages/Courses/Index";
// import CourseStatistics from "./Modules/Teacher/pages/Courses/Page/CourseStatistics";
// import AddNewCourse from "./Modules/Teacher/pages/Courses/Page/AddNewCourse";
// import ChooseUnit from "./Modules/Teacher/pages/Courses/Page/ChooseUnit/Index";
// import ItemsUnit from "./Modules/Teacher/pages/Courses/Page/ChooseUnit/page/ItemsUnit";
// import Unit from "./Modules/Teacher/pages/Courses/Page/ChooseUnit/page/Unit/Unit";
// import Test from "./Modules/Teacher/pages/Courses/Page/Test";
// import Students from "./Modules/Teacher/pages/Students/index";
// import StudentStatistics from "./Modules/Teacher/pages/Students/components/StudentStatistics";
// import StudentProfile from "./Modules/Teacher/pages/Students/components/StudentProfile";
// import TeacherProfile from "./Modules/Teacher/pages/Profile/index";
// import { DashboardLayout, PublicLayout, NavTeacher } from "./utils/layouts";
// import Quiz from "./Modules/Student/pages/Quiz/Index";
// import MyLearning from "./Modules/Student/pages/MyLearning/index";
// import { useEffect, useState } from "react";
// import { ImSpinner9 } from "react-icons/im";
// import ResetPassword from "./Modules/Student/pages/Register/components/ResetPassword/ResetPassword";
// import StudentProtectedRoute from "./ProtectedRoutes/StudentProtected";
// import TeacherProtectedRoute from "./ProtectedRoutes/TeacherProtectedRoute";
// import VerifyAccount from "./Modules/Student/pages/Register/components/VerifyAccount/VerifyAccount";
// import NotFound from "./Modules/Student/pages/404/NotFound";
// import { useSelector } from "react-redux";

// function AppRoutes() {
//   return (
//     <>
//       <ScrollTop />
//       <ButtomTop />

//       <Routes>
//         <Route element={<PublicLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/cart"
//             element={
//               <StudentProtectedRoute>
//                 <Cart />
//               </StudentProtectedRoute>
//             }
//           />
//           <Route
//             path="/mylearning"
//             element={
//               <StudentProtectedRoute>
//                 <MyLearning />
//               </StudentProtectedRoute>
//             }
//           />
//           {/* Quiz */}
//           <Route
//             path="/mylearning/course/:courseName/quiz"
//             element={<Quiz />}
//           />
//           {/* course video nested route */}
//           <Route
//             path="/mylearning/course/:courseName"
//             element={<CourseVideo />}
//           >
//             <Route element={<CourseDetails />} index />
//             <Route path="comments" element={<CourseComments />} />
//             <Route path="material" element={<CourseMaterial />} />
//           </Route>
//           <Route
//             path="/wishlist"
//             element={
//               <StudentProtectedRoute>
//                 <WishList />
//               </StudentProtectedRoute>
//             }
//           />
//           <Route path="/Wishlistempty" element={<Wishlistempty />} />
//           <Route path="/school/:schoolName" element={<Grade />} />
//           <Route
//             path="/school/:schoolName/grade/:gradeName"
//             element={<Subjects />}
//           />
//           <Route
//             path="/school/:schoolName/grade/:gradeName/subject/:subjectName"
//             element={<Teachers />}
//           />
//           {/* teacher details nested route */}
//           <Route
//             path="/school/:schoolName/grade/:gradeName/subject/:subjectName/teacher/:teacherName"
//             element={<TeacherDetails />}
//           >
//             <Route element={<AboutTab />} index />
//             <Route path="course-details" element={<CourseDetailsTab />} />
//             <Route path="reviews" element={<ReviewsTab />} />
//           </Route>
//           {/* Profile nested route */}
//           <Route
//             path="/profile"
//             element={
//               <StudentProtectedRoute>
//                 <Profile />
//               </StudentProtectedRoute>
//             }
//           >
//             <Route index element={<Navigate to="myprofile" />} />
//             <Route
//               path="myprofile"
//               element={
//                 <StudentProtectedRoute>
//                   <MyProfile />
//                 </StudentProtectedRoute>
//               }
//             />
//             <Route
//               path="subscriptions"
//               element={
//                 <StudentProtectedRoute>
//                   <Subscriptions />
//                 </StudentProtectedRoute>
//               }
//             />
//             <Route
//               path="security"
//               element={
//                 <StudentProtectedRoute>
//                   <Security />
//                 </StudentProtectedRoute>
//               }
//             />
//           </Route>
//         </Route>

//         {/* login */}
//         <Route path="/register">
//           <Route index element={<Register />} />
//           <Route path="reset-password/">
//             <Route index path=":userMail" element={<ResetPassword />} />
//           </Route>
//           <Route path="verify-account/">
//             <Route index path=":userMail" element={<VerifyAccount />} />
//           </Route>
//         </Route>

//         {/* page Teacherrrr */}
//         <Route path="/" element={<NavTeacher />}>
//           <Route index path="/teacherupload" element={<IndexTeacher />} />
//           <Route path="/Teacherdocs" element={<TeacherUpload />} />
//         </Route>

//         <Route path="/teacherPanel" element={<DashboardLayout />}>
//           <Route
//             index
//             element={
//               <TeacherProtectedRoute>
//                 <Dashboard />
//               </TeacherProtectedRoute>
//             }
//           />
//           <Route
//             path="courses"
//             element={
//               <TeacherProtectedRoute>
//                 <Courses />
//               </TeacherProtectedRoute>
//             }
//           >
//             <Route
//               element={
//                 <TeacherProtectedRoute>
//                   <CourseStatistics />
//                 </TeacherProtectedRoute>
//               }
//               index
//             />
//             <Route
//               path="addnewcourse"
//               element={
//                 <TeacherProtectedRoute>
//                   <AddNewCourse />{" "}
//                 </TeacherProtectedRoute>
//               }
//             />

//             {/* Nested Routes Courses */}

//             <Route path="chooseunit" element={<ChooseUnit />}>
//               <Route index element={<ItemsUnit />} />
//               <Route path=":unit" element={<Unit />} />
//               <Route path=":unit/test" element={<Test />} />
//             </Route>
//           </Route>
//           <Route path="students" element={<Students />}>
//             <Route element={<StudentStatistics />} index />
//             <Route path="studentprofile" element={<StudentProfile />} />
//           </Route>
//           <Route
//             path="profile"
//             element={
//               <TeacherProtectedRoute>
//                 <TeacherProfile />
//               </TeacherProtectedRoute>
//             }
//           />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }
// function LoadingComponents() {
//   return (
//     <div className="min-h-screen bg-dark flex justify-center items-center flex-col">
//       <span className=" text-white text-4xl md:text-6xl lg:text-8xl text-gradient font-extrabold my-5">
//         Sophomore
//       </span>
//       <span className="loader"></span>
//     </div>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const handleResourceLoad = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setLoading(false);
//     };

//     handleResourceLoad();
//   }, []);

//   return <>{loading ? <LoadingComponents /> : <AppRoutes />}</>;
// }

// export default App;

import ScrollTop from "./Helpers/ScrollTop";
import ButtomTop from "./Helpers/ButtomTop";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Modules/Student/pages/Home/index";
import About from "./Modules/Student/pages/About/index";
import Contact from "./Modules/Student/pages/Contact/index";
import Cart from "./Modules/Student/pages/Cart/index";
import CourseVideo from "./Modules/Student/pages/CourseVideo/index";
import CourseDetails from "./Modules/Student/pages/CourseVideo/components/CourseInfos/CourseDetails";
import CourseComments from "./Modules/Student/pages/CourseVideo/components/CourseInfos/CourseComments";
import CourseMaterial from "./Modules/Student/pages/CourseVideo/components/CourseInfos/CourseMaterial";
import WishList from "./Modules/Student/pages/Wishlist/index";
import Wishlistempty from "./Modules/Student/pages/Wishlist/components/Wishlistempty";
import { Grade } from "./Modules/Student/pages/Grades/index";
import Subjects from "./Modules/Student/pages/Subjects/index";
import Teachers from "./Modules/Student/pages/Teachers";
import TeacherDetails from "./Modules/Student/pages/TeacherDetails/index";
import { AboutTab } from "./Modules/Student/pages/TeacherDetails/components/TeacherInfos";
import CourseDetailsTab from "./Modules/Student/pages/TeacherDetails/components/CourseDetailsTab";
import ReviewsTab from "./Modules/Student/pages/TeacherDetails/components/ReviewsTab";
import Profile from "./Modules/Student/pages/Profile/index";
import MyProfile from "./Modules/Student/pages/Profile/components/MyProfile/MyProfile";
import Subscriptions from "./Modules/Student/pages/Profile/components/Subscriptions/Subscriptions";
import Security from "./Modules/Student/pages/Profile/components/Security/Security";
import Register from "./Modules/Student/pages/Register/index";
import IndexTeacher from "./Modules/Teacher/pages";
import TeacherUpload from "./Modules/Teacher/components/TeacherUpload/Teacher";
import Dashboard from "./Modules/Teacher/pages/Dashboard/index";
import Courses from "./Modules/Teacher/pages/Courses/Index";
import CourseStatistics from "./Modules/Teacher/pages/Courses/Page/CourseStatistics";
import AddNewCourse from "./Modules/Teacher/pages/Courses/Page/AddNewCourse";
import ChooseUnit from "./Modules/Teacher/pages/Courses/Page/ChooseUnit/Index";
import ItemsUnit from "./Modules/Teacher/pages/Courses/Page/ChooseUnit/page/ItemsUnit";
import Unit from "./Modules/Teacher/pages/Courses/Page/ChooseUnit/page/Unit/Unit";
import Test from "./Modules/Teacher/pages/Courses/Page/Test";
import Students from "./Modules/Teacher/pages/Students/index";
import StudentStatistics from "./Modules/Teacher/pages/Students/components/StudentStatistics";
import StudentProfile from "./Modules/Teacher/pages/Students/components/StudentProfile";
import TeacherProfile from "./Modules/Teacher/pages/Profile/index";
import { DashboardLayout, PublicLayout, NavTeacher } from "./utils/layouts";
import Quiz from "./Modules/Student/pages/Quiz/Index";
import MyLearning from "./Modules/Student/pages/MyLearning/index";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import ResetPassword from "./Modules/Student/pages/Register/components/ResetPassword/ResetPassword";
import StudentProtectedRoute from "./ProtectedRoutes/StudentProtected";
import TeacherProtectedRoute from "./ProtectedRoutes/TeacherProtectedRoute";
import VerifyAccount from "./Modules/Student/pages/Register/components/VerifyAccount/VerifyAccount";
import NotFound from "./Modules/Student/pages/404/NotFound";
import { useSelector } from "react-redux";
import EditUnit from "./Modules/Teacher/pages/Courses/Page/EditUnit/Index";
import EditSpecificUnit from "./Modules/Teacher/pages/Courses/Page/ChooseUnit/page/EditSpecificUnit/EditSpecificUnit";
import EditCourse from "./Modules/Teacher/pages/Courses/Page/ChooseUnit/page/EditCourse/EditCourse";


export const baseUrl="https://dev.depowebeg.com"

function AppRoutes() {
  return (
    <>
      <ScrollTop />
      <ButtomTop />

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
          {/* Quiz */}
          <Route
            path="/mylearning/course/:courseName/quiz"
            element={<Quiz />}
          />
          {/* course video nested route */}
          <Route
            path="/mylearning/course/:courseName"
            element={<CourseVideo />}
          >
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
          {/* teacher details nested route */}
          <Route
            path="/school/:schoolName/grade/:gradeName/subject/:subjectName/teacher/:teacherName"
            element={<TeacherDetails />}
          >
            <Route element={<AboutTab />} index />
            <Route path="course-details" element={<CourseDetailsTab />} />
            <Route path="reviews" element={<ReviewsTab />} />
          </Route>
          {/* Profile nested route */}
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

        {/* login */}
        <Route path="/register">
          <Route index element={<Register />} />
          <Route path="reset-password/">
            <Route index path=":userMail" element={<ResetPassword />} />
          </Route>
          <Route path="verify-account/">
            <Route index path=":userMail" element={<VerifyAccount />} />
          </Route>
        </Route>

        {/* page Teacherrrr */}
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
          <Route  path="courses"  element={  <TeacherProtectedRoute>      <Courses />  </TeacherProtectedRoute>  }   >
            <Route element={  <TeacherProtectedRoute>     <CourseStatistics /> </TeacherProtectedRoute>      }    index />
            <Route
              path="addnewcourse"
              element={
                <TeacherProtectedRoute>
                  <AddNewCourse />
                </TeacherProtectedRoute>
              }
            />

            {/* Nested Routes Courses */}

            <Route path=":UploadCourse" element={<ChooseUnit />}>
              {/* <Route index element={<ItemsUnit />} /> */}
              <Route index element={<Unit />} />
              <Route path=":unit/test" element={<Test />} />
            </Route>


                  {/* Edit Unit */}
                  <Route path="EditLessons" element={<EditUnit />}>
  <Route path="course/:courseID" element={<ItemsUnit />}>
  </Route>
  <Route path="lesson/:lessonId" element={<EditSpecificUnit />} />

</Route>
<Route path="unit/:unit/test" element={<Test />} />






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
    </>
  );
}
export function LoadingComponents() {
  return (
    <div className="min-h-screen bg-dark flex justify-center items-center flex-col">
      <span className=" text-white text-4xl md:text-6xl lg:text-8xl text-gradient font-extrabold my-5">
        Sophomore
      </span>
      <span className="loader"></span>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResourceLoad = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    handleResourceLoad();
  }, []);

  return <>{loading ? <LoadingComponents /> : <AppRoutes />}</>;
}

export default App;
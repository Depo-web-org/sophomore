import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import ScrollTop from "./Helpers/ScrollTop";
import { DashboardLayout, PublicLayout } from "./utils/layouts";
import { Grade } from "./pages/Grades";
import Subjects from "./pages/Subjects";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Wishlistempty from "./pages/Wishlist/components/Wishlistempty";
import TeacherDetails from "./pages/TeacherDetails";
import WishList from "./pages/Wishlist";
import CourseDetailsTab from "./pages/TeacherDetails/components/CourseDetailsTab";
import { AboutTab } from "./pages/TeacherDetails/components/TeacherInfos";
import ReviewsTab from "./pages/TeacherDetails/components/ReviewsTab";
import MyLearning from "./pages/MyLearning";
import ButtomTop from "./Helpers/ButtomTop";
import Quiz from "./pages/Quiz/Index";
import CourseVideo from "./pages/CourseVideo";
import CourseDetails from "./pages/CourseVideo/components/CourseInfos/CourseDetails";
import CourseComments from "./pages/CourseVideo/components/CourseInfos/CourseComments";
import CourseMaterial from "./pages/CourseVideo/components/CourseInfos/CourseMaterial";
import Profile from "./pages/Profile";
import Subscriptions from "./pages/Profile/components/Subscriptions/Subscriptions";
import Security from "./pages/Profile/components/Security/Security";
import MyProfile from "./pages/Profile/components/MyProfile/MyProfile";
import Register from "./pages/Register";
import { AuthProvider } from "./ProtectedRoutes/AuthContext";
import ProtectedRoute from "./ProtectedRoutes/StudentProtected";
import Teacher from "./pages/Teacher panel ";
import Dashboard from "./pages/Teacher panel /pages/Dashboard";

function App() {
  return (
    <>
      <AuthProvider>
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
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mylearning"
              element={
                <ProtectedRoute>
                  <MyLearning />
                </ProtectedRoute>
              }
            />
            <Route path="/quiz" element={<Quiz />} />
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
                <ProtectedRoute>
                  <WishList />
                </ProtectedRoute>
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
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="myprofile" />} />
              <Route
                path="myprofile"
                element={
                  <ProtectedRoute>
                    <MyProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="subscriptions"
                element={
                  <ProtectedRoute>
                    <Subscriptions />
                  </ProtectedRoute>
                }
              />
              <Route
                path="security"
                element={
                  <ProtectedRoute>
                    <Security />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="/register" element={<Register />} />

            {/* page Teacherrrr */}
            <Route path="/Teacher" element={<Teacher />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/teacherPanel" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

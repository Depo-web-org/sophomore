import { AuthProvider } from './ProtectedRoutes/AuthContext';
import ScrollTop from './Helpers/ScrollTop';
import ButtomTop from './Helpers/ButtomTop';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Modules/Student/pages/Home/index';
import About from './Modules/Student/pages/About/index';
import Contact from './Modules/Student/pages/Contact/index';
import Cart from './Modules/Student/pages/Cart/index';
import CourseVideo from './Modules/Student/pages/CourseVideo/index';
import CourseDetails from './Modules/Student/pages/CourseVideo/components/CourseInfos/CourseDetails';
import CourseComments from './Modules/Student/pages/CourseVideo/components/CourseInfos/CourseComments';
import CourseMaterial from './Modules/Student/pages/CourseVideo/components/CourseInfos/CourseMaterial';
import WishList from './Modules/Student/pages/Wishlist/index';
import Wishlistempty from './Modules/Student/pages/Wishlist/components/Wishlistempty';
import { Grade } from './Modules/Student/pages/Grades/index';
import Subjects from './Modules/Student/pages/Subjects/index';
import Teachers from './Modules/Student/pages/Teachers';
import TeacherDetails from './Modules/Student/pages/TeacherDetails/index';
import { AboutTab } from './Modules/Student/pages/TeacherDetails/components/TeacherInfos';
import CourseDetailsTab from './Modules/Student/pages/TeacherDetails/components/CourseDetailsTab';
import ReviewsTab from './Modules/Student/pages/TeacherDetails/components/ReviewsTab';
import Profile from './Modules/Student/pages/Profile/index';
import MyProfile from './Modules/Student/pages/Profile/components/MyProfile/MyProfile';
import Subscriptions from './Modules/Student/pages/Profile/components/Subscriptions/Subscriptions';
import Security from './Modules/Student/pages/Profile/components/Security/Security';
import Register from './Modules/Student/pages/Register/index';
import IndexTeacher from './Modules/Teacher/pages';
import Teacherr from './Modules/Teacher/components/TeacherUpload/Teacher';
import Dashboard from './Modules/Teacher/pages/Dashboard/index';
import Courses from './Modules/Teacher/pages/Courses/Index';
import CourseStatistics from './Modules/Teacher/pages/Courses/Page/CourseStatistics';
import AddNewCourse from './Modules/Teacher/pages/Courses/Page/AddNewCourse';
import ChooseUnit from './Modules/Teacher/pages/Courses/Page/ChooseUnit/Index';
import ItemsUnit from './Modules/Teacher/pages/Courses/Page/ChooseUnit/page/ItemsUnit';
import Unit from './Modules/Teacher/pages/Courses/Page/ChooseUnit/page/Unit/Unit';
import Test from './Modules/Teacher/pages/Courses/Page/Test';
import Students from './Modules/Teacher/pages/Students/index';
import StudentStatistics from './Modules/Teacher/pages/Students/components/StudentStatistics';
import StudentProfile from './Modules/Teacher/pages/Students/components/StudentProfile';
import TeacherProfile from './Modules/Teacher/pages/Profile/index';
import {
  AuthLayout,
  DashboardLayout,
  PublicLayout,
  NavTeacher,
} from './utils/layouts';
import ProtectedRoute from './ProtectedRoutes/StudentProtected';
import Quiz from './Modules/Student/pages/Quiz/Index';
import MyLearning from './Modules/Student/pages/MyLearning/index';
import { useEffect, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';

function AppRoutes() {
  return (
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
        </Route>

        {/* login */}
        <Route path="/register" element={<Register />} />

        {/* page Teacherrrr */}
        <Route path="/" element={<NavTeacher />}>
          <Route index path="/IndexTeacher" element={<IndexTeacher />} />
          <Route path="/Teacherr" element={<Teacherr />} />
        </Route>

        <Route path="/teacherPanel" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />}>
            <Route element={<CourseStatistics />} index />
            <Route path="addnewcourse" element={<AddNewCourse />} />

            {/* Nested Routes Courses */}

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
          <Route path="profile" element={<TeacherProfile />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
function LoadingComponents() {
  return (
    <div className="min-h-screen bg-dark flex justify-center items-center flex-col">
      <span className=" text-white text-8xl text-gradient font-extrabold my-5">
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





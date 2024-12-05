import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import ScrollTop from "./Helpers/ScrollTop";
import { PublicLayout } from "./utils/layouts";
import { Grade } from "./pages/Grades";
import Subjects from "./pages/Subjects";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import TeacherDetails, { ReviewsTab } from "./pages/TeacherDetails";
import CourseDetailsTab from "./pages/TeacherDetails/CourseDetailsTab";
import Wishlistempty from "./pages/Wishlist/components/Wishlistempty/Wishlistempty";
import { AboutTab } from "./pages/TeacherDetails/TeacherInfos";

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
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
        </Route>

      </Routes>
    </>
  );
}

export default App;
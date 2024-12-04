import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import ScrollTop from "./Helpers/ScrollTop";
import { PublicLayout } from "./utils/layouts";
import { Grade } from "./pages/Grades";
import Subjects from "./pages/Subjects";

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/school/:schoolName" element={<Grade />} />
          <Route
            path="/school/:schoolName/grade/:gradeName"
            element={<Subjects/>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

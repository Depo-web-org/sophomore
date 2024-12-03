import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { About } from "./pages/About/About";
import ScrollTop from "./Helpers/ScrollTop";
import { PublicLayout } from "../layouts";

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

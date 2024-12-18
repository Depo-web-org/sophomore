import { useAuth } from "../../../../ProtectedRoutes/AuthContext";
import Hero from "./Components/Hero/Hero";
import HomeMin from "./Components/Home min/HomeMin";
import ChooseSchool from "./Components/Schools/ChooseSchool";
import ChooseCard from "./Components/choose/ChooseCard";

const Home = () => {
  const { isAuthenticated, role } = useAuth();


  return (
    <>
      <Hero />
      { isAuthenticated&&<HomeMin/> }
      <div className="container w-full md:w-custom-md xl:w-custom-xl mx-auto">
        <ChooseSchool />
        <ChooseCard />
      </div>
    </>
  );
};

export default Home;

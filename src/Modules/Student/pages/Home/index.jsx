import { useSelector } from "react-redux";
import Hero from "./Components/Hero/Hero";
import HomeMin from "./Components/Home min/HomeMin";
import ChooseSchool from "./Components/Schools/ChooseSchool";
import ChooseCard from "./Components/choose/ChooseCard";
import { Grade } from "../Grades";

const Home = () => {
  const {  user } = useSelector((state) => state.auth);
  const {role}=useSelector((state)=>state.role)|| user.role;
  const Token= localStorage.getItem('Token');

  return (
    <>
      <Hero />
      {Token && role === "student" && <HomeMin />}
      <div className="container w-full md:w-custom-md xl:w-custom-xl mx-auto">
        {/* <ChooseSchool /> */}
        <Grade/>
        <ChooseCard />
      </div>
    </>
  );
};

export default Home;

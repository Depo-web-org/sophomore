import { useSelector } from "react-redux";
import Hero from "./Components/Hero/Hero";
import HomeMin from "./Components/Home min/HomeMin";
import ChooseSchool from "./Components/Schools/ChooseSchool";
import ChooseCard from "./Components/choose/ChooseCard";
import useRole from "../../../../Hooks/UseRole";

const Home = () => {
  const { token, user } = useSelector((state) => state.auth);
  return (
    <>
      <Hero />
      {token && user?.role === "consumer" && <HomeMin />}
      <div className="container w-full md:w-custom-md xl:w-custom-xl mx-auto">
        <ChooseSchool />
        <ChooseCard />
      </div>
    </>
  );
};

export default Home;

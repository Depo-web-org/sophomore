import Hero from "./Components/Hero/Hero";
import ChooseSchool from "./Components/Schools/ChooseSchool";
import ChooseCard from "./Components/choose/ChooseCard";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container w-full md:w-custom-md xl:w-custom-xl mx-auto">
        <ChooseSchool />
        <ChooseCard />
      </div>
    </>
  );
};

export default Home;

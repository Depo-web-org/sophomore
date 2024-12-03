import Hero from "./Components/Hero/Hero";
import ChooseSchool from "./Components/Schools/ChooseSchool";
import ChooseCard from "./Components/ why Choose Sophomore/ChooseCard";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="px-4 lg:px-[124px]">
        <ChooseSchool />
        <ChooseCard />
      </div>
    </>
  );
};

export default Home;

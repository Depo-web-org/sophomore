import { useSelector } from "react-redux";
import Hero from "./Components/Hero/Hero";
import HomeMin from "./Components/Home min/HomeMin";
import ChooseSchool from "./Components/Schools/ChooseSchool";
import ChooseCard from "./Components/choose/ChooseCard";
import { Grade } from "../Grades";
import { useGetStudentCoursesQuery } from "../../../../Redux/data/getDataApiSlice";
import { useEffect } from "react";

const Home = () => {
  const {  user } = useSelector((state) => state.auth);
  const {role}=useSelector((state)=>state.role)|| user.role;
  const Token= localStorage.getItem('Token');
    const {data, isLoading, isError,refetch}= useGetStudentCoursesQuery()
useEffect(()=>{
  refetch();
},[])  

  return (
    <>
      <Hero />

      {Token && role === "student" && data?.data?.length > 0 && <HomeMin />}
      <section className="  container">
        <ChooseSchool />
        {/* <Grade/> */}
      {!Token &&   <ChooseCard />}

       
      </section>
    </>
  );
};

export default Home;

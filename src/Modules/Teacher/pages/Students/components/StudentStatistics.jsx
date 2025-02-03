import React from "react";
import TotalChart from "./Charts";
import StudentDetails from "./StudentDetails";
import EnrollmentProgress from "./EnrollmentProgress";
import Carusoul from "./Carusoul";
import { useGetTeacherSubscripersQuery } from "../../../../../Redux/data/getDataApiSlice";
import { countStudentsPerCourse } from "../../Dashboard/components/CourseManagement";

export default function StudentStatistics() {
      const {data:subscripers,isLoading:subLoading, isFetching:subFetching,isError:subError,refetch:subRefetch} = useGetTeacherSubscripersQuery()
      const idCounts = subscripers?.data?.reduce((counts, obj) => {
        counts[obj?.consumer] = (counts[obj.consumer] || 0) + 1;
        return counts;
      }, {});
      
      const totals =(idCounts)=>{
        if(idCounts){    
          const numberOfStudents = Object?.keys(idCounts)?.length;
          return numberOfStudents}
          return ;
      }
      totals(idCounts)
      const totalsNum = totals(idCounts);

 const studentPerCourse=countStudentsPerCourse(subscripers?.data)
      
  return (
    <>
    <Carusoul totalsNum={totalsNum}/>
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around  ">
        <EnrollmentProgress  totalsNum={totalsNum} />
 <TotalChart studentPerCourse={studentPerCourse}  />
      </div>
      <StudentDetails />
    </>
  );
}

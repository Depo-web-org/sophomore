import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TopText from "../components/Top Text Cards/TopText";
import { VscChromeClose } from "react-icons/vsc";
import Alert from "../../Student/pages/Profile/components/Alerts/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TeacherUpload from "../components/TeacherUpload/Teacher";

const IndexTeacher = () => {
  const [SchoolCategories, setSchoolCategories] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  return (
    <div className=" w-full min-h-screen ">
      
     
     
    <TeacherUpload/>


    </div>
  );
};

export default IndexTeacher;
// cardteacher





// <div className="relative w-full h-screen">
      
// <img
//   src="/images/Teacher/Teacher panel.svg"
//   alt="Teacher"
//   className="w-full h-[100%] object-cover absolute"
// />
// {/* Add item for user */}
// <div className="relative z-10 pt-28 lg:pt-32 text-center">
//   <TopText name="Welcome Mohamed" title="Please Upload Your Papers" />
//   {data.map((item, index) => {
//     const school = SchoolCategories.find((school) => school.id === item[0]);
//     const grade = school?.grades.find((grade) => grade.id === item[1]);
//     const subject = grade?.subjects.find((subject) => subject.id === item[2]);
//     return (
//       <div key={index}>
//         <span className="m-1 bg-[#24386d] text-white inline-flex items-center gap-x-2 py-1.5 ps-3 pe-2 rounded-full text-sm font-medium">
//           {`${school?.school_category} , ${grade?.grade_no} , ${subject?.name}`}
//           <VscChromeClose
//             className="font-bold text-secondary hover:text-red-800 hover:rotate-180  duration-500 w-5 h-5 cursor-pointer"
//             onClick={() => handleRemoveBadge(item)}
//           />
//         </span>
//       </div>
//     );
//   })}
// </div>
// {/* Options */}
// <div className="w-full py-12 px-5 flex justify-center">
//   <form
//     onSubmit={handleSubmit(handleFormSubmit)}
//     className="relative z-10 w-[500px]"
//   >
//     <div className="flex justify-center">
//       <div id="options" className="h-auto w-full tracking-wide">
//         <label className="text-gray-400 font-semibold text-sm lg:text-md">
//           Select School Type
//         </label>
//         <select
//           className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border focus:outline-none focus:ring-1 focus:ring-blue-500"
//           onChange={handleSchoolChange}
//           value={selectedSchool?.id || ""}
//         >
//           <option value="" disabled>
//             Select School
//           </option>
//           {SchoolCategories.map((school) => (
//             <option key={school.id} value={school.id}>
//               {school.school_category}
//             </option>
//           ))}
//         </select>

//         {selectedSchool && (
//           <>
//             <label className="text-gray-400 font-semibold text-sm lg:text-md">
//               Select Grade
//             </label>
//             <select
//               className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border focus:outline-none focus:ring-1 focus:ring-blue-500"
//               onChange={handleGradeChange}
//               value={selectedGrade?.id || ""}
//             >
//               <option value="" disabled>
//                 Select Grade
//               </option>
//               {selectedSchool.grades.map((grade) => (
//                 <option key={grade.id} value={grade.id}>
//                   {grade.grade_no}
//                 </option>
//               ))}
//             </select>
//           </>
//         )}

//         {selectedGrade && (
//           <>
//             <label className="text-gray-400 font-semibold text-sm lg:text-md">
//               Select Subject
//             </label>
//             <select
//               className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border focus:outline-none focus:ring-1 focus:ring-blue-500"
//               {...register("subject", {
//                 required: "Subject is required",
//               })}
//             >
//               <option value="" disabled>
//                 Select Subject
//               </option>
//               {selectedGrade.subjects?.map((subject) => (
//                 <option key={subject.id} value={subject.id}>
//                   {subject.name}
//                 </option>
//               ))}
//             </select>
//             {errors.subject && (
//               <p className="text-red-500 text-sm">
//                 {errors.subject.message}
//               </p>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//     {/* Buttons */}
//     <div>
//       <button
//         type="submit"
//         className="capitalize me-10 rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
//       >
//         Add Another
//       </button>

//       <button
//         type="button"
//         className="rounded mt-4 bg-green-600 px-4 py-2 text-md font-semibold text-white hover:bg-green-800 transition-all duration-300"
//         onClick={handleSendData}
//       >
//         {loading ? (
//           <div
//             className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
//             role="status"
//           >
//             <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//               Loading...
//             </span>
//           </div>
//         ) : (
//           "Next"
//         )}
//       </button>
//     </div>
//   </form>
// </div>

// {showAlert && (
//   <Alert
//     Name="Success &#10004;"
//     title="Data has been successfully saved"
//     color="text-green-600"
//     showAlert={showAlert}
//     setShowAlert={setShowAlert}
//   />
// )}

// {showAlertError && (
//   <Alert
//     Name="Error &#10007;"
//     title="Oops! Please add items before submitting!"
//     color="text-red-600"
//     showAlert={showAlertError}
//     setShowAlert={setShowAlertError}
//   />
// )}


// </div>
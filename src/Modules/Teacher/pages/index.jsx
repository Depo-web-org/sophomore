import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TopText from "../components/Top Text Cards/TopText";
import Useoptions from "../../../Hooks/Useoptions";
import Teacherr from "../components/TeacherUpload/Teacher";

const IndexTeacher = () => {
  const [showelement, setshowelement] = useState(true);

  // React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // Custom hook
  const { options } = Useoptions();

  const handleFormSubmit = (data) => {
    console.log("Form Data:", data);

    setshowelement(false);
  };

  return (
    <>
      {showelement ? (
        <div className="relative w-full h-screen">
          {/* photo */}
          <img
            src="/public/Teacher/Teacher panel.svg"
            alt="Teacher"
            className="w-full h-[100%] object-cover absolute"
          />
          {/* top text */}
          <div className="relative z-10 pt-28 lg:pt-32 text-center">
            <TopText
              name={"Welcome Mohamed"}
              title={"Please Upload Your Papers"}
            />
          </div>

          {/* options */}
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="relative z-10 pb-16 px-5 max-w-[600px] lg:w-calc(100%-50%)"
          >
            <div id="options" className="h-auto w-full tracking-wide">
              {options.map((item, index) => (
                <div key={item.id}>
                  <label
                    htmlFor={`dropdown-${index}`}
                    className="text-gray-400 font-semibold text-sm lg:text-md"
                  >
                    {item.title}
                  </label>
                  <select
                    {...register(`option${index}`, {
                      required: "This field is required",
                    })}
                    id={`dropdown-${index}`}
                    className="mt-1.5 py-2 w-full rounded-lg text-sm lg:text-md font-semibold text-gray-600 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option hidden value="">
                      {item.name}
                    </option>
                    {item.opations?.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors[`option${index}`] && (
                    <p className="text-red-500 text-sm">
                      {errors[`option${index}`].message}
                    </p>
                  )}
                </div>
              ))}

              {/* {showMessage && (
              <p className="mt-4 text-red-500 font-semibold">
                Please fill all the dropdowns!
              </p>
            )} */}
            </div>

            <button
              type="submit"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
            >
              Next step
            </button>
          </form>
        </div>
      ) : (
        <Teacherr />
      )}
    </>
  );
};

export default IndexTeacher;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import TopText from "../components/Top Text Cards/TopText";
// import Useoptions from "../../../Hooks/Useoptions";

// const IndexTeacher = () => {

//   const [showMasege, setshowMasege] = useState(false);
//   const Navigate = useNavigate()

//   //  custom hook
//   const { options, allFilled, selectedValues, handleSelectChange } =
//     Useoptions();

//     const handleButtonClick = () => {
//       if (allFilled !== true) {
//         console.log("Try Again");
//         setshowMasege(true);
//       } else {
//         console.log("trueee");
//         setshowMasege(false);
//         Navigate("/Teacherr")
//       }
//     };

//   return (
//     <div>
//       <div className="relative w-full h-screen">
//         {/* photo */}
//         <img
//           src="/public/Teacher/Teacher panel.svg"
//           alt="Teacher"
//           className="w-full h-[100%] object-cover absolute "
//         />
//         {/* top text */}
//         <div className="relative z-10 pt-28 lg:pt-32 text-center">
//           <TopText
//             name={"Welcome Mohamed"}
//             title={"Please Upload Your Papers"}
//           />
//         </div>

//         {/* options */}
//         <div className="relative z-10 pb-16 px-5 max-w-[600px] lg:w-calc(100%-50%)">
//           <div id="options" className="h-auto w-full tracking-wide ">
//             {options.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                   <label
//                     htmlFor="HeadlineAct"
//                     className="text-gray-400 font-semibold text-sm lg:text-md"
//                   >
//                     {item.title}
//                   </label>
//                   <select
//                     id={`dropdown-${index}`}
//                     value={selectedValues[index]}
//                     onChange={(e) => handleSelectChange(index, e.target.value)}
//                     className="mt-1.5 py-2 w-full rounded-lg text-sm lg:text-md font-semibold text-gray-600 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   >
//                     <option hidden className="text-md font-semibold">
//                       {item.name}
//                     </option>
//                     {item.opations?.map((option, index) => (
//                       <option
//                         className="text-md font-semibold"
//                         key={index}
//                         value={option}
//                       >
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               );
//             })}

//                 {showMasege && (
//                 <p className="mt-4 text-red-500 font-semibold">
//                    All dropdowns are filled!
//                 </p>
//                 )}

//           </div>

//             <button
//               onClick={() => { handleButtonClick()}}
//               type="button"
//               data-twe-ripple-init
//               data-twe-ripple-color="light"
//               className="rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
//             >
//               Next step
//             </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndexTeacher;

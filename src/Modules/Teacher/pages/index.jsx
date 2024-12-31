import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TopText from "../components/Top Text Cards/TopText";
import TeacherUpload from "../components/TeacherUpload/Teacher";
import { VscChromeClose } from "react-icons/vsc";
import Alert from "../../Student/pages/Profile/components/Alerts/Alert";
import { useNavigate } from "react-router-dom";

const IndexTeacher = () => {
  const School_categories = [
    {
      id: 1,
      school_category: "Governmental",
      grades: [
        {
          id: 1,
          grade_no: "Grade-1",
          subjects: [
            { id: 1, name: "history" },
            { id: 5, name: "geography" },
          ],
        },
        {
          id: 3,
          grade_no: "grade-2 (primary school)",
          subjects: [
            { id: 3, name: "science" },
            { id: 4, name: "english" },
          ],
        },
      ],
    },
    {
      id: 2,
      school_category: "British",
      grades: [
        {
          id: 2,
          grade_no: "grade-1 (prep school)",
          subjects: [{ id: 2, name: "math" }],
        },
      ],
    },
  ];

  const [selectedSchool, setSelectedSchool] = useState(null);
  const [showAlertError, setShowAlertError] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // add items a user in Array
  const handleFormSubmit = (formData) => {
    const selectedData = [
      selectedSchool?.id || "",
      selectedGrade?.id || "",
      parseInt(formData.subject) || "",
    ];

    if (selectedData[0] && selectedData[1] && selectedData[2]) {
      setData((prevData) => [...prevData, selectedData]);
      reset();
      setSelectedSchool(null);
      setSelectedGrade(null);
    }
  };

  // send data to backend
  const handleSendData = () => {
    if (data.length === 0) {
      setShowAlertError(true);
      setTimeout(() => {
        setShowAlertError(false);
      }, 3000);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate("/Teacherdocs");
      }, 2000);
    }
    console.log(data);
  };

  // Remove item
  const handleRemoveBadge = (item) => {
    setData((prevData) => prevData.filter((d) => d !== item));
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src="images/Teacher/Teacher panel.svg"
          alt="Teacher"
          className="w-full h-[100%] object-cover absolute"
        />
        <div className="relative z-10 pt-28 lg:pt-32 text-center">
          <TopText name="Welcome Mohamed" title="Please Upload Your Papers" />
          {/* whatch data a user */}
          {data.map((item, index) => {
            const school = School_categories.find(
              (school) => school.id === item[0]
            );
            const grade = school?.grades.find((grade) => grade.id === item[1]);
            const subject = grade?.subjects.find(
              (subject) => subject.id === item[2]
            );

            return (
              <div key={index}>
                <span className="m-1 bg-blue-500 text-white inline-flex items-center gap-x-2 py-1.5 ps-3 pe-2 rounded-full text-sm font-semibold">
                  {`${school?.school_category} , ${grade?.grade_no} , ${subject?.name}`}

                  <VscChromeClose
                    className="font-bold text-white hover:text-red-600 duration-500 w-5 h-5 cursor-pointer"
                    onClick={() => handleRemoveBadge(item)}
                  />
                </span>
              </div>
            );
          })}
        </div>

        <div className=" w-full py-12 px-5 flex justify-center">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="relative z-10 w-[500px]"
          >
            <div className="flex justify-center">
              <div id="options" className="h-auto w-full tracking-wide">
                <label className="text-gray-400 font-semibold text-sm lg:text-md">
                  Select School Type
                </label>
                <select
                  className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onChange={(e) =>
                    setSelectedSchool(
                      // find item or splis streng to integer
                      School_categories.find(
                        (school) => school.id === parseInt(e.target.value)
                      )
                    )
                  }
                  value={selectedSchool?.id || ""}
                >
                  <option value="" disabled>
                    Select School
                  </option>
                  {School_categories.map((school) => (
                    <option key={school.id} value={school.id}>
                      {school.school_category}
                    </option>
                  ))}
                </select>

                {selectedSchool && (
                  <>
                    <label className="text-gray-400 font-semibold text-sm lg:text-md">
                      Select Grade
                    </label>
                    <select
                      className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border focus:outline-none focus:ring-1 focus:ring-blue-500"
                      onChange={(e) =>
                        setSelectedGrade(
                          selectedSchool.grades.find(
                            (grade) => grade.id === parseInt(e.target.value)
                          )
                        )
                      }
                      value={selectedGrade?.id || ""}
                    >
                      <option value="" disabled>
                        Select Grade
                      </option>
                      {selectedSchool.grades.map((grade) => (
                        <option key={grade.id} value={grade.id}>
                          {grade.grade_no}
                        </option>
                      ))}
                    </select>
                  </>
                )}

                {selectedGrade && (
                  <>
                    <label className="text-gray-400 font-semibold text-sm lg:text-md">
                      Select Subject
                    </label>
                    <select
                      className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border focus:outline-none focus:ring-1 focus:ring-blue-500"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                    >
                      <option value="" disabled>
                        Select Subject
                      </option>
                      {selectedGrade.subjects.map((subject) => (
                        <option key={subject.id} value={subject.id}>
                          {subject.name}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm">
                        {errors.subject.message}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="me-10 rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
              >
                Add Another
              </button>
              <button
                type="button"
                className="rounded mt-4 bg-green-600 px-4 py-2 text-md font-semibold text-white hover:bg-green-800 transition-all duration-300"
                onClick={handleSendData}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>

      {showAlert && (
        <Alert
          Name="Success &#10004;"
          title="Data has been successfully saved"
          color="text-green-600"
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}

      {showAlertError && (
        <Alert
          Name="Error &#10007;"
          title="Oops! Please add items before submitting!"
          color="text-red-600"
          showAlert={showAlertError}
          setShowAlert={setShowAlertError}
        />
      )}
    </>
  );
};

export default IndexTeacher;

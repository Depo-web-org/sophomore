import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TopText from "../components/Top Text Cards/TopText";
import TeacherUpload from "../components/TeacherUpload/Teacher";
import { VscChromeClose } from "react-icons/vsc";
import Alert from "../../Student/pages/Profile/components/Alerts/Alert";
import { useNavigate } from "react-router-dom";

const IndexTeacher = () => {
  const options = [
    {
      id: "001",
      title: "What School type do you teach?",
      name: "e.g American",
      opations: [
        { id: "101", value: "American International School" },
        { id: "102", value: "British Academy" },
        { id: "103", value: "Canadian Learning Center" },
      ],
    },
    {
      id: "002",
      title: "What Grades are you applying for?",
      name: "e.g grade 1",
      opations: [
        { id: "201", value: "Grade 1 - Grade 5 (Elementary)" },
        { id: "202", value: "Grade 6 - Grade 8 (Middle School)" },
        { id: "203", value: "Grade 9 - Grade 12 (High School)" },
      ],
    },
    {
      id: "003",
      title: "Choose the subject you are applying for",
      name: "e.g Science",
      opations: [
        { id: "301", value: "Mathematics" },
        { id: "302", value: "Science" },
        { id: "303", value: "History" },
        { id: "304", value: "English Literature" },
      ],
    },
  ];

  const [showMessage, setShowMessage] = useState(true);
  const [data, setdata] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertError, setshowAlertError] = useState(false);
  const Navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    // Add selected options to the data array
    const selectedOptions = Object.values(data).filter((item) => item);
    setdata((prevData) => [...prevData, selectedOptions]);
    console.log(data);
    reset();
  };

  // alert
  const handleShowAlert = () => {
    setShowAlert(true);
    setshowAlertError(false);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleSendData = (id) => {
    if (data.length === 0) {
      console.log("The array is empty");
      setshowAlertError(true);
      setShowAlert(false);
      setTimeout(() => {
        setshowAlertError(false);
      }, 3000);
    } else {
      console.log("Selected Item:", data);
      handleShowAlert();
      setTimeout(() => {
        Navigate("/Teacherdocs");
      }, 2000);
    }
  };

  // Remove item
  const handleRemoveBadge = (item) => {
    setdata((id) => id.filter((id) => id !== item));
  };

  return (
    <>
      {showMessage ? (
        <div className="relative w-full h-screen ">
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

            {data.map((item, index) => (
              <div key={index}>
                <span className="m-1 bg-blue-500 text-white inline-flex items-center gap-x-2 py-1.5 ps-3 pe-2 rounded-full text-sm font-semibold">
                  {/* code change num to string */}
                  {item
                    .map((optionId) => {
                      const option = options
                        .flatMap((optionGroup) => optionGroup.opations)
                        .find((option) => option.id === optionId);
                      return option ? option.value : null;
                    })
                    .join(" , ")}

                  <VscChromeClose
                    className="font-bold text-white hover:text-red-600 duration-500 w-5 h-5 cursor-pointer"
                    onClick={() => handleRemoveBadge(item)}
                  />
                </span>
              </div>
            ))}
          </div>

          {/* options  py-12 px-5 max-w-[600px] lg:w-calc(100%-50%)*/}
          <div className="bg-red-400 w-full py-12 px-5 flex justify-center">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="relative z-10 w-[500px] "
            >
              <div className="flex justify-center">
                <div id="options" className="h-auto w-full tracking-wide">
                  {options.map((item, index) => (
                    <div key={item.id}>
                      {/* Label */}
                      <label
                        htmlFor={`dropdown-${index}`}
                        className="text-gray-400 font-semibold text-sm lg:text-md "
                      >
                        {item.title}
                      </label>

                      {/* Dropdown */}
                      <select
                        id={`dropdown-${index}`}
                        className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border  focus:outline-none focus:ring-1 focus:ring-blue-500"
                        {...register(`option${index}`, {
                          required: "This field is required",
                        })}
                      >
                        <option value="" selected>
                          {item.name}
                        </option>

                        {item.opations?.map((option) => (
                          <option
                            className="font-semibold text-gray-600"
                            key={option.id}
                            value={option.id}
                          >
                            {option.value}
                          </option>
                        ))}
                      </select>

                      {/* Error Handling */}
                      {errors[`option${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`option${index}`].message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Buttons */}
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
      ) : (
        <TeacherUpload />
      )}

      {showAlert && (
        <Alert
          Name="Success &#10004;"
          title="Data has been successfully "
          color={"text-green-600"}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}

      {showAlertError && (
        <Alert
          Name="Error &#10007;"
          title="Oops! Please add items to the array before submitting!"
          color="text-red-600"
          showAlert={showAlertError}
          setShowAlert={setshowAlertError}
        />
      )}
    </>
  );
};

export default IndexTeacher;

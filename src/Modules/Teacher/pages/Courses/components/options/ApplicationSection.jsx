import React, { useState } from "react";
import Useoptions from "../../../../../../Hooks/Useoptions";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ApplicationSection = () => {
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

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [data, setdata] = useState([]);

  const handleFormSubmit = (data) => {
    // Add selected options to the data array
    const selectedOptions = Object.values(data).filter((item) => item);
    setdata((prevData) => [...prevData, selectedOptions]);
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="my-10 lg:my-0 lg:mt-auto lg:ms-5 h-auto ">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div
            id="options"
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-auto items-center tracking-wide my-4"
          >
            {/* Form  */}
            <div className=" ">
              <div>
                <label
                  htmlFor="UserEmail"
                  className=" block text-sm font-medium text-gray-700"
                >
                  Title
                </label>

                <input
                  onChange={(eo) => {
                    console.log(eo.target.value);
                  }}
                  type="username"
                  id="username"
                  {...register("title", { required: "Title is required" })}
                  className={`border-2 py-2.5 mt-1 w-full rounded-md shadow-sm sm:text-sm ${
                    errors.title ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="Title"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="OrderNotes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Order Notes
                </label>
                <textarea
                  id="OrderNotes"
                  {...register("orderNotes", {
                    required: "Order notes are required",
                  })}
                  className={`border-2 mt-2 w-full rounded-lg shadow-sm sm:text-sm ${
                    errors.orderNotes ? "border-red-500" : "border-gray-200"
                  }`}
                  rows="4"
                  placeholder="Enter any additional order notes..."
                ></textarea>
                {errors.orderNotes && (
                  <p className="text-red-500 text-sm">
                    {errors.orderNotes.message}
                  </p>
                )}
              </div>
            </div>

            <div className=" ">
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

            <button
              type="submit"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="w-full lg:w-1/2    rounded bg-primary px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplicationSection;

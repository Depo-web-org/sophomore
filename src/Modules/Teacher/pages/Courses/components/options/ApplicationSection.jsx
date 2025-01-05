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
    setValue,
    formState: { errors },
  } = useForm();
  const [data, setdata] = useState([]);

  const handleFormSubmit = (data) => {
    // Add selected options to the data array
    const selectedOptions = Object.values(data).filter((item) => item);
    setdata((prevData) => [...prevData, selectedOptions]);
    reset();
  };

  return (
    <>
      <div className="my-10 lg:my-0 lg:ms-5 h-auto ">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="w-full sm:mx-auto lg:mx-0">
            <span className="block text-2xl lg:text-3xl font-semibold">
              Add a new Course
            </span>
            <p className="text-sm text-white">Upload Thumbnail</p>

            <div
              className={`relative border-2 border-dashed rounded-lg p-6 ${
                errors.file ? "border-red-500" : "border-gray-300"
              }`}
            >
              <input
                id="file"
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 "
                accept="image/png, image/jpeg, image/gif"
                {...register("file", {
                  required: "File is required",
                  validate: {
                    lessThan10MB: (files) =>
                      files[0]?.size < 10 * 1024 * 1024 ||
                      "File size exceeds 10MB",
                    acceptedFormats: (files) =>
                      ["image/png", "image/jpeg", "image/gif"].includes(
                        files[0]?.type
                      ) || "Unsupported file format",
                  },
                })}
              />

              <div className="text-center">
                <img
                  className="mx-auto h-12 w-12"
                  src="/Add New Courses.svg"
                  alt="add New courses"
                />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer"
                  >
                    <span>Drag and drop</span>
                    <span className="text-indigo-600"> or browse</span>
                    <span>to upload</span>

                    <input
                     onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setValue("file", e.target.files);
                      }
                    }}
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>

              <img src className="mt-4 mx-auto max-h-40 hidden" id="preview" />
            </div>
          </div>

          <div
            id="options"
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-auto  tracking-wide my-4"
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
                  placeholder=" Title"
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
                  placeholder=" Enter any additional order notes..."
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
              className="w-full lg:w-1/2  lg:-mt-10  rounded bg-primary px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
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

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { IoImage } from "react-icons/io5"; // Import IoImage
// import { RiCloseFill } from "react-icons/ri"; // Import RiCloseFill

// const ApplicationSection = () => {
//   const options = [
//     {
//       id: "001",
//       title: "What School type do you teach?",
//       name: "e.g American",
//       opations: [
//         { id: "101", value: "American International School" },
//         { id: "102", value: "British Academy" },
//         { id: "103", value: "Canadian Learning Center" },
//       ],
//     },
//     {
//       id: "002",
//       title: "What Grades are you applying for?",
//       name: "e.g grade 1",
//       opations: [
//         { id: "201", value: "Grade 1 - Grade 5 (Elementary)" },
//         { id: "202", value: "Grade 6 - Grade 8 (Middle School)" },
//         { id: "203", value: "Grade 9 - Grade 12 (High School)" },
//       ],
//     },
//     {
//       id: "003",
//       title: "Choose the subject you are applying for",
//       name: "e.g Science",
//       opations: [
//         { id: "301", value: "Mathematics" },
//         { id: "302", value: "Science" },
//         { id: "303", value: "History" },
//         { id: "304", value: "English Literature" },
//       ],
//     },
//   ];

//   // React Hook Form
//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm();
//   const [uploadImage, setUploadImage] = useState(null);

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadImage(file);
//       setValue("image", file); // Manually set the file in the form state
//     }
//   };

//   const handleFormSubmit = (data) => {
//     // Log all form data, including the file
//     console.log("Form Data:", data);

//     // Prepare form data for backend submission
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("orderNotes", data.orderNotes);
//     formData.append("image", data.image); // Append the image file
//     options.forEach((item, index) => {
//       formData.append(`option${index}`, data[`option${index}`]);
//     });
//     // Send formData to the backend (example using fetch)
//     // fetch("https://your-backend-endpoint.com/upload", {
//     //   method: "POST",
//     //   body: formData,
//     // })
//     //   .then((response) => response.json())
//     //   .then((result) => {
//     //     console.log("Success:", result);
//     //     reset(); // Reset the form after successful submission
//     //     setUploadImage(null); // Clear the uploaded image
//     //   })
//     //   .catch((error) => {
//     //     console.error("Error:", error);
//     //   });
//   };

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoImage } from "react-icons/io5"; // Import IoImage
import { RiCloseFill } from "react-icons/ri"; // Import RiCloseFill
import { useDispatch } from "react-redux";
import { addCourse } from "../../../../../../Redux/TeacherAddCourse/TeacherAddCourse";
import { useNavigate } from 'react-router-dom';

const ApplicationSection = () => {
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const navigate = useNavigate()
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
  const [uploadImage, setUploadImage] = useState(null);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadImage(file);
      setValue("image", file); // Manually set the file in the form state
    }
  };
  const handleFormSubmit = (data) => {
    const formData = {
      title: data.title,
      orderNotes: data.orderNotes,
      image: uploadImage,
      options: options.map((item, index) => ({
        id: item.id,
        selectedOption: data[`option${index}`],
      })),
    };
  
    // Dispatch data to Redux slice
    dispatch(addCourse(formData));
    // Reset form and state
    reset();
    
    setUploadImage(null);
    setTimeout(()=>{
      navigate('/teacherPanel/courses/chooseunit')
    },500)

  };

  return (
    <>
      <div className="lg:ms-5 h-auto  ">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="w-full lg:w-1/2 sm:mx-auto lg:mx-0">
            <p className="block text-2xl lg:text-3xl font-semibold ">
              Add a new Course
            </p>
            <span className="text-sm font-medium text-gray-400 my-2  ">Upload Thumbnail</span>

            <div
              className={`relative border-2 border-dashed rounded-lg p-6 ${
                errors.image ? "border-red-500" : "border-gray-300"
              }`}
            >
              <div className="flex justify-center w-full flex-col items-center pb-10 relative">
                <img
                  src={
                    uploadImage
                      ? "/images/correct.svg"
                      : "/images/Add New Courses.svg"
                  }
                  alt=""
                  className="w-auto absolute cursor-pointer mb-2"
                />

                <input
                  id="Upload-Image"
                  name="image"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="cursor-pointer opacity-0 z-20 py-7 mt-24"
                  required
                />
                {!uploadImage && (
                  <>
                    <span className="mt-2">
                      Drop Your Image Here or{" "}
                      <span className="text-blue-600">Browse</span>
                    </span>
                    <span className="text-[#00000078] text-sm">
                      Supports JPEG, PNG & Webp
                    </span>
                  </>
                )}
                {uploadImage && (
                  <>
                    <span className="text-emerald-600">
                      Uploaded Successfully{" "}
                      <IoImage className="inline mx-1" />
                    </span>
                    <span className="block text-gray-500 font-semibold">
                      {uploadImage.name}
                    </span>
                    <div
                      className="bg-red-600 text-white cursor-pointer rounded-md px-1 mt-2 font-semibold"
                      onClick={() => {
                        setUploadImage(null);
                        document.getElementById("Upload-Image").value = "";
                        setValue("image", null); // Clear the image value in React Hook Form
                      }}
                    >
                      <span className="mx-1">Delete</span>
                      <RiCloseFill className="text-2xl inline" />
                    </div>
                  </>
                )}
              </div>
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
            </div>
          </div>

          <div
            id="options"
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-auto tracking-wide my-4"
          >
            {/* Form  */}
            <div className="">
              <div>
                <label
                  htmlFor="UserEmail"
                  className="block text-sm font-medium text-gray-400"
                >
                  Title
                </label>

                <input
                  type="text"
                  id="title"
                  {...register("title", { required: "Title is required" })}
                  className={`border-2 py-2.5 mt-1 w-full text-gray-600 font-semibold placeholder:font-normal rounded-md shadow-sm sm:text-sm p-2 focus-within:outline-gray-200 bg-[#EFEFEF] ${
                    errors.title ? "border-red-500" : "border-[#EFEFEF]"
                  }`}
                  placeholder="Title"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>

              <div className="my-4">
                <label
                  htmlFor="OrderNotes"
                  className="block text-sm font-medium text-gray-400"
                >
                  Order Notes
                </label>
                <textarea
                  id="OrderNotes"
                  {...register("orderNotes", {
                    required: "Order notes are required",
                  })}
                  className={`border-2 mt-2 w-full rounded-lg h-[7.5rem] shadow-sm sm:text-sm p-2 text-gray-600 font-semibold placeholder:font-normal focus-within:outline-gray-200 bg-[#EFEFEF] ${
                    errors.orderNotes ? "border-red-500" : "border-[#EFEFEF]"
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

            <div className="h-full">
              {options.map((item, index) => (
                <div key={item.id}>
                  {/* Label */}
                  <label
                    htmlFor={`dropdown-${index}`}
                    className="text-gray-400 font-semibold text-sm lg:text-md"
                  >
                    {item.title}
                  </label>

                  {/* Dropdown */}
                  <select
                    id={`dropdown-${index}`}
                    className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border focus:outline-none"
                    {...register(`option${index}`, {
                      required: "This field is required",
                    })}
                  >
                    <option value="">{item.name}</option>

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
              className="w-full lg:w-1/2 lg:mt-5 rounded bg-primary px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
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
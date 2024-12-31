import React from "react";
import ApplicationSection from "../components/options/ApplicationSection";

const AddNewCourse = () => {
  return (
    <>
      {/* <div className="w-full sm:mx-auto lg:mx-0">
        <span className="block text-2xl lg:text-3xl font-semibold">
          Add a new Course
        </span>
        <p className="text-sm text-white">Upload Thumbnail</p>

        <div
          className="relative border-2 border-gray-300 border-dashed rounded-lg p-6"
          id="dropzone"
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 "
          />

          <div className="text-center">
            <img
              className="mx-auto h-12 w-12"
              src="/images/Add New Courses.svg"
              alt="add New courses"
            />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              <label htmlFor="file-upload" className="relative cursor-pointer">
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse</span>
                <span>to upload</span>

                <input
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      console.log(file.name);
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

       
      </div> */}
      <ApplicationSection />
    </>
  );
};

export default AddNewCourse;

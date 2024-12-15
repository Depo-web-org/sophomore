import React from "react";
import AddMessage from "../components/AddMessage";
import ApplicationSection from "../components/options/ApplicationSection";

const AddNewCourse = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="min-w-80 sm:mx-auto lg:mx-0">
        <span className="text-2xl lg:text-4xl font-semibold">Add a new Course</span>
        <p className="text-sm text-white pt-5">Upload Thumbnail</p>

        <div
          className="relative border-2 border-gray-300 border-dashed rounded-lg p-6"
          id="dropzone"
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 z-50"
          />
          <div className="text-center">
            <img
              className="mx-auto h-12 w-12"
              src="/Add New Courses.svg"
              alt="add New courses"
            />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              <label htmlFor="file-upload" className="relative cursor-pointer">
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse</span>
                <span>to upload</span>
                <input
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
        <AddMessage />
      </div>
        <ApplicationSection/>
    </div>
  );
};

export default AddNewCourse;

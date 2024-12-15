import React from "react";

const AddMessage = () => {
  return (
    <>
      <div className="my-4">
        <label
          htmlFor="UserEmail"
          className=" block text-sm font-medium text-gray-700"
        >
          Title
        </label>

        <input
          type="username"
          id="username"
          placeholder=" "
          className="border-2  pt-5 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="OrderNotes"
          className=" block text-sm font-medium text-gray-700"
        >
          Order notes
        </label>

        <textarea
          id="OrderNotes"
          className="border-2 mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
          rows="4"
          placeholder="Enter any additional order notes..."
        ></textarea>
      </div>
    </>
  );
};

export default AddMessage;

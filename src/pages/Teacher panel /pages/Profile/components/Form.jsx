import React from "react";

const Form = () => {
  return (
    <div className="lg:w-[calc(100%-30%)] min-h-96 sm:ms-auto my-16 sm:mt-10 px-5 lg:px-0">
      {/*first email */}
      <div className="sm:pe-32 flex flex-col sm:flex-row items-center gap-4">
        <span className="font-medium text-base sm:text-lg me-auto">
          Email
        </span>

        <label
          htmlFor="Username"
          className="w-full sm:w-64 relative block rounded-md border bg-white border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="email"
            id="email"
            className="w-full py-2 bg-white peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Email"
          />

          <span className="pointer-events-none absolute left-2 top-2 -translate-y-1/2 p-0.5 text-xs text-gray-500 font-bold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            hamada@gmail.com
          </span>
        </label>
      </div>

      <div className="sm:pe-60 pt-10">
        <div className="pb-5">
          <label
            htmlFor="UserEmail"
            className="block text-sm font-medium pb-2"
          >
            Enter New Password
          </label>

          <input
            type="Password"
            id="UserEmail"
            placeholder=" *********"
            className="py-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>

        <div className="py-5">
          <label
            htmlFor="UserEmail"
            className="block text-sm font-medium pb-2"
          >
            {" "}
            Retype new Password{" "}
          </label>

          <input
            type="Password"
            id="UserEmail"
            placeholder=" *********"
            className=" py-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>

        <button
          type="button"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          className="rounded bg-primary px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
        >
          Change Password
        </button>
      </div>
      {/* end */}
    </div>
  );
};

export default Form;

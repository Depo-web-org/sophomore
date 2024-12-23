import React from "react";

const OpseModels = ({ setOpseModel, handleLogout }) => {
  return (
    <>
      <div
        role="alert"
        className="scale-in-center  p-4   
        fixed inset-0 flex items-center justify-center z-[9999]"
      >
        <div className="bg-slate-950 w-[500px] p-4 rounded-2xl border-r-4 border-b-4 border-indigo-500">
          <div className=" w-full text-center">
            {/*top text model  */}
            <div>
              <strong className="text-xl font-bold pt-4 text-white">
                Delete Account
              </strong>

              <p className="mt-3  text-gray-500">
                Are you sure you want to delete your account? This action cannot
                be undone.
              </p>
            </div>

            {/* buttom */}
            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  handleLogout();
                }}
                type="button"
                className={`my-7 w-full rounded-3xl bg-green-500 hover:bg-green-600  px-2 py-2 text-md font-semibold text-white transition-all duration-300`}
              >
                Accept
              </button>

              <button
                onClick={() => {
                  setOpseModel(false);
                }}
                type="button"
                className={`my-7 w-full rounded-3xl hover:bg-red-500  border-2 px-2 py-2 text-md font-semibold text-white transition-all duration-300`}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpseModels;

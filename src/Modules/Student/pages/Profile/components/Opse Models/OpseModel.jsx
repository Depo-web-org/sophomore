import React from "react";

const OpseModels = ({ setOpseModel, handleLogout }) => {
  return (
    <>
      <div
        onClick={() => {
          setOpseModel(false);
        }}
        className=" p-4  bg-slate-600 bg-opacity-50
        fixed inset-0 flex items-center justify-center z-[9999]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="scale-in-center  bg-slate-900 w-[500px] p-4 rounded-2xl border-r-4 border-b-4 border-primary"
        >
          <div className=" w-full text-center">
            {/*top text model  */}
            <div>
              <strong className="text-xl font-bold pt-4 text-white">
                Are you sure you want to logout!
              </strong>

              <p className="mt-3  text-gray-500">
                Logging out will end your current session. You can always log
                back in to access your account.
              </p>
            </div>

            {/* buttom */}
            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  handleLogout();
                }}
                type="button"
                className={`my-7 w-full rounded-3xl bg-primary   px-2 py-2 text-md font-semibold text-white transition-all duration-300`}
              >
                Logout{" "}
              </button>

              <button
                onClick={() => {
                  setOpseModel(false);
                }}
                type="button"
                className={`my-7 w-full rounded-3xl hover:bg-secondary  border border-gray-500 hover:border-secondary px-2 py-2 text-md font-semibold text-white transition-all duration-300`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpseModels;

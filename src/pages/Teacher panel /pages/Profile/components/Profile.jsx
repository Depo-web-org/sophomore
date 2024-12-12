import React from "react";
import { BsFillCameraFill } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="w-full min-h-40">
      <div className="relative bg-gradient-to-r from-[#F15C54] from-10%  to-[#536CB3] to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg">
        {/* icon */}
        <BsFillCameraFill className="absolute top-4 right-7 h-6 w-6 text-white" />
        {/* img */}
        <img
          className="border-2 border-white absolute top-36 left-24 w-24 h-24 sm:w-32 sm:h-32 rounded-full"
          src="https://s3-alpha-sig.figma.com/img/4eed/dea2/50b16a6f7edf69ea1cf19a2c703ed08d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oDK7YXd4KT3lW983wBE2sfdaMY1lKKN9og5T6hEZwh-hrAcSqNAkUpPiEYV5nIqit0P7qva1-r4vimS1QX-dXQrW5EcY6BK-JYT388wSGvEkPjINuTNW4KB6pyKQpnqwbN5WyLgjg5zIzLh~L~IWrgdPOq-PbTuQlwDLtIXnQsAgKgkB4iPBpz14GYH0gCHtZXCRQzWX9e-k8KTBKxG6QH-4Gyi-hs7rjnyCznDbTJDhwhq~ul9OoDW1W4pd~QXUfbA0a3oK13jfFSH-PSJFdYwT~q~xnO1K5SjtSqwblUm9I2Xt0pbfcEeK~Jht77~VQhpfaAX6MZ0N9ogC-HwbQg__"
          alt="profile"
        />
      </div>

      {/* section Name */}
      <div className="relative min-h-36 sm:px-4 py-4 w-full mt-10 sm:mt-0 sm:w-[60%] ms-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-bold text-white text-md">Mohamed Ayman</p>
            <p className="text-gray-300 text-sm">
              Update your photos and personal Details
            </p>
          </div>

          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="rounded bg-primary px-4 py-2 text-sm font-semibold text-white  hover:bg-blue-800 transition-all duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

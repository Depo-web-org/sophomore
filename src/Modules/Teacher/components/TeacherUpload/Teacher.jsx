import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopText from "../Top Text Cards/TopText";
import { useForm } from "react-hook-form";

const cardteacher = [
  {
    id: "item1",
    name: "CV",
    img: "/images/Teacher/CardTeacher_1.svg",
  },
  {
    id: "item2",
    name: "Graduation Certificate",
    img: "/images/Teacher/CardTeachet_3.svg",
  },
  {
    id: "item3",
    name: "Intro Video",
    img: "/images/Teacher/CardTeachet_4.svg",
  },
  {
    id: "item4",
    name: "Additional Documents",
    img: "/images/Teacher/CardTeachet_2.svg",
  },
];

const TeacherUpload = () => {
  const [buttonStates, setButtonStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      setButtonStates((prevState) => ({
        ...prevState,
        [index]: { status: "Approved", urlfile: file.name, file },
      }));
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    
    Object.keys(buttonStates).forEach((index) => {
      const file = buttonStates[index]?.file;
      if (file) {
        formData.append(cardteacher[index].name.toLowerCase().replace(/ /g, "_"), file);
      }
    });
  
      console.log("DATA :", buttonStates);
  
    try {
      setLoading(true)
      const access_token = localStorage.getItem("access_token");
      const response = await axios.post("http://192.168.1.26:8000/api/v1/teachers/complete-profile-2/", formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log("Upload successful:", response.data);
      navigate("/teacherPanel");
    } catch (error) {
      console.error("Error uploading files:", error);
    }finally{
      setLoading(false)
    }
 


 
  };

  const allApproved =
    Object.keys(buttonStates).length === cardteacher.length &&
    Object.values(buttonStates).every((state) => state.status === "Approved");

  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="relative w-full h-screen">
      <img
        src="/images/Teacher/Teacher panel.svg"
        alt="Teacher"
        className="w-full h-[100%] object-cover absolute"
      />
      <div className="pt-28 lg:pt-32">
        <TopText name={"Welcome Mohamed"} title={"Please Upload Your Papers"} />

        <div className="relative inset-x-0 grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 mx-2 sm:mx-10">
          {cardteacher.map((item, index) => (
            <div
              key={item.id}
              className={`border ${
                buttonStates[index]?.status === "Approved"
                  ? "border-green-400"
                  : "border-white"
              } h-52 text-center flex flex-col items-center justify-center p-4 rounded-lg`}
            >
              <img
                className="w-16 h-16 object-cover"
                src={item.img}
                alt={item.name}
              />
              <div>
                <p className="sm:w-44 min-h-[70px] text-sm sm:text-base lg:text-lg text-white font-bold py-2">
                  {item.name}
                </p>
                <label
                  className={`${
                    buttonStates[index]?.status === "Approved"
                      ? "bg-green-500"
                      : "bg-primary"
                  } hover:bg-blue-800 cursor-pointer rounded px-4 py-2 text-md font-semibold text-white transition-all duration-300`}
                >
                  {buttonStates[index]?.status === "Approved"
                    ? "Approved"
                    : "Upload"}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, index)}
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative inset-x-0 text-center py-14">
        {error ? (
          <p className="text-red-500 mt-2">{error}</p>
        ) : (
          <p className="text-lg sm:text-2xl lg:text-3xl text-white font-bold">
            Kindly wait until you get approved
          </p>
        )}

        {allApproved && (
          <button
            onClick={onSubmit}
            disabled={loading}
            className="rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
          >
            {loading ? (
                <div
                  className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              ) : (
                "Get Started"
              )}
          </button>
        )}
      </div>
    </form>
  );
};

export default TeacherUpload;

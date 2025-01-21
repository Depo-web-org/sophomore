import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopText from "../Top Text Cards/TopText";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  useGetProfileTeacherQuery,
  useGetTeacherDocumentQuery,
} from "../../../../Redux/data/getDataApiSlice";
import { useSelector } from "react-redux";
import { BsHourglassSplit } from "react-icons/bs";
import { useAddTeacherDocumentMutation } from "../../../../Redux/data/postDataApiSlice";

const TeacherUpload = () => {
  const role = useSelector((state) => state.role.role);
  const {
    data,
    error: dataerror,
    isFetching,
    refetch,
    isLoading,
  } = useGetProfileTeacherQuery({ provider: role });
  const documentStatus = data?.data?.documents || [];
  const AllDataStatus = data?.data?.status;

  // useGetTeacherDocumentQuery

  const { t } = useTranslation();
  const [buttonStates, setButtonStates] = useState([]);
  const [cardteacher, setCardteacher] = useState([]);
  const getUserInformation = JSON.parse(localStorage.getItem("USER"));
  const [updateDocument, { isError, error: UpdateEroor }] =
    useAddTeacherDocumentMutation();

  // Fetch data from backend on component mount
  const { data: AllData, error } = useGetTeacherDocumentQuery({
    provider: role,
  });
  console.log(AllData?.data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://dev.depowebeg.com/education/api/getProviderDocumentCategories.php"
  //       );
  //       const backendData = response.data.data;
  //       console.log(backendData)

  //       setCardteacher(backendData);
  //     } catch (error) {
  //       console.error("Error fetching data from backend:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = {
        CV: "application/pdf",
        "Graduation Certificate": "application/pdf",
        "Additional Documents": "application/pdf",
        "Intro Video": "video/mp4",
      };

      const itemName = cardteacher[index].name;
      const allowedType = allowedTypes[itemName];

      if (file.type !== allowedType) {
        alert(`Invalid file type for ${itemName}. Expected: ${allowedType}`);
        return;
      }

      setButtonStates((prevState) => ({
        ...prevState,
        [index]: { status: "Uploaded", urlfile: file.name, file },
      }));
    }
  };

  // function For Send one by one

  const onSubmit = async (data) => {
    try {
      // Loop through each cardteacher item and send the corresponding file
      for (let index = 0; index < cardteacher.length; index++) {
        const item = cardteacher[index];
        const file = buttonStates[index]?.file;

        if (file) {
          const formData = new FormData();
          formData.append("document_category", item.id);
          formData.append("hint", item.hint || "");
          formData.append("hint_ar", item.hint_ar || "");
          formData.append("document", file);

          // Log FormData contents
          for (let [key, value] of formData.entries()) {
            console.log(key, value);
          }

          const response = await updateDocument(formData).unwrap();
          console.log(`Upload successful for ${item.name}:`, response);
        }
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      refetch();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
      <div className="pt-28 lg:pt-32">
        <TopText
          name={t("teacherUpload.welcome", {
            name: `${getUserInformation.data.first_name}`,
          })}
          title={t("teacherUpload.uploadPapers")}
        />

        <div className="relative inset-x-0 grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 mx-2 sm:mx-10">
          {AllData?.data.map((item, index) => (
            <div
              key={item.id}
              className={`border ${
                buttonStates[index]?.status === "Uploaded"
                  ? "border-green-400"
                  : "border-white"
              } h-52 text-center flex flex-col items-center justify-center p-4 rounded-lg`}
            >
              <img
                className="w-16 h-16 object-cover rounded-md"
                src={`https://dev.depowebeg.com/${item.path}/${item.icon}`}
                alt={item.name}
              />
              <div>
                <p className="sm:w-44 min-h-[70px] text-sm sm:text-base lg:text-lg text-white font-bold py-2">
                  {t(
                    `teacherUpload.${item.name.toLowerCase().replace(/ /g, "")}`
                  )}
                </p>
                <label
                  className={`${
                    documentStatus[index]?.verified === "0"
                      ? "bg-green-500"
                      : documentStatus[index]?.verified === "2"
                      ? "bg-orange-500"
                      : "bg-primary"
                  } rounded px-4 py-2 text-md font-semibold text-white transition-all duration-300`}
                >
                  {/* Conditional rendering for documentProcess[index].verified */}
                  {documentStatus[index]?.verified === "1" &&
                    "upload to verify"}
                  {documentStatus[index]?.verified === "2" && (
                    <>
                      pending verification{" "}
                      <BsHourglassSplit className="text-white text-xl animate-spin duration-700 transition-all inline-block" />
                    </>
                  )}
                  {documentStatus[index]?.verified === "0" && "verified"}
                  {documentStatus[index]?.verified !== "1" &&
                    documentStatus[index]?.verified !== "2" &&
                    documentStatus[index]?.verified !== "0" &&
                    (buttonStates[index]?.status === "Uploaded"
                      ? t("teacherUpload.uploaded")
                      : t("teacherUpload.upload"))}

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, index)}
                    accept={
                      item.name === "Intro Video"
                        ? "video/mp4"
                        : "application/pdf"
                    }
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative inset-x-0 text-center py-14">
        {dataerror ? (
          <p className="text-red-500 mt-2">
            {t("teacherUpload.errorUploading")}
          </p>
        ) : (
          <p className="text-lg sm:text-2xl lg:text-3xl text-white font-bold">
            {t("teacherUpload.waitForApproval")}
          </p>
        )}

        {AllDataStatus !== "0" && (
          <button
            type="submit"
            disabled={isLoading}
            className="rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
          >
            {isLoading ? (
              <div
                className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  {t("teacherUpload.loading")}
                </span>
              </div>
            ) : (
              "Upload Documents"
            )}
          </button>
        )}
        {AllDataStatus == "0" && (
          <Link
            to={"/teacherpanel"}
            className="rounded mt-5 inline-block bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
          >
            Lets start
          </Link>
        )}
      </div>
    </form>
  );
};

export default TeacherUpload;

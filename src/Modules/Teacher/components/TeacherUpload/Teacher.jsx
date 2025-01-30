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
import axios from "axios"; // Import axios for API calls
import Alert from "../../../Student/pages/Profile/components/Alerts/Alert";
import { toast } from "react-toastify";

const TeacherUpload = ({ showAlert, setShowAlert }) => {
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
  console.log("AllDataStatus :", AllDataStatus);

  const { t, i18n } = useTranslation();
  const [buttonStates, setButtonStates] = useState([]);
  const [cardteacher, setCardteacher] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading status
  const getUserInformation = JSON.parse(localStorage.getItem("USER"));
  const [updateDocument, { isError, error: UpdateEroor }] =
    useAddTeacherDocumentMutation();

  console.log(getUserInformation.data.status);
  const { data: AllData, error } = useGetTeacherDocumentQuery({
    provider: role,
  });

  // Fetch data from backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Set loading to true when data fetching starts
      try {
        const response = await axios.get(
          "https://dev.depowebeg.com/education/api/getProviderDocumentCategories.php"
        );
        const backendData = response.data.data;
        console.log(backendData);

        // Update the cardteacher state with fetched data
        setCardteacher(backendData);
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };

    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [uploadedFilesCount, setUploadedFilesCount] = useState(0);
  const handleFileChange = (e, index) => {
    if (uploadedFilesCount >= 4) {
      alert("لا يمكنك رفع أكثر من 4 ملفات");
      return;
    }
    const file = e.target.files[0];
    if (file && cardteacher[index]) {
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
    setUploadedFilesCount((prev) => prev + 1);
  };

  const onSubmit = async (data) => {
    if (uploadedFilesCount === 0) {
      alert("الرجاء رفع الملفات قبل الإرسال.");
      return;
    }
    try {
      for (let index = 0; index < cardteacher.length; index++) {
        const item = cardteacher[index];
        const file = buttonStates[index]?.file;

        if (file) {
          const formData = new FormData();
          formData.append("document_category", item.id);
          formData.append("hint", item.hint || "");
          formData.append("hint_ar", item.hint_ar || "");
          formData.append("document", file);

          const response = await updateDocument(formData).unwrap();
          console.log(`Upload successful for ${item.name}:`, response);
        }
        console.log("FILSE .. ");
      }
      toast.success(t("teacherUpload.tost"));
    } catch (error) {
      console.error("Error uploading files:", error);
      // toast.(t("teacherUpload.tost"));
    } finally {
      refetch();
    }
  };

  console.log("//", getUserInformation?.data?.status);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
        <div className="pt-28 lg:pt-32">
          <TopText
            name={t("teacherUpload.welcome", {
              name: `${getUserInformation.data.first_name}`,
            })}
            title={t("teacherUpload.uploadPapers")}
          />

          <div className="relative inset-x-0 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 lg:mx-2 sm:mx-10">
            {loading ? (
              <p>Loading...</p> // Display loading message or spinner
            ) : cardteacher.length > 0 ? (
              cardteacher.map((item, index) => (
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
                        `teacherUpload.${item.name
                          .toLowerCase()
                          .replace(/ /g, "")}`
                      )}
                    </p>
                    <label
                      className={`${
                        documentStatus[index]?.verified === "0"
                          ? "bg-green-500"
                          : documentStatus[index]?.verified === "2"
                          ? "bg-orange-500"
                          : "bg-primary"
                      } rounded px-4 py-2 text-md font-semibold text-white transition-all duration-300 text-nowrap `}
                    >
                      {documentStatus[index]?.verified === "1" &&
                        "upload to verify"}
                      {documentStatus[index]?.verified === "2" && (
                        <>
                          pending verification{" "}
                          <BsHourglassSplit className="text-white text-xl animate-spin duration-700 transition-all inline-block " />
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
              ))
            ) : (
              <p>Loading...</p>
            )}
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

          {AllDataStatus === "1" && (
            <button
              type="submit"
              disabled={loading}
              className="rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
            >
              {loading ? (
                <div
                  className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    {t("teacherUpload.loading")}
                  </span>
                </div>
              ) : i18n.language === "ar" ? (
                "تحميل المستندات"
              ) : (
                "Upload Documents"
              )}
            </button>
          )}

          {AllDataStatus === "0" && (
            <Link
              to={"/teacherpanel"}
              className="rounded mt-5 inline-block bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
            >
              {i18n.language === "ar" ? "ابدا" : "Lets start"}
            </Link>
          )}
        </div>
      </form>
      {AllDataStatus === "2" && (
        <button className="rounded block mx-auto m-5 bg-yellow-500 px-4 py-2 text-md font-semibold text-white hover:bg-yellow-600 transition-all duration-300">
          {i18n.language === "ar" ? " قيد المراجعه" : "Under review"}
        </button>
      )}
    </>
  );
};

export default TeacherUpload;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopText from "../Top Text Cards/TopText";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useUpdateDocumentMutation } from "../../../../Redux/Auth/authApiSlice";

const TeacherUpload = () => {
  const { t } = useTranslation();
  const [buttonStates, setButtonStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cardteacher, setCardteacher] = useState([]);
  const navigate = useNavigate();
  const getUserInformation = JSON.parse(localStorage.getItem("USER"));
 const [updateDocument, { isLoading, isError, error:UpdateEroor }] =
 useUpdateDocumentMutation();
  // Fetch data from backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev.depowebeg.com/education/api/getProviderDocumentCategories.php"
        );
        const backendData = response.data.data;

        const mappedData = backendData.map((item) => ({
          id: item.id,
          name: item.name,
          path: item.path,
          icon: item.icon,
          mandatory: item.mandatory === "1",
        }));

        setCardteacher(mappedData);
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      }
    };

    fetchData();
  }, []);

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
      setLoading(true);

      // Loop through each cardteacher item and send the corresponding file
      for (let index = 0; index < cardteacher.length; index++) {
        const item = cardteacher[index];
        const file = buttonStates[index]?.file;

        if (file) {
          const formData = new FormData();
          formData.append("document_category", item.id); // Use the item's ID as document_category
          formData.append("hint", item.hint || ""); // Use hint if available, otherwise empty
          formData.append("hint_ar", item.hint_ar || ""); // Use hint_ar if available, otherwise empty
          formData.append("document", file);

          // Log FormData contents
          for (let [key, value] of formData.entries()) {
            console.log(key, value);
          }

          const response = await updateDocument(formData).unwrap();
          console.log(`Upload successful for ${item.name}:`, response);
        }
      }

      // Navigate after all files are uploaded
      navigate("/teacherPanel");
    } catch (error) {
      console.error("Error uploading files:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  // function For Send All 4 Files once but didn't work
  // const onSubmit = async (data) => {
  //   try {
  //     setLoading(true);
  
  //     // إنشاء FormData واحد
  //     const formData = new FormData();
  
  //     // إضافة جميع البيانات إلى FormData
  //     cardteacher.forEach((item, index) => {
  //       const file = buttonStates[index]?.file;
  //       if (file) {
  //         formData.append(`document_category_${index}`, item.id); // إضافة document_category
  //         formData.append(`hint_${index}`, item.hint || ""); // إضافة hint
  //         formData.append(`hint_ar_${index}`, item.hint_ar || ""); // إضافة hint_ar
  //         formData.append(`document_${index}`, file); // إضافة الملف
  //       }
  //     });
  
  //     // Log FormData contents
  //     for (let [key, value] of formData.entries()) {
  //       console.log(key, value);
  //     }
  
  //     // إرسال FormData في طلب واحد
  //     const response = await updateDocument(formData).unwrap();
  //     console.log("Upload successful:", response);
  
  //     // التنقل بعد الانتهاء من التحميل
  //     navigate("/teacherPanel");
  //   } catch (error) {
  //     console.error("Error uploading files:", error);
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
      <div className="pt-28 lg:pt-32">
        <TopText
          name={t("teacherUpload.welcome", { name: `${getUserInformation.data.first_name}` })}
          title={t("teacherUpload.uploadPapers")}
        />

        <div className="relative inset-x-0 grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 mx-2 sm:mx-10">
          {cardteacher.map((item, index) => (
            <div
              key={item.id}
              className={`border ${
                buttonStates[index]?.status === "Uploaded"
                  ? "border-green-400"
                  : "border-white"
              } h-52 text-center flex flex-col items-center justify-center p-4 rounded-lg`}
            >
              <img
                className="w-16 h-16 object-cover"
                src={`https://dev.depowebeg.com/${item.path}/${item.icon}`}
                alt={item.name}
              />
              <div>
                <p className="sm:w-44 min-h-[70px] text-sm sm:text-base lg:text-lg text-white font-bold py-2">
                  {t(`teacherUpload.${item.name.toLowerCase().replace(/ /g, "")}`)}
                </p>
                <label
                  className={`${
                    buttonStates[index]?.status === "Uploaded"
                      ? "bg-green-500"
                      : "bg-primary"
                  } hover:bg-blue-800 cursor-pointer rounded px-4 py-2 text-md font-semibold text-white transition-all duration-300`}
                >
                  {buttonStates[index]?.status === "Uploaded"
                    ? t("teacherUpload.uploaded")
                    : t("teacherUpload.upload")}
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
        {error ? (
          <p className="text-red-500 mt-2">{t("teacherUpload.errorUploading")}</p>
        ) : (
          <p className="text-lg sm:text-2xl lg:text-3xl text-white font-bold">
            {t("teacherUpload.waitForApproval")}
          </p>
        )}

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
          ) : (
            t("teacherUpload.getStarted")
          )}
        </button>
      </div>
    </form>
  );
};

export default TeacherUpload;
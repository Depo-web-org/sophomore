// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// export default function SucessOtp({ processFinished }) {
//   const { t } = useTranslation();
//   const navigate = useNavigate();

//   return (
//     <div className="w-full my-auto flex justify-center">
//       <div className="flex flex-col items-center lg:items-start justify-start gap-2 w-4/5 lg:w-full">
//         <p className="text-5xl font-bold text-white">{t("otp.amazing")}</p>
//         <p className="text-base font-bold text-textopacity">
//           {t("otp.everythingSet")}
//         </p>
//         <div className="flex flex-col justify-center items-center gap-2 w-full pt-8">
//           <img
//             className="size-12"
//             src="/images/register/Vector (3).svg"
//             alt="register svg"
//           />
//           <p className="text-xl lg:text-3xl font-semibold text-center text-white">
//             {t("otp.thankYou")}
//           </p>
//           <p className="text-xl lg:text-3xl font-semibold text-center text-white">
//             {t("otp.successfulRegistration")}
//           </p>
//           <p className="text-sm lg:text-base font-medium text-textopacity">
//             {t("otp.pendingVerification")}
//           </p>
//           <button
//             onClick={() => processFinished()}
//             className="w-full bg-primary py-2 rounded-md text-white text-lg font-semibold mt-8"
//           >
//             {t("otp.goToLogin")}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

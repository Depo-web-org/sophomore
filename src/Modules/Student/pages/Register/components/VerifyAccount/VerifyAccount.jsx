import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import { HeadTitle } from '../Login/Login';
import { useForget_passwordMutation, useResend_otpMutation, useReset_passwordMutation, useVerify_emailMutation } from '../../../../../../Redux/Auth/authApiSlice';
import { useSelector } from 'react-redux';
import { decodeEmail } from '../../../../../../Helpers/deCode';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ResendOtpModal } from '../OTP/OTP';
import { formatTime } from '../../../../../../Helpers/Timer';
import { useTranslation } from 'react-i18next';

const VerifyAccount = () => {
  const { t, i18n } = useTranslation();  
  const isRTL = i18n.language === "ar";
  const navigate = useNavigate();
  const { userMail } = useParams();
  const email = decodeEmail(userMail); // Decode email
  const role = useSelector((state) => state.role.role);
  const provider= role==='teacher'?true:false;


  const [resendOTPModal, setResendOTPModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
const [errorOtp, setErrorOtp] = useState(null)
//   statusOfAccount
    const [statusOfAccount, setStatusOfAccount] = useState(null)

  const { handleSubmit, control, setFocus, setValue } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });

  const [resendOtp, { isLoading }] = useResend_otpMutation();
  const [verifyEmail, { isLoading: loadingSending ,error}] = useVerify_emailMutation();

  const onSubmit = async (data) => {
    const otp = data.otp.join('');
    const dataSend={otp,email}
    if (provider) {
      dataSend.provider = provider;
    }
    try {
      const response = await verifyEmail({ dataSend }).unwrap();
      if(response.code===0){
        setStatusOfAccount("Your account has already been verified")
        setTimeout(()=> navigate('/register'), 3000)
      }else if (response.code===1){
        console.error('Verification Error:', response.message  );
        setErrorOtp(response.message )
      }
    } catch (err) {
      console.error('Verification Error:', err.data.message  );
      setErrorOtp("Something error happened" )
    }
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) {
      setFocus(`otp[${index + 1}]`);
    } else if (!value && index > 0) {
      setFocus(`otp[${index - 1}]`);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    if (/^\d{6}$/.test(text)) {
      text.split('').forEach((digit, i) => setValue(`otp[${i}]`, digit));
      setFocus('otp[5]');
    }
  };

 

  useEffect(() => {
    
    if (timeLeft > 0) {
        
      const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timeLeft]);

  const reSendOtp = async () => {
    try {
      setResendOTPModal(false);
      setIsResendDisabled(true);
      const userData = { email };
      if (provider) {
        userData.provider = provider;
      }
      await resendOtp({ userData, role }).unwrap().then(()=>  setTimeLeft(60));
    } catch (err) {

        err.data.message === "Your account has already been verified. Please go to the login page." ? setStatusOfAccount("Your account has already been verified") : setStatusOfAccount(null)
        setTimeout(()=> navigate('/register'), 3000)
    }
  };

  useEffect(() => {
    reSendOtp();
  }, []);
console.log(email.split('@')[0].slice(0, 3))
  const subTitle = statusOfAccount ? t("OtpPage.title.subTitle.verified") 
    : email
    ? t("OtpPage.title.subTitle.emailSent", { email: `${email.split('@')[0].slice(0, 3)}****@${email.split('@')[1]?.slice(0, 2)}***.com`,}) 
    : t("OtpPage.title.subTitle.emailNotFound");  

  return (
    <>
     <div className="container w-full pt-16 md:w-custom-md xl:w-custom-xl mx-auto min-h-screen flex justify-between items-center gap-4 overflow-hidden ">
        <div className="flex flex-col items-start justify-center gap-4 lg:gap-8 w-full slide-in-left lg:min-h-screen">
          <div className="w-full">
            <HeadTitle
              title={{
                head: statusOfAccount ? statusOfAccount : t("OtpPage.title.head"), 
                subTitle: subTitle,
              }}
            />
          </div>

          {/* IF Acc has already been verified */}
          {statusOfAccount ? (
            <></>
          ) : (
            <div className="w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div dir='ltr' className="flex justify-center items-start gap-2 lg:gap-4 text-white text-center text-2xl w-full lg:w-4/5 mr-auto">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <Controller
                      key={index}
                      name={`otp[${index}]`}
                      control={control}
                      render={({ field: { onChange, value, ref } }) => (
                        <input
                          ref={ref}
                          type="text"
                          value={value}
                          maxLength="1"
                          dir={isRTL ? "rtl" : "ltr"}   
                          className="w-full lg:w-4/5 mx-auto h-10 lg:h-16 bg-white text-primary rounded-md border-b ring-0 outline-none text-center font-bold"
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            if (/^\d*$/.test(inputValue)) {
                              onChange(inputValue);
                              handleInput(e, index);  
                            }
                          }}
                          onFocus={(e) => e.target.select()}
                          onPaste={(e) => handlePaste(e)}  
                        />
                      )}
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  disabled={loadingSending || isLoading}
                  className={`inline-flex w-full lg:w-4/5 mr-auto rounded-lg ${
                    loadingSending || isLoading ? "bg-white" : "bg-primary"
                  } px-5 py-3 text-sm font-medium text-white justify-center items-center mt-8`}
                >
                  {loadingSending || isLoading ? (
                    <ImSpinner9 className="animate-spin text-3xl text-secondary" />
                  ) : (
                    t("OtpPage.form.validateButton")  
                  )}
                </button>
              </form>
              <div className="flex w-full flex-col justify-center items-center gap-2 py-4 lg:w-4/5 mr-auto">
                {isResendDisabled && (
                  <p className="text-white text-base font-medium">
                    {/* {t("OtpPage.form.resendOTP.timer", { time: formatTime(timeLeft) })}   */}
                    {
                      formatTime(timeLeft)
                    }  
                  </p>
                )}
                <p
                  className={`text-sm lg:text-base font-medium leading-[18.75px] text-center ${
                    isLoading || isResendDisabled ? "text-textopacity" : "text-white"
                  }`}
                >
                  {t("OtpPage.form.resendOTP.didNotReceive")}  
                  <button
                    disabled={isLoading || isResendDisabled}
                    onClick={() => setResendOTPModal(true)}
                    className={`text-sm lg:text-base font-medium leading-[18.75px] text-center underline mx-2 ${
                      isResendDisabled ? "text-gray-500" : "text-white"
                    }`}
                  >
                    {t("OtpPage.form.resendOTP.resend")} 
                  </button>
                </p>
              </div>
              {errorOtp && (
                <div className="w-full lg:w-4/5 mr-auto -mb-5">
                  <p className="px-2 text-secondary text-sm text-center font-semibold">
                    {t("OtpPage.form.error.invalidOTP")} 
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        <img
          src="/register/login.webp"
          alt="register img"
          className="hidden lg:block min-h-[calc(100vh-112px)] lg:max-w-[420px] xl:max-w-[580px] slide-in-right object-cover rounded-xl z-10"
        />
      </div>
       {
              // Resend OTP Modal
              resendOTPModal && (
                <ResendOtpModal
                  setResendOTPModal={setResendOTPModal}
                  reSendOtp={reSendOtp}
                ></ResendOtpModal>
              )
            }
    </>
  );
};

export default VerifyAccount;
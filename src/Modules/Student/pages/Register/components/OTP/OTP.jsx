import axios from "axios";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";

export default function OTP({ handleValidateOtp , mail }) {
  const { handleSubmit, control, setFocus } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });
  const [loadingSending, setLoadingSending] = useState(false)
  const onSubmit = async (data) => {
    setLoadingSending(true)
    const otp_code = data.otp.join("");
    console.log(`otp_code:${otp_code}`);
    console.log(data);

    try {
      const response = await axios.post(
        `http://192.168.1.26:8000/api/v1/verify-email/`,
        {
          otp_code: otp_code,
        }
      );
      console.log(response);
      handleValidateOtp();
    } catch (err) {
      console.log(err .request.responseText)
      setLoadingSending(false)
    }
  };

  const handleInput = (e, index, fields,) => {
    const value = e.target.value;
    if (value.length === 1 && index < fields.length - 1) {
      setFocus(`otp[${index + 1}]`);
    } else if (!value && index > 0) {
      setFocus(`otp[${index - 1}]`);
    }
  };

  const handlePaste = (e, setValue) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (/^\d{6}$/.test(text)) {
      const digits = text.split("");
      digits.forEach((digit, i) => setValue(`otp[${i}]`, digit));
      setFocus("otp[5]"); // Move focus to the last input
    }
  };
  return (
    <div className="w-full my-auto flex justify-center">
      <div className="flex flex-col items-start justify-start gap-2">
        <p className="text-4xl font-bold text-white">Check your mail</p>
        <p className="text-base font-bold text-textopacity ">
          We have sent an otp to your mail {mail.email.split("",3)}*****@{mail.email.split("@")[1].split("",2)}***.com
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="flex justify-center items-center gap-8 text-white text-center text-2xl">
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
                    className="w-[53px] bg-transparent border-b-[1px] ring-0 outline-none"
                    onChange={(e) => {
                      onChange(e.target.value);
                      handleInput(e, index, [0, 1, 2, 3, 4, 5], onChange);
                    }}
                    onFocus={(e) => e.target.select()}
                    onPaste={(e) => handlePaste(e, onChange)}
                  />
                )}
              />
            ))}
          </div>


{/* Submit Handel */}
          <button
              type="submit"
          disabled={loadingSending}
              className={`inline-flex w-full rounded-lg ${loadingSending ? "bg-white" : 'bg-primary'} px-5 py-3 text-sm font-medium text-white  justify-center items-center mt-8`}
            >
              {loadingSending? <ImSpinner9 className="animate-spin text-3xl text-secondary " /> : " Validate"}
            </button>
{/* Submit Handel */}

        </form>
        <div className="flex flex-col justify-center items-center gap-2 pt-8 w-full">
          <button className="text-base font-medium leading-[18.75px] text-center underline text-white">
            Resend your One Time Password
          </button>
          <button className="text-sm font-normal leading-[16.41px] text-center underline text-textopacity">
            Not your Email?
          </button>
        </div>
      </div>
    </div>
  );
}

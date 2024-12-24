import { apiSlice } from "../api/apiSclice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ userData, role }) => {
        console.log("Sending data to login:", { userData, role }); // Debugging log
        return {
          url: `/login/${role}/`,
          method: "POST",
          body: userData, 
        };
      },
    }),
    signup: builder.mutation({
      query: ({userData, role }) => {
        console.log("Sending data to signup:", { userData, role }); // Debugging log
        return {
          url: `/register/${role}/`,
        method: "POST",
        body: userData,
        }
      },
    }),
    forget_password: builder.mutation({
      query: ({ email, role }) => {
        console.log("Sending data to forget password:", { email, role }); // Debugging log
        return {
          url: `/reset-password/${role}/`,
        method: "POST",
        body: {email},
        }
      },
    }),
    verify_email: builder.mutation({
      query: ({otp_code }) => {
        console.log("Sending data to otp:", otp_code); // Debugging log
        return {
          url: "/verify-email/",
        method: "POST",
        body: {otp_code },
        }
      },
    }),
    
    resend_otp: builder.mutation({
      query: ({ email, role }) => {
        console.log("user mail ==> :",email ); // Debugging log
        return {
        url: `/resend-otp/${role}/`,
        method: "POST",
        body: {email},
      }
      },
    }),
    reset_password: builder.mutation({
      query: ({ dataSend, role }) => {
       console.log("Data=>",dataSend); // Debugging log)
       return {
        url: `/confirm-reset-password/${role}/`,
        method: "POST",
        body: dataSend,
       }
      },
    }),
    change_password: builder.mutation({
      query: ({ data }) => ({
        url: "/change-password/consumer/",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: "/logout/consumer/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useForget_passwordMutation,
  useVerify_emailMutation,
  useResend_otpMutation,
  useReset_passwordMutation,
  useChange_passwordMutation,
  useLogoutMutation,
} = authApiSlice;
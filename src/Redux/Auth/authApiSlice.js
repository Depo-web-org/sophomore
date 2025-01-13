import { apiSlice } from "../api/apiSclice";
import { setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ userData, role }) => {
        return {
          url: `doConsumerSignin.php`,
          method: "POST",
          body: userData,
        };
      },
      invalidatesTags: ["Auth"],

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data)); // Store user and token
        } catch (err) {
          console.error(err);
        }
      },
    }),
    signup: builder.mutation({
      query: ({ userData, role }) => {
        return {
          url: `/signupConsumer.php`,
          method: "POST",
          body: userData,
        };
      },
    }),
    forget_password: builder.mutation({
      query: ({ email, role }) => {
        return {
          url: `getConsumerResetPasswordToken.php`,
          method: "POST",
          body: { email },
        };
      },
    }),
    verify_email: builder.mutation({
      query: ({dataSend}) => {
        console.log(dataSend)
        return {
          url: "getConsumerVerified.php",
          method: "POST",
          body:  dataSend ,
        };
      },
    }),

    resend_otp: builder.mutation({
      query: ({ userData}) => {
        return {
          url: `doResendOTP.php`,
          method: "POST",
          body: userData,
        };
      },
    }),
    reset_password: builder.mutation({
      query: ({ dataSend, role }) => {
        return {
          url: `getConsumerPasswordReset.php`,
          method: "POST",
          body: dataSend,
        };
      },
    }),
    change_password: builder.mutation({
      query: ({ data, role  }) => ({
        url: `doConsumerChangePassword.php`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: ({refresh_token, role}) => {
        return {
          url: `doConsumerLogout.php`,
          method: "POST",
          body: {refresh_token},
        };
      },
      invalidatesTags: ["Auth"],
    }),
    refreshToken: builder.mutation({
      query: ({ refresh }) => ({
        url: "/auth/token/refresh/",
        method: "POST",
        body: { refresh },
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
  useRefreshTokenMutation
} = authApiSlice;

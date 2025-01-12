import { apiSlice } from "../api/apiSclice";
import { setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ userData, role }) => {
        return {
          url: `/auth/login/${role}/`,
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
          url: `/signupConsumer.php/`,
          method: "POST",
          body: userData,
        };
      },
    }),
    forget_password: builder.mutation({
      query: ({ email, role }) => {
        return {
          url: `/auth/reset-password/${role}/`,
          method: "POST",
          body: { email },
        };
      },
    }),
    verify_email: builder.mutation({
      query: ({ otp_code }) => {
        return {
          url: "/auth/verify-email/",
          method: "POST",
          body: { otp_code },
        };
      },
    }),

    resend_otp: builder.mutation({
      query: ({ email, role }) => {
        return {
          url: `/auth/resend-otp/${role}/`,
          method: "POST",
          body: { email },
        };
      },
    }),
    reset_password: builder.mutation({
      query: ({ dataSend, role }) => {
        return {
          url: `/auth/confirm-reset-password/${role}/`,
          method: "POST",
          body: dataSend,
        };
      },
    }),
    change_password: builder.mutation({
      query: ({ data, role  }) => ({
        url: `/auth/change-password/${role}/`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: ({refresh_token, role}) => {
        return {
          url: `/auth/logout/${role}/`,
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

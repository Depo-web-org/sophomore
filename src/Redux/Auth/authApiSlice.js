import { apiSlice } from "../api/apiSclice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login/consumer/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: "/register/consumer/",
        method: "POST",
        body: userData,
      }),
    }),
    forget_password: builder.mutation({
      query: (data) => ({
        url: "/reset-password/consumer/",
        method: "POST",
        body: data,
      }),
    }),
    verify_email: builder.mutation({
      query: (data) => ({
        url: "/verify-email/",
        method: "POST",
        body: data,
      }),
    }),
    resend_otp: builder.mutation({
      query: (data) => ({
        url: "/resend-otp/consumer/",
        method: "POST",
        body: data,
      }),
    }),
    reset_password: builder.mutation({
      query: (data) => ({
        url: "/confirm-reset-password/consumer/",
        method: "POST",
        body: data,
      }),
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

import { apiSlice } from "../api/apiSclice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ credentials, role }) => ({
        url: `/login/${role}/`,
        method: "POST",
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: ({ userData, role }) => ({
        url: `/register/${role}/`,
        method: "POST",
        body: userData,
      }),
    }),
    forget_password: builder.mutation({
      query: ({ data, role }) => ({
        url: `/reset-password/${role}/`,
        method: "POST",
        body: data,
      }),
    }),
    verify_email: builder.mutation({
      query: ({ data }) => ({
        url: `/verify-email/`,
        method: "POST",
        body: data,
      }),
    }),
    resend_otp: builder.mutation({
      query: ({ data, role }) => ({
        url: `/resend-otp/${role}/`,
        method: "POST",
        body: data,
      }),
    }),
    reset_password: builder.mutation({
      query: ({ data, role }) => ({
        url: `/confirm-reset-password/${role}/`,
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
} = authApiSlice;

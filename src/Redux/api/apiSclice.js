import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../Auth/authSlice";

// Base URL
const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.1.26:8000/api/v1",
  credentials: "include",
  // prepareHeaders: (headers, { getState, endpoint }) => {
  //   const token = getState().auth.token;

  //   if (token && endpoint !== "login/consumer") {
  //     headers.set("authorization", `Bearer ${token}`);
  //   }

  //   return headers;
  // },
});

// token refresh
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");

    // Send refresh token to get a new access token
    const refreshResult = await baseQuery("/refresh", api, extraOptions);

    if (refreshResult?.data) {
      const user = api.getState().auth.user;

      // Store the new token x
      api.dispatch(setCredentials({ ...refreshResult.data, user }));

      // Retry the original query with the new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // log out
      api.dispatch(logOut());
    }
  }

  return result;
};

// Create the API slice with reauthentication logic
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({}),
});

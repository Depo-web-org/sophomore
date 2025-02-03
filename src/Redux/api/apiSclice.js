import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../Auth/authSlice";

const baseQuery = fetchBaseQuery({
   baseUrl: "https://dev.depowebeg.com/education/api",
  // credentials: "true",
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = getState().auth.token;
    const Token = localStorage.getItem('Token')
    // console.log(endpoint)
    // Add Authorization header for all requests except login , logout and Change Password 
    if (Token && endpoint !== "/auth/login/student" && endpoint !== "getSchools" && endpoint !== "getGrades" && endpoint !== "getAllSchoolInformation" && endpoint!=="getSubjectTeachers") {
      headers.set("Authorization", `${Token}`);
    }
    return headers;
  },
});



// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status==403 ||result?.error?.status=== 'FETCH_ERROR') {
//     const refreshToken = localStorage.getItem('Token');
//     if (refreshToken) {

//       // Attempt to refresh the access token
//       const refreshResult = await baseQuery(
//         {
//           url: "/auth/token/refresh/",
//           method: "POST",
//           body: { refresh: refreshToken },
//         },
//         api,
//         extraOptions
//       );

//       if (refreshResult?.data) {
//         const user = JSON.parse(localStorage.getItem('USER'));

//         // Store new access token
//         api.dispatch(setCredentials({
//           token: refreshResult.data.access,
//           user,
//           refresh: refreshToken, // Optionally persist refresh token
//         }));

//         // Retry the original query with the new access token
//         result = await baseQuery(args, api, extraOptions);
//       } else {
//         console.error("Failed to refresh token. Logging out...");
//         api.dispatch(logOut());
//       }
//     } else {
//       console.error("No refresh token available. Logging out...");
//       api.dispatch(logOut());
//     }
//   }

//   return result;
// };

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({}),
});

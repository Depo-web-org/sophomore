import { get } from "react-hook-form";
import { apiSlice } from "../api/apiSclice"; // Import the base apiSlice

export const dataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "getConsumerProfile.php", 
        method: "GET", 
      }),
      providesTags: ["Profile"], // Caches the data with this tag
    }),
    getSchools:builder.query({
      query:()=> ({
        url: "getSchools.php?grades=true&recurisec=true",
        method: "GET", 
      }),
      providesTags:['Schools']
    }),
    getGrades:builder.query({
      query:()=> ({
        url:"getGrades.php?subjects=true",
        method: "GET", 
      }),
      providesTags:['Schools']
    }),
    // Other data fetching endpoints can go here...
  }),
});

// Export hooks to use in your components
export const { useGetGradesQuery, useGetSchoolsQuery, useGetProfileQuery } = dataApiSlice;

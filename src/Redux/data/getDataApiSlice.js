import { get } from "react-hook-form";
import { apiSlice } from "../api/apiSclice"; // Import the base apiSlice

export const getDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "getConsumerProfile.php", 
        method: "GET", 
      }),
      providesTags: ["Profile"], 
    }),
    getProfileTeacher: builder.query({
      query: (provider = {}) => ({
        url: "getConsumerProfile.php", 
        method: "post", 
        body: provider,
      }),
      providesTags: ["Profile"], 
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
    getAllSchoolInformation:builder.query({
      query:()=> ({
        url:"getSchools.php?grades=true&recursive=true&recursive=true",
        method: "GET", 
      }),
      providesTags:['Grades']
    }),
    // https://dev.depowebeg.com/education/api/getSchools.php?grades=true&recursive=true&recursive=true
    // Other data fetching endpoints can go here...
  }),
});

// Export hooks to use in your components
export const { useGetGradesQuery, useGetSchoolsQuery, useGetProfileQuery ,useGetProfileTeacherQuery , useGetAllSchoolInformationQuery} = getDataApiSlice;

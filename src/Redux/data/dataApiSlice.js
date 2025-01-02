import { apiSlice } from "../api/apiSclice";

export const dataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all schools
    getSchools: builder.query({
      query: () => ({
        url: "/academis/school-hirarchy",
        method: "GET",
      }),
      providesTags: (result = [], error, arg) =>
        result.map(({ id }) => ({ type: "Schools", id })) || [{ type: "Schools", id: "LIST" }],
    }),

    // Add more data-related endpoints as needed...
  }),
});

export const {
  useGetSchoolsQuery,
  useGetGradesQuery,
  useGetStudentsQuery,
} = dataApiSlice;

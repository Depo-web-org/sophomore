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

    // Other data fetching endpoints can go here...

  }),
});

// Export hooks to use in your components
export const { useGetProfileQuery } = dataApiSlice;

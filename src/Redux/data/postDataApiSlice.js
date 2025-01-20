import { apiSlice } from "../api/apiSclice";

export const postDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
  
    updateDocument: builder.mutation({
      query: (formData) => {
        console.log("updateDocument api slice:", formData); 
        return {
          url: "addProviderDocument.php", 
          method: "POST",
          body: formData, 
        };
      },
    }),
  }),
});

export const {
  useUpdateDocumentMutation
} = postDataApiSlice;
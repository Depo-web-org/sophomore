import { apiSlice } from "../api/apiSclice";

export const postDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
  
    addTeacherDocument: builder.mutation({
      query: (formData) => {
        return {
          url: "addProviderDocument.php", 
          method: "POST",
          body: formData, 
        };
      },
    }),
    addTeacherCourse: builder.mutation({
        query: (formData) => {
          return {
            url: "addProviderCourse.php", 
            method: "POST",
            body: formData, 
          };
        },
      }),
      addTeacherCourseContent: builder.mutation({
        query: (formData) => {
          return {
            url: "addProviderCourseContent.php", 
            method: "POST",
            body: formData, 
          };
        },
      }),
      editTeacherCourse: builder.mutation({
        query: (formData) => {
          return {
            url: "updateProviderCourse.php", 
            method: "POST",
            body: formData, 
          };
        },
      }),
      editTeacherCourseContent: builder.mutation({
        query: (formData) => {
          return {
            url: "updateProviderCourseContent.php", 
            method: "POST",
            body: formData, 
          };
        },
      }),
      deleteTeacherCourse: builder.mutation({
        query:(formData) => {
          console.log("delete course api slice:", formData); 
          return {
            url: "deleteProviderCourse.php", 
            method: "POST",
            body: formData, 
          };
        }
      }),
      deleteTeacherCourseContent: builder.mutation({
        query:(formData) => {
          return {
            url: "deleteProviderCourseContent.php", 
            method: "POST",
            body: formData, 
          };
        }
      }),
      checkoutCart: builder.mutation({
        query:(dataToSend) => {
          return {
            url: "doCheckout.php", 
            method: "POST",
            body: dataToSend, 
          };
        }
      }),
      createWishList: builder.mutation({
        query:(dataToSend) => {
          return {
            url: "addConsumerWishListItem.php", 
            method: "POST",
            body: dataToSend, 
          };
        }
      }),
      deleteWishList: builder.mutation({
        query:(dataToSend) => {
          return {
            url: "deleteConsumerWishListItem.php", 
            method: "POST",
            body: dataToSend, 
          };
        }
      }),
  }),
});

export const {
  useAddTeacherDocumentMutation,
  useAddTeacherCourseMutation,
  useAddTeacherCourseContentMutation,
  useEditTeacherCourseMutation,
  useEditTeacherCourseContentMutation,
  useDeleteTeacherCourseMutation,
  useDeleteTeacherCourseContentMutation,
  useCheckoutCartMutation,
  useCreateWishListMutation,
  useDeleteWishListMutation,
} = postDataApiSlice;
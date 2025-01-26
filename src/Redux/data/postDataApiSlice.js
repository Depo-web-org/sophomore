import { apiSlice } from "../api/apiSclice";

export const postDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
  
    addTeacherDocument: builder.mutation({
      query: (formData) => {
        console.log("updateDocument api slice:", formData); 
        return {
          url: "addProviderDocument.php", 
          method: "POST",
          body: formData, 
        };
      },
    }),
    addTeacherCourse: builder.mutation({
        query: (formData) => {
          console.log("add course api slice:", formData); 
          return {
            url: "addProviderCourse.php", 
            method: "POST",
            body: formData, 
          };
        },
      }),
      addTeacherCourseContent: builder.mutation({
        query: (formData) => {
          console.log("add course content api slice:", formData); 
          return {
            url: "addProviderCourseContent.php", 
            method: "POST",
            body: formData, 
          };
        },
      }),
      editTeacherCourse: builder.mutation({
        query: (formData) => {
          console.log("add course content api slice:::", formData); 
          return {
            url: "updateProviderCourse.php", 
            method: "POST",
            body: formData, 
          };
        },
      }),
      editTeacherCourseContent: builder.mutation({
        query: (formData) => {
          console.log("add course content api slice:", formData); 
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
      checkoutCart: builder.mutation({
        query:(formData) => {
          console.log("checkoutCart api slice:", formData); 
          return {
            url: "deleteProviderCourse.php", 
            method: "POST",
            body: formData, 
          };
        }
      })
  }),
});

export const {
  useAddTeacherDocumentMutation,
  useAddTeacherCourseMutation,
  useAddTeacherCourseContentMutation,
  useEditTeacherCourseMutation,
  useEditTeacherCourseContentMutation,
  useDeleteTeacherCourseMutation
} = postDataApiSlice;
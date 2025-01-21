// features/teacher/teacherSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teacher: null,
  subject: null,
  course: null,
};

const CourseInformationSlice = createSlice({
  name: 'courseInformation', // This is the name used in the Redux store
  initialState,
  reducers: {
    setTeacherData: (state, action) => {
      const { teacher, subject, course } = action.payload;
      state.teacher = teacher;
      state.subject = subject;
      state.course = course;
    },
    clearTeacherData: (state) => {
      state.teacher = null;
      state.subject = null;
      state.course = null;
    },
  },
});

export const { setTeacherData, clearTeacherData } = CourseInformationSlice.actions;

export default CourseInformationSlice.reducer;
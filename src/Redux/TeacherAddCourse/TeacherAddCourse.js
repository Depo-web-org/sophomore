import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  courseNotes: "",
  // image: null,
  schoolType: null,
  selectedGrade: null,
  courseData: [], 
};

const teacherAddCourseSlice = createSlice({
  name: "teacherAddCourse",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setOrderNotes(state, action) {
      state.courseNotes = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    addCourse(state, action) {
      const { title, orderNotes, image,  schoolType, selectedGrade ,selectedSubject } =
        action.payload;
      state.title = title;
      state.courseNotes = orderNotes;
      // state.image = image;
      state.schoolType = schoolType;
      state.selectedGrade = selectedGrade;
      state.selectedSubject = selectedSubject;
    },
    setUnit(state, action) {
      state.courseData.push(action.payload);
      console.log(action.payload)
    },
    resetCourseData(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setTitle,
  setOrderNotes,
  setImage,
  setOption,
  addCourse,
  setUnit,
  resetCourseData,
} = teacherAddCourseSlice.actions;

export const AddCourse = teacherAddCourseSlice.reducer;
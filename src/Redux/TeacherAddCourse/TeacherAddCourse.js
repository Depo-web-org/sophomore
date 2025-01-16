import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  orderNotes: "",
  image: null,
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
      state.orderNotes = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    setOption(state, action) {
      const { id, selectedOption } = action.payload;
      const option = state.options.find((opt) => opt.id === id);
      if (option) {
        option.selectedOption = selectedOption;
      }
    },
    addCourse(state, action) {
      const { title, orderNotes, image, options, schoolType, selectedGrade } =
        action.payload;
      state.title = title;
      state.orderNotes = orderNotes;
      state.image = image;
      state.options = options;
      state.schoolType = schoolType;
      state.selectedGrade = selectedGrade;
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
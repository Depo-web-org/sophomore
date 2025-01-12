import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    orderNotes: "",
    image: null,
    options: [
    {
        id: "001",
        selectedOption: "", 
    },
    {
        id: "002",
        selectedOption: "", 
    },
    {
        id: "003",
        selectedOption: "", 
    },
    ],
    unit: [],
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
      const { title, orderNotes, image, options } = action.payload;
      state.title = title;
      state.orderNotes = orderNotes;
      state.image = image;
      state.options = options;
    },
    setUnit(state, action) {
        state.unit.push(action.payload);
        console.log(state)
      }
,      
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

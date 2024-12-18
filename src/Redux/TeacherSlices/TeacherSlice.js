import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  name: null,
  phone: null,
  email: null,
};

const TeacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setTeacher: (state, action) => {
      const { uid, email, name } = action.payload;
      state.uid = uid;
      state.email = email;
      state.name = name;
    },
    clearTeacher: (state) => {
      state.uid = null;
      state.email = null;
      state.name = null;
      state.phone = null;
    },
    updateTeacher: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
  },
});

export const { setTeacher, clearTeacher, updateTeacher } = TeacherSlice.actions;
export default TeacherSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch user information (with caching logic)
export const fetchstudentCourses = createAsyncThunk(
  "studentCourses",
  async (_, { getState, rejectWithValue }) => {
    const { studentCourses } = getState();
    const expirationTime = 5 * 60 * 1000; // 5 Min

    // To cash Data
    if (
      studentCourses.data &&
      Date.now() - studentCourses.lastFetched < expirationTime
    ) {
      return studentCourses.data;
    }
    try {
      const response = await fetch(
        "https://dev.depowebeg.com/education/api/getConsumerOrders.php",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: ` ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user information");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial State
const initialState = {
  data: null,
  status: "idle",
  error: null,
  lastFetched: null,
};

// Slice
const studentCoursesSlice = createSlice({
  name: "studentCourses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchstudentCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchstudentCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.lastFetched = Date.now();
      })
      .addCase(fetchstudentCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const studentCoursesReducer =studentCoursesSlice.reducer

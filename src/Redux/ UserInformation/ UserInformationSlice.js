import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch user information (with caching logic)
export const fetchUserInformation = createAsyncThunk(
  "userInformation/fetchUserInformation",
  async (_, { getState, rejectWithValue }) => {
    const { userInformation } = getState();
    const expirationTime = 5 * 60 * 1000; // 5 Min

    // To cash Data
    if (
      userInformation.data &&
      Date.now() - userInformation.lastFetched < expirationTime
    ) {
      return userInformation.data;
    }
    try {
      const response = await fetch(
        "https://dev.depowebeg.com/education/api/getConsumerProfile.php",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
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
const userInformationSlice = createSlice({
  name: "userInformation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInformation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserInformation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.lastFetched = Date.now();
      })
      .addCase(fetchUserInformation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const userInformationReducer =userInformationSlice.reducer

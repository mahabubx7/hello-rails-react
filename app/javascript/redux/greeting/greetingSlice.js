import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  greeting: [],
  loading: false,
  error: null,
};

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async () => {
    try {
      const response = await fetch('/greetings/random_greeting');
      return response.json();
    }catch(error) {
      return error.response.data;
    }
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.loading = false;
      state.greeting = action.payload;
    });
    builder.addCase(fetchGreeting.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default greetingSlice.reducer;

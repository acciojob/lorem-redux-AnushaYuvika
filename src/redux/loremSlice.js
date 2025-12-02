import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLorem = createAsyncThunk(
  "lorem/fetchLorem",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data.slice(0, 10); 
  }
);

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    content: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.content = action.payload;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loremSlice.reducer;

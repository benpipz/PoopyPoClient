import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: { points: [], lastPoint: null, localLocation: null },
  reducers: {
    addPointToStore: (state, action) => {
      state.points.push(action.payload);
    },
    setLocalLocation: (state, action) => {
      state.localLocation = action.payload;
    },
    resetLocation: (state, action) => {
      state.lastPoint = action.payload;
    }
  },
});

export const { addPointToStore, setLocalLocation, resetLocation } = mapSlice.actions;

export default mapSlice.reducer;

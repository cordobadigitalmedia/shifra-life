import { createSlice } from "@reduxjs/toolkit";
import { getStateFromStorage, saveStateToStorage } from "./localStorage";

const dataSlice = createSlice({
  name: "data",
  initialState: getStateFromStorage("dataState", {
    user: { email: "", name: "" },
    reflections: [{ chapter: "", reflection: "" }],
    tracking: [{ chapter: "", tracks: [] }],
    progress: [{ lesson: "", status: "" }]
  }),
  reducers: {
    get(state, action) {
      return state;
    },
    resetProgress(state) {
      state.progress = [];
      return state;
    },
    getUser(state, action) {
      return state.user;
    },
    saveProgress(state, action) {
      state.progress = action.payload;
      saveStateToStorage(state, "dataState");
      return state;
    },
    saveReflections(state, action) {
      state.reflections = action.payload;
      saveStateToStorage(state, "dataState");
      return state;
    },
    saveTracking(state, action) {
      state.tracking = action.payload;
      saveStateToStorage(state, "dataState");
      return state;
    },
  },
});
export const { get, getUser, resetProgress, saveProgress, saveReflections, saveTracking } = dataSlice.actions;
export default dataSlice.reducer;

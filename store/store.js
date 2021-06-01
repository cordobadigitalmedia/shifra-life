import { configureStore } from '@reduxjs/toolkit'
import learningReducer from "./learningDataSlice"

export const store = configureStore({
  reducer: {
    learningData: learningReducer,
  },
})
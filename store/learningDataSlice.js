import { createSlice } from '@reduxjs/toolkit'
import { getStateFromStorage, saveStateToStorage } from "./localStorage";

const initialState = getStateFromStorage("learningState", {
  value: 0,
  user: { email: "", name: "" },
  reflections: { "dummy@mail.com": { "lesson": "reflection" } },
  tracking: { "chapter": { "120421": true } }, // make it {"120421" : [false,false,false,false,false]}
  progress: { "defaultlesson": "complete" }
});
//save/get from session variables

export const learningDataSlice = createSlice({
  name: 'learningData',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based on those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    updateProgress: (state, action) => {
      let progress = {};
      progress = state.progress;
      console.log(progress);
      progress[action.payload] = "complete";
      state.progress = progress;
      saveStateToStorage(state, "learningState");
    },
    updateReflection: (state, action) => {
      let reflections = {};
      reflections = state.reflections;
      const { email, lesson, reflection } = action.payload;
      if (email in reflections) {
        if (lesson in reflections[email]) {
          reflections[email][lesson] = reflection
        } else {
          reflections[email][lesson] = {};
          reflections[email][lesson] = reflection;
        }
      } else {
        reflections[email] = {};
        reflections[email][lesson] = {};
        reflections[email][lesson] = reflection;
      }
      state.reflections = reflections;
      saveStateToStorage(state, "learningState");
    },
    updateTracking: (state, action) => {
      let tracking = {};
      if (action.payload.chapter in state.tracking) {
        state.tracking[action.payload.chapter][action.payload.date] = action.payload.checked;
      } else {
        state.tracking[action.payload.chapter] = {};
        state.tracking[action.payload.chapter][action.payload.date] = action.payload.checked;
      }

    }
  },
})

export const { increment, decrement, incrementByAmount, updateTracking, updateProgress } = learningDataSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.learningData.value

export const selectProgress = (state) => state.learningData.progress

export const selectReflections = (state) => state.learningData.reflections

export const selectTracking = (state) => state.learningData.tracking

export default learningDataSlice.reducer

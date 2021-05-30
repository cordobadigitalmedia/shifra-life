
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import dataSlice from "./data.store";

const reducer = combineReducers({ data: dataSlice });
const store = configureStore({ reducer });

export default store;
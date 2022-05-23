import { combineReducers, configureStore } from "@reduxjs/toolkit";
import boardSlice from "./slices/board";

const rootReducer = combineReducers({
  boardSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

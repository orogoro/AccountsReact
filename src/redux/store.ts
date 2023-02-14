import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { accountsReducer } from "./accounts/reducer";

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

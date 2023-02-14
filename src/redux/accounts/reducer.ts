import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";

// import { fetchImages } from "./operations";

// type MovieState = {
//   data: any[];
//   genres: [{ id: number; name: string }] | any;
// };

// const initialState: MovieState = {
//   data: [],
//   genres: [],
// };

// const moviesTrendsReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(fetchMovies.fulfilled, (state, { payload }) => {
//       state.data = [...state.data, ...payload];
//     })
// });

const accountsReducer = combineReducers({
  //   moviesTrendsReducer,
});

export { accountsReducer };

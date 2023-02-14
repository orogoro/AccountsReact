// import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   getMoviesRequest,
// } from "../../API/APImovies";

// import { moviesTypes } from "../../types";

// const fetchMovies = createAsyncThunk<
//   moviesTypes.MoviesItem[],
//   number,
//   { rejectValue: any }
// >("movies/fetchMovies", async (page, { rejectWithValue }: any) => {
//   try {
//     const response = await getMoviesRequest(page);
//     return response;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

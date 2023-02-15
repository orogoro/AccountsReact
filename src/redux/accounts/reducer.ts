import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  fetchAccounts,
  fetchAccountPayment,
  fetchNewAccount,
} from "./operations";

import { accountsTypes } from "../../types";

type AccountsState = {
  data: accountsTypes.AccountsTypes[];
  loading: boolean;
};

const initialState: AccountsState = {
  data: [],
  loading: false,
};

const accountsMainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAccounts.fulfilled, (state, { payload }) => {
      state.data = [...state.data, ...payload];
      state.loading = false;
    })
    .addCase(fetchAccountPayment.fulfilled, (state, { payload }) => {
      const updatePayload: accountsTypes.AccountsTypes[] = state.data.reduce(
        (
          acc: accountsTypes.AccountsTypes[] | [],
          item: accountsTypes.AccountsTypes
        ) => {
          if (item._id === payload._id) {
            return [...acc, { ...payload }];
          }
          return [...acc, item];
        },
        []
      );

      state.data = updatePayload;
      state.loading = false;
    })
    .addCase(fetchNewAccount.fulfilled, (state, { payload }) => {
      state.data = [...state.data, payload];
      state.loading = false;
    })
    .addCase(fetchAccountPayment.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchNewAccount.pending, (state) => {
      state.loading = true;
    });
});

const accountsReducer = combineReducers({
  accountsMainReducer,
});

export { accountsReducer };

import { RootState } from "../store";

export const getAccounts = (state: RootState) =>
  state.accounts.accountsMainReducer.data;

export const loading = (state: RootState) =>
  state.accounts.accountsMainReducer.loading;

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAccountsRequest,
  patchAccountPayment,
  postNewAccount,
} from "../../API/accountsAPI";

import { accountsTypes } from "../../types";

const fetchAccounts = createAsyncThunk<
  accountsTypes.AccountsTypes[] | [],
  number,
  { rejectValue: any }
>("accounts/fetchAccounts", async (page, { rejectWithValue }: any) => {
  try {
    const response = await getAccountsRequest(page);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchAccountPayment = createAsyncThunk<
  accountsTypes.AccountsTypes,
  string,
  { rejectValue: any }
>("accounts/fetchAccountPayment", async (id, { rejectWithValue }: any) => {
  try {
    const response = await patchAccountPayment(id);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchNewAccount = createAsyncThunk<
  accountsTypes.AccountsTypes,
  accountsTypes.NewAccountTypes,
  { rejectValue: any }
>("accounts/fetchNewAccount", async (data, { rejectWithValue }: any) => {
  try {
    const response = await postNewAccount(data);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export { fetchAccounts, fetchAccountPayment, fetchNewAccount };

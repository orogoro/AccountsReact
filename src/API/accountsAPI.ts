import axios from "axios";

import { accountsTypes } from "../types";

export const BASEURL = "https://accountsnode.onrender.com/api/accounts";

export const accounts = axios.create({
  baseURL: `${BASEURL}`,
});

async function getAccountsRequest(
  page: number
): Promise<accountsTypes.AccountsTypes[] | [] | undefined> {
  try {
    let response = await accounts.get(`?page=${page}&limit=10`);
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isCancel(error)) {
      return Promise.reject();
    } else {
      console.log("Error", error);
      return;
    }
  }
}

async function patchAccountPayment(
  id: string
): Promise<accountsTypes.AccountsTypes | undefined> {
  try {
    let response = await accounts.patch(`/${id}/payment`, { payment: true });
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isCancel(error)) {
      return Promise.reject();
    } else {
      console.log("Error", error);
      return;
    }
  }
}

async function postNewAccount(
  data: accountsTypes.NewAccountTypes
): Promise<accountsTypes.AccountsTypes | undefined> {
  const { currency, nameCompany, nameGame, summe } = data;
  try {
    let response = await accounts.post(``, {
      currency,
      nameCompany,
      nameGame,
      summe,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isCancel(error)) {
      return Promise.reject();
    } else {
      console.log("Error", error);
      return;
    }
  }
}

export { getAccountsRequest, patchAccountPayment, postNewAccount };

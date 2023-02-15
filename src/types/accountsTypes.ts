interface AccountsTypes {
  count: string;
  createdAt: string;
  currency: string;
  nameCompany: string;
  nameGame: string;
  payment: boolean;
  summe: string;
  updatedAt: string;
  _id: string;
}

interface NewAccountTypes {
  nameCompany: string | undefined;
  nameGame: string;
  summe: string;
  currency: string;
}

export { AccountsTypes, NewAccountTypes };

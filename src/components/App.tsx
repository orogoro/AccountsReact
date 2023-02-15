import { useEffect, useRef, useState, useMemo } from "react";
import { ToastContainer } from "react-toastify";

import { accountsTypes } from "../types";

import { useAppSelector, useAppDispatch } from "../redux/hook";
import { operations, selectors } from "../redux/accounts";

import { Container, AccountsList, ModalForm, Filter } from "./";

const App: React.FC = () => {
  const accountsList = useAppSelector(selectors.getAccounts);
  const loading = useAppSelector(selectors.loading);
  const dispatch = useAppDispatch();
  const [page] = useState<number>(1);
  const pageLoaded = useRef<number | null>(null);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [nameCompany, setNameCompany] = useState<{
    label: string;
    value: string;
  } | null>(null);

  useEffect(() => {
    if (page === pageLoaded.current) {
      return;
    }
    pageLoaded.current = page;

    dispatch(operations.fetchAccounts(page));
  }, [dispatch, page]);

  const changeFilter = (valueSelect: any): void => {
    if (valueSelect === null) {
      setNameCompany(null);
      return;
    }

    setNameCompany(valueSelect);
  };

  const filterSelect = useMemo<accountsTypes.AccountsTypes[]>(() => {
    let data = accountsList;

    if (nameCompany === null) {
      return data;
    }

    if (nameCompany.label === "Company1") {
      const filterCompanyName = data?.filter(
        (item) => item.nameCompany === nameCompany.value
      );
      return filterCompanyName;
    }

    if (nameCompany.label === "Company2") {
      const filterCompanyName = data?.filter(
        (item) => item.nameCompany === nameCompany.value
      );
      return filterCompanyName;
    }

    if (nameCompany.label === "Company3") {
      const filterCompanyName = data?.filter(
        (item) => item.nameCompany === nameCompany.value
      );
      return filterCompanyName;
    }

    return data;
  }, [accountsList, nameCompany]);

  return (
    <Container>
      <Filter setModalActive={setModalActive} changeFilter={changeFilter} />
      <AccountsList dataFilter={filterSelect} loading={loading} />
      <ModalForm active={modalActive} setActive={setModalActive} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </Container>
  );
};

export default App;

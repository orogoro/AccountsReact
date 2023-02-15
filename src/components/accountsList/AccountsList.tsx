import { AccountsItem, ModalLoader } from "../";

import { accountsTypes } from "../../types";

import styles from "./AccountsList.module.scss";

interface AccountsListProps {
  dataFilter: accountsTypes.AccountsTypes[];
  loading: boolean;
}

const AccountsList: React.FC<AccountsListProps> = ({ dataFilter, loading }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerTable}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>#</p>
            <p className={styles.title}>Company</p>
            <p className={styles.title}>Game</p>
            <p className={styles.title}>Summe</p>
            <p className={styles.title}>Issue date</p>
            <p className={styles.title}>Payment date</p>
          </div>

          {loading && dataFilter.length !== 0 && <ModalLoader />}

          {dataFilter.length !== 0 && (
            <ul className={styles.list}>
              {dataFilter.map((item) => (
                <AccountsItem key={item._id} item={item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default AccountsList;

import { useAppDispatch } from "../../redux/hook";
import { operations } from "../../redux/accounts";

import dollars from "../../images/dollars.png";
import euro from "../../images/euro.png";

import { accountsTypes } from "../../types";
import { timeDate } from "../../helpers/timeDate";

import styles from "./AccountsItem.module.scss";

interface AccountsItemProps {
  item: accountsTypes.AccountsTypes;
}

const AccountsItem: React.FC<AccountsItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const {
    _id,
    count,
    nameCompany,
    nameGame,
    summe,
    currency,
    createdAt,
    updatedAt,
    payment,
  } = item;

  const createTime = timeDate(createdAt);
  const updateTime = timeDate(updatedAt);
  const currernCurrency = currency === "dollar" ? dollars : euro;

  const onPayment = () => {
    dispatch(operations.fetchAccountPayment(_id));
  };

  return (
    <li className={styles.container}>
      <p className={styles.text}>{count}</p>
      <p className={styles.text}>{nameCompany}</p>
      <p className={styles.text}>{nameGame}</p>
      <div className={styles.containerCurrency}>
        <p className={styles.textSumme}>{summe}</p>
        <img className={styles.currency} src={currernCurrency} alt="currency" />
      </div>
      <div className={styles.createContainer}>
        <p className={styles.date}>{createTime.formattedTime}</p>
        <p className={styles.date}>{createTime.formattedDate}</p>
      </div>
      <div className={styles.conatinerButton}>
        {!payment && (
          <button className={styles.button} type="button" onClick={onPayment}>
            Paid
          </button>
        )}
        {payment && (
          <div className={styles.createContainer}>
            <p className={styles.date}>{updateTime.formattedTime}</p>
            <p className={styles.date}>{updateTime.formattedDate}</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default AccountsItem;

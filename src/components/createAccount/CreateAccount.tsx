import styles from "./CreateAccount.module.scss";

interface CreateAccountProps {
  setActive: (value: boolean) => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ setActive }) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => setActive(true)}
    >
      Add account
    </button>
  );
};

export default CreateAccount;

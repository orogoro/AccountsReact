import Select from "react-select";

import { CreateAccount } from "../";

import styles from "./Filter.module.scss";

interface FilterProps {
  setModalActive: (value: boolean) => void;
  changeFilter: (
    valueSelect: {
      label: string;
      value: string;
    } | null
  ) => void;
}

const Filter: React.FC<FilterProps> = ({ setModalActive, changeFilter }) => {
  const filterSelect = (valueSelect: any): void => {
    changeFilter(valueSelect);
  };
  const options = [
    { value: "Company1", label: "Company1" },
    { value: "Company2", label: "Company2" },
    { value: "Company3", label: "Company3" },
  ];
  return (
    <div className={styles.containerFilter}>
      <div className={styles.container}>
        <Select
          className={styles.select}
          isClearable
          options={options}
          onChange={filterSelect}
        />
        <p className={styles.text}>Change company</p>
      </div>
      <CreateAccount setActive={setModalActive} />
    </div>
  );
};

export default Filter;

import Select from "react-select";

import styles from "./SelectForm.module.scss";

interface FilterProps {
  changeSelect: (valueSelect: { value: string; lable: string }) => void;
  valueSelect: any | null;
}

const SelectForm: React.FC<FilterProps> = ({ changeSelect, valueSelect }) => {
  const options = [
    { value: "Company1", label: "Company1" },
    { value: "Company2", label: "Company2" },
    { value: "Company3", label: "Company3" },
  ];

  return (
    <Select
      className={styles.select}
      isClearable
      value={valueSelect}
      options={options}
      onChange={(valueSelect: any): void => changeSelect(valueSelect)}
    />
  );
};

export default SelectForm;

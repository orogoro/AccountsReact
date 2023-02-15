import { useEffect } from "react";

import { Form } from "../";

import styles from "./ModalForm.module.scss";

interface ModalFormProps {
  active: boolean;
  setActive: (value: boolean) => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ active, setActive }) => {
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.code === "Escape") {
        setActive(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (active) {
      document.body.classList.add(styles.bodyScroll);
      return;
    }
    document.body.classList.remove(styles.bodyScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, setActive]);
  return (
    <div
      className={styles.container + " " + (active ? styles.active : "")}
      onClick={() => setActive(false)}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1 className={styles.title}>Create form </h1>
        <Form setActive={setActive} />
      </div>
    </div>
  );
};

export default ModalForm;

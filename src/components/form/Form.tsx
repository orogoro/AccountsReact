import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import dollars from "../../images/dollars.png";
import euro from "../../images/euro.png";

import { useAppDispatch } from "../../redux/hook";
import { operations } from "../../redux/accounts";
import { SelectForm } from "../";

import "react-toastify/dist/ReactToastify.css";
import styles from "./Form.module.scss";

type FormValues = {
  nameGame: string;
  summe: string;
  currency: string;
};

interface FormProps {
  setActive: (value: boolean) => void;
}

const Form: React.FC<FormProps> = ({ setActive }) => {
  const dispatch = useAppDispatch();
  const [disable, setDisable] = useState<boolean>(true);
  const [valueSelect, setValueSelect] = useState<{
    value: string;
    lable: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const nameGame = watch("nameGame");
  const summe = watch("summe");
  const currency = watch("currency");

  const handleSubmitForm: SubmitHandler<FormValues> = async ({
    nameGame,
    summe,
    currency,
  }): Promise<void> => {
    const data = {
      nameCompany: valueSelect?.value,
      nameGame,
      summe,
      currency,
    };
    dispatch(operations.fetchNewAccount(data));

    reset();
    setValueSelect(null);
    setActive(false);
    toast.success("Success add");
  };

  useEffect(() => {
    if (nameGame && summe && currency && valueSelect) {
      setDisable(false);
      return;
    }
    setDisable(true);
  }, [summe, nameGame, currency, valueSelect]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <SelectForm changeSelect={setValueSelect} valueSelect={valueSelect} />
      <div className={styles.inputContainer}>
        <label className={`${styles.lable} ${errors.nameGame && styles.error}`}>
          Game
        </label>
        <input
          className={`${styles.input} ${
            errors.nameGame ? styles.errorInput : ""
          }`}
          type="text"
          {...register("nameGame", {
            required: "This is required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
            maxLength: {
              value: 40,
              message: "Max length is 40",
            },
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message: "Star Wars",
            },
          })}
          placeholder="Name game"
        />
        <p className={`${styles.error} ${!errors.nameGame && styles.opacity}`}>
          {errors.nameGame ? errors.nameGame?.message : "massege error"}
        </p>
      </div>

      <div className={styles.inputContainer}>
        <label className={`${styles.lable} ${errors.summe && styles.error}`}>
          Summe
        </label>
        <input
          className={`${styles.input} ${errors.summe ? styles.errorInput : ""}`}
          type="text"
          {...register("summe", {
            required: "This is required",
            minLength: {
              value: 1,
              message: "Min length is 1",
            },
            maxLength: {
              value: 10,
              message: "Max length is 10",
            },
            pattern: {
              value: /^[0-9]+(?:\.[0-9]{1,2})?$/,
              message: "XXXXXXXXXX",
            },
          })}
          placeholder="Summe"
        />
        <p className={`${styles.error} ${!errors.summe && styles.opacity}`}>
          {errors.summe ? errors.summe?.message : "massege error"}
        </p>
      </div>

      <div className={styles.containerRadio}>
        <p className={styles.text}>
          Select your currency
          <span className={`${styles.error} ${styles.spanRadio}`}>
            {errors.currency?.message}
          </span>
        </p>

        <label className={styles.lableRadio}>
          <input
            className={styles.inputRadio}
            type="radio"
            {...register("currency", {
              required: "This is required",
            })}
            value={"dollar"}
          />
          <span className={styles.lableSpan}>
            <img className={styles.imageRadio} src={dollars} alt="dollars" />
          </span>
        </label>

        <label className={styles.lableRadio}>
          <input
            className={styles.inputRadio}
            type="radio"
            {...register("currency", {
              required: "This is required",
            })}
            value={"euro"}
          />
          <span className={styles.lableSpan}>
            <img className={styles.imageRadio} src={euro} alt="euro" />
          </span>
        </label>
      </div>

      <button
        className={`${styles.button} ${disable && styles.disable}`}
        type="submit"
        disabled={disable}
      >
        Edit
      </button>
    </form>
  );
};

export default Form;

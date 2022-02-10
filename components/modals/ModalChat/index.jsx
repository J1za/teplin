import { Formik, Form } from "formik";
import * as Yup from "yup";

import Field from "components/formik/Field";
import Select from "components/formik/Select";
import Button from "components/common/Button";

import styles from "../style.module.scss";

export default function ModalChat() {
  return (
    <>
      <h3 className={styles.title}>Get a Free Quote</h3>
    </>
  );
}

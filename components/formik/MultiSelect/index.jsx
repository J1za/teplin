import classnames from "classnames";
import { useField } from "formik";

import styles from "./style.module.scss";

export default function MultiSelect({ id, label, className, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <input className={styles.checkbox} id={id} {...field} {...props} />
      <label htmlFor={id} className={classnames(styles.select, styles.className)}>
        <p>{label}</p>
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

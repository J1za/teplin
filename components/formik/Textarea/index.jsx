import classnames from "classnames";
import { useField } from "formik";

import styles from "../Field/style.module.scss";

export default function Field({ label, className, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={classnames(styles.field, className)}>
      {label && (
        <label htmlFor={props.id || props.name} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        className={classnames(styles.input, {
          [styles.withError]: meta.error && meta.touched,
        })}
        {...field}
        {...props}
      ></textarea>
    </div>
  );
}
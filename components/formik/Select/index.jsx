import classnames from "classnames";
import { useField } from "formik";

import styles from "./style.module.scss";

export default function Select({
  label,
  className,
  ...props
}) {
  const [field, meta, helpers] = useField(props);

  const options = props.children.map((option) => ({
    value: option.props.value,
    label: option.props.children,
    disabled: option.props.disabled,
  }));

  return (
    <div className={classnames(styles.select, className)}>
      {label && (
        <label htmlFor={props.id || props.name} className={styles.label}>
          {label}
        </label>
      )}
      <select
        className={classnames(styles.input, {
          [styles.withError]: meta.error && meta.touched,
        })}
        {...field}
        {...props}
      >
        {props.children}
      </select>
    </div>
  );
}

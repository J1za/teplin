import { useState } from "react";
import classnames from "classnames";
import { useField } from "formik";

import styles from "./style.module.scss";

export default function Field({
  label,
  className,
  contactPage,
  ...props
}) {
  const [field, meta, helpers] = useField(props);
  const [labelUp, setLabelUp] = useState(false);
  return (
    <div className={classnames(styles.field, className, {
      [styles.fieldContact]: contactPage
    }
    )}>

      {contactPage && (
        <input
          className={classnames(styles.input, {
            [styles.withError]: meta.error && meta.touched,
          })}
          {...field}
          {...props}
        />
      )}
      {label && (
        <label htmlFor={props.id || props.name} className={styles.label}>
          {label}
          {!contactPage &&
            <sup style={{ color: 'red', top: 0, fontSize: '19px', opacity: 0.8, marginLeft: '-2px' }}> *</sup>
          }
        </label>
      )}
      {!contactPage && (
        <input
          className={classnames(styles.input, {
            [styles.withError]: meta.error && meta.touched,
          })}
          {...field}
          {...props}
         
        />
      )}

    </div>
  );
}

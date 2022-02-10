import styles from "./style.module.scss";
import classnames from "classnames";

export default function Options({
  label,
  className,
  list,
  selected,
  setSelected,
  pageContact,
  ...props
}) {
  return (
    <div className={classnames(styles.optionsWrapper, className, {
      [styles.contact]: pageContact,
    })}>
      {label && (
        <label htmlFor={props.id || props.name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.options}>
        {list.map((i, index) => (
          <span
            onClick={() => setSelected(i)}
            key={index}
            className={selected === i ? styles.active : undefined}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

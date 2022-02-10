import classnames from "classnames";

import styles from "./style.module.scss";

export default function SectionTitle({ children, className, tac }) {
  return (
    <h3 className={classnames(styles.title, className, { [styles.tac]: tac })}>
      {children}
    </h3>
  );
}

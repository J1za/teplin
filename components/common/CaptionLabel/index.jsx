import classnames from "classnames";

import styles from "./style.module.scss";

export default function CaptionLabel({ icon = () => {}, children, className }) {
  return (
    <div className={classnames(styles.block, className)}>
      <div className={styles.icon}>{icon()}</div>
      <div className={styles.caption}>{children}</div>
    </div>
  );
}

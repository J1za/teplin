import Link from "next/link";
import classnames from "classnames";

import styles from "./style.module.scss";

export default function Logo({ className }) {
  return (
    <Link href="/">
      <a className={classnames(styles.logo, className)}>
      </a>
    </Link>
  );
}

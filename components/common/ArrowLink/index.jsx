import Link from "next/link";
import classnames from "classnames";

import styles from "./style.module.scss";

export default function ArrowLink({
  className,
  url,
  children,
  onClick = () => {},
}) {
  const classes = classnames(styles.link, className);
  return onClick ? (
    <a href={url} target="_blank" onClick={onClick} className={classes}>
      {children} <IconArrow />
    </a>
  ) : (
      <a  className={classes}>
        {children} <IconArrow />
      </a>
  );
}

const IconArrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="#1E2532"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      transform="translate(0,-.7)"
      d="M0.841476 6.77059C0.898761 6.76129 0.956734 6.757 1.01474 6.75775H10.8915L10.6761 6.65758C10.4656 6.55795 10.2741 6.42234 10.1101 6.25691L7.34046 3.48723C6.97569 3.13901 6.91439 2.57885 7.19521 2.15999C7.52205 1.71364 8.14882 1.61672 8.5952 1.94356C8.63126 1.96998 8.66554 1.99878 8.69775 2.02977L13.7062 7.03823C14.0976 7.4292 14.098 8.06343 13.707 8.45484C13.7067 8.45509 13.7065 8.45537 13.7062 8.45562L8.69775 13.4641C8.30603 13.8547 7.6718 13.8538 7.28114 13.4621C7.2504 13.4313 7.22169 13.3985 7.19521 13.3639C6.91439 12.9451 6.97569 12.3849 7.34046 12.0367L10.1051 9.26198C10.2521 9.11486 10.4211 8.9915 10.606 8.89637L10.9065 8.76114H1.06986C0.558153 8.78014 0.109207 8.42269 0.0130758 7.91972C-0.0754805 7.37364 0.295397 6.85918 0.841476 6.77059Z"
    />
  </svg>
);

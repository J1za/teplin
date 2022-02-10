import Link from "next/link";
import classnames from "classnames";

import styles from "./style.module.scss";

export default function Button({
  children,
  size,
  style,
  url,
  type = "button",
  target,
  secondary,
  backHome,
  morePosts,
  contactBtn,
  className,
  onClick = () => { },
}) {
  const classes = classnames(styles.btn, className, {
    [styles.small]: size === "small",
    [styles.secondary]: secondary,
    [styles.backHome]: backHome,
    [styles.contactBtn]: contactBtn,
    [styles.morePosts]: morePosts,
  });

  return url ? (
    <>
      {target ? (
        <a href={url} className={classes} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <Link href={url}>
          <a className={classes}>{children}</a>
        </Link>
      )}
    </>
  ) : (
    <button style={style} type={type} className={classes} onClick={onClick}>
      {backHome && <ArrowBack />}
      {children}
      {contactBtn && <ArrowRight />}
    </button>
  );
}

const ArrowBack = () => (
  <svg width="16" height="15" viewBox="0 0 16 15" >
    <path d="M15.0383 6.37649C14.9728 6.36586 14.9066 6.36096 14.8403 6.36182H3.55262L3.79875 6.24734C4.03933 6.13347 4.2582 5.9785 4.44555 5.78943L7.6109 2.62408C8.02778 2.22612 8.09783 1.58593 7.77689 1.10723C7.40337 0.597115 6.68705 0.486357 6.17691 0.859881C6.13569 0.890075 6.09652 0.922987 6.05971 0.958404L0.335755 6.68236C-0.111572 7.12919 -0.111966 7.85402 0.33486 8.30135C0.335147 8.30164 0.335469 8.30196 0.335755 8.30224L6.05971 14.0262C6.50739 14.4726 7.23222 14.4716 7.67869 14.0239C7.71382 13.9887 7.74663 13.9512 7.77689 13.9117C8.09783 13.433 8.02778 12.7928 7.6109 12.3949L4.45128 9.2238C4.28331 9.05566 4.0902 8.91467 3.87888 8.80595L3.53544 8.65141H14.7773C15.3621 8.67312 15.8752 8.26461 15.985 7.68978C16.0863 7.06569 15.6624 6.47773 15.0383 6.37649Z" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
    <g clip-path="url(#clip0_1199_796)">
      <path d="M11.5436 4.5201L10.7769 5.28674C10.5913 5.4724 10.5943 5.77439 10.7837 5.95627L13.9367 8.98432H0.46875C0.209883 8.98432 0 9.1942 0 9.45307V10.5468C0 10.8057 0.209883 11.0156 0.46875 11.0156H13.9367L10.7837 14.0436C10.5943 14.2255 10.5913 14.5275 10.777 14.7131L11.5436 15.4798C11.7266 15.6628 12.0234 15.6628 12.2065 15.4798L17.3549 10.3314C17.538 10.1483 17.538 9.85154 17.3549 9.66846L12.2064 4.5201C12.0234 4.33705 11.7266 4.33705 11.5436 4.5201Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_1199_796">
        <rect width="17.5" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>

);
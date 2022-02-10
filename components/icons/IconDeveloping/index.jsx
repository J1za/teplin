import styles from "./style.module.scss";

export default function IconDeveloping({ width = 70, height = 71 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.5524 48.3913V23.6048C48.5524 11.1194 38.431 0.998047 25.9457 0.998047C13.4603 0.998047 3.33887 11.1195 3.33887 23.6048L3.33887 48.3913C3.33887 60.8766 13.4603 70.998 25.9457 70.998C38.431 70.998 48.5524 60.8766 48.5524 48.3913Z"
        fill="#8F81FC"
      />
      <g className={styles.group}>
      <path
        d="M48.5527 17.8906C38.5514 17.8906 30.4437 25.9983 30.4437 35.9996C30.4437 46.001 38.5514 54.1086 48.5527 54.1086L48.5527 35.9996L48.5527 17.8906Z"
        fill="url(#gradient_developing_1)"
      />
      <path
        d="M48.5522 17.8906C38.5509 17.8906 30.4432 25.9983 30.4432 35.9996C30.4432 46.001 38.5509 54.1086 48.5522 54.1086L48.5522 35.9996L48.5522 17.8906Z"
        fill="url(#gradient_developing_2)"
      />
      <path
        d="M48.5522 17.8906C58.5536 17.8906 66.6613 25.9983 66.6613 35.9996C66.6613 46.001 58.5536 54.1086 48.5522 54.1086L48.5522 35.9996L48.5522 17.8906Z"
        fill="#FFCA48"
      />
      </g>
      <defs>
        <linearGradient
          id="gradient_developing_1"
          x1="30.4437"
          y1="42.1557"
          x2="48.5527"
          y2="42.1557"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A49B9" />
          <stop offset="1" stopColor="#1A49B9" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="gradient_developing_2"
          x1="30.4432"
          y1="42.1557"
          x2="48.5522"
          y2="42.1557"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A49B9" />
          <stop offset="1" stopColor="#1A49B9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

import styles from "./style.module.scss";

export default function IconCare({ width = 71, height = 65 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 78 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.1358 46.795H23.8023C10.9155 46.795 0.46875 36.3482 0.46875 23.4615C0.46875 10.5747 10.9155 0.12793 23.8023 0.12793C36.689 0.12793 47.1358 10.5747 47.1358 23.4615V46.795Z"
        fill="#FFCA48"
      />
      <g className={styles.group}>
      <path
        d="M23.8018 25.4609C23.8018 24.3564 24.6972 23.4609 25.8018 23.4609H47.1353C60.022 23.4609 70.4688 33.9077 70.4688 46.7945C70.4688 59.6812 60.022 70.128 47.1353 70.128C34.2485 70.128 23.8018 59.6812 23.8018 46.7945V25.4609Z"
        fill="#8F81FC"
      />
      <path
        d="M23.8022 46.7952H47.1357V23.4616L25.8018 23.4609C24.6972 23.4609 23.8018 24.3564 23.8018 25.4609L23.8022 46.7952Z"
        fill="url(#gradient_care)"
      />
      </g>
      <defs>
        <linearGradient
          id="gradient_care"
          x1="22.744"
          y1="23.4609"
          x2="53.1048"
          y2="51.0924"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A49B9" />
          <stop offset="1" stopColor="#1A49B9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

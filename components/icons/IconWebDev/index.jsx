import styles from "./style.module.scss";

export default function IconWebDev({ width = 46, height = 67 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={styles.group}>
        <path
          d="M33.4272 66.4706C15.2978 66.4706 0.601074 51.7739 0.601074 33.6445C0.601074 15.5151 15.2978 0.818359 33.4272 0.818359V66.4706Z"
          fill="#8F81FC"
        />
        <path
          d="M33.4269 13.5068C26.4786 17.5263 21.8037 25.0389 21.8037 33.6434C21.8037 42.2478 26.4786 49.7604 33.4269 53.7798V13.5068Z"
          fill="url(#gradient_web_dev)"
        />
        <path
          d="M45.0505 56.8894L45.0505 10.3965C40.8163 10.3965 36.8465 11.5285 33.4272 13.5065V53.7795C36.8465 55.7574 40.8163 56.8894 45.0505 56.8894Z"
          fill="#FFCA48"
        />
      </g>
      <defs>
        <linearGradient
          id="gradient_web_dev"
          x1="19.027"
          y1="33.6433"
          x2="38.5621"
          y2="33.6433"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A49B9" />
          <stop offset="1" stopColor="#1A49B9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

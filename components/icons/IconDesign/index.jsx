import styles from "./style.module.scss";

export default function IconDesign({ width = 71, height = 70 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 71 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={styles.group}>
      <path
        d="M10.4219 43.3114C10.4219 41.6313 11.4334 40.1163 12.9852 39.4723L57.6255 20.9461C58.9941 20.3781 60.5004 21.3838 60.5004 22.8656V50.249L13.2968 69.839C11.9282 70.407 10.4219 69.4012 10.4219 67.9195V43.3114Z"
        fill="#8F81FC"
      />

      <path
        d="M60.5004 22.5263C60.5004 20.8461 59.4889 19.3312 57.9371 18.6871L13.2968 0.160894C11.9282 -0.407094 10.4219 0.598684 10.4219 2.08047V26.6885C10.4219 28.3687 11.4334 29.8836 12.9852 30.5276L60.5004 50.247V22.5263Z"
        fill="#FFCA48"
      />
      <path
        d="M60.501 50.249V22.8656C60.501 21.3838 58.9947 20.3781 57.6261 20.9461L23.7617 35.0002L60.501 50.249Z"
        fill="#8F81FC"
      />

      <path
        d="M60.501 50.249V22.8656C60.501 21.3838 58.9947 20.3781 57.6261 20.9461L23.7617 35.0002L60.501 50.249Z"
        fill="url(#gradient_design)"
      />
      </g>
      <defs>
        <linearGradient
          id="gradient_design"
          x1="38.7404"
          y1="29.4056"
          x2="62.0598"
          y2="41.3082"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A49B9" />
          <stop offset="1" stopColor="#1A49B9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

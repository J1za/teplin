import styles from "./style.module.scss";

export default function IconDesignBranding({ width = 65, height = 63 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 65 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={styles.group}>
        <path
          d="M0.637921 28.4436C2.91655 46.263 17.0346 60.3811 34.854 62.6597C37.6399 63.016 39.9285 60.7049 39.9285 57.8964V39.9178H29.8643C27.0557 39.9178 24.7789 37.641 24.7789 34.8325V23.3691H5.40128C2.59272 23.3691 0.28168 25.6578 0.637921 28.4436Z"
          fill="#8F81FC"
        />
        <path
          d="M39.9289 28.4535C39.9289 25.6449 37.6521 23.3681 34.8436 23.3681H24.7793V5.38957C24.7793 2.58101 27.0679 0.269961 29.8538 0.626202C47.6732 2.90483 61.7913 17.0229 64.0699 34.8423C64.4261 37.6282 62.1151 39.9168 59.3065 39.9168H39.9289V28.4535Z"
          fill="#FFCA48"
        />
        <path
          d="M39.9289 28.4545C39.9289 25.6459 37.6521 23.3691 34.8436 23.3691H24.7793V34.8325C24.7793 37.641 27.0561 39.9178 29.8647 39.9178H39.9289V28.4545Z"
          fill="#8F81FC"
        />
        <path
          d="M39.9289 28.4545C39.9289 25.6459 37.6521 23.3691 34.8436 23.3691H24.7793V34.8325C24.7793 37.641 27.0561 39.9178 29.8647 39.9178H39.9289V28.4545Z"
          fill="url(#gradient_design_branding)"
        />
      </g>
      <defs>
        <linearGradient
          id="gradient_design_branding"
          x1="24.7793"
          y1="39.9178"
          x2="39.9289"
          y2="23.3691"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A49B9" />
          <stop offset="1" stopColor="#1A49B9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

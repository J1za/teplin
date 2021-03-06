import styles from "./style.module.scss";

export default function IconGoal({ width = 75, height = 65 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className={styles.group}
        d="M0.688619 6.13355C-0.269558 3.167 1.9425 0.12793 5.05995 0.12793H41.9691C43.9621 0.12793 45.7278 1.41313 46.3404 3.30971L51.7472 20.0494C52.0437 20.9673 52.0437 21.9553 51.7472 22.8732L46.3404 39.6128C45.7278 41.5094 43.9621 42.7946 41.9691 42.7946H5.05995C1.9425 42.7946 -0.269557 39.7555 0.68862 36.789L5.18335 22.8732C5.47983 21.9553 5.47983 20.9673 5.18335 20.0494L0.688619 6.13355Z"
        fill="#FFCA48"
      />
      <g className={styles.group2}>
      <path
        d="M22.9591 27.4666C22.0009 24.5 24.213 21.4609 27.3305 21.4609H64.2396C66.2326 21.4609 67.9983 22.7461 68.6109 24.6427L74.0177 41.3824C74.3142 42.3003 74.3142 43.2883 74.0177 44.2062L68.6109 60.9458C67.9983 62.8424 66.2326 64.1276 64.2396 64.1276H27.3305C24.213 64.1276 22.001 61.0885 22.9591 58.122L27.4539 44.2062C27.7503 43.2883 27.7503 42.3003 27.4539 41.3824L22.9591 27.4666Z"
        fill="#8F81FC"
      />
      <path
        d="M51.7468 22.8729L46.3399 39.6125C45.7274 41.5091 43.9617 42.7943 41.9686 42.7943H27.6762C27.6762 42.3178 27.6021 41.8413 27.4539 41.3824L22.9591 27.4666C22.0009 24.5 24.213 21.4609 27.3305 21.4609H51.9691C51.9691 21.9374 51.895 22.4139 51.7468 22.8729Z"
        fill="url(#gradient_goal)"
      />
      </g>
      <defs>
        <linearGradient
          id="gradient_goal"
          x1="21.4081"
          y1="21.4609"
          x2="48.6218"
          y2="55.4031"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A49B9" />
          <stop offset="1" stopColor="#1A49B9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

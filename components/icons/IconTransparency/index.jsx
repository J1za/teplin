import styles from "./style.module.scss";

export default function IconTransparency({ width = 78, height = 65 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.3409 40.3655C-0.446966 38.5777 -0.446967 35.679 1.3409 33.8911L33.7632 1.46883C35.551 -0.319035 38.4497 -0.319038 40.2376 1.46883L62.6375 23.8687C64.4254 25.6566 64.4254 28.5553 62.6375 30.3432L30.2152 62.7654C28.4274 64.5533 25.5287 64.5533 23.7408 62.7654L1.3409 40.3655Z"
        fill="#FFCA48"
      />
      <g className={styles.group}>
      <path
        d="M22.3267 27.8711C22.3267 25.3427 24.3764 23.293 26.9048 23.293H72.7568C75.2852 23.293 77.3349 25.3427 77.3349 27.8711V59.5493C77.3349 62.0777 75.2852 64.1274 72.7568 64.1274H26.9048C24.3764 64.1274 22.3267 62.0777 22.3267 59.5493V27.8711Z"
        fill="#8F81FC"
      />
      <path
        d="M30.2155 62.7649L62.6377 30.3427C64.4256 28.5548 64.4256 25.6561 62.6377 23.8682L62.0625 23.293H26.9053C24.3768 23.293 22.3271 25.3427 22.3271 27.8711V59.5493C22.3271 60.5312 22.6362 61.4409 23.1624 62.1864L23.741 62.7649C25.5289 64.5528 28.4276 64.5528 30.2155 62.7649Z"
        fill="url(#gradient_transparency)"
      />
      </g>
      <defs>
        <linearGradient
          id="gradient_transparency"
          x1="20.4391"
          y1="23.293"
          x2="73.6585"
          y2="72.6979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A49B9" />
          <stop offset="1" stopColor="#1A49B9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

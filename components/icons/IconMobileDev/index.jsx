import styles from "./style.module.scss";

export default function IconMobileDev({ width = 65, height = 65 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.0409 23.5389L21.3224 23.5389C9.87858 23.5389 0.601561 32.8159 0.601562 44.2597C0.601562 55.7034 9.87858 64.9805 21.3224 64.9805L44.0409 64.9805C55.4847 64.9805 64.7618 55.7035 64.7618 44.2597C64.7618 32.8159 55.4847 23.5389 44.0409 23.5389Z"
        fill="#8F81FC"
      />
      <g className={styles.group}>
        <path
          d="M32.6807 23.5352L32.6807 46.2533C44.1274 46.2533 53.5968 37.7876 55.1695 26.7757C51.9547 24.7249 48.1365 23.5366 44.0406 23.5366L32.6807 23.5352Z"
          fill="url(#gradient_mobile_dev)"
        />
        <path
          d="M55.3988 23.5374C55.3988 10.9905 45.2276 0.819336 32.6807 0.819336V23.5375L44.0406 23.5389C48.1365 23.5389 51.9547 24.7272 55.1695 26.778C55.3206 25.7196 55.3988 24.6376 55.3988 23.5374Z"
          fill="#FFCA48"
        />
      </g>
      <defs>
        <linearGradient
          id="gradient_mobile_dev"
          x1="47.7476"
          y1="46.2533"
          x2="47.7476"
          y2="23.5352"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A49B9" />
          <stop offset="1" stopColor="#1A49B9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

import styles from "./style.module.scss";

export default function IconManaging({ width = 71, height = 70 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 71 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={styles.group}>
      <path className={styles.group3}
        d="M27.8805 27.1212C28.6113 25.6024 30.1476 24.6367 31.833 24.6367H66.5339C68.9563 24.6367 70.9201 26.6005 70.9201 29.0229V61.7032C70.9201 64.1256 68.9563 66.0894 66.5339 66.0894H31.833C30.1476 66.0894 28.6113 65.1236 27.8805 63.6049L20.0187 47.2647C19.4404 46.0629 19.4404 44.6632 20.0187 43.4613L27.8805 27.1212Z"
        fill="#FFCA48"
      />

        <g className={styles.group2}>
      <path
        d="M43.9594 6.39465C43.2287 4.87588 41.6923 3.91016 40.0069 3.91016H5.30612C2.88369 3.91016 0.919922 5.87392 0.919922 8.29636V40.9766C0.919922 43.399 2.88369 45.3628 5.30612 45.3628H40.0069C41.6923 45.3628 43.2287 44.3971 43.9594 42.8783L51.8213 26.5382C52.3996 25.3363 52.3996 23.9366 51.8213 22.7348L43.9594 6.39465Z"
        fill="#8F81FC"
      />
      <path
        d="M27.8805 27.1212L20.0187 43.4613C19.7295 44.0623 19.585 44.7127 19.585 45.3631H40.0071C41.6925 45.3631 43.2288 44.3973 43.9596 42.8786L51.8214 26.5385C52.1106 25.9375 52.2551 25.2871 52.2551 24.6367H31.833C30.1476 24.6367 28.6113 25.6024 27.8805 27.1212Z"
        fill="url(#gradient_managing)"
      />
        </g>
      </g>
      <defs>
        <linearGradient
          id="gradient_managing"
          x1="40.1747"
          y1="42.315"
          x2="26.0646"
          y2="20.0014"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A49B9" />
          <stop offset="1" stopColor="#1A49B9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

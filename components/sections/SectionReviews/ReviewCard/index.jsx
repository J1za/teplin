import { MobileUp, MobileDown } from "components/media";

import styles from "./style.module.scss";

export default function ReviewCard({ data }) {
  const Stats = () => (
    <ul className={styles.stats}>
      <li>
        <span data-icon="location">Location</span>
        <strong>{data.location}</strong>
      </li>
      <li>
        <span data-icon="budget">Budget</span>
        <strong>{data.budget}</strong>
      </li>
      <li>
        <span data-icon="duration">Duration</span>
        <strong>{data.duration}</strong>
      </li>
    </ul>
  );
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.user}>
          <div className={styles.userIcon}>
            <img
              src={data.avatar}
              alt=""
              width={70}
              height={70}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <div className={styles.userName}>{data.name}</div>
            <div className={styles.userPosition}>{data.position}</div>
          </div>
        </div>
        <div className={styles.separator} />
        <MobileUp>
          <Stats />
        </MobileUp>
      </div>
      <div className={styles.body}>
        <div className={styles.rating}>
          <div className={styles.ratingHead}>
            <div className={styles.ratingIcon}>
              <img src={data.ratingPlatformIcon} alt="" />
            </div>
            <div className={styles.ratingMark}>{data.rating.toFixed(1)}</div>
          </div>
          <div className={styles.ratingList}>
            <img
              src="/img/icons/review-star.svg"
              alt=""
              width={16}
              height={16}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/img/icons/review-star.svg"
              alt=""
              width={16}
              height={16}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/img/icons/review-star.svg"
              alt=""
              width={16}
              height={16}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/img/icons/review-star.svg"
              alt=""
              width={16}
              height={16}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/img/icons/review-star.svg"
              alt=""
              width={16}
              height={16}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className={styles.excerpt}>
          <p>{data.description}</p><br/>
          <p><strong>Project summary: </strong>{data.project}</p><br/>
          <p><strong>Feedback summery: </strong>{data.feedback}</p>
        </div>
      </div>
    </div>
  );
}

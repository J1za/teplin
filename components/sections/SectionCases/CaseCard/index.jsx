import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

import Button from "components/common/Button";
import { TabletDown, TabletUp } from "components/media";

import styles from "./style.module.scss";

export default function CaseCard({ data }) {
  const CardBody = () => (
    <div className={styles.body}>
      <ul className={styles.categories}>
        {data.categories.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
      <h4 className={styles.title}>{data.title}</h4>
      <div className={styles.description}>
        <p>{data.description}</p>
      </div>
      <ul className={styles.meta}>
        <li data-icon="location">{data.location}</li>
        <li data-icon="topic">{data.topic}</li>
      </ul>
      <ul className={styles.list}>
        {data.technologies.slice(0, 4).map((item, idx) => {
          const { icon, label } = item;
          return (
            <li key={idx}>
              <img src={icon} alt="" loading="lazy" decoding="async" />
              {label}
            </li>
          );
        })}
      </ul>
      <div className={styles.foot}>
        <div className={styles.valueBlock}>
          <span>{data.budget}</span>
          Budget
        </div>
        <div className={styles.valueBlock}>
          <span>{data.duration}</span>
          Hours spent
        </div>
        <TabletUp>
          <Button className={styles.btn} target="_blank" url={data.link} secondary>
            View Case
          </Button>
        </TabletUp>
        <TabletDown>
          <Button className={styles.btn} target="_blank" url={data.link} secondary>
            View Case
          </Button>
        </TabletDown>
      </div>

    </div>
  );

  const CardMedia = () => (
    <img src={data.previewImage} alt="" className={styles.media} />
  );

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
          <CardBody />
          <CardMedia />
      </div>
      {/* <TabletUp>
        <div className={styles.mediaOuter}>
          <CardMedia />
        </div>
      </TabletUp> */}
      {/* <TabletDown>
        <CardMedia />
      </TabletDown> */}
    </div>
  );
}

const IconAngle = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.62762 0.99094L16.1495 10.5142L6.62827 20.0367C5.9917 20.6727 4.96134 20.6727 4.32671 20.0367C3.69079 19.4008 3.69144 18.3711 4.32671 17.7352L11.5471 10.5135L4.32606 3.29055C3.69079 2.65462 3.69079 1.62491 4.32606 0.989637C4.96199 0.355017 5.9917 0.355017 6.62762 0.99094Z" />
  </svg>
);

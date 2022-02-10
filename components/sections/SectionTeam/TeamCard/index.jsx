import styles from "./style.module.scss";
import User from "components/common/User";

export default function TeamCard({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.icon}>{data.icon}</div>
        <h3 className={styles.title}>{data.title}</h3>
      </div>
      <div className={styles.card__user}>
        <User data={data} />
      </div>
      <ul className={styles.labels}>
        {data.labels.map((item, idx) => (
          <li key={idx} data-num={item.num}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

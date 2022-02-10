import styles from "./style.module.scss";

export default function User({ data }) {
    console.log(data.avatar)
    return (
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
                {data.instagram && (
                    <a
                        href={data.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.userInstagram}
                    >
                        Instagram
                    </a>
                )}
            </div>
            <div>
                <div className={styles.userName}>{data.name}</div>
                <div className={styles.userPosition}>{data.position}</div>
            </div>
        </div>
    );
}

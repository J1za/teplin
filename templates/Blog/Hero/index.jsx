import styles from "./style.module.scss";

import { MobileDown, MobileUp } from "components/media";

export default function BlogHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__text}>
        <div className="wrap">
          <div className={styles.hero__inner}>
            <h1>Blog</h1>
            <p>Articles, tricks and tips. Everything related to web.</p>
          </div>
        </div>
      </div>
      <div className={styles.hero__img}>

        <MobileUp>
          <img src="/img/del/section-blog.png" alt="picture" />
        </MobileUp>
        <MobileDown>
          <img src="/img/del/section-blog-phone.png" alt="picture" />
        </MobileDown>

      </div>
    </section>
  )
}
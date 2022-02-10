import styles from "./style.module.scss";

import Button from "components/common/Button";

export default function CareerHero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <div className={styles.hero__inner}>
          <div className={styles.hero__info}>
            <h1 className="title">
              Join our team and create greate producrs together
            </h1>
            <Button style={{borderRadius: '14px'}}>Join out team</Button>
          </div>
          <div className={styles.hero__image}>
            <img src="/img/del/section-career.png" alt="picture" />
          </div>
        </div>
      </div>
    </section>
  )
}
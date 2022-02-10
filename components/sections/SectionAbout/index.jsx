import classnames from "classnames";
import { Parallax } from "react-scroll-parallax";

import SectionTitle from "components/common/SectionTitle";
import IconAllStars from "components/icons/IconAllStars";
import IconChat from "components/icons/IconChat";
import IconSchedule from "components/icons/IconSchedule";
import Counter from "./Counter";

import styles from "./style.module.scss";

export default function SectionAbout() {
  return (
    <section className={styles.section} id="about">
      <div className={classnames(styles.wrap, "wrap")}>
        <div className={styles.head}>
          <SectionTitle>We’ve got you covered</SectionTitle>
          <div className={styles.controls}>
            <div className={styles.tip}>
              <div className={styles.tipIcon}>
                <img
                  src="/img/icons/rating-upwork.svg"
                  alt=""
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.tipBody}>
                <div className={styles.tipHead}>
                  UpWork <span>|</span> 99% JSS
                </div>
                <div className={styles.tipCaption}>
                  <img
                    src="/img/icons/upwork-top-rated.svg"
                    alt=""
                    width={16}
                    height={16}
                    loading="lazy"
                    decoding="async"
                  />
                  TOP RATED PLUS
                </div>
              </div>
            </div>
            <div className={styles.tip}>
              <div className={styles.tipIcon}>
                <img
                  src="/img/icons/rating-clutch.svg"
                  alt=""
                  width={25}
                  height={26}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.tipBody}>
                <div className={styles.tipHead}>
                  Clutch{" "}
                  <div className={styles.tipRating}>
                    <img
                      src="/img/icons/review-star.svg"
                      alt=""
                      width={16}
                      height={17}
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="/img/icons/review-star.svg"
                      alt=""
                      width={16}
                      height={17}
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="/img/icons/review-star.svg"
                      alt=""
                      width={16}
                      height={17}
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="/img/icons/review-star.svg"
                      alt=""
                      width={16}
                      height={17}
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="/img/icons/review-star.svg"
                      alt=""
                      width={16}
                      height={17}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className={styles.tipCaption}>
                  <span>5.0</span> (10 reviews)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          <Parallax
            className={styles.cardOuter}
            y={[50, -50]}
            tagOuter="div"
            tagInner="div"
          >
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <IconAllStars />
              </div>
              <h4 className={styles.cardTitle}>All-star team</h4>
              <div className={styles.cardExcerpt}>
                <p>
                  Your project is in good hands with our professional Middle and
                  Senior level developers.
                </p>
              </div>
            </div>
          </Parallax>
          <Parallax
            className={styles.cardOuter}
            y={[100, -100]}
            tagOuter="div"
            tagInner="div"
          >
            <div className={styles.card} style={{ paddingLeft: "82px" }}>
              <div className={styles.cardIcon}>
                <IconChat />
              </div>
              <h4 className={styles.cardTitle}>We work when you do</h4>
              <div className={styles.cardExcerpt}>
                <p>
                  We aim to provide you with the fastest response time. Even on
                  weekends and after 6 PM.
                </p>
              </div>
            </div>
          </Parallax>
          <Parallax
            className={styles.cardOuter}
            y={[150, -150]}
            tagOuter="div"
            tagInner="div"
          >
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <IconSchedule />
              </div>
              <h4 className={styles.cardTitle}>Always on schedule</h4>
              <div className={styles.cardExcerpt}>
                <p>
                  We accurately estimate every project and deliver the work on
                  time.
                </p>
              </div>
            </div>
          </Parallax>
        </div>
        <div className={styles.counters}>
          <Counter
            numTo={120}
            suffix="k+"
            caption="Hours spent on making work"
          />
          <Counter numTo={7} caption="years of experience" />
          <Counter numTo={233} caption="successful projects" />
          <Counter numTo={54} caption="talents in a team" />
        </div>
      </div>
      <img
        src="/img/svg/bg-about.svg"
        alt=""
        loading="lazy"
        decoding="async"
        className={styles.bg}
      />
    </section>
  );
}

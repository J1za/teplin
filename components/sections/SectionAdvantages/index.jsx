import SectionTitle from "components/common/SectionTitle";
import IconHours from "components/icons/IconHours";
import IconNight from "components/icons/IconNight";
import IconLanguage from "components/icons/IconLanguage";
import IconRequest from "components/icons/IconRequest";
import { DesktopDown, DesktopUp } from "components/media";

import styles from "./style.module.scss";

export default function SectionAdvantages() {
  const TableBlock = () => (
    <div className={styles.table}>
      <div>
        <h4 className={styles.tableTitle}>We are a click away</h4>
        <div className={styles.tableExcerpt}>
          <p>
            Expect a reply to your queries within a few minutes if you contact
            us during business hours - <strong>10:00-19:00 UTC +3</strong>
          </p>
        </div>
      </div>
      <div className={styles.separator} />
      <ul className={styles.list}>
        <li>
          <div className={styles.listIcon}>
            <img
              src="/img/icons/chronometer.svg"
              alt=""
              width={27}
              height={27}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.listTitle}>Speed of response:</div>
          <div className={styles.listCaption}>± 1 min - 30 min</div>
        </li>
        <li>
          <div className={styles.listIcon}>
            <img
              src="/img/icons/chatting.svg"
              alt=""
              width={27}
              height={27}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.listTitle}>Chat is online:</div>
          <div className={styles.listCaption}>
            <strong>16 hrs per day</strong>
          </div>
        </li>
      </ul>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.body}>
          <div className={styles.motto}>
            <div>
              <div className={styles.mottoCaption}>Our motto:</div>
              <h4 className={styles.mottoTitle}>
                “Treat others as you{"'"}d like to be treated yourself”
              </h4>
            </div>
            <div className={styles.mottoExcerpt}>
              <p>
                We adhere to the highest standards of professionalism and ethics
                and help you build your brand effortlessly and effectively. We
                make it our business to understand you and your needs.
              </p>
            </div>
          </div>
          <SectionTitle>You’re in good hands with us</SectionTitle>
          <div className={styles.grid}>
            <DesktopDown>
              <TableBlock />
            </DesktopDown>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <IconHours />
              </div>
              <div className={styles.cardExcerpt}>
                <p>
                  You always can get in touch with us. Even after hours, even on
                  weekends…Hop into our chat and we’ll give you a hand!
                </p>
              </div>
            </div>
            <DesktopUp>
              <TableBlock />
            </DesktopUp>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <IconNight />
              </div>
              <div className={styles.cardExcerpt}>
                <p>
                  Even if you text us late into the night, our customer support
                  team is always here for you.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <IconLanguage />
              </div>
              <div className={styles.cardExcerpt}>
                <p>
                  Let’s get this done! Simply describe your request in your own
                  words, and we will do the rest.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <IconRequest />
              </div>
              <div className={styles.cardExcerpt}>
                <p>
                  Tired of dealing with robots? Our customer support team speaks
                  your language and strives to make you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

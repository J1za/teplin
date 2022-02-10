import styles from "./style.module.scss";

import Layout from "components/Layout";
import { TabletUp } from "components/media";
export default function LayoutForm({ children, title, excerpt }) {
  return (
    <Layout>
      <section className={styles.contact}>
        <div className="wrap">
          <div className={styles.contact__inner}>
            <div className="w-558">
              <h1 className={styles.contact__title}>
                {title}
              </h1>
              <div className={styles.contact__excerpt}>
                <p>
                  {excerpt}
                </p>
              </div>
              {children}
            </div>
            <TabletUp>
              <div className={styles.contact__image}>
                <img
                  src="/img/del/section-cta.png"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </TabletUp>
          </div>
        </div>
      </section >

    </Layout>
  );
}

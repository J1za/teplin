import SectionTitle from "components/common/SectionTitle";
import CaptionLabel from "components/common/CaptionLabel";
import IconTransparency from "components/icons/IconTransparency";
import IconCare from "components/icons/IconCare";
import IconGoal from "components/icons/IconGoal";
import IconPersonal from "components/icons/IconPersonal";
import IconTeam from "components/icons/IconTeam";

import styles from "./style.module.scss";
import ReactPlayer from "react-player";
import { useEffect } from "react";

export default function SectionValue() {


  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <SectionTitle className={styles.title}>
            We value your time as much as we do our own
          </SectionTitle>
          <CaptionLabel icon={() => <IconDeadline />}>
            Your deadlines are <span>our goals</span>
          </CaptionLabel>
        </div>
        <div className={styles.list}>
          <div className={styles.listCard}>
            <div>
              <IconTransparency />
            </div>
            <p>
              <strong>Get 100% transparency</strong> for your projects terms. We
              clearly estimate the scope of work and provide you with an honest
              quote.
            </p>
          </div>
          <div className={styles.listCard}>
            <div>
              <IconCare />
            </div>
            <p>
              We handle all unexpected situations{" "}
              <strong>with a great deal of care</strong>. We inform you about
              force majeure events, so you can make the best decision.
            </p>
          </div>
          <div className={styles.listCard}>
            <div>
              <IconGoal />
            </div>
            <p>
              <strong>
                Our goal is to create a project with you, not just for you.
              </strong>{" "}
              We engage you in the revision process to have your impact on the
              final product.
            </p>
          </div>
        </div>
        <div className={styles.grid}>
          <div>
            <h4 className={styles.subtitle}>
              Your project. Your communication rules.
            </h4>
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <IconPersonal />
                <div className={styles.cardTitle}>Personal project manager</div>
              </div>
              <div className={styles.cardText}>
                <p>
                  Don’t have time to oversee the project? No problem. We assign
                  you a personal project manager. Let them act as your personal
                  link to the process and manage all reviews, comments and
                  changes via them.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <IconTeam />
                <div className={styles.cardTitle}>
                  Talk directly with the team
                </div>
              </div>
              <div className={styles.cardText}>
                <p>
                  Want to get fully immersed in the project? We create a
                  collaborative workflow for you. Use your favorite messenger,
                  work in your company{"'"}s task manager to receive instant
                  updates, and communicate with our team.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <ReactPlayer className={styles.player}
                         playsinline
                         url="videos/video8.mp4"
                         loop={true}
                         muted
                         playing={true}
                         controls={false}

            />
          </div>
        </div>
      </div>
    </section>
  );
}

const IconDeadline = () => (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="#1E2532"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.83984 15.668C8.41882 15.668 8.07812 16.0087 8.07812 16.4297V17.9531C8.07812 18.3734 7.73667 18.7148 7.31641 18.7148C6.89614 18.7148 6.55469 18.3734 6.55469 17.9531V16.4297C6.55469 13.4899 4.16243 11.0977 1.22266 11.0977C0.526293 11.0977 0.19591 11.9624 0.71459 12.427C0.727234 12.4381 1.98438 13.6008 1.98438 14.9062C1.98438 15.3503 1.83858 15.8272 1.5507 16.3233C0.82768 17.5708 0.460938 18.8421 0.460938 20.2383C0.460938 23.5983 3.19464 26.3828 6.55469 26.3828C9.91473 26.3828 12.6992 23.5983 12.6992 20.2383V19.4766C12.6992 17.3766 10.9398 15.668 8.83984 15.668Z"
      fill="#8F81FC"
    />
    <path
      d="M14.9844 4.95312C11.2041 4.95312 8.07812 8.07907 8.07812 11.8594C8.07812 12.6656 8.22757 13.4468 8.49611 14.1868C8.6098 14.1694 8.72137 14.1445 8.83984 14.1445C11.4883 14.1445 13.7258 16.0914 14.1366 18.6258C14.4184 18.6608 14.6964 18.7148 14.9844 18.7148C18.7647 18.7148 21.8906 15.6397 21.8906 11.8594C21.8906 8.07907 18.7647 4.95312 14.9844 4.95312ZM19.6055 12.6211H14.9844C14.5633 12.6211 14.2227 12.2804 14.2227 11.8594V7.23828C14.2227 6.81725 14.5633 6.47656 14.9844 6.47656C15.4054 6.47656 15.7461 6.81725 15.7461 7.23828V11.0977H19.6055C20.0265 11.0977 20.3672 11.4383 20.3672 11.8594C20.3672 12.2804 20.0265 12.6211 19.6055 12.6211Z" />
    <path
      d="M14.9848 0.382812C9.30432 0.382812 4.54205 4.604 3.66699 10.0415C4.82359 10.4858 5.82347 11.233 6.58138 12.1883C6.57711 12.0778 6.55507 11.9707 6.55507 11.8594C6.55507 7.23925 10.3646 3.42969 14.9848 3.42969C19.6049 3.42969 23.4144 7.23925 23.4144 11.8594C23.4144 16.4795 19.6049 20.2383 14.9848 20.2383C14.7287 20.2383 14.4753 20.2214 14.223 20.1986V20.2383C14.223 21.2799 14.0108 22.2724 13.6306 23.1776C14.0796 23.231 14.5288 23.2852 14.9848 23.2852C21.2853 23.2852 26.4613 18.1599 26.4613 11.8594C26.4613 5.55884 21.2853 0.382812 14.9848 0.382812Z" />
  </svg>
);

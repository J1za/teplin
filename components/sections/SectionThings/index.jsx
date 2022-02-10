import { useEffect, useContext } from "react";
import Marquee from "react-fast-marquee";
import { Parallax, ParallaxContext } from "react-scroll-parallax";
import classnames from "classnames";

import SectionTitle from "components/common/SectionTitle";
import IconEcommerce from "components/icons/IconEcommerce";
import IconEducation from "components/icons/IconEducation";
import IconFinance from "components/icons/IconFinance";
import IconBeauty from "components/icons/IconBeauty";
import IconBlockchain from "components/icons/IconBlockchain";
import IconIndustrial from "components/icons/IconIndustrial";
import IconGambling from "components/icons/IconGambling";
import IconEntertainment from "components/icons/IconEntertainment";
import IconRetail from "components/icons/IconRetail";
import IconRealEstate from "components/icons/IconRealEstate";
import IconLaw from "components/icons/IconLaw";
import IconDating from "components/icons/IconDating";
import { MobileDown, MobileUp } from "components/media";

import styles from "./style.module.scss";

const TickersTop = () => (
  <>
    <div className={styles.label}>
      <IconEcommerce /> E-commerce
    </div>
    <div className={styles.label}>
      <IconEducation /> Education
    </div>
    <div className={styles.label}>
      <IconFinance /> Finance
    </div>
    <div className={styles.label}>
      <IconBeauty /> Beauty & Health
    </div>
  </>
);

const TickersMiddle = () => (
  <>
    <div className={styles.label}>
      <IconBlockchain /> Blockchain
    </div>
    <div className={styles.label}>
      <IconIndustrial /> Industrial
    </div>
    <div className={styles.label}>
      <IconGambling /> Gambling
    </div>
    <div className={styles.label}>
      <IconEntertainment /> Entertainment
    </div>
  </>
);

const TickersBottom = () => (
  <>
    <div className={styles.label}>
      <IconRetail /> Retail & FMCG
    </div>
    <div className={styles.label}>
      <IconRealEstate /> Real Estate
    </div>
    <div className={styles.label}>
      <IconLaw /> Law And Rights
    </div>
    <div className={styles.label}>
      <IconDating /> Dating
    </div>
  </>
);

const Logos = () => (
  <>
    <img src="/img/del/client-1.svg" alt="" loading="lazy" decoding="async" />
    <img src="/img/del/client-2.svg" alt="" loading="lazy" decoding="async" />
    <img src="/img/del/client-3.png" alt="" loading="lazy" decoding="async" />
    <img src="/img/del/client-4.png" alt="" loading="lazy" decoding="async" />
    <img src="/img/del/client-5.svg" alt="" loading="lazy" decoding="async" />
  </>
);

export default function SectionThings() {
  const context = useContext(ParallaxContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const section = document.querySelector(".js__marquees-section");
      let updated = false;
      window.addEventListener(
        "scroll",
        function () {
          const offset = section.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY + window.innerHeight + 200 > offset) {
            if (!updated) {
              context.update();
              updated = true;
            }
          }
        },
        { passive: true }
      );
    }
  }, []);

  return (
    <section className={classnames(styles.section, "js__marquees-section")}>
      <div className="wrap">
        <div className={styles.head}>
          <SectionTitle className={styles.title}>
            We help diverse customers build amazing things
          </SectionTitle>
          <div className={styles.excerpt}>
            <p>
              We work with{" "}
              <strong>SMB (&lt;$10M - $1B), Enterprise (>$1B)</strong>, and
              everything in between. Our clients include names like SnapChat,
              PineLab etc.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.marquee}>
          <Parallax x={[10, -10]} tagOuter="div" tagInner="div">
            <Marquee gradient={false} speed={50}>
              <TickersTop />
              <TickersTop />
              <TickersTop />
            </Marquee>
          </Parallax>
        </div>
        <div className={styles.marquee}>
          <Parallax x={[-10, 10]} tagOuter="div" tagInner="div">
            <Marquee gradient={false} speed={50} direction="right">
              <TickersMiddle />
              <TickersMiddle />
              <TickersMiddle />
            </Marquee>
          </Parallax>
        </div>
        <div className={styles.marquee}>
          <Parallax x={[10, -10]} tagOuter="div" tagInner="div">
            <Marquee gradient={false} speed={50}>
              <TickersBottom />
              <TickersBottom />
              <TickersBottom />
            </Marquee>
          </Parallax>
        </div>
      </div>
      <div className="wrap">
        <div className={styles.foot}>
          <h4 className={styles.subtitle}>Some of our clients</h4>
          <MobileUp>
            <div className={styles.logos}>
              <Logos />
            </div>
          </MobileUp>
          <MobileDown>
            <div className={styles.mobileLogos}>
              <Marquee gradient={false} speed={50}>
                <Logos />
              </Marquee>
            </div>
          </MobileDown>
        </div>
      </div>
    </section>
  );
}

import { useDispatch } from "react-redux";
import Link from "next/link";
import Typed from "react-typed";
import Marquee from "react-fast-marquee";
import ReactPlayer from 'react-player'

import Button from "components/common/Button";
import CaptionLink from "components/common/CaptionLink";
import { MobileDown, MobileUp } from "components/media";


import { showModal } from "store/actions/modals";
import { MODAL_REQUEST_QUOTE } from "logic/constants";


import styles from "./style.module.scss";
import { useState } from "react";

const Tickers = () => (
  <>
    <span className={styles.label}>
      <img src="/img/icons/techs/shopify.svg" alt="" />
      #Shopify
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/wordpress.svg" alt="" />
      #wordpress
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/shopping-cart.svg" alt="" />
      #woocomerce
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/python.svg" alt="" />
      #python
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/ecommerce.svg" alt="" />
      #eCommerce
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/angular.svg" alt="" />
      #angular
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/vue.svg" alt="" />
      #vuejs
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/react.svg" alt="" />
      #reactjs
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/jquery.svg" alt="" />
      #jquery
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/javascript.svg" alt="" />
      #javascript
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/html5.svg" alt="" />
      #html
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/css3.svg" alt="" />
      #css
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/liquid.svg" alt="" />
      #liquid
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/nodejs.svg" alt="" />
      #nodejs
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/yii.svg" alt="" />
      #yii2
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/laravel.svg" alt="" />
      #laravel
    </span>
    <span className={styles.label}>
      <img src="/img/icons/techs/php.svg" alt="" />
      #php
    </span>
  </>
);

export default function SectionHero() {
  const dispatch = useDispatch();
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.wrapInner}>
            <h1 className={styles.title}>
              We turn ideas into{" "}
              <Typed
                strings={["web and mobile", "mobile app", "technical support"]}
                typeSpeed={55}
                backSpeed={55}
                backDelay={2250}
                loop
              />{" "}
              solutions that grow your business
            </h1>
            <MobileUp>
              <div className={styles.excerpt}>
                <p>
                  Build stunning customer experiences across web and mobile. We take you from idea to working product within deadlines.
                </p>
              </div>
            </MobileUp>
            <div className={styles.foot}>
              <Button
                className={styles.btn}
                onClick={() => dispatch(showModal(MODAL_REQUEST_QUOTE))}
              >
                Get a Free Quote
              </Button>
              <CaptionLink caption="or look at our">
                <Link href="/#cases" scroll={false}>
                  <a className="b">Case Studies</a>
                </Link>
              </CaptionLink>
            </div>
          </div>
          {/*<div className={styles.photo}>*/}
          {/*  <img*/}
          {/*    src="/img/del/section-hero.png"*/}
          {/*    alt=""*/}
          {/*    loading="lazy"*/}
          {/*    decoding="async"*/}
          {/*  />*/}
          {/*</div>*/}
          <div className={styles.wrapper}>
            <ReactPlayer className={styles.player}
              url='videos/video9.mp4'
              playing={true}
              loop={true}
              playsinline
              muted
              controls={false} />
          </div>
        </div>
      </section>
      <div className={styles.ticker}>
        <Marquee gradient={false} speed={40}>
          <Tickers />
          <Tickers />
          <Tickers />
        </Marquee>
      </div>
    </>
  );
}

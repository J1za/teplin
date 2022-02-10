import styles from "./style.module.scss";

import Image from 'next/image'
import Link from "next/link";

import classNames from "classnames";

export default function BlogItem({ small, title, srcImg }) {
  return (
    <Link href={"/blog/"} passHref>
      <div className={classNames(styles.item, {
        [styles.item_small]: small
      })}>
        <div className={styles.item__image}>
          <Image
            src={srcImg}
            alt="Picture"
            layout="responsive"
            width={'100%'}
            height={'100%'}
            objectFit='cover'
            objectPosition='top'
          />
        </div>
        <div className={styles.item__inner}>
          <h2>{title}</h2>
          <div className={styles.item__tags}>
            <span>People</span>
            <span>Start ups</span>
          </div>
          <div className={styles.item__text}>
            <p>
              Want to outsource IT activities? Check out the market guide with 12 benefits of Ukraine IT outsourcing & a plan of action to choose your best tech partner there.
            </p>
          </div>
          <div className={styles.item__info}>
            <div className={styles.item__user}>
              <img src="/img/del/avatar-blog.png" alt="avatar" />
              <span>Daniel Penar</span>
            </div>
            <div className={styles.item__minread}>
              <img src="/img/icons/clock-circular-outline.svg" alt="avatar" />
              <span>4 min read</span>
            </div>
            <div className={styles.item__date}>
              15th Dec
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
import styles from "./style.module.scss";
import Image from 'next/image'
import Link from "next/link";

export default function PortfolioTemplateItem({ src, title, tags }) {
  return (
    <Link href='/portfolio'>
      <a className={styles.item}>
        <div className={styles.item__image}>
          <Image
            src={src}
            alt="Picture"
            layout="responsive"
            width={'100%'}
            height={'100%'}
            objectFit='cover'
            objectPosition='top'
          />
        </div>
        <div className={styles.item__wrap}>
          <div className={styles.item__title}>
            {title}
          </div>
          <div className={styles.item__tags}>
            {tags.map((elem, idx) => (
              <span key={idx}>{elem}</span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}
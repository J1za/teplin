import Link from "next/link";

import Button from "components/common/Button";
import CaptionLink from "components/common/CaptionLink";
import ArrowLink from "components/common/ArrowLink";
import { MobileDown, MobileUp } from "components/media";

import styles from "./style.module.scss";
import { showModal } from "store/actions/modals";
import { MODAL_CONTACTS_US } from "logic/constants";
import { useDispatch } from "react-redux";

export default function TaskCard({ data }) {
  const dispatch = useDispatch()
  const goToTalkBlock = (e) => {
    let talkBlock = document.getElementById('talk-about-block')
    e.preventDefault()
    talkBlock.scrollIntoView({behavior: 'smooth'})
  }
  
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        {data.icon}
        <h4 className={styles.title}>{data.title}</h4>
      </div>
      <div className={styles.excerpt}>
        <p>{data.excerpt}</p>
      </div>
      <div className={styles.label}>
        <span>{data.label}</span>
      </div>
      <div className={styles.body}>
        <ul className={styles.list}>
          {data.list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.foot}>
        <MobileUp>
          <Button
            secondary
            size="small"
            className={styles.btn}
            onClick={() => dispatch(showModal(MODAL_CONTACTS_US))}
          >
            {data.btn.text}
          </Button>
        </MobileUp>
        <MobileDown>
          <Button
            secondary
            size="small"
            className={styles.btn}
            onClick={() => dispatch(showModal(MODAL_CONTACTS_US))}
          >
            {data.btn.text}
          </Button>
        </MobileDown>
        <span className={styles.separator} />
        <CaptionLink caption="or" icon={data.link.icon}>
          <Link href={data.link.url}>
            <a className="b" onClick={(e) => goToTalkBlock(e)}>{data.link.text}</a>
          </Link>
        </CaptionLink>
      </div>
    </div>
  );
}

const IconAngle = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.62762 0.99094L16.1495 10.5142L6.62827 20.0367C5.9917 20.6727 4.96134 20.6727 4.32671 20.0367C3.69079 19.4008 3.69144 18.3711 4.32671 17.7352L11.5471 10.5135L4.32606 3.29055C3.69079 2.65462 3.69079 1.62491 4.32606 0.989637C4.96199 0.355017 5.9917 0.355017 6.62762 0.99094Z" />
  </svg>
);

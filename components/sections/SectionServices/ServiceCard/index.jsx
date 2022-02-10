import Link from "next/link";
import { MobileDown, MobileUp } from "components/media";

import styles from "./style.module.scss";
import { setModalData, setModalTitle, showModal } from "store/actions/modals";
import { MODAL_CONTACTS_US, MODAL_SERVICE, MODAL_TECHNOLOGIES } from "logic/constants";
import { useDispatch } from "react-redux";
import Button from "../../../common/Button";

export default function ServiceCard({ data }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal(MODAL_SERVICE))
    dispatch(setModalTitle(data.title))
  }
  const showTechnologies = () => {
    dispatch(showModal(MODAL_TECHNOLOGIES))
    dispatch(setModalData(data.list))
  }

  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.body}>
          <div className={styles.head}>
            <div className={styles.icon}>{data.icon}</div>
            <h4 className={styles.title}>{data.title}</h4>
          </div>
          <div className={styles.excerpt}>
            <p>{data.excerpt}</p>
          </div>
          <div className={styles.label}>
            <span>{data.label}</span>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.listTitle}>Technologies we use</div>
          <MobileUp>
            <ul>
              {data.list.slice(0, 8).map((item, idx) => (
                <li key={idx}>
                  <img src={item.icon} alt="" loading="lazy" decoding="async" />
                  {item.label}
                </li>
              ))}
              {data.isShowDesktop ?
                <li
                  className={styles.btn}
                  onClick={showTechnologies}
                >
                  View all
                </li>
                :
                ''
              }
            </ul>
          </MobileUp>
          <MobileDown>
            <ul>
              {data.list.slice(0, 5).map((item, idx) => (
                <li key={idx}>
                  <img src={item.icon} alt="" loading="lazy" decoding="async" />
                  {item.label}
                </li>
              ))}
              {data.isShowMobile ?
                <li
                  className={styles.btn}
                  onClick={showTechnologies}
                >
                  View all
                </li>
                :
                ''
              }
            </ul>
          </MobileDown>
        </div>
      </div>
      <div className={styles.link}>
        <a onClick={openModal}>
          <IconAngle />
        </a>
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

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common/Button";
import styles from "../../sections/SectionServices/ServiceCard/style.module.scss";
import { showModal } from "../../../store/actions/modals";
import { MODAL_CONTACTS_US } from "../../../logic/constants";

const ModalTechnologies = () => {
  const { modalData } = useSelector((state) => state.ModalReducer);
  const additiveStyles = {
    opacity: 1,
    position: "relative",
    background: "url(/_next/static/media/freak-bg.2fd31e617d5c08d034d0e3998fa25222.svg) no-repeat center center/cover",
  }
  return (
      <div className={styles.list} style={additiveStyles}>
        <div className={styles.listTitle}>Technologies we use</div>
        <ul>
          {modalData.map((item, idx) => (
            <li key={idx}>
              <img src={item.icon} alt="" loading="lazy" decoding="async" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default ModalTechnologies;
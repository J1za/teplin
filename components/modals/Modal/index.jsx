import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import { hideModal } from "store/actions/modals";

import styles from "./style.module.scss";

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const { modalType } = useSelector((state) => state.ModalReducer);

  const onHideModal = () => dispatch(hideModal());

  useEffect(() => {
    if (typeof document !== "undefined" && modalType) {
      document.addEventListener(
        "click",
        (e) => {
          if (e.target.classList.contains("js__modal-overlay")) {
            onHideModal();
          }
        },
        { passive: true }
      );

      document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          onHideModal();
        }
      });
    }
  }, [modalType]);

  return (
    <div className={classnames(styles.overlay, "js__modal-overlay")}>
      {modalType === 'MODAL_TECHNOLOGIES' ?
        <div className={styles.modalTech}>
          {children}
          <button type="button" className={styles.closeBtn} onClick={onHideModal}>
            <IconClose />
          </button>
        </div>
        :
        <div className={styles.modal}>
          {children}
          <button type="button" className={styles.closeBtn} onClick={onHideModal}>
            <IconClose />
          </button>
        </div>
      }

    </div>
  );
}

const IconClose = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    opacity="0.4"
    fill="#1E2532"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.3313 0.413324L7 4.74467L2.66865 0.413324C2.19047 -0.0648581 1.4143 -0.0648581 0.936114 0.413324L0.358637 0.990802C-0.119546 1.46898 -0.119546 2.24516 0.358637 2.72334L4.68998 7.05469L0.358637 11.386C-0.119546 11.8642 -0.119546 12.6404 0.358637 13.1186L0.936114 13.6961C1.4143 14.1742 2.19047 14.1742 2.66865 13.6961L7 9.3647L11.3313 13.6961C11.8095 14.1742 12.5857 14.1742 13.0639 13.6961L13.6414 13.1186C14.1195 12.6404 14.1195 11.8642 13.6414 11.386L9.31002 7.05469L13.6414 2.72334C14.1195 2.24516 14.1195 1.46898 13.6414 0.990802L13.0639 0.413324C12.5857 -0.0648581 11.8095 -0.0648581 11.3313 0.413324Z" />
  </svg>
);

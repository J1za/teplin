import Link from "next/link";
import classnames from "classnames";
import { useSelector } from "react-redux";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Logo from "../Logo";
import Button from "components/common/Button";
import FooterSocials from "./FooterSocials";
import IconChat from "components/icons/IconChat";
import { MobileDown, MobileUp } from "components/media";
import Modal from "components/modals/Modal";
import ModalContacts from "components/modals/ModalContacts";
import ModalChat from "components/modals/ModalChat";
import ModalQuote from "components/modals/ModalQuote";
import ModalService from "components/modals/ModalService";
import ModalTechnologies from "../../modals/ModalTechnologies";

import {
  MODAL_CONTACTS_US,
  MODAL_LETS_CHAT,
  MODAL_REQUEST_QUOTE,
  MODAL_SERVICE,
  MODAL_TECHNOLOGIES,
} from "logic/constants";

import styles from "./style.module.scss";
import { useEffect } from "react";
import { useState } from "react";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Footer() {
  const visibleModal = useSelector((state) => state.ModalReducer);
  const MODALS_LIST = {
    [MODAL_CONTACTS_US]: ModalContacts,
    [MODAL_LETS_CHAT]: ModalChat,
    [MODAL_REQUEST_QUOTE]: ModalQuote,
    [MODAL_SERVICE]: ModalService,
    [MODAL_TECHNOLOGIES]: ModalTechnologies,
  };
  const RootModal = MODALS_LIST[visibleModal.modalType];
  const [date, setDate] = useState(new Date());

  const getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][dayOfWeek];
  };

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 10000);
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className={classnames(styles.wrap, "wrap")}>
          <div className={styles.leftColumn}>
            <Logo />
          <Tippy
            className="custom-tippy"
            content="This section is under development"
            placement="bottom"
          >
            <ul className={styles.checkOur}>
              <li>
                <Button size="small" secondary className={styles.btn}>
                  <IconBlankPage />
                  <MobileUp>Check our Presentation</MobileUp>
                  <MobileDown>Our Presentation</MobileDown>
                </Button>
              </li>
            </ul>
          </Tippy>


            <MobileUp>
              <div className={classnames(styles.note, styles.secondNote)}>
                <div className={styles.noteLocation}>
                  <span>We are based in</span>
                  <span className={styles.location}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="17"
                      viewBox="0 0 13 17"
                      fill="none"
                    >
                      <path
                        d="M6.44191 0.220703C3.28207 0.220703 0.730469 2.7723 0.730469 5.93215C0.730469 7.03389 1.08241 8.0859 1.57207 8.95042L5.29427 15.3925C5.52762 15.8133 5.99816 16.0237 6.44191 16.0237C6.88571 16.0237 7.33325 15.8133 7.58956 15.3925L11.3118 8.95424C11.8052 8.08964 12.1534 7.05676 12.1534 5.9359C12.1534 2.77613 9.60176 0.220703 6.44191 0.220703ZM6.44191 7.61919C5.29427 7.61919 4.35703 6.68194 4.35703 5.5343C4.35703 4.38665 5.29427 3.44941 6.44191 3.44941C7.58956 3.44941 8.5268 4.38665 8.5268 5.5343C8.5268 6.68577 7.58956 7.61919 6.44191 7.61919Z"
                        fill="#8F81FC"
                      />
                    </svg>
                    Kyiv, Ukraine
                  </span>
                </div>
                <div className={styles.noteText}>
                  <span className={styles.localTime}>
                    {date.toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </span>
                  <span className={styles.date}>
                    {`${getDayOfWeek(date)}, ${
                      monthNames[date.getMonth()]
                    } ${date.getDate()}`}
                  </span>
                </div>
              </div>
            </MobileUp>
          </div>
          <div className={styles.middleColumn}>
            <nav className={styles.menu}>
              <h4 className={styles.menuTitle}>Menu</h4>
              <ul>
                <Tippy
                  className="custom-tippy"
                  content="This section is under development"
                  placement="bottom"
                >
                <li className={styles.tippyLink}>
                  <Link href="/">
                    <a>Case Studies</a>
                  </Link>
                </li>
                </Tippy>
                <li className={styles.tippyLink}>
                  <Tippy
                    className="custom-tippy"
                    content="This section is under development"
                    placement="bottom"
                  >
                    <div className="custom-tippy-wrapper">
                      <Link href="/">
                        <a>Blog</a>
                      </Link>
                      </div>
                  </Tippy>
                </li>
                <Tippy
                  className="custom-tippy"
                  content="This section is under development"
                  placement="bottom"
                >
                <li className={styles.tippyLink}>
                  <Link href="/">
                    <a>About Us</a>
                  </Link>
                </li>
                </Tippy>
                <li>
                  <Tippy
                    className="custom-tippy"
                    content="This section is under development"
                    placement="bottom"
                  >
                    <div className={styles.tippyLink}>
                      <Link href="/">
                        <a>Careers</a>
                      </Link>
                    </div>
                  </Tippy>
                </li>
                <li className={styles.tippyLink}>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/">
                    <a>FAQ</a>
                  </Link>
                </li> */}
              </ul>
            </nav>
            <nav className={styles.menu}>
              <h4 className={styles.menuTitle}>Services</h4>
              <ul>
                <li>
                  <Tippy
                    className="custom-tippy"
                    content="This section is under development"
                    placement="bottom"
                  >
                    <div className="custom-tippy-wrapper">
                      <Link href="/">
                        <a>Web Development</a>
                      </Link>
                    </div>
                  </Tippy>
                </li>
                <li>
                  <Tippy
                    className="custom-tippy"
                    content="This section is under development"
                    placement="bottom"
                  >
                    <div className="custom-tippy-wrapper">
                      <Link href="/">
                        <a>Mobile Development</a>
                      </Link>
                    </div>
                  </Tippy>
                </li>
                <li>
                  <Tippy
                    className="custom-tippy"
                    content="This section is under development"
                    placement="bottom"
                  >
                    <div className="custom-tippy-wrapper">
                      <Link href="/">
                        <a>UI/UX Design & Branding</a>
                      </Link>
                    </div>
                  </Tippy>
                </li>
                <li>
                  <Tippy
                    className="custom-tippy"
                    content="This section is under development"
                    placement="bottom"
                  >
                    <div className="custom-tippy-wrapper">
                      <Link href="/">
                        <a>Online Marketing</a>
                      </Link>
                    </div>
                  </Tippy>
                </li>
                <li>
                  <Tippy
                    className="custom-tippy"
                    content="This section is under development"
                    placement="bottom"
                  >
                    <div className="custom-tippy-wrapper">
                      <Link href="/">
                        <a>Support and Maintenance</a>
                      </Link>
                    </div>
                  </Tippy>
                </li>
                <li>
                  <Tippy
                    className="custom-tippy"
                    content="This section is under development"
                    placement="bottom"
                  >
                    <div className="custom-tippy-wrapper">
                      <Link href="/">
                        <a>Rescue Service</a>
                      </Link>
                    </div>
                  </Tippy>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.rightColumn}>
            <MobileDown>
            <div className={classnames(styles.note, styles.secondNote)}>
                <div className={styles.noteLocation}>
                  <span>We are based in</span>
                  <span className={styles.location}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="17"
                      viewBox="0 0 13 17"
                      fill="none"
                    >
                      <path
                        d="M6.44191 0.220703C3.28207 0.220703 0.730469 2.7723 0.730469 5.93215C0.730469 7.03389 1.08241 8.0859 1.57207 8.95042L5.29427 15.3925C5.52762 15.8133 5.99816 16.0237 6.44191 16.0237C6.88571 16.0237 7.33325 15.8133 7.58956 15.3925L11.3118 8.95424C11.8052 8.08964 12.1534 7.05676 12.1534 5.9359C12.1534 2.77613 9.60176 0.220703 6.44191 0.220703ZM6.44191 7.61919C5.29427 7.61919 4.35703 6.68194 4.35703 5.5343C4.35703 4.38665 5.29427 3.44941 6.44191 3.44941C7.58956 3.44941 8.5268 4.38665 8.5268 5.5343C8.5268 6.68577 7.58956 7.61919 6.44191 7.61919Z"
                        fill="#8F81FC"
                      />
                    </svg>
                    Kyiv, Ukraine
                  </span>
                </div>
                <div className={styles.noteText}>
                  <span className={styles.localTime}>
                    {date.toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </span>
                  <span className={styles.date}>
                    {`${getDayOfWeek(date)}, ${
                      monthNames[date.getMonth()]
                    } ${date.getDate()}`}
                  </span>
                </div>
              </div>
            </MobileDown>

            <div className={styles.note}>
              <div className={styles.noteIcon}>
                <IconChat width={42} height={42} />
              </div>
              <div className={styles.noteText}>
                <span>
                  Feel free to drop us a note: <br />
                  <a href="mailto:contact@agency.com">contact@agency.com</a>
                </span>
              </div>
            </div>
            <FooterSocials />
          </div>
        </div>
        <div className="wrap">
          <div className={styles.bottom}>
            <small className={styles.copyright}>
              2015-2022 © Copyright agency. All Rights Reserved
            </small>
            <nav className={styles.secondaryMenu}>
              <ul>
                <li>
                  <Link href="/policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use">
                    <a>Terms of Use</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
      {visibleModal.modalType && (
        <Modal>
          <RootModal />
        </Modal>
      )}
    </>
  );
}

const IconBlankPage = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.80713 0.775391L13.8464 5.81463H10.5302C9.57983 5.81463 8.80713 5.04175 8.80713 4.09151V0.775391Z" />
    <path d="M12.6456 16.2539H4.27639C3.32633 16.2539 2.55273 15.4808 2.55273 14.5311V1.97739C2.55273 1.02697 3.32633 0.253906 4.27639 0.253906H8.06913V4.09172C8.06913 5.44901 9.17338 6.55296 10.5304 6.55296H14.3684V14.5311C14.3684 15.4808 13.5957 16.2539 12.6456 16.2539Z" />
  </svg>
);

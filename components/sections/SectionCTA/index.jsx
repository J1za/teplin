import classnames from "classnames";

import SectionTitle from "components/common/SectionTitle";
import ArrowLink from "components/common/ArrowLink";
import IconChat from "components/icons/IconChat";
import IconEmail from "components/icons/IconEmail";
import IconMessage from "components/icons/IconMessage";
import { MobileDown, MobileUp } from "components/media";

import styles from "./style.module.scss";
import { showModal } from "store/actions/modals";
import { MODAL_REQUEST_QUOTE } from "logic/constants";
import { useDispatch } from "react-redux";

export default function SectionCTA({ pageTop }) {
  const Socials = () => (
    <ul className={styles.socials}>
      <li>
        <a href="#" target="_blank" rel="noreferrer">
          <IconTelegram />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noreferrer">
          <IconWhatsapp />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noreferrer">
          <IconSkype />
        </a>
      </li>
    </ul>
  );

  const dispatch = useDispatch()

  return (
    <section className={classnames(styles.section, {
      [styles.mt150]: pageTop
    })} id="contacts">
      <div className={classnames(styles.wrap, "wrap")}>
        <div id="talk-about-block">
          <SectionTitle>Let{"'"}s talk about your project</SectionTitle>
          <div className={styles.description}>
            <p>
              Buckle up, we’re ready to go. Let’s discover, and build together
              something amazing that will take your businesss to a whole new
              level! We can’t wait to get started.
            </p>
          </div>
          <MobileUp>
            <div className={styles.grid}>
              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <div className={styles.blockTitle}>Set up a call</div>
                  <div className={styles.blockCaption}>
                    G Meet, Zoom, Skype, etc
                  </div>
                  <div className={styles.blockIcon}>
                    <IconMessage />
                  </div>
                </div>
                <ArrowLink url="#">Schedule a call</ArrowLink>
              </div>
              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <div className={styles.blockTitle}>Email us</div>
                  <div className={styles.blockCaption}>
                    Response time is 30 mins
                  </div>
                  <div className={styles.blockIcon}>
                    <IconEmail />
                  </div>
                </div>
                <ArrowLink
                  onClick={() => dispatch(showModal(MODAL_REQUEST_QUOTE))}
                >Request a quote</ArrowLink>
              </div>
            </div>
            <div className={classnames(styles.block, styles.isWide)}>
              <div className={styles.blockHead}>
                <div className={styles.blockIcon}>
                  <IconChat />
                </div>
                <div className={styles.blockTitle}>Let’s chat</div>
                <div className={styles.blockCaption}>We’re online!</div>
                <Socials />
              </div>
            </div>
          </MobileUp>
          <MobileDown>
            <div className={styles.grid}>
              <div className={styles.mBlock}>
                <IconMessage />
                <div>
                  <div className={styles.blockTitle}>Schedule a Call</div>
                  <div className={styles.blockCaption}>
                    G Meet, Zoom, Skype, etc
                  </div>
                </div>
                <a target="_blank" rel="noreferrer" href="#" className={styles.mBlockLink}>
                  <IconAngle />
                </a>
              </div>
              <div className={styles.mBlock}>
                <IconEmail />
                <div>
                  <div className={styles.blockTitle}>Email us</div>
                  <div className={styles.blockCaption}>
                    Response time is 30 mins
                  </div>
                </div>
                <div onClick={() => dispatch(showModal(MODAL_REQUEST_QUOTE))} className={styles.mBlockLink}>
                  <IconAngle />
                </div>
              </div>
              <div className={styles.mBlock}>
                <IconChat />
                <div>
                  <div className={styles.blockTitle}>Let’s chat</div>
                  <div className={styles.blockCaption}>We’re online!</div>
                </div>
                <Socials />
              </div>
            </div>
          </MobileDown>
        </div>
        <div className={styles.photo}>
          <img
            src="/img/del/section-cta.png"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

const IconSkype = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 21 21"
    fill="#9EA2AA"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.143 11.8299C19.137 11.8629 19.1267 11.8002 19.143 11.8299C19.2397 11.303 19.2905 10.7639 19.2905 10.2249C19.2905 9.02966 19.0566 7.87026 18.5943 6.77861C18.1482 5.72426 17.5101 4.77737 16.6965 3.96438C15.8842 3.15128 14.9366 2.51327 13.8827 2.06729C12.7915 1.60552 11.632 1.37149 10.4369 1.37149C9.87364 1.37149 9.30945 1.42436 8.76036 1.52988C8.75922 1.53011 8.75624 1.53045 8.75624 1.53045C8.00287 1.12991 7.15578 0.916016 6.29816 0.916016C4.89809 0.916016 3.58178 1.46121 2.59187 2.45147C1.60207 3.44139 1.05664 4.7578 1.05664 6.15776C1.05664 7.04892 1.28598 7.92496 1.71605 8.69893C1.62885 9.20052 1.58273 9.71311 1.58273 10.2249C1.58273 11.4203 1.81676 12.5796 2.2791 13.6714C2.72451 14.7262 3.36286 15.6724 4.17573 16.4855C4.9893 17.2985 5.9355 17.9375 6.99053 18.3824C8.08184 18.8451 9.2417 19.0792 10.4368 19.0792C10.9571 19.0792 11.4785 19.0317 11.9875 18.9414C12.7716 19.3851 13.6595 19.6208 14.5661 19.6208C15.9658 19.6208 17.2815 19.0767 18.2716 18.086C19.2617 17.0966 19.8067 15.78 19.8067 14.38C19.8067 13.4859 19.5762 12.607 19.143 11.8299ZM10.4722 15.6472C7.32676 15.6472 5.91947 14.1009 5.91947 12.9418C5.91947 12.3475 6.35836 11.9307 6.96318 11.9307C8.30935 11.9307 7.96076 13.8635 10.4722 13.8635C11.7579 13.8635 12.4678 13.1655 12.4678 12.4511C12.4678 12.0214 12.2558 11.5451 11.4092 11.3365L8.61159 10.638C6.35836 10.073 5.94957 8.85491 5.94957 7.70993C5.94957 5.33264 8.18793 4.44012 10.2899 4.44012C12.2262 4.44012 14.5087 5.51025 14.5087 6.93642C14.5087 7.54754 13.9796 7.90288 13.375 7.90288C12.2262 7.90288 12.4375 6.31283 10.1235 6.31283C8.97528 6.31283 8.33922 6.83285 8.33922 7.57683C8.33922 8.31956 9.24616 8.55679 10.0335 8.73612L12.1043 9.19583C14.3727 9.7012 14.9477 11.0255 14.9477 12.2729C14.948 14.2047 13.465 15.6472 10.4722 15.6472Z" />
  </svg>
);

const IconTelegram = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 21 21"
    fill="#9EA2AA"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.28905 12.9044L7.95822 17.5578C8.43156 17.5578 8.63655 17.3544 8.88239 17.1103L11.1016 14.9894L15.6999 18.3569C16.5432 18.8269 17.1374 18.5794 17.3649 17.5811L20.3832 3.43776L20.3841 3.43693C20.6516 2.19026 19.9332 1.70276 19.1116 2.00859L1.36989 8.80109C0.159054 9.27109 0.177388 9.94609 1.16405 10.2519L5.69989 11.6628L16.2357 5.07026C16.7316 4.74193 17.1824 4.92359 16.8116 5.25193L8.28905 12.9044Z" />
  </svg>
);

const IconWhatsapp = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 21 21"
    fill="#9EA2AA"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.4439 0.253906H10.4389C4.92516 0.253906 0.441406 4.73891 0.441406 10.2539C0.441406 12.4414 1.14641 14.4689 2.34516 16.1152L1.09891 19.8302L4.94266 18.6014C6.52391 19.6489 8.41016 20.2539 10.4439 20.2539C15.9577 20.2539 20.4414 15.7677 20.4414 10.2539C20.4414 4.74016 15.9577 0.253906 10.4439 0.253906ZM16.2627 14.3752C16.0214 15.0564 15.0639 15.6214 14.3002 15.7864C13.7777 15.8977 13.0952 15.9864 10.7977 15.0339C7.85891 13.8164 5.96641 10.8302 5.81891 10.6364C5.67766 10.4427 4.63141 9.05516 4.63141 7.62016C4.63141 6.18516 5.36016 5.48641 5.65391 5.18641C5.89516 4.94016 6.29391 4.82766 6.67641 4.82766C6.80016 4.82766 6.91141 4.83391 7.01141 4.83891C7.30516 4.85141 7.45266 4.86891 7.64641 5.33266C7.88766 5.91391 8.47516 7.34891 8.54516 7.49641C8.61641 7.64391 8.68766 7.84391 8.58766 8.03766C8.49391 8.23766 8.41141 8.32641 8.26391 8.49641C8.11641 8.66641 7.97641 8.79641 7.82891 8.97891C7.69391 9.13766 7.54141 9.30766 7.71141 9.60141C7.88141 9.88891 8.46891 10.8477 9.33391 11.6177C10.4502 12.6114 11.3552 12.9289 11.6789 13.0639C11.9202 13.1639 12.2077 13.1402 12.3839 12.9527C12.6077 12.7114 12.8839 12.3114 13.1652 11.9177C13.3652 11.6352 13.6177 11.6002 13.8827 11.7002C14.1527 11.7939 15.5814 12.5002 15.8752 12.6464C16.1689 12.7939 16.3627 12.8639 16.4339 12.9877C16.5039 13.1114 16.5039 13.6927 16.2627 14.3752Z" />
  </svg>
);

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

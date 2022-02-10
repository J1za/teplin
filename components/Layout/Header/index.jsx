import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import classnames from "classnames";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Logo from "../Logo";
import Button from "components/common/Button";
import IconWebDev from "components/icons/IconWebDev";
import IconDesignBranding from "components/icons/IconDesignBranding";
import IconMobileDev from "components/icons/IconMobileDev";
import IconSupport from "components/icons/IconSupport";
import IconHelp from "components/icons/IconHelp";

import { showModal } from "store/actions/modals";
import { MODAL_CONTACTS_US } from "logic/constants";

import styles from "./style.module.scss";
import Router from "next/router";

export default function Header({ grey }) {
  const dispatch = useDispatch();
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const goToExplore = (e) => {
    let exploreBlock = document.getElementById('explore-our-services')
    console.log(exploreBlock)
    e.preventDefault()
    exploreBlock.scrollIntoView({ behavior: 'smooth' })
  }

  const onToggleMobileMenu = () => {
    setMobileMenuOpened(!mobileMenuOpened);
  };

  return (
    <header className={classnames(styles.header, {
      [styles.header_grey]: grey
    })}>
      <div className={classnames(styles.wrap, "wrap")}>
        {/* <Logo className={styles.logo} /> */}
        <nav className={styles.menu}>
          <ul>
            <li style={{ display: 'none' }}>
              <div className={styles.dropdown}>
                <div>
                  <div className={styles.dropdownTitle}>Main service</div>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>
                          <IconWebDev />
                          Web Developement{" "}
                          <span>Get a user-friendly and bug-free website</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <IconDesignBranding />
                          Design & Branding{" "}
                          <span>Create a fresh and unique impression</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <IconMobileDev />
                          Mobile Developement <span>Fully-functional apps</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className={styles.dropdownTitle}>Other service</div>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>
                          <IconSupport />
                          Technical Support{" "}
                          <span>Done Right. Done Fast. Done on Time</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <IconHelp />
                          Get quick help when you need it{" "}
                          <span>
                            Urgently, quickly, without unnecessary action
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link href="/" scroll={false}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <a style={{ cursor: "pointer" }} onClick={(e) => goToExplore(e)}>
                Services
                {/*<IconCarret />*/}
              </a>
            </li>
            <li>
              <Link href="/portfolio" scroll={false}>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/career" scroll={false}>
                <a>Career</a>
              </Link>
            </li>
            <li>
              <Link href="/blog" scroll={false}>
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/#about" scroll={false}>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          size="small"
          secondary
          className={styles.btn}
          onClick={() => Router.push('/contact')}
        >
          Contact Us
        </Button>
        <span className={styles.separator} />
        <button
          className={classnames(styles.toggle, {
            [styles.isPressed]: mobileMenuOpened,
          })}
          onClick={onToggleMobileMenu}
        >
          <span />
        </button>
      </div>
      <div
        className={classnames(styles.mobileDropdown, {
          [styles.isOpened]: mobileMenuOpened,
        })}
      >
        <nav className={styles.mobileGrid}>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <span className={styles.mobileGridIcon}>
                    <img
                      src="/img/icons/menu-portfolio.svg"
                      alt=""
                      width={15}
                      height={14}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  Portfolio
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <span className={styles.mobileGridIcon}>
                    <img
                      src="/img/icons/menu-career.svg"
                      alt=""
                      width={15}
                      height={14}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  Career
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <span className={styles.mobileGridIcon}>
                    <img
                      src="/img/icons/menu-about.svg"
                      alt=""
                      width={15}
                      height={14}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <span className={styles.mobileGridIcon}>
                    <img
                      src="/img/icons/menu-contacts.svg"
                      alt=""
                      width={15}
                      height={14}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  Contacts
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.mobileList}>
          <div className={styles.mobileListCaption}>Our service</div>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <span className={styles.mobileListIcon}>
                    <IconWebDev />
                  </span>
                  Web Developement
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <span className={styles.mobileListIcon}>
                    <IconDesignBranding />
                  </span>
                  Design & Branding
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <span className={styles.mobileListIcon}>
                    <IconMobileDev />
                  </span>
                  Mobile Development
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <span className={styles.mobileListIcon}>
                    <IconSupport />
                  </span>
                  Technical Support
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <span className={styles.mobileListIcon}>
                    <IconHelp />
                  </span>
                  Get quick help when you need it
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <ul className={styles.mobileSocials}>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/img/icons/socials-github.svg"
                alt=""
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/img/icons/socials-linkedin.svg"
                alt=""
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/img/icons/socials-dribbble.svg"
                alt=""
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/img/icons/socials-behance.svg"
                alt=""
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/img/icons/socials-clutch.svg"
                alt=""
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/img/icons/socials-upwork.svg"
                alt=""
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

const IconCarret = () => (
  <svg
    width="11"
    height="6"
    viewBox="0 0 11 6"
    fill="#1E2532"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.46091 5.74374C5.28169 5.74374 5.10249 5.67531 4.96585 5.53874L0.666079 1.23892C0.392557 0.965395 0.392557 0.521927 0.666079 0.248515C0.93949 -0.0248958 1.38287 -0.0248958 1.65641 0.248515L5.46091 4.05323L9.26543 0.248648C9.53895 -0.0247629 9.98229 -0.0247629 10.2557 0.248648C10.5293 0.522059 10.5293 0.965528 10.2557 1.23905L5.95597 5.53887C5.81926 5.67546 5.64006 5.74374 5.46091 5.74374Z" />
  </svg>
);

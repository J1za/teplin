import styles from "./style.module.scss";
import { useState } from 'react';
import classnames from "classnames";
import Button from "components/common/Button";

export default function CareerAccordionItem({ list }) {

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      {
        list.map((elem, index) => {
          const isActive = index === activeIndex
          return (
            <div key={index} className={classnames(styles.item, { [styles.item_show]: isActive })}>
              <div className={styles.item__heading} onClick={() =>
                isActive ? setActiveIndex(null) : setActiveIndex(index)
              }>
                <h2>Front-end developer</h2>
                <div className={styles.item__heading_positions}>
                  <span>Part-time</span>
                  <span>Remote</span>
                </div>
                <div className={styles.item__heading_arrow}>
                  <Arrow />
                </div>
              </div>
              <div className={styles.item__content}>
                <ul className={styles.item__content_info}>
                  <li>
                    <span>Location</span>
                    <p>Remote</p>
                  </li>
                  <li>
                    <span>Expetience</span>
                    <p>3+ years</p>
                  </li>
                  <li>
                    <span>Required skills</span>
                    <p>JavaScript, ES6</p>
                    <p>HTML</p>
                    <p>SASS/SCSS</p>
                    <p>jQuery</p>
                    <p>GIT</p>
                  </li>
                </ul>
                <div className={styles.item__content_text}>
                  <div className={styles.item__content_block}>
                    <p>We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. We have interesting tasks for various skill levels and will support your growth and development in a friendly and result-oriented environment.</p>
                  </div>
                  <div className={styles.item__content_block}>
                    <h3>Skill requirements</h3>
                    <ul>
                      <li>good knowledge of JavaScript (ES6), CSS, and HTML</li>
                      <li>previous experience with jQuery library. Bonus: jQuery plugin development experience</li>
                      <li>experience in development of CSS-based animations</li>
                      <li>proper use of SCSS variables, imports and exports, and mixins</li>
                      <li>understanding of project bundling with Gulp</li>
                      <li>knowledge of Git development workflow</li>
                      <li>ability to install local web server powered by nginx/Apache, PHP, and MySql</li>
                    </ul>
                    <p>We will gladly help to progress to a junior developer and will be happy to work with a middle-level developer. The key requirement is that you share a passion for creative front-end and want to develop similar websites to those we do. We develop web and mobile apps using SPSa framework as Vue and React but their number is significantly lower comparing to the promo web, so it’s important you want to do the creative front.</p>
                  </div>
                  <div className={styles.item__content_block}>
                    <h3>Work conditions</h3>
                    <ul>
                      <li>remote work</li>
                      <li>full time, full involvement, 8-hour work day</li>
                      <li>compensation according to your skill level</li>
                      <li>a great team</li>
                      <li>highly rewarding projects and clients</li>
                    </ul>
                    <Button style={{borderRadius: '14px'}}>Apply</Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  );
}

const Arrow = () => (
  <svg viewBox="0 0 14 14">
    <path d="M6.01669 0.841486C6.00739 0.898769 6.0031 0.956743 6.00385 1.01475L6.00385 10.8915L5.90368 10.6761C5.80405 10.4656 5.66844 10.2741 5.503 10.1101L2.73332 7.34046C2.38511 6.97569 1.82494 6.9144 1.40608 7.19522C0.959731 7.52205 0.862818 8.14883 1.18965 8.59521C1.21607 8.63127 1.24487 8.66554 1.27586 8.69775L6.28433 13.7062C6.6753 14.0976 7.30953 14.098 7.70094 13.707C7.70119 13.7067 7.70147 13.7065 7.70172 13.7062L12.7102 8.69775C13.1008 8.30603 13.0999 7.6718 12.7082 7.28114C12.6774 7.2504 12.6446 7.2217 12.61 7.19522C12.1912 6.9144 11.631 6.97569 11.2828 7.34046L8.50808 10.1051C8.36096 10.2521 8.2376 10.4211 8.14247 10.606L8.00724 10.9065L8.00724 1.06987C8.02624 0.558162 7.66879 0.109216 7.16581 0.0130851C6.61974 -0.0754702 6.10527 0.295407 6.01669 0.841486Z" />
  </svg>
)
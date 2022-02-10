import styles from "./style.module.scss";
import classnames from "classnames";
import { useState } from 'react';

import { MobileDown, MobileUp } from "components/media";

export default function FilterCategories({ list }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSelect, setActiveSelect] = useState(false);
  return (
    <div className={styles.filter}>
      <MobileDown>
        <div onClick={() => setActiveSelect(!activeSelect)} className={classnames(styles.select, {
          [styles.select_open]: activeSelect
        })}>
          All Categories
          <Arrow />
        </div>
      </MobileDown>
      <ul className={classnames(styles.filterby, {
        [styles.filterby_show]: activeSelect
      })}>
        {
          list.map((elem, index) => {
            const isActive = index === activeIndex
            return (
              <li key={index} className={classnames(styles.item, { [styles.item_show]: isActive })}
                onClick={() => (setActiveIndex(index), setActiveSelect(false))}>
                <span className={styles.item__name}>{elem.name}</span>
                <MobileUp>
                  {isActive && <span className={classnames(styles.item__number)}>{elem?.number}</span>}
                </MobileUp>
              </li>
            )
          })
        }
      </ul>
    </div >
  );
}


const Arrow = () => (
  <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
    <path d="M9.76136 1.81381L4.99976 6.57477L0.238471 1.81414C-0.0794903 1.49585 -0.0794903 0.980668 0.238471 0.663357C0.556432 0.345396 1.07129 0.345721 1.38925 0.663357L5.00008 4.27354L8.61156 0.663032C8.92952 0.345396 9.44438 0.345396 9.76202 0.663032C10.0793 0.980993 10.0793 1.49585 9.76136 1.81381Z" fill="#1E2532" />
  </svg>
)
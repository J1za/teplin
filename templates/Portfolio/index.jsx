import React from "react";

import styles from "./style.module.scss";

import PortfolioTemplateItem from "./Item";

import { itemMock } from "templates/Portfolio/mockData";

export default function PortfolioTemplate() {
  return (
    <section className={styles.poTemplate}>
      <div className="wrap">
        <div className={styles.uptitle}>Filter by</div>
        <h1 className="title">All Project</h1>
        <div className={styles.poTemplate__inner}>
          {itemMock.map((elem, idx) => (
            <React.Fragment key={idx}>
              <PortfolioTemplateItem
                src={elem.imgSrc}
                title={elem.title}
                tags={elem.tags}
              />
            </React.Fragment>
          ))}

        </div>
      </div>
    </section >
  )
}
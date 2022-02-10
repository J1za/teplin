import styles from "./style.module.scss";

import FilterCategories from "components/common/FilterCategories";

import { MobileUp } from "components/media";

export default function CareerFilter() {
  const listData = [
    { name: 'All', number: 45 },
    { name: 'Design', number: 23 },
    { name: 'Development', number: 15 },
    { name: 'Marketing', number: 35 },
    { name: 'Sales', number: 5 },
  ]
  return (
    <section className={styles.filter}>
      <div className="wrap">
        <div className={styles.filter__inner}>
          <MobileUp>
            <span className={styles.filter__by}>Filter by</span>
          </MobileUp>
          <FilterCategories list={listData} />
        </div>
      </div>
    </section >
  )
}
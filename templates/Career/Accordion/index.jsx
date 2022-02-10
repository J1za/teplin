import styles from "./style.module.scss";
import CareerAccordionItem from "./Item";
export default function CareerAccordion() {

  const listData = [
    {},
    {},
    {}
  ]

  return (
    <section className={styles.accordion}>
      <div className="wrap">
        <div className={styles.accordion__inner}>
          <CareerAccordionItem list={listData} />
        </div>
      </div>
    </section>
  )
}
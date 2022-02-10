import React from "react";
import styles from "./style.module.scss";

import BlogItem from "../Item";
import Seacrh from "components/common/Search";
import Pagination from "components/common/Pagination";
import FilterCategories from "components/common/FilterCategories";

import { MobileUp, MobileDown } from "components/media";

export default function BlogPosts() {
  const mockPosts = [
    {
      title: "Ideal Approach to Design Successful UX & UI",
      src: "/img/blog/item2.png"
    },
    {
      title: "Top 5 of the Best Ecommerce Marketplace Applications",
      src: "/img/blog/item3.png"
    },
    {
      title: "IndiaNIC Presents a Rewarding Referral Policy",
      src: "/img/blog/item4.png"
    },
    {
      title: "Emails vs Push Notifications: What to Choose When?",
      src: "/img/blog/item5.png"
    },
    {
      title: "2022 Could be the Year of Electric Scooter Ride Sharing",
      src: "/img/blog/item6.png"
    },
    {
      title: "How to Create a Dating App: Tips, Features, Process, and Cost",
      src: "/img/blog/item7.png"
    },
  ]
  const listData = [
    { name: 'All' },
    { name: 'Design' },
    { name: 'Development' },
    { name: 'Marketing' },
    { name: 'Sales' },
  ]
  return (
    <section className={styles.blog}>
      <div className="wrap">
        <div className={styles.blog__firstPost}>
          <BlogItem
            title="Ukraine IT Outsourcing: Market Insights & How to Choose the Right Team for You"
            srcImg="/img/blog/item1.png"
          />
        </div>
        <div className={styles.blog__inner}>
          <div className={styles.blog__posts}>

            {mockPosts.map((elem, idx) => (
              <React.Fragment key={idx}>
                <MobileUp>
                  <BlogItem
                    small
                    title={elem.title}
                    srcImg={elem.src}
                  />
                </MobileUp>
                <MobileDown>
                  <BlogItem
                    title={elem.title}
                    srcImg={elem.src}
                  />
                </MobileDown>

              </React.Fragment>
            ))}

          </div>
          <div className={styles.blog__info}>
            <div className={styles.blog__search}>
              <Seacrh />
            </div>
            <div className={styles.blog__tags}>
              <MobileUp>
                <h3>Search by tags</h3>
                <div className={styles.blog__tags_inner}>
                  <span>Advice</span>
                  <span>Automation</span>
                  <span>Enterprises</span>
                  <span>Events Updates</span>
                  <span>Marketing</span>
                  <span>Mobile Apps</span>
                  <span>Offshore Development</span>
                  <span>People</span>
                  <span>Software Developers</span>
                  <span>Start ups</span>
                  <span>UI / UX</span>
                  <span>Web Development</span>
                </div>
              </MobileUp>
              <MobileDown>
                <FilterCategories list={listData} />
              </MobileDown>
            </div>
          </div>
        </div>
        <div className={styles.blog__pagination}>
          <Pagination />
        </div>
      </div>
    </section>
  )
}
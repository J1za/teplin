import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import classnames from "classnames";

import SectionTitle from "components/common/SectionTitle";
import CaptionLabel from "components/common/CaptionLabel";
import ReviewCard from "./ReviewCard";

import styles from "./style.module.scss";

const data = [
  {
    avatar: "/img/7.png",
    name: "Brandon Ancier",
    position: "Growth Marketer, Flying Embers",
    location: "California",
    budget: "$50k-100k",
    duration: "Ongoing",
    rating: 5,
    ratingPlatformIcon: "/img/del/review-clutch.svg",
    description: 'I really appreciated that they were patient and thoughtful while we came up to speed.',
    feedback: "Their output has improved our conversion rates. They are responsive, even with their fast turnaround times. So far, I finds no area of improvement for their service.",
    project: "agency has developed an alcohol beverage retailer's website with new pages and modules. We use them for all varietys of website services across our site, and they have been AMAZING, so fast and reliable."
  },
  {
    avatar: "/img/1.png",
    name: "Amrita Kaur",
    position: "Founder of Serpentine",
    location: "Dubai",
    budget: "$20k-50k",
    duration: "Ongoing",
    rating: 5,
    ratingPlatformIcon: "/img/del/review-upwork.svg",
    description: 'The team is always available, and they respond fast.',
    feedback: "agency provided Shopify development services for an online wellness magazine. The team built the site from scratch and customized everything to their client’s needs. The site includes a customer login section.",
    project: "agency’s was well received by internal and external stakeholders. The team is reliable, skilled, and competent. They always make themselves available to their clients at the drop of a hat. agency is a seasoned vendor that brings high coding acumen to every engagement."
    },
  {
    avatar: "/img/2.png",
    name: "Matt Cooper",
    position: "Technology Distributor",
    location: "Florida",
    budget: "$50k-100k",
    duration: "Ongoing",
    rating: 5,
    ratingPlatformIcon: "/img/del/review-clutch.svg",
    description: 'I really appreciated that they were patient and thoughtful while we came up to speed.',
    feedback: "The company is quite happy with working with the agency team. They were most impressed with the team's subject matter expertise and knowledge on UI/UX design which they showcased throughout the duration of the project. The company is happy with the product that they got.",
    project: "A technology distributor needed to improve their website and internal platforms, especially the UI/UX. They partnered with agency to provide the necessary design services."
  },
  {
    avatar: "/img/3.png",
    name: "Uma V",
    position: "Head of Technology of Ride App",
    location: "Canada",
    budget: "$20k-50k",
    duration: "June - Oct. 2020",
    rating: 5,
    ratingPlatformIcon: "/img/del/review-clutch.svg",
    description: 'We were completely blown away by how much we were able to accomplish. It was such a great help for us.',
    feedback: "The team was able to acclimate to a highly structured workflow. This enabled the team to work quickly and have 6 production-ready designs by the end of the engagement. The client commends the quality of their designs and the speed and efficiency with which each was finished.",
    project: "agency was designed the UI/UX of a mobile app for an eco-friendly ridesharing platform. The team consolidated all sub-brands and services into one central app and designed it to capture the company's vision."
  },
  {
    avatar: "/img/4.png",
    name: "Álvaro Go",
    position: "Founder of Goguru Consulting",
    location: "Spain",
    budget: "Up to $10k",
    duration: "Nov. - Dec. 2020",
    rating: 5,
    ratingPlatformIcon: "/img/del/review-upwork.svg",
    description: 'The team is always open to feedback and reviews.',
    feedback: "They produced an excellent quality site. The team was able to stick with the plan and deliver on-time service. They helped in solving technical issues. The communication was through Slack and Milestones.",
    project: "agency partnered with a consulting business to deliver a new website for an electric vehicle company. The goal is to provide the output in a short amount of time."
  },
  {
    avatar: "/img/5.png",
    name: "Vital Raval",
    position: "Product Owner of Retail Company",
    location: "California",
    budget: "$20k-50k",
    duration: "Ongoing",
    rating: 5,
    ratingPlatformIcon: "/img/del/review-upwork.svg",
    description: 'The deep knowledge of Shopify is a definite plus that allows to make changes or add features easily.',
    feedback: "agency has drastically increased the company's load speed, cleaned their coding, and fixed existing bugs. They have an efficiently structured workflow, as well. Deadlines are being met in a timely fashion, even as the vendor remains readily available at any time.",
    project: "agency is continuously adding features to a retail company's web platform, such as multicurrency optionis and search."
  },
  {
    avatar: "/img/6.png",
    name: "Andrew Olshanetskyi",
    position: "Beneficiary of FxAdvice",
    location: "Ukraine",
    budget: "$20k-50k",
    duration: "Sep. - Nov. 2019",
    rating: 5,
    ratingPlatformIcon: "/img/del/review-upwork.svg",
    description: 'We had access to everything.',
    feedback: "They successfully completed the project on time. The communication was fast and they gave full control of the development to the client.",
    project: "agency provided website design and development. They implemented new services and features."
  },
];

export default function SectionReviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderReviewsRef, sliderReviews] = useKeenSlider({
    initial: 0,
    slidesPerView: 1.76,
    spacing: 60,
    loop: true,
    slideChanged(instance) {
      setCurrentSlide(instance.details().relativeSlide);
    },
    breakpoints: {
      "(max-width: 1439px)": {
        slidesPerView: 1.46,
      },
      "(max-width: 1199px)": {
        slidesPerView: 1.16,
      },
      "(max-width: 992px)": {
        slidesPerView: 1,
      },
    },
  });

  return (
    <section className={styles.section}>
      <div className={classnames(styles.wrap, "wrap")}>
        <div className={styles.head}>
          <SectionTitle>Testimonials</SectionTitle>
          <CaptionLabel icon={() => <IconHearts />} className={styles.label}>
            What clients say about us
          </CaptionLabel>
          <ul className={styles.arrows}>
            <li>
              <button type="button" onClick={() => sliderReviews.prev()}>
                <IconLeft />
              </button>
            </li>
            <li>
              <button type="button" onClick={() => sliderReviews.next()}>
                <IconRight />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.slider}>
        <div
          className={classnames(styles.sliderHelper, "keen-slider")}
          ref={sliderReviewsRef}
        >
          {data.map((item, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <ReviewCard key={idx} data={item} />
            </div>
          ))}
        </div>
      </div>
      {sliderReviews && (
        <div className={styles.dots}>
          {[...Array(sliderReviews.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  sliderReviews.moveToSlideRelative(idx);
                }}
                className={classnames(styles.dot, {
                  [styles.isActive]: currentSlide === idx,
                })}
              />
            );
          })}
        </div>
      )}
      <img
        src="/img/svg/bg-reviews.svg"
        alt=""
        loading="lazy"
        decoding="async"
        className={styles.bg}
      />
    </section>
  );
}

const IconHearts = () => (
  <svg
    width="26"
    height="27"
    viewBox="0 0 26 27"
    fill="#1E2532"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7503 15.0445C14.7503 12.8334 12.9579 11.041 10.7468 11.041C9.33182 11.041 8.08829 11.7752 7.37623 12.8833C6.66423 11.7752 5.4207 11.041 4.00563 11.041C1.79456 11.041 0.0021366 12.8334 0.0021366 15.0445C0.0021366 15.0445 -0.332562 19.4164 7.37623 24.4203C15.085 19.4164 14.7503 15.0445 14.7503 15.0445Z"
      fill="#8F81FC"
    />
    <path d="M25.9969 7.20936C25.9969 4.11551 23.4888 1.60742 20.3949 1.60742C18.4149 1.60742 16.6749 2.63468 15.6786 4.18528C14.6824 2.63468 12.9423 1.60742 10.9623 1.60742C7.86848 1.60742 5.36039 4.11551 5.36039 7.20936C5.36039 7.20936 5.28437 8.20477 5.90132 9.85191C6.43152 10.0448 6.92898 10.3171 7.37611 10.6617C8.32739 9.92849 9.50445 9.51802 10.7467 9.51802C12.223 9.51802 13.6109 10.0929 14.6548 11.1368C15.6888 12.1708 16.2627 13.5424 16.2735 15.0031C16.2895 15.3884 16.2581 16.699 15.31 18.5507C15.1215 18.9188 14.9071 19.2866 14.6685 19.653C14.9939 19.8772 15.3303 20.1024 15.6787 20.3285C26.4652 13.3267 25.9969 7.20936 25.9969 7.20936Z" />
  </svg>
);

const IconLeft = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.3724 0.99094L3.85046 10.5142L13.3717 20.0367C14.0083 20.6727 15.0387 20.6727 15.6733 20.0367C16.3092 19.4008 16.3086 18.3711 15.6733 17.7352L8.45293 10.5135L15.6739 3.29055C16.3092 2.65462 16.3092 1.62491 15.6739 0.989637C15.038 0.355017 14.0083 0.355017 13.3724 0.99094Z" />
  </svg>
);

const IconRight = () => (
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

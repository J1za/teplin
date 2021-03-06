import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import classnames from "classnames";

import SectionTitle from "components/common/SectionTitle";
import CaptionLabel from "components/common/CaptionLabel";
import TeamCard from "./TeamCard";
import { DesktopUp } from "components/media";

import IconDeveloping from "components/icons/IconDeveloping";
import IconDesign from "components/icons/IconDesign";
import IconManaging from "components/icons/IconManaging";

import styles from "./style.module.scss";

const data = [
  {
    icon: <IconDeveloping />,
    title: "Development",
    avatar: "/img/del/team-avatar-1.png",
    name: "Mili Jovicic",
    position: "Team Lead",
    instagram: "",
    labels: [
      { num: 8, text: "Backend" },
      { num: 15, text: "Frontend" },
      { num: 4, text: "QA engineer" },
      { num: 2, text: "DevOps" },
      { num: 4, text: "Full-Stack" },
    ],
  },
  {
    icon: <IconDesign />,
    title: "Design",
    avatar: "/img/del/team-avatar-2.png",
    name: "Anna Bunyak",
    position: "Art director",
    instagram: "",
    labels: [
      { num: 2, text: "Graphic" },
      { num: 3, text: "2D / 3D" },
      { num: 6, text: "UX / UI" },
    ],
  },
  {
    icon: <IconManaging />,
    title: "Management",
    avatar: "/img/del/team-avatar-4.png",
    name: "Vlad Levinskiy",
    position: "CEO",
    labels: [
      { num: 3, text: "Business Dev" },
      { num: 4, text: "PM" },
      { num: 2, text: "HR Manager" },
      { num: 1, text: "Product Owner" },
    ],
  },
];

export default function SectionTeam() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderTeamRef, sliderTeam] = useKeenSlider({
    slidesPerView: 1.76,
    spacing: 60,
    loop: true,
    slideChanged(instance) {
      setCurrentSlide(instance.details().relativeSlide);
    },
    breakpoints: {
      "(max-width: 992px)": {
        slidesPerView: 1.46,
        spacing: 30,
      },
      "(max-width: 767px)": {
        slidesPerView: 1.17,
        spacing: 10,
      },
    },
  });
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <SectionTitle>Team agency</SectionTitle>
          <CaptionLabel icon={() => <IconGlobe />} className={styles.label}>
            Diverse team of <span>international</span> pros
          </CaptionLabel>
        </div>
        <DesktopUp>
          <div className={styles.grid}>
            {data.map((item, idx) => (
              <TeamCard key={idx} data={item} />
            ))}
          </div>
        </DesktopUp>
        <div
          className={classnames(styles.slider, "keen-slider")}
          ref={sliderTeamRef}
        >
          {data.map((item, idx) => (
            <div key={idx} className="keen-slider__slide">
              <TeamCard data={item} />
            </div>
          ))}
        </div>
        {sliderTeam && (
          <div className={styles.dots}>
            {[...Array(sliderTeam.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    sliderTeam.moveToSlideRelative(idx);
                  }}
                  className={classnames(styles.dot, {
                    [styles.isActive]: currentSlide === idx,
                  })}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

const IconGlobe = () => (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="#1E2532"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24.6844 7.73242L24.5999 7.7698C22.7052 8.61317 20.7373 9.2258 18.7191 9.6288C19.2894 12.3344 19.2878 15.1294 18.7158 17.8334C20.7341 18.2348 22.7117 18.8425 24.5983 19.6827L24.6812 19.72C25.6091 17.9244 26.1404 15.8899 26.1404 13.727C26.1404 11.5642 25.6091 9.52967 24.6844 7.73242Z" />
    <path d="M9.5918 19.1689C10.31 21.4553 11.4947 23.6214 13.1392 25.5357C14.7837 23.6214 15.9699 21.4553 16.6865 19.1689C14.3319 18.8569 11.9464 18.8586 9.5918 19.1689Z" />
    <path d="M17.1092 9.88086C15.8027 10.0645 14.4832 10.1896 13.1409 10.1896C11.7971 10.1896 10.4776 10.0629 9.17106 9.88086C8.62343 12.4191 8.62343 15.0451 9.1743 17.5834C11.8052 17.2177 14.475 17.2177 17.1059 17.5834C17.6568 15.0451 17.6584 12.4191 17.1092 9.88086Z" />
    <path d="M13.1392 1.91797C11.4947 3.83222 10.31 5.99834 9.5918 8.28634C11.9464 8.59672 14.3335 8.59672 16.6865 8.28634C15.9683 5.99997 14.7837 3.83222 13.1392 1.91797Z" />
    <path d="M14.2607 0.726562C16.1685 2.91056 17.527 5.40169 18.3167 8.03256C20.2115 7.66206 22.0672 7.09819 23.8385 6.31656C21.6935 3.19819 18.2322 1.06781 14.2607 0.726562Z" />
    <path d="M2.44141 6.31656C4.21428 7.09656 6.07003 7.66206 7.96316 8.03256C8.75291 5.40169 10.1114 2.91056 12.0192 0.726562C8.04766 1.06781 4.58803 3.19819 2.44141 6.31656Z" />
    <path d="M7.562 9.63075C5.54375 9.22612 3.5775 8.61512 1.68437 7.77175L1.59987 7.73438C0.672 9.53 0.140625 11.5645 0.140625 13.7274C0.140625 15.8902 0.672 17.9247 1.59987 19.722L1.68437 19.6846C3.56938 18.8429 5.547 18.2351 7.56525 17.8354C6.99162 15.1314 6.99162 12.3364 7.562 9.63075Z" />
    <path d="M7.96316 19.4219C6.06841 19.7908 4.21266 20.3563 2.44141 21.1363C4.58803 24.2546 8.04766 26.385 12.0192 26.7263C10.1114 24.5423 8.75291 22.0511 7.96316 19.4219Z" />
    <path d="M18.3167 19.4199C17.5286 22.0508 16.1685 24.5419 14.2607 26.7259C18.2322 26.3847 21.6935 24.2543 23.8385 21.1359C22.0672 20.3543 20.2115 19.7904 18.3167 19.4199Z" />
  </svg>
);

import { useState } from "react";
import Link from "next/link";
import classnames from "classnames";
import { useKeenSlider } from "keen-slider/react";

import SectionTitle from "components/common/SectionTitle";
import CaptionLabel from "components/common/CaptionLabel";
import CaptionLink from "components/common/CaptionLink";
import IconWebDev from "components/icons/IconWebDev";
import IconDesignBranding from "components/icons/IconDesignBranding";
import IconMobileDev from "components/icons/IconMobileDev";
import ServiceCard from "./ServiceCard";
import { DesktopUp } from "components/media";

import styles from "./style.module.scss";

const data = [
  {
    icon: <IconWebDev />,
    title: "Web Development",
    excerpt:
      "We have a keen eye for the latest web design and technology trends. We code websites that look modern, function properly and are easy to use.",
    label: "Get a user-frendly and bug-free web solution",
    link: "/",
    list: [
      { icon: "/img/icons/techs/shopify.svg", label: "Shopify" },
      { icon: "/img/icons/techs/wordpress.svg", label: "WordPress" },
      { icon: "/img/icons/techs/nodejs.svg", label: "Node.js" },
      { icon: "/img/icons/techs/scss.svg", label: "SCSS" },
      { icon: "/img/icons/techs/html5.svg", label: "HTML5" },
      { icon: "/img/icons/techs/tailwind.svg", label: "TailwindCSS" },
      { icon: "/img/icons/techs/javascript.svg", label: "JavaScript" },
      { icon: "/img/icons/techs/react.svg", label: "React.js" },
      { icon: "/img/icons/techs/vue.svg", label: "Vue.js" },
      { icon: "/img/icons/techs/angular.svg", label: "Angular" },
      { icon: "/img/icons/techs/php.svg", label: "PHP" },
      { icon: "/img/icons/techs/jquery.svg", label: "Jquery"},
      { icon: "/img/icons/techs/css3.svg", label: "CSS" },
      { icon: "/img/icons/techs/express.svg", label: "Express" },
      { icon: "/img/icons/techs/laravel.svg", label: "Laravel" },
      { icon: "/img/icons/techs/yii.svg", label: "Yii2" },
      { icon: "/img/icons/techs/liquid.svg", label: "Liquid" },
      { icon: "/img/icons/techs/modx.svg", label: "MODX" },
      { icon: "/img/icons/techs/bigcommerce.svg", label: "BigCommerce" },
    ],
    isShowDesktop: true,
    isShowMobile: true,
  },
  {
    icon: <IconDesignBranding />,
    title: "Design & Branding",
    excerpt:
      "Our design and brand team produces modern, clean design for your project to help your audiences recognize your brand among thousands of other companies.",
    label: "Create a fresh and unique impression",
    link: "/",
    list: [
      { icon: "/img/icons/techs/figma.svg", label: "Figma" },
      { icon: "/img/icons/techs/sketch.svg", label: "Sketch" },
      { icon: "/img/icons/techs/adobe-xd.svg", label: "Adobe XD" },
      { icon: "/img/icons/techs/3dmax.svg", label: "3D Max" },
      { icon: "/img/icons/techs/corona.svg", label: "Corona Renderer" },
      { icon: "/img/icons/techs/adobe.svg", label: "Adobe Illustrator & Photoshop" },
      { icon: "/img/icons/techs/invision.svg", label: "InvisionApp" },
    ],
    isShowDesktop: false,
    isShowMobile: true,
  },
  {
    icon: <IconMobileDev />,
    title: "Mobile Development",
    excerpt:
      "From original idea to polished product, we create iOS and Android applications that your customers will enjoy. We take care of the whole process, starting from UX / UI design to deployment your app to the AppStore or Google Play.",
    label: "Fully-functional apps",
    link: "/",
    list: [
      { icon: "/img/icons/techs/swift.svg", label: "Swift" },
      { icon: "/img/icons/techs/python.svg", label: "Python" },
      { icon: "/img/icons/techs/reactnative.svg", label: "React Native" },
      { icon: "/img/icons/techs/kotlin.svg", label: "Kotlin" },
      { icon: "/img/icons/techs/java.svg", label: "Java" },
      { icon: "/img/icons/techs/c.svg", label: "С/С++" }
    ],
    isShowDesktop: false,
    isShowMobile: true,
  },
];

export default function SectionServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderServicesRef, sliderServices] = useKeenSlider({
    initial: 0,
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
        <div className={styles.head} id="explore-our-services">
          <SectionTitle>Explore our services</SectionTitle>
          <div className={styles.controls}>
            <CaptionLabel icon={() => <IconNDA />} className={styles.label}>
              BTW, we’re okay about NDA
            </CaptionLabel>
            <CaptionLink caption="look at our">
              <Link href="/#cases" scroll={false}>
                <a className="b">Case Studies</a>
              </Link>
            </CaptionLink>
          </div>
        </div>
        <DesktopUp>
          <div className={styles.grid}>
            {data.map((item, idx) => (
              <ServiceCard key={idx} data={item} />
            ))}
          </div>
        </DesktopUp>
        <div
          className={classnames(styles.slider, "keen-slider")}
          ref={sliderServicesRef}
        >
          {data.map((item, idx) => (
            <div key={idx} className="keen-slider__slide">
              <ServiceCard data={item} />
            </div>
          ))}
        </div>
        {sliderServices && (
          <div className={styles.dots}>
            {[...Array(sliderServices.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    sliderServices.moveToSlideRelative(idx);
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

const IconNDA = () => (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="#1E2532"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.0391 0.65625H3.58073C1.93406 0.65625 0.601562 1.98875 0.601562 3.63542V20.4271C0.601562 22.0738 1.93406 23.4062 3.58073 23.4062H11.5757L11.8141 22.0738C11.9224 21.4671 12.2041 20.9254 12.6374 20.4813L19.0182 14.1113V3.63542C19.0182 1.98875 17.6857 0.65625 16.0391 0.65625V0.65625ZM4.9349 4.98958H9.26823C9.86406 4.98958 10.3516 5.47708 10.3516 6.07292C10.3516 6.66875 9.86406 7.15625 9.26823 7.15625H4.9349C4.33906 7.15625 3.85156 6.66875 3.85156 6.07292C3.85156 5.47708 4.33906 4.98958 4.9349 4.98958ZM10.3516 15.8229H4.9349C4.33906 15.8229 3.85156 15.3354 3.85156 14.7396C3.85156 14.1438 4.33906 13.6562 4.9349 13.6562H10.3516C10.9474 13.6562 11.4349 14.1438 11.4349 14.7396C11.4349 15.3354 10.9474 15.8229 10.3516 15.8229ZM14.6849 11.4896H4.9349C4.33906 11.4896 3.85156 11.0021 3.85156 10.4062C3.85156 9.81042 4.33906 9.32292 4.9349 9.32292H14.6849C15.2807 9.32292 15.7682 9.81042 15.7682 10.4062C15.7682 11.0021 15.2807 11.4896 14.6849 11.4896Z" />
    <path d="M14.1734 26.6561C13.96 26.6561 13.752 26.5716 13.5992 26.4178C13.4118 26.2304 13.3273 25.9639 13.3739 25.7017L13.9481 22.4463C13.9762 22.2827 14.0564 22.131 14.1734 22.013L22.2172 13.9703C23.2052 12.9801 24.1758 13.2477 24.7067 13.7786L26.0468 15.1186C26.7867 15.8575 26.7867 17.06 26.0468 17.7999L18.003 25.8436C17.886 25.9617 17.7343 26.0408 17.5697 26.069L14.3142 26.6431C14.2677 26.6518 14.22 26.6561 14.1734 26.6561ZM17.4288 25.2695H17.4397H17.4288Z" />
  </svg>
);

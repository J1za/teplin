import { useEffect, useContext, useState, useRef } from "react";
import Link from "next/link";
import classnames from "classnames";

import SectionTitle from "components/common/SectionTitle";
import CaptionLink from "components/common/CaptionLink";
import CaseCard from "./CaseCard";
import now from 'performance-now'

import styles from "./style.module.scss";
import { ParallaxContext } from "react-scroll-parallax";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Renderer from "logic/renderer"
import Tippy from "@tippyjs/react";

const data = [
  {
    categories: ["Frontend", "Backend", "QA"],
    title: "Scoobic",
    description:
      "In this project, we had the task of developing a WordPress site for a company producing and selling electric vehicles. We completed the full development cycle from design to testing and launching the project.",
    location: "Spain",
    topic: "Middle Business",
    technologies: [
      { icon: "/img/icons/techs/php.svg", label: "PHP" },
      { icon: "/img/icons/techs/wordpress.svg", label: "Wordpress" },
      { icon: "/img/icons/techs/html5.svg", label: "HTML5" },
      { icon: "/img/icons/techs/scss.svg", label: "SCSS" },
      { icon: "/img/icons/techs/javascript.svg", label: "JavaScript" },

    ],
    budget: "$7k",
    duration: "144",
    link: "https://scoobic.com",
    previewImage: "img/del/case-1.png",
  },
  {
    categories: ["Full-Cycle Development",],
    title: "Boekhouder.nl",
    description:
      "A website that helps people find a accountant in a click. With Boekhouder.nl you will always find the perfect match for your company. Whether you are a freelancer or have one or more BVs, they match you with multiple offices.",
    location: "Netherlands",
    topic: "Small Business",
    technologies: [
      { icon: "/img/icons/techs/php.svg", label: "PHP" },
      { icon: "/img/icons/techs/wordpress.svg", label: "Wordpress" },
      { icon: "/img/icons/techs/html5.svg", label: "HTML5" },
      { icon: "/img/icons/techs/scss.svg", label: "SCSS" },
      { icon: "/img/icons/techs/javascript.svg", label: "JavaScript" },
    ],
    budget: "$11k",
    duration: "225",
    link: "https://www.boekhouder.nl",
    previewImage: "img/del/case-2.png",
  },
  {
    categories: ["Full-Cycle Development"],
    title: "Homeleon",
    description:
      "Shopify Store to sell exclusive sofas. In this project, we did a full development cycle, implemented advanced animations, and developed a caste-based sofa builder on the product page.",
    location: "USA",
    topic: "Small Business",
    technologies: [
      { icon: "/img/icons/techs/shopify.svg", label: "Shopify" },
      { icon: "/img/icons/techs/liquid.svg", label: "Liquid" },
      { icon: "/img/icons/techs/react.svg", label: "React.js" },
      { icon: "/img/icons/techs/figma.svg", label: "Figma" },
    ],
    budget: "$13k",
    duration: "267",
    link: "https://homeleon.com",
    previewImage: "img/del/case-3.png",
  },
  {
    categories: ["Web App", "Full-Cycle Development"],
    title: "Haris",
    description:
      "Web App project, called Haris. It's a Document Management System for the internal needs of a large holding of companies. It includes many different user roles with different permissions, e-signing via Docusign, and many other functions for Doc Management. The Demo version is available below.",
    location: "Dubai",
    topic: "Startup",
    technologies: [
      { icon: "/img/icons/techs/react.svg", label: "React.js" },
      { icon: "/img/icons/techs/nodejs.svg", label: "Node.js" },
      { icon: "/img/icons/techs/mongo.svg", label: "MongoDB" },
      { icon: "/img/icons/techs/express.svg", label: "Express.js" },
    ],
    budget: "$40k",
    duration: "850",
    link: "https://hg-in2.haris.global/",
    previewImage: "img/del/case-4.png",
  },
  {
    categories: ["https://hg-in2.haris.global/"],
    title: "TheForexMagazine",
    description:
      "Our task was to develop a website for the awards magazine for the best forex brokers. In this project, we developed a UI / UX design, a front-end with animation and a back-end on the Yii2 framework with an admin panel for self-management of the website.",
    location: "Europe",
    topic: "Middle Business",
    technologies: [
      { icon: "/img/icons/techs/php.svg", label: "PHP" },
      { icon: "/img/icons/techs/yii.svg", label: "Yii2" },
      { icon: "/img/icons/techs/html5.svg", label: "HTML5" },
      { icon: "/img/icons/techs/scss.svg", label: "SCSS" },
      { icon: "/img/icons/techs/javascript.svg", label: "JavaScript" },
    ],
    budget: "$17k",
    duration: "342",
    link: "https://theforexmagazine.com",
    previewImage: "img/del/case-5.png",
  },
  {
    categories: ["Boocking App", "UX / UI", "Frontend"],
    title: "D.Alexandr",
    description:
      "D. Alexander is the first owner-operated home hotel collection — the creator of radical consistency from home to home, and a pioneering hospitality that is introducing a new standard in how families, groups and solo travelers create memorable destination experiences. This application helps to choose the perfect trip for everyone.",
    location: "USA",
    topic: "Startup",
    technologies: [
      { icon: "/img/icons/techs/figma.svg", label: "Figma" },
      { icon: "/img/icons/techs/react.svg", label: "Next.js" },
      { icon: "/img/icons/techs/html5.svg", label: "HTML5" },
      { icon: "/img/icons/techs/scss.svg", label: "SCSS" },
    ],
    budget: "$15k",
    duration: "290",
    link: "https://www.behance.net/gallery/112335093/DA-Booking-Web-App",
    previewImage: "img/del/case-6.png",
  },
];


export default function SectionCases() {

  const animation = {
    scrollHeight: 0,
    keyframes: () => {
      return data.map((keyframe, idx) => {
        return window.innerHeight * (idx + 1) - window.innerHeight * 0.15
      })
    },
    container: useRef(),
    slider: useRef(),
    imageWrapper: useRef(),
    images: new Array(data.length),
    startTime: now(),
    pagination: new Array(data.length),
    activePaginationCircle: -1,
  }

  const PreviewAnimatedImages = () => (
    <>
    {data.map((project, idx) => {
        animation.images[idx] = useRef()
        return (
          <div ref={animation.images[idx]} key={idx} className={styles.previewImage}>
            <img src={project.previewImage} />
          </div>
        )
      })}
    </>
  );
  const Pagination = () => (
    <div className={styles.pagination}>
      {data.map((item, idx) => {
        animation.pagination[idx] = useRef()
        return (<div key={idx} className={styles.paginationCircle}>
          <div ref={animation.pagination[idx]}></div>
        </div>)
      })}
  </div>
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      Renderer.setToRender(
        casesAnimation.bind(animation, {
          container: animation.container.current, 
          slider: animation.slider.current,
          images: animation.images.map(img => img.current),
          imageWrapper: animation.imageWrapper.current,
          pagination: animation.pagination.map(circle => circle.current)
        }), 
        'casesAnimation'
        )
    }
  }, []);
  
  return (
    <section id="cases" className={styles.section}>
      <div className={styles.wrap}>
          <div className={styles.head}>
            <SectionTitle className={styles.title}>Case Studies</SectionTitle>
            <div className={styles.description}>
              <p>
                In 6 years we have completed more than 200 individual projects
                to develop modern websites, web and mobile applications for
                clients from all over the world.
              </p>
            </div>
            <CaptionLink>

              <Link href="/">
                <Tippy
                  className="custom-tippy"
                  content="This section is under development"
                  placement="bottom"
                >
                <a className="b">View all cases</a>
                </Tippy>
              </Link>

            </CaptionLink>
          </div>
      </div>
      <div ref={animation.container} className={styles.container}>
        <div className={styles.stickyWrapper}>
          <Pagination></Pagination>
          <div ref={animation.slider} className={styles.slider}>
            {data.map((item, idx) => {
              return <CaseCard key={idx} data={item} />;
            })}
          </div>
          <div ref={animation.imageWrapper} className={styles.previewImageWrapper}>
            <PreviewAnimatedImages/>
            </div>
        </div>
      </div>
    </section>
  );
}

function casesAnimation({container, slider, images, imageWrapper, pagination}, time) {
  if (!container || !slider || images.length === 0) return
  if (time - this.startTime < 10) return
  this.startTime = now()
  if (Renderer.isElementVisible(container)) {
    const translateY = Renderer.getScrollCoordsFromElement(container).windowBottom.fromTop
    paginationSystem.apply(this, [translateY, pagination])
    imageCropAndTranslate.apply(this, [translateY, images, imageWrapper])
    slider.style.transform = `translate3d(0, ${-translateY}px, 0)`
  }
  scrollHeightAdaptive.apply(this, [pagination, container])
}

function paginationSystem(translateY, pagination) {
  const newPaginationCircle = Math.floor((translateY - window.innerHeight / 2) / window.innerHeight)
  if (newPaginationCircle != this.activePaginationCircle && newPaginationCircle >= 0 && newPaginationCircle < pagination.length) {
    pagination[newPaginationCircle].style.opacity = 1
    if (pagination[this.activePaginationCircle]) {
      pagination[this.activePaginationCircle].style.opacity = ''
    }
    this.activePaginationCircle = newPaginationCircle
  }
}
function imageCropAndTranslate(translateY, images, imageWrapper) {
  const keyframes = this.keyframes()
  keyframes.forEach((key, idx) => {
    const prevKey = keyframes[idx - 1] || 0
    const imageTranslate = translateY - window.innerHeight / 2 - prevKey

    images[idx].style.maxHeight = imageTranslate / 10 + 'vh'
    if (imageTranslate < 1) { images[idx].style.maxHeight = 0 }
  })
  imageWrapper.style.transform = `translate3d(0, ${translateY / 50}px, 0)`
}
function scrollHeightAdaptive(pagination, container) {
  if (window.innerWidth <= 575) {
    if (this.scrollHeight != (pagination.length + 0.5) * 100) {
      this.scrollHeight = (pagination.length + 0.5) * 100
      container.style.height = this.scrollHeight + 'vh'
    }
  } else {
    if (this.scrollHeight != pagination.length * 100) {
      this.scrollHeight = pagination.length * 100
      container.style.height = this.scrollHeight + 'vh'
    }
  }
}


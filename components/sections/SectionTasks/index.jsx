import SectionTitle from "components/common/SectionTitle";
import IconSupport from "components/icons/IconSupport";
import IconHelp from "components/icons/IconHelp";
import TaskCard from "./TaskCard";

import styles from "./style.module.scss";

const IconChat = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="#1E2532"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.3125 0H1.875C0.840937 0 0 0.840937 0 1.875V7.5C0 8.53406 0.840937 9.375 1.875 9.375V11.7188C1.875 11.9016 1.98187 12.0684 2.14781 12.1444C2.21062 12.1734 2.27719 12.1875 2.34375 12.1875C2.45344 12.1875 2.56219 12.1491 2.64844 12.075L5.79844 9.375H10.3125C11.3466 9.375 12.1875 8.53406 12.1875 7.5V1.875C12.1875 0.840937 11.3466 0 10.3125 0Z" />
    <path d="M13.1247 2.8125V7.5C13.1247 9.05062 11.8629 10.3125 10.3122 10.3125H6.14505L4.0835 12.0787C4.27475 12.1444 4.47537 12.1875 4.68724 12.1875H9.20129L12.3503 14.8875C12.4375 14.9616 12.5463 15 12.656 15C12.7225 15 12.79 14.9859 12.8519 14.9569C13.0188 14.8809 13.1247 14.7141 13.1247 14.5312V12.1875C14.1588 12.1875 14.9997 11.3466 14.9997 10.3125V4.6875C14.9997 3.65344 14.1588 2.8125 13.1247 2.8125Z" />
  </svg>
);

const data = [
  {
    icon: <IconSupport />,
    title: "Technical Support",
    excerpt:
      "If you’re looking for a cost-effective and high-quality technical team instead of spending a fortune on hiring and retaining IT pros, we’re your solution. Get the monthly tech support you need to keep your website or app running flawlessly.",
    label: "Done Right. Done Fast. Done on Time",
    list: [
      "adding new functionality",
      "adding new pages to your website",
      "bug fixing and troubleshooting",
      "etc...",
    ],
    btn: {
      text: "Learn More",
      url: "/"
    },
    link: {
      text: "Let’s chat",
      url: "/",
      icon: <IconChat />,
    },
  },
  {
    icon: <IconHelp />,
    title: "Get quick help when you need it",
    excerpt:
      "There is a solution for every problem, and we make sure you get yours. We've got the know-how to save you time and money by eliminating sudden issues or bugs that interrupt your business. When there's an emergency, we'll be there in a flash to help you.",
    label: "Urgently, quickly, without unnecessary action",
    list: [
      "your website stopped working",
      "your payment system is down",
      "a virus attacked the server",
      "etc...",
    ],
    btn: {
      text: "Learn More",
      url: "/"
    },
    link: {
      text: "Let’s chat",
      url: "/",
      icon: <IconChat />,
    },
  },
];

export default function SectionTasks() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <SectionTitle tac className={styles.title}>
          Get the same quality service for smaller tasks
        </SectionTitle>
        <div className={styles.grid}>
          {data.map((item, idx) => (
            <TaskCard key={idx} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

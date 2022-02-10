import { useRef } from "react";
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./style.module.scss";

export default function Counter({ numTo, suffix, caption }) {
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: numTo,
    delay: 0,
    duration: 1.25,
    suffix: suffix ? suffix : "",
  });
  return (
    <div className={styles.counter}>
      <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
        {({ isVisible }) => {
          if (isVisible) {
            start();
          }
          return (
            <div className={styles.num}>
              <span ref={countUpRef} />
            </div>
          );
        }}
      </VisibilitySensor>
      <div className={styles.caption}>{caption}</div>
    </div>
  );
}

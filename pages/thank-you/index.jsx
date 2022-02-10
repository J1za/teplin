import styles from "./style.module.scss";
import classnames from "classnames";
import SectionTitle from "components/common/SectionTitle";
import Button from "components/common/Button";
import Link from "next/link";

export default function ThankYou() {
    return (
        <section className={styles.thankYou}>
            <div className={classnames(styles.wrap, "wrap")}>
                <div className={styles.thankYou__inner}>
                    <SectionTitle>Thank you! &#128077;</SectionTitle>
                    <h5>Your message was sent successfully. We will respond as soon as possible.</h5>
                    <Link href="/" passHref>
                        <Button backHome>Back to the Main Page</Button>
                    </Link>
                </div>
            </div>
            <div className={styles.confetti}>
                {Array(20).fill(
                    <div className={styles.confetti_piece}></div>
                )}
            </div>
        </section >
    )
}
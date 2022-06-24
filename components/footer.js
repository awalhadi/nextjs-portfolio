import styles from "@/styles/Footer.module.css";
import { Fade } from "react-reveal";
import { greeting } from "@/_portfolio/portfolio.js";

export default function Footer({ theme }) {
  return (
    <div className={styles["footer-div"]}>
      <Fade>
        <p
          className={styles["footer-text"]}
          style={{ color: theme.secondaryText }}
        >
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
      </Fade>
    </div>
  );
}

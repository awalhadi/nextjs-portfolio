import { Fade, Flip } from "react-reveal";
import styles from "./DegreeCard.module.css";
import { Link } from "@nextui-org/react";

const DegreeCard = ({ degree, theme }) => {
  return (
    <div className="degree-card">
      <Flip left duration={2000}>
        <div className="card-img"></div>
      </Flip>
      <Fade right duration={2000} distance="40px">
        <div className={styles["card-body"]}>
          <div
            className={styles["body-header"]}
            style={{ backgroundColor: theme.headerColor }}
          >
            <div className={styles["body-header-title"]}>
              <h2
                className={styles["card-title"]}
                style={{ color: theme.text }}
              >
                {degree.title}
              </h2>
              <h3
                className={styles["card-subtitle"]}
                style={{ color: theme.text }}
              >
                {degree.subtitle}
              </h3>
            </div>
            <div className={styles["body-header-duration"]}>
              <h3 className={styles["duration"]} style={{ color: theme.text }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className={styles["body-content"]}>
            {degree.descriptions.map((sentence, index) => {
              return (
                <p
                  className={styles["content-list"]}
                  style={{ color: theme.text }}
                  key={index}
                >
                  {sentence}
                </p>
              );
            })}
            <Link
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={styles["visit-btn"]}
                style={{ backgroundColor: theme.headerColor }}
              >
                <p className={styles["btn"]} style={{ color: theme.text }}>
                  Visit Website
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default DegreeCard;

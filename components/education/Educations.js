import styles from "./Education.module.css";
import { Fade } from "react-reveal";
import DegreeCard from "./DegreeCard";
import { degrees } from "@/_portfolio/portfolio";

const Educations = ({ theme }) => {
  return (
    <div className="main" id="educations">
      <div className={styles["educations-header-div"]}>
        <Fade bottom duration={2000} distance="20px">
          <h1
            className={styles["educations-header"]}
            style={{ color: theme.text }}
          >
            Degrees
          </h1>
        </Fade>
      </div>
      <div className={styles["educations-body-div"]}>
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} key={degree.id} theme={theme} />;
        })}
      </div>
    </div>
  );
};

// Educations.propTypes = {}

export default Educations;

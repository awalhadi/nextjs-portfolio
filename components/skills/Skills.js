import styles from "@/styles/Skills.module.css";
import { Fade } from "react-reveal";
import SkillSection from "./SkillSection";

export default function Skills({ theme }) {
  return (
    <div className={styles["main"]} id="skills">
      <div className={styles["skills-header-div"]}>
        <Fade bottom duration={2000} distance="20px">
          <h1 className={styles["skills-header"]} style={{ color: theme.text }}>
            What I Do?
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}

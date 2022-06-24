import styles from "@/styles/Skills.module.css";
import { skills } from "@/_portfolio/portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import SoftwareSkill from "@/components/SoftwareSkill/SoftwareSkill";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
}

const SkillSection = (props) => {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill) => {
        return (
          <div className={styles["skills-main-div"]} key={skill.id}>
            <Fade left duration={2000}>
              <div className={styles["skills-image-div"]}>
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>

            <div className={styles["skills-text-div"]}>
              <Fade right duration={1000}>
                <h1
                  className={styles["skills-heading"]}
                  style={{ color: theme.text }}
                >
                  {skill.title}
                </h1>
              </Fade>
              <Fade right duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} key={skill.id} />
              </Fade>
              <Fade right duration={2000}>
                <div>
                  {skill.skills.map((skillSentence, index) => {
                    return (
                      <p
                        key={index}
                        className={styles["subTitle skills-text"]}
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;

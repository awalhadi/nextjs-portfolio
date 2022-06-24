import ExperienceCard from "./ExperienceCard";
import styles from "@/styles/ExperienceAccordion.module.css";
import { Collapse, Text } from "@nextui-org/react";
import { BiListPlus } from "react-icons/bi";

const ExperienceAccordion = ({ theme, sections }) => {
  return (
    <div className={styles["experience-accord"]}>
      <Collapse.Group shadow>
        {sections.map((section) => {
          console.log(section.id);
          return (
            <Collapse
              key={section.id}
              instanceId={section.id}
              title={section.title}
              arrowIcon={<BiListPlus />}
              className={styles["accord-panel"]}
              style={{
                fontSize: "10px",
              }}
            >
              <Text>
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard
                      key={experience.id}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </Text>
            </Collapse>
          );
        })}
      </Collapse.Group>
    </div>
  );
};

export default ExperienceAccordion;

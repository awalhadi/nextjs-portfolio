import styles from "./ProjectLanguages.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ProjectLanguages = ({ logos }) => {
  return (
    <div>
      <div className={styles["software-skills-main-div"]}>
        <ul className={styles["dev-icons-languages"]}>
          {logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.name}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li
                  className={styles["software-skill-inline-languages"]}
                  name={logo.skillName}
                >
                  {/* {icons['iconClass']} */}
                  <span
                    className={styles["iconify"]}
                    data-icon={logo.iconifyClass}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectLanguages;

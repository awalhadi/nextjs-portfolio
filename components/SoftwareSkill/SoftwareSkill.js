import React from "react";
import style from "@/styles/SoftwareSkill.module.css";
import { Tooltip, Grid } from "@nextui-org/react";

const SoftwareSkill = (props) => {
  return (
    <div>
      <div className={style["software-skills-main-div"]}>
        <ul className={style["dev-icons"]}>
          <Grid.Container gap={1} className={style["grid-container"]}>
            {props.logos.map((logo) => {
              return (
                <Grid key={logo.id}>
                  <Tooltip
                    shadow={true}
                    content={logo.skillName}
                    contentColor="secondary"
                    color="white"
                    top="925px"
                    placement="top"
                    portalClassName="tooltip-portal-class"
                  >
                    <span className={style["iconify"]} style={logo.style}>
                      {logo.fontAwesomeClassname}
                    </span>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid.Container>
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;

import styles from "./CompetitiveSites.module.css";
import { Tooltip, Grid, Link } from "@nextui-org/react";

const CompetitiveSites = ({ logos }) => {
  return (
    <div className={styles["competitive-sites-main-div"]}>
      <ul className={styles["dev-icons"]}>
        <Grid.Container gap={1} className={styles["grid-container"]}>
          {logos.map((logo) => {
            return (
              <Grid key={logo.siteName}>
                <Tooltip
                  content={logo.siteName}
                  contentColor="secondary"
                  color="white"
                  placement="bottom"
                  auto="true"
                  light="true"
                >
                  {/* <Button light auto> */}
                  <Link
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={logo.style}
                  >
                    {logo.icon}
                  </Link>
                  {/* </Button> */}
                </Tooltip>
              </Grid>
            );
          })}
        </Grid.Container>
      </ul>
    </div>
  );
};

export default CompetitiveSites;

import { Fade } from "react-reveal";
import styles from "@/styles/Education.module.css";
import Layout from "@/components/layout";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import { degrees } from "@/_portfolio/portfolio";
import { competitiveSites } from "@/_portfolio/portfolio";
import { chosenTheme } from "@/styles/theme";
import EducationImg from "@/components/education/EducationImg";
import CompetitiveSites from "@/components/competitiveSites/CompetitiveSites";
import Educations from "@/components/education/Educations";

let theme = chosenTheme;
const education = () => {
  return (
    <>
      <Head>
        <title>{CMS_NAME} - Education</title>
      </Head>
      <Layout chosenTheme={theme}>
        <div className={styles["education-main"]}>
          <div className={styles["basic-education"]}>
            <Fade bottom duration={2000} distance="40px">
              <div className={styles["heading-div"]}>
                <div className={styles["heading-img-div"]}>
                  <EducationImg theme={theme} />
                </div>

                <div className={styles["heading-text-div"]}>
                  <h1
                    className={styles["heading-text"]}
                    style={{ color: theme.text }}
                  >
                    Education
                  </h1>
                  <h3
                    className={styles["heading-sub-text"]}
                    style={{ color: theme.text }}
                  >
                    Basic Qualification and Certifcations
                  </h3>
                  <CompetitiveSites logos={competitiveSites.competitiveSites} />
                </div>
              </div>
            </Fade>
            <Educations theme={theme} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default education;

import { CMS_NAME } from "@/lib/constants";
import styles from "@/styles/Experience.module.css";
import { chosenTheme as theme } from "@/styles/theme";
import Layout from "@/components/layout";
import Head from "next/head";
import { Fade } from "react-reveal";
import ExperienceImg from "@/components/experience/ExperienceImg";
import { experience } from "@/_portfolio/portfolio";
import ExperienceAccordion from "@/components/experienceAccordion/ExperienceAccordion";

const index = () => {
  return (
    <>
      <Head>
        <title>{CMS_NAME} - Exprience</title>
      </Head>
      <Layout chosenTheme={theme}>
        <div className={styles["experience-main"]}>
          <div className={styles["basic-experience"]}>
            <Fade bottom duration={2000} distance="40px">
              <div className={styles["experience-heading-div"]}>
                <div className={styles["experience-heading-img-div"]}>
                  <ExperienceImg theme={theme} />
                </div>

                <div className={styles["experience-heading-text-div"]}>
                  <h1
                    className={styles["experience-heading-text"]}
                    style={{ color: theme.text }}
                  >
                    {experience.title}
                  </h1>
                  <h3
                    className={styles["experience-heading-sub-text"]}
                    style={{ color: theme.text }}
                  >
                    {experience["subtitle"]}
                  </h3>
                  <p
                    className={styles["experience-header-detail-text subTitle"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <ExperienceAccordion
            sections={experience["sections"]}
            theme={theme}
          />
        </div>
      </Layout>
    </>
  );
};

export default index;

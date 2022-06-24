import Layout from "@/components/layout";
import Head from "next/head";
import styles from "@/styles/Projects.module.css";
import { CMS_NAME } from "@/lib/constants";
import { chosenTheme } from "@/styles/theme";
import { Fade } from "react-reveal";
import ProjectsImg from "@/components/projects/ProjectsImg";
import { projectsHeader } from "@/_portfolio/portfolio";
import GithubRepoCard from "@/components/githubRepoCard/GithubRepoCard";
import { ProjectsData } from "@/_portfolio/projects";

const theme = chosenTheme;
const projects = () => {
  return (
    <>
      <Head>
        <title>{CMS_NAME} - Projects</title>
      </Head>
      <Layout chosenTheme={theme}>
        <div className={styles["projects-main"]}>
          <div className={styles["basic-projects"]}>
            <Fade bottom duration={2000} distance="40px">
              <div className={styles["projects-heading-div"]}>
                <div className={styles["projects-heading-img-div"]}>
                  <ProjectsImg theme={theme} />
                </div>
                <div className={styles["projects-heading-text-div"]}>
                  <h1
                    className={styles["projects-heading-text"]}
                    style={{ color: theme.text }}
                  >
                    {projectsHeader.title}
                  </h1>
                  <p
                    className={styles["projects-header-detail-text subTitle"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {projectsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className={styles["repo-cards-div-main"]}>
            {ProjectsData.data.map((repo) => {
              return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default projects;

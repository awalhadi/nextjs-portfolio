import styles from "./GithubRepoCard.module.css";
import { Fade } from "react-reveal";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";

const GithubRepoCard = ({ repo, theme }) => {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className={styles["repo-card-div"]}
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.highlight }}
        >
          <div className={styles["repo-name-div"]}>
            <svg
              aria-hidden="true"
              className={styles["repo-svg"]}
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className={styles["repo-name"]} style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p
            className={styles["repo-description"]}
            style={{ color: theme.text }}
          >
            {repo.description}
          </p>
          <div className={styles["repo-details"]}>
            <p
              className={styles["repo-creation-date subTitle"]}
              style={{ color: theme.secondaryText }}
            >
              Created on {repo.createdAt.split("T")[0]}
            </p>
            <ProjectLanguages
              className={styles["repo-languages"]}
              logos={repo.languages}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default GithubRepoCard;

import { socialMediaLinks } from "_portfolio/portfolio";
import styles from "@/styles/SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles["social-media-div"]}>
      {socialMediaLinks.map((media, index) => {
        return (
          <a
            href={media.link}
            className={styles["icon-button"]}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <span
              className={styles.socialIconBg}
              style={{ color: media.backgroundColor, padding: "0px 8px" }}
            >
              {media.fontAwesomeIcon}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;

import styles from "@/styles/ExperienceCard.module.css";
import Image from "next/image";
import Link from "next/link";

const ExperienceCard = ({ experience, theme }) => {
  return (
    <div
      className={styles["experience-card"]}
      style={{ border: `1px solid ${experience["color"]}` }}
    >
      <div className={styles["experience-card-logo-div"]}>
        <Image
          src={`/assets/images/${experience["logo_path"]}`}
          className={styles["experience-card-logo"]}
          width={50}
          height={50}
          layout="responsive"
          alt=""
        />
      </div>
      <div className={styles["experience-card-body-div"]}>
        <div className={styles["experience-card-header-div"]}>
          <div className={styles["experience-card-heading-left"]}>
            <h5
              className={styles["experience-card-title"]}
              style={{ color: theme.text }}
            >
              {experience["title"]}
            </h5>
            <p
              className={styles["experience-card-company"]}
              style={{ color: theme.text }}
            >
              <Link
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience["company"]}
              </Link>
            </p>
          </div>
          <div className={styles["experience-card-heading-right"]}>
            <p
              className={styles["experience-card-duration"]}
              style={{ color: theme.secondaryText }}
            >
              {experience["duration"]}
            </p>
            <p
              className={styles["experience-card-location"]}
              style={{ color: theme.secondaryText }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <p
          className={styles["experience-card-description"]}
          style={{ color: theme.text }}
        >
          {experience["description"]}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;

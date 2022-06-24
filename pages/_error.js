import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "@/styles/Error.module.css";
import { Fade } from "react-reveal";
import Link from "next/link";
import { chosenTheme } from "@/styles/theme";

function Error({ statusCode }) {
  return (
    <div className={styles["error-main"]}>
      <Header theme={chosenTheme} />
      <div></div>
      <div></div>
      <div className={styles["error-class"]}>
        <Fade bottom duration={2000} distance="40px">
          <h1>Woops</h1>
          <h1 className={styles["error-404"]}>404</h1>
          <p>The requested page is unavailable at the moment!</p>
          <Link
            className={styles["main-button"]}
            href="/"
            style={{
              color: chosenTheme.body,
              backgroundColor: chosenTheme.text,
              border: `solid 1px ${chosenTheme.text}`,
              display: "inline-flex",
            }}
          >
            Go Home
          </Link>
        </Fade>
      </div>
      <Footer theme={chosenTheme} />
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

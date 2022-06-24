import Link from "next/link";
import { greeting } from "@/_portfolio/portfolio";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

export default function Header({ theme }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <Fade top duration={1000} distance="20px">
      <header className="header">
        <Link href="/" passHref>
          <span className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logoName" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </span>
        </Link>

        <input className="menuBtn" type="checkbox" id="menuBtn" />
        <label className="menuIcon" htmlFor="menuBtn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ backgroundColor: theme.body }}>
          <li>
            <Link href="/">
              <a
                className={
                  currentUrl == "/"
                    ? "link-styles active-navLink"
                    : "link-styles"
                }
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/education">
              <a
                className={
                  currentUrl == "/education"
                    ? "link-styles active-navLink"
                    : "link-styles"
                }
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Education
              </a>
            </Link>
          </li>

          <li>
            <Link href="/experience">
              <a
                className={
                  currentUrl == "/experience"
                    ? "link-styles active-navLink"
                    : "link-styles"
                }
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Experience
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className={
                  currentUrl == "/projects"
                    ? "link-styles active-navLink"
                    : "link-styles"
                }
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Projects
              </a>
            </Link>
          </li>
          {/* <li>
              <Link href="/opensource">
                <a
                  className={
                    currentUrl == "/opensource"
                      ? "link-styles active-navLink"
                      : "link-styles"
                  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Open Source
                </a>
              </Link>
            </li> */}
          <li>
            <Link href="/contact">
              <a
                className={
                  currentUrl == "/contact"
                    ? "link-styles active-navLink"
                    : "link-styles"
                }
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Contact Me
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .link-styles {
              color: ${theme.text};
            }

            .active-navLink {
              font-weight: bold;
            }
          `}
        </style>
      </header>
    </Fade>
  );
}

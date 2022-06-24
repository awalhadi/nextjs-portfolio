import { useRouter } from "next/router";

function ActiveLink({ children, href, styles }) {
  const router = useRouter();
  const style = {
    fontWeight: router.asPath === href ? "bold" : "normal",
  };
  const combineStyles = Object.assign({}, style, styles);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={combineStyles}>
      {children}
    </a>
  );
}

export default ActiveLink;

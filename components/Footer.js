import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaPuzzlePiece } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <>
      <footer className="mt-6">
        <p className="text-center text-base text-gray-600 font-bold">
          {currentYear
            ? `© ${currentYear} A Awal Hadi. All rights reserved.`
            : null}
        </p>
        <div className="text-center text-sm text-gray-600 flex justify-center mt-2">
          {/* <a
            href="https://github.com/awalhadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-yellow-300 mx-3"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/a-awal-hadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-400 mx-3"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.beecrowd.com.br/judge/en/profile/406778"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-green-400 mx-3"
          >
            <FaPuzzlePiece className="h-5 w-5" />
          </a> */}
          <SocialLinks />
        </div>
      </footer>
    </>
  );
};

export default Footer;

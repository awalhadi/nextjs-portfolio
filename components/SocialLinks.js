import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHackerrank,
  FaPuzzlePiece,
} from "react-icons/fa";
// import { SiHackernews, SiBeecrowd } from 'react-icons/si';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/awalhadi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/a-awal-hadi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600"
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href="https://www.hackerrank.com/awalhadi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700"
      >
        <FaHackerrank size={24} />
      </a>

      <a
        href="https://www.facebook.com/a.awal.hadi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-800 hover:text-blue-900"
      >
        <FaFacebook size={24} />
      </a>

      <a
        href="https://www.beecrowd.com.br/judge/en/profile/406778"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-500 hover:text-yellow-600"
      >
        <FaPuzzlePiece size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;

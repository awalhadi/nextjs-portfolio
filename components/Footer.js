import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaPuzzlePiece } from 'react-icons/fa';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center text-white">
        <p className="text-sm">
          {currentYear ? `© ${currentYear} Your Name. All rights reserved.` : null}
        </p>
        <div className="mt-2 flex justify-center">
          <a
            href="https://github.com/awalhadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 mx-3"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/a-awal-hadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 mx-3"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.beecrowd.com.br/judge/en/profile/406778"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 mx-3"
          >
            <FaPuzzlePiece className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




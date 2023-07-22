import React from "react";

const SocialLink = () => {
  return (
    <ul className="flex justify-end space-x-2">
      {/* <!-- linkedin --> */}
      <li>
        <a
          href="https://www.linkedin.com/"
          className="bg-blue-600 p-3 text-white rounded-full"
          target="_blank"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <!-- ... (LinkedIn SVG path) ... --> */}
          </svg>
        </a>
      </li>
      {/* <!-- github --> */}
      <li>
        <a
          href="https://github.com/"
          className="bg-gray-700 p-3 text-white rounded-full"
          target="_blank"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <!-- ... (GitHub SVG path) ... --> */}
          </svg>
        </a>
      </li>
      {/* <!-- tech blog --> */}
      <li>
        <a
          href="https://dev.to/"
          className="bg-black p-3 text-white rounded-full"
          target="_blank"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 32 447.99999999999994 448"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <!-- ... (Tech Blog SVG path) ... --> */}
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialLink;

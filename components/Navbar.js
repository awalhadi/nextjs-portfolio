// import Link from 'next/link';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { Link } from 'react-scroll';

const Navbar = () => {

  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     const activeLink = document.querySelector('.nav-link.active');
  //     if (activeLink) {
  //       activeLink.classList.remove('active');
  //     }

  //     const targetLink = document.querySelector(`.nav-link[href="${url}"]`);
  //     if (targetLink) {
  //       targetLink.classList.add('active');
  //     }
  //   };

  //   router.events.on('routeChangeStart', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, [router.events]);

  // const handleLinkClick = (e, href) => {
  //   e.preventDefault();
  //   router.push(href);
  // };
  
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" to="home" smooth={true} duration={500}>
              <div className={`text-white font-semibold text-xl`}>My Portfolio</div>
              </Link>
          </div>
          <div className="flex">
            <Link href="#about" to="home" smooth={true} duration={500}>
              <div className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                About
              </div>
            </Link>
            <Link href="#skills" to="skills" smooth={true} duration={500}>
              <div className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                Skills
              </div>
            </Link>
            <Link href="#projects" to="projects" smooth={true} duration={500}>
              <div className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium `}>
                Projects
              </div>
            </Link>
            <Link href="#contact" to="contact" smooth={true} duration={500}>
              <div className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

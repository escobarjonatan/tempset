import Logo from "../Logo/Logo.jsx";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  const handleResize = () => {
    if (window.matchMedia("screen and (max-width: 640px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 py-5 sm:px-6 lg:px-8 sm:pt-4 sm:pb-6">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                aria-controls="mobile-menu"
                aria-expanded="false"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-inset focus:ring-4 focus:ring-gray-300"
                onClick={toggleMenu}
                type="button"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  aria-hidden="true"
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>

                <svg
                  aria-hidden="true"
                  className="hidden h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <Logo wrapperClasses="text-white sm:hidden block" />
              <div className="hidden sm:block sm:w-full">
                <div className="flex items-center justify-center md:space-x-12 space-x-4">
                  <Link href="/">
                    <a
                      aria-current="page"
                      className="active:bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold"
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="#about">
                    <a className="active:bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold">
                      About
                    </a>
                  </Link>
                  <Logo wrapperClasses="text-white sm:block hidden" />
                  <Link href="#services">
                    <a className="active:bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold">
                      Services
                    </a>
                  </Link>
                  <Link href="#contact">
                    <a className="active:bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            isMobile && isMenuOpen ? "block" : "hidden"
          } absolute bg-gray-800 w-full z-50`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 text-center">
            <Link href="/">
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-bold"
                onClick={handleNavigation}
              >
                Home
              </a>
            </Link>
            <Link href="#about">
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-bold"
                onClick={handleNavigation}
              >
                About
              </a>
            </Link>
            <Link href="#services">
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-bold"
                onClick={handleNavigation}
              >
                Services
              </a>
            </Link>
            <Link href="#contact">
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-bold"
                onClick={handleNavigation}
              >
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

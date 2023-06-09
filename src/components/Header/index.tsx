import React, { useState } from "react";
import routes from "routes";
import useBreakpoints from "styles/useBreakpoints";

// components
import Image from "next/image";
import logo from "images/logo.png";

const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const { isMobile } = useBreakpoints();

  const handleMobileHamburgerClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const isMobileMenuExpanded = () => {
    if (isMobile && mobileNavOpen) {
      return "";
    }

    return "hidden";
  };

  return (
    <nav className="border-header-border bg-header-bg text-header-text">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 max-h-[72px]">
        <a href={routes.internal.home} className="flex items-center">
          <Image
            src={logo}
            className="h-8 w-auto mr-3"
            alt="Next.js Web Template Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Next.js Web Template
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={handleMobileHamburgerClick}
        >
          <span className="sr-only">Open main navigation menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${isMobileMenuExpanded()} w-full md:block md:w-auto z-50`}
        >
          <ul className="flex flex-col font-medium mt-[14px] rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href={routes.internal.home}
                className="block py-2 pl-3 pr-4 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

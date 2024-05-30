import React from "react";
import HeaderName from "./HeaderName";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
      return (
            <nav className="sticky top-0 flex justify-between w-full p-5 bg-light-background dark:bg-dark-background z-10">
                  {/* name */}
                  <HeaderName />
                  {/* about and resume */}
                  <div className="hidden md:flex">
                        <ul className="flex items-center gap-10">
                              <li>
                                    <Link
                                          className="font-bold text-dark-primary dark:text-light-primary"
                                          href={"/about"}
                                    >
                                          About
                                    </Link>
                              </li>
                              <li>
                                    <Link
                                          className="font-bold text-dark-primary dark:text-light-primary"
                                          href={"/resume"}
                                    >
                                          Resume
                                    </Link>
                              </li>
                        </ul>
                  </div>

                  {/* get in touch button */}
                  {/* toggle light and dark */}
                  <div className="flex items-center gap-2">
                        <Link
                              href={"/contact"}
                              className=" px-5 py-2 me-2 rounded-3xl border-2 dark:border-light-primary border-dark-primary focus:outline-none transition-colors duration-500 hover:bg-primary-darker bg-light-secondary dark:bg-dark-secondary dark:hover:bg-dark-primary"
                        >
                              <span className="text-dark-primary dark:text-light-primary text-lg font-bold">
                                    Get in touch
                              </span>
                        </Link>
                        <ThemeSwitch />
                  </div>
            </nav>
      );
};

export default Header;

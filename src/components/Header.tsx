import React from "react";
import HeaderName from "./HeaderName";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
      return (
            <nav className="sticky top-0 flex justify-between w-full p-5 bg-space_cadet z-10">
                  {/* name */}
                  <HeaderName />
                  {/* about and resume */}
                  <div className="hidden md:flex">
                        <ul className="flex items-center gap-10">
                              <li>
                                    <Link href={"/about"}>About</Link>
                              </li>
                              <li>
                                    <Link href={"/resume"}>Resume</Link>
                              </li>
                        </ul>
                  </div>

                  {/* get in touch button */}
                  {/* toggle light and dark */}
                  <div className="flex items-center gap-2">
                        <Link
                              href={"/contact"}
                              className="bg-primary px-5 py-2 bg-gradient-to-tr from-fire_engine_red to-fire_engine rounded-3xl focus:outline-none transition-colors duration-500 hover:bg-primary-darker"
                        >
                              <span className="text-white text-lg font-bold">Get in touch</span>
                        </Link>
                        <button className="group btn border rounded-full swap btn-ghost swap-rotate p-2 hover:bg-gray-700 hover:text-white">
                              <FontAwesomeIcon
                                    icon={faSun}
                                    className="swap-off fill-current w-5 h-5 text-yellow-500 group-hover:text-white"
                              />
                        </button>
                  </div>
            </nav>
      );
};

export default Header;

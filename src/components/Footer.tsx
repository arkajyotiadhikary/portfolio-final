import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React from "react";

const Footer = () => {
      return (
            <div className="flex flex-col items-center my-10 mx-auto mb-5">
                  <div className="flex flex-center mb-4 gap-10 ">
                        <Link href={"/"}>
                              <FontAwesomeIcon className="h-5" icon={faGithub} />
                        </Link>
                        <Link href={"/"}>
                              <FontAwesomeIcon className="h-5" icon={faLinkedin} />
                        </Link>
                        <Link href={"/"}>
                              <FontAwesomeIcon className="h-5" icon={faStackOverflow} />
                        </Link>
                  </div>
                  <p className="flex flex-center gap-2 text-sm">
                        Made with
                        <FontAwesomeIcon className="text-red-500 h-5" icon={faHeart} />
                  </p>
            </div>
      );
};

export default Footer;

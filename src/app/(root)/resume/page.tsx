import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
      faGithub,
      faLinkedin,
      faStackOverflow,
      faLetterboxd,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
      return (
            <div className="grid grid-cols-3 gap-20 px-5 sm:px-2">
                  <div className="col-span-3 lg:col-span-1">
                        <div className="flex flex-center sticky top-20 h-full flex-col gap-5 md:flex-row lg:h-auto lg:flex-col">
                              {/* personal details */}
                              <div className="group rounded-3xl bg-cool_gray shadow shadow-space_cadet-900 p-8">
                                    <h1 className="text-3xl font-bold">Arka Jyoti Adhikary</h1>
                                    <div className="text-sm">
                                          <p className="mt-5 sm:text-base">
                                                Fullstack Software Developer
                                          </p>
                                          <p className="mt-5 flex items-center gap-1">
                                                <FontAwesomeIcon
                                                      className="w-5 h-5 mr-2"
                                                      icon={faEnvelope}
                                                />
                                                arkajyotiadhikary15@gmail.com
                                          </p>
                                          <p className="mt-5 flex items-center gap-1">
                                                <FontAwesomeIcon
                                                      className="w-5 h-5 mr-2"
                                                      icon={faLocationDot}
                                                />
                                                Guwahati, Assam, India
                                          </p>
                                    </div>
                              </div>
                              {/* social links */}
                              <div className="group flex rounded-3xl bg-cool_gray shadow shadow-space_cadet-900 p-8 flex-between flex-col gap-3">
                                    <Link
                                          className="flex items-center justify-center border p-4  rounded-lg hover:bg-cool_gray-100 hover:border-cool_gray-300 hover:shadow hover:shadow-space_cadet-900 transition-all duration-500"
                                          href={"https://github.com/ArkaJyotiAdhikary"}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                    >
                                          <FontAwesomeIcon
                                                className="w-5 h-5 mr-2"
                                                icon={faGithub}
                                          />
                                          <span className=" hover:text-gray-200 transition-colors duration-500">
                                                Github
                                          </span>
                                    </Link>
                                    <Link
                                          className="flex items-center justify-center border p-4 hover:bg-cool_gray-100 hover:border-cool_gray-300 hover:shadow hover:shadow-space_cadet-900 transition-all duration-500 rounded-lg bg-gray-700 hover:bg-gray-800 "
                                          href={
                                                "https://www.linkedin.com/in/arka-jyoti-adhikary-302a65205/"
                                          }
                                          target="_blank"
                                          rel="noopener noreferrer"
                                    >
                                          <FontAwesomeIcon
                                                className="w-5 h-5 mr-2 "
                                                icon={faLinkedin}
                                          />
                                          <span className="hover:text-gray-200 transition-colors duration-500">
                                                Linkedin
                                          </span>
                                    </Link>
                                    <Link
                                          className="flex items-center justify-center border p-4  hover:bg-cool_gray-100 hover:border-cool_gray-300 hover:shadow hover:shadow-space_cadet-900 transition-colors duration-500"
                                          href={
                                                "https://stackoverflow.com/users/18371999/arka-jyoti-adhikary"
                                          }
                                          target="_blank"
                                          rel="noopener noreferrer"
                                    >
                                          <FontAwesomeIcon
                                                className="w-5 h-5 mr-2 "
                                                icon={faStackOverflow}
                                          />
                                          <span className=" hover:text-gray-200 transition-colors duration-500">
                                                Stack Overflow
                                          </span>
                                    </Link>
                                    <Link
                                          className="flex items-center justify-center border p-4  hover:bg-cool_gray-100 hover:border-cool_gray-300 hover:shadow hover:shadow-space_cadet-900 rounded-lg bg-gray-700 hover:bg-gray-800 transition-colors duration-500"
                                          href={"/resume"}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                    >
                                          <FontAwesomeIcon
                                                className="w-5 h-5 mr-2 "
                                                icon={faFile}
                                          />
                                          <span className=" hover:text-gray-200 transition-colors duration-500">
                                                Resume
                                          </span>
                                    </Link>
                              </div>
                        </div>
                  </div>
                  <div className="col-span-3 lg:col-span-2">
                        <div className="">
                              <h1 className="mb-10 text-center text-5xl font-bold sm:text-left sm:text-7xl">
                                    Experience
                              </h1>
                              <div className="mb-5">
                                    <h2 className="text-4xl font-bold text-primary">29 Kreativ</h2>
                                    <div>
                                          <p className="text-lg font-semibold">Software Engineer</p>
                                          <p className="text-sm italic">Aug 2022 - Mar 2024</p>
                                    </div>
                                    <p className="my-3">
                                          Responsible for developing Web and Mobile Application
                                    </p>
                                    <ul className="my-3 list-inside list-disc">
                                          <li>
                                                Enhanced Charli AI's geospatial intelligence
                                                capabilities by successfully integrating ArcGIS
                                                APIs, enabling advanced mapping functionalities for
                                                data-driven decision-making.
                                          </li>
                                          <li>
                                                Streamlined React Native app development with a
                                                program editor, accelerating the process and
                                                ensuring high-quality output.
                                          </li>
                                          <li>
                                                Improved educational accessibility and effectiveness
                                                by playing a key role in developing a scalable and
                                                intuitive learning platform for knowledge sharing
                                                and collaboration.
                                          </li>
                                          <li>
                                                Increased data management efficiency by 40% through
                                                the development and implementation of custom APIs,
                                                resulting in smoother workflows and improved
                                                customer interactions.
                                          </li>
                                          <li>
                                                Led a cross-functional team to develop and deliver a
                                                new software product, resulting in a 20% increase in
                                                customer satisfaction and driving significant
                                                revenue growth for the business.
                                          </li>
                                    </ul>
                              </div>
                        </div>
                        <div className="">
                              <h1 className="mb-10 text-center text-5xl font-bold sm:text-left sm:text-7xl">
                                    Internship
                              </h1>
                              <div className="mb-5">
                                    <h2 className="text-4xl font-bold text-primary">IIT Indore</h2>
                                    <div>
                                          <p className="text-lg font-semibold">
                                                Machine Learning And Python
                                          </p>
                                          <p className="text-sm italic">Oct 2019 - Jan 2020</p>
                                    </div>
                                    <p className="my-3">
                                          Responsible for developing web interface for fingerprint
                                          security system
                                    </p>
                                    <ul className="my-3 list-inside list-disc">
                                          <li>Convert matlab codes to python.</li>
                                          <li>
                                                Link backend database for registered user details to
                                                a web interface using react, react query.
                                          </li>
                                    </ul>
                              </div>
                        </div>
                        <div className="">
                              <h1 className="mb-10 text-center text-5xl font-bold sm:text-left sm:text-7xl">
                                    Education
                              </h1>
                              <div className="mb-5">
                                    <h2 className="text-4xl font-bold text-primary">
                                          Guwahati University
                                    </h2>
                                    <div>
                                          <p className="text-lg font-semibold">
                                                Computer Science and Technology
                                          </p>
                                          <p className="text-sm italic">Oct 2018 - Jun 2022</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Resume;

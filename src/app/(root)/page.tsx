import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faListCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TechStack from "@/components/TechStack";

export default function Home() {
      return (
            <div className="h-full">
                  <div className="grid gap-5 px-8 md:grid-cols-3 lg:grid-cols-4">
                        <div className="group rounded-3xl bg-cool_gray p-8 col-span-3 lg:col-span-2 hover:bg-cool_gray-100 hover:border-cool_gray-300 hover:shadow hover:shadow-space_cadet-900 transition-all duration-500 md:col-auto">
                              <Link
                                    href="/about"
                                    className="flex h-full flex-col justify-between gap-10"
                              >
                                    <div className="flex-center h-28 w-28 overflow-hidden rounded-full bg-gradient-to-tr from-violet-700 to-yellow-500">
                                          <Image
                                                src="/profile-pic.png"
                                                width={200}
                                                height={200}
                                                alt="profile"
                                          />
                                    </div>
                                    <div>
                                          <h1 className="mb-3 flex items-center gap-2 text-3xl font-bold">
                                                Hey, I&apos;m Arka
                                          </h1>
                                          <div className="flex-between">
                                                <p className="md:text-lg">
                                                      {`🚀 Passionate React/React Native Developer |
                                                      💻 Proficient in Node.js | 📊 Experienced with
                                                      PostgreSQL & MongoDB | 🔧 Building Scalable &
                                                      Dynamic Web & Mobile Applications`}
                                                </p>
                                          </div>
                                    </div>
                              </Link>
                        </div>
                        <div className="group rounded-3xl bg-cool_gray p-8 col-span-3 md:col-auto hover:bg-cool_gray-100 hover:border-cool_gray-300 hover:shadow hover:shadow-space_cadet-900 transition-all duration-500">
                              <Link
                                    className="flex h-full flex-row items-center justify-start gap-10 md:flex-col md:items-start md:justify-between"
                                    href="/resume"
                              >
                                    <FontAwesomeIcon icon={faFilePdf} className="h-28" />
                                    <h1 className="text-3xl font-semibold">Resume</h1>
                              </Link>
                        </div>
                        <div className="group rounded-3xl bg-cool_gray p-8 col-span-3 md:col-auto hover:bg-cool_gray-100 hover:border-cool_gray-300 hover:shadow hover:shadow-space_cadet-900 transition-all duration-500">
                              <Link
                                    className="flex h-full flex-row items-center justify-start gap-10 md:flex-col md:items-start md:justify-between"
                                    href="https://github.com/arkajyotiadhikary"
                              >
                                    <FontAwesomeIcon icon={faGithub} className="h-28" />
                                    <h1 className="text-3xl font-semibold">Github</h1>
                              </Link>
                        </div>
                        <div className="group rounded-3xl bg-cool_gray p-8 col-span-3 md:col-auto hover:bg-cool_gray-100 hover:border-cool_gray-300 hover:shadow hover:shadow-space_cadet-900 transition-all duration-500">
                              <Link
                                    className="flex h-full flex-row items-center justify-start gap-10 md:flex-col md:items-start md:justify-between"
                                    href="/"
                              >
                                    <FontAwesomeIcon icon={faListCheck} className="h-28" />
                                    <h1 className="text-3xl font-semibold">Projects</h1>
                              </Link>
                        </div>
                        <div className="group rounded-3xl bg-cool_gray p-8 col-span-3 hover:bg-cool_gray-100 hover:border-cool_gray-300 hover:shadow hover:shadow-space_cadet-900 transition-all duration-500">
                              <div className="flex h-full flex-col justify-between gap-10">
                                    <h1 className="text-3xl font-semibold">Tech Stack</h1>
                                    <TechStack />
                              </div>
                        </div>
                  </div>
            </div>
      );
}

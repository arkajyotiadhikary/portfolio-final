import Link from "next/link";
import React from "react";
import Image from "next/image";

const TechStack = () => {
      return (
            <div className="flex justify-center items-center gap-6">
                  <Link href={"/"}>
                        <Image src={"/logo-javascript.svg"} alt={"react"} width={80} height={80} />
                  </Link>
                  <Link href={"/"}>
                        <Image src={"/typescript.svg"} alt={"react"} width={80} height={80} />
                  </Link>
                  <Link href={"/"}>
                        <Image src={"/react-2.svg"} alt={"react"} width={80} height={80} />
                  </Link>

                  <Link href={"/"}>
                        <Image
                              className="filter dark:invert"
                              src={"/next.svg"}
                              alt={"react"}
                              width={80}
                              height={80}
                        />
                  </Link>
                  <Link href={"/"}>
                        <Image src={"/nodejs-3.svg"} alt={"react"} width={80} height={80} />
                  </Link>
                  <Link href={"/"}>
                        <Image src={"/mongodb-icon-1-1.svg"} alt={"react"} width={80} height={80} />
                  </Link>
                  <Link href={"/"}>
                        <Image src={"/postgresql.svg"} alt={"react"} width={80} height={80} />
                  </Link>
                  <Link href={"/"}>
                        <Image src={"/vitejs.svg"} alt={"react"} width={80} height={80} />
                  </Link>
                  <Link href={"/"}>
                        <Image
                              className="filter dark:invert"
                              src={"/aws-2.svg"}
                              alt={"react"}
                              width={80}
                              height={80}
                        />
                  </Link>
            </div>
      );
};

export default TechStack;

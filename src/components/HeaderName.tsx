import Link from "next/link";
import React from "react";

const HeaderName = () => {
      return (
            <Link href={"/"} className="flex items-center gap-1 transition">
                  <h1 className="text-3xl font-bold font-mono text-light-accent dark:text-dark-accent">
                        A
                  </h1>
                  <h1 className="text-3xl font-bold text-dark-primary dark:text-light-primary">
                        rka
                  </h1>
            </Link>
      );
};

export default HeaderName;

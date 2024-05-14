import Link from "next/link";
import React from "react";

const HeaderName = () => {
      return (
            <Link href={"/"} className="flex items-center gap-1 transition">
                  <h1 className="text-3xl font-bold font-mono text-red_(pantone)">A</h1>
                  <h1 className="text-3xl font-bold text-anti-flash_white">rka</h1>
            </Link>
      );
};

export default HeaderName;

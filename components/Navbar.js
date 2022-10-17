import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link href="/">
          <a>
            <Image width={150} height={50} src="/assets/images/logo.svg" />
          </a>
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/">
          <a>Work</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

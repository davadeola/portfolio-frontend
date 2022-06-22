import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link href="/">
          <a>
            <Image width={30} height={30} src="/assets/images/logo.svg" />
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
        <Link href="/">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

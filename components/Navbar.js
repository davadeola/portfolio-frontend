import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "flex-start",
        }}
      >
        <Link href="/">
          <a>
            <Image
              width={150}
              height={50}
              src="/assets/images/logo.svg"
              layout="intrinsic"
            />
          </a>
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/#work">
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

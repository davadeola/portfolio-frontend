import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <h4>Connect</h4>
      <div className="nav-links">
        <Link href="/">
          <a>
            <Image width={25} height={25} src="/assets/images/twitter.svg" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image width={25} height={25} src="/assets/images/behance.svg" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image width={25} height={25} src="/assets/images/linked.svg" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image width={25} height={25} src="/assets/images/dribbble.svg" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

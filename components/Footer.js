import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Have A Project In Mind?</h2>
      <Link href="mailto:adeoladavid15@gmail.com?subject=We would like to work with you">
        <a>
          <button type="button" className="btn">
            Let's Talk
          </button>
        </a>
      </Link>
      <div className="nav-links">
        <Link href="https://www.behance.net/davadeola">
          <a>
            <Image width={25} height={25} src="/assets/images/behance.svg" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/david-adeola-44a446155/">
          <a>
            <Image width={25} height={25} src="/assets/images/linked.svg" />
          </a>
        </Link>
        <Link href="https://dribbble.com/davadeola">
          <a>
            <Image width={25} height={25} src="/assets/images/dribbble.svg" />
          </a>
        </Link>
        <Link href="https://twitter.com/DavidAdeola3792">
          <a>
            <Image width={25} height={25} src="/assets/images/twitter.svg" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

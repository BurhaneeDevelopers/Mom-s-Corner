import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer
        className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 to-pink-200
       sm:flex-row"
      >
        <Link href="/" className="text-sm">
          <Image src="/logo.png" alt="logo" width={180} height={120} />
        </Link>

        <p className="text-sm text-start text-gray-600">
          © Copyright Mom&apos;s Corner. All Rights Reserved.{" "}
          <span>
            Crafted with &#10084; by <a href="//taheridevelopers.com" target="_blank" rel="noreferrer noopener" className="text-indigo-700 hover:underline">Taheri Developers</a>
          </span>
        </p>
      </footer>
      <a
        href="https://www.producthunt.com/posts/momms-corner?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-momms&#0045;corner"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=370568&theme=light"
          alt="Momms&#0032;Corner - Best&#0032;Parenting&#0032;Guide&#0032;For&#0032;Your&#0032;Child | Product Hunt"
          className="fixed bottom-10 right-10"
          width="250"
          height="54"
        />
      </a>
    </div>
  );
};

export default Footer;

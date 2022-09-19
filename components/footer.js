import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 to-pink-200
       sm:flex-row">
        <Link href="/" className="text-sm">
          <Image src="/logo.png" alt="logo" className="md:w-1/6" width={200} height={150} />
        </Link>

        <p className="text-sm text-start text-gray-600">
          © Copyright Mom&apos;s Corner. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

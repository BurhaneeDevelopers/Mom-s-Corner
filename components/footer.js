import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 to-pink-200
       sm:flex-row">
        <Link href="/index" className="text-sm">
          <img src="/logo.png" alt="" className="w-1/2 md:w-1/6 " />
        </Link>

        <p className="text-sm text-start text-gray-600">
          © Copyright Mom's Corner. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

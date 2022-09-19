import React from "react";
import Link from "next/link";
import Image from "next/image";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src="/404.png" alt="Not-Found" width={500} height={400} />
       <br />
       <h1 className="text-3xl">Ooops... Looks like the page you were searching for does not exist, <span className="text-indigo-700"> <Link href={'/'}> Go Back </Link> </span> to our home page</h1>
    </div>
  );
};

export default NotFound;

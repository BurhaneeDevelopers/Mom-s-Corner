import React from "react";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/404.png" alt="Not-Found" className="w-[80vh]" />
       <br />
       <h1 className="text-3xl">Ooops... Looks like the page you were searching for doesn't exist, <span className="text-indigo-700"> <Link href={'/'}> Go Back </Link> </span> to our home page</h1>
    </div>
  );
};

export default NotFound;

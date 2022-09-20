import React from "react";
import Link from "next/link";
import Image from "next/image";
const Success = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <Image src="/about-img.png" width={550} height={400} className=" mx-auto" alt="SUCCESS" />
        <hr className="w-1/2 font-bold mx-auto bg-indigo-700"/>
        <br />
        <h1 className="text-xl">
          VOILA !!! Your mail was successfully received by us. You can{" "}
          <span className="text-indigo-700">
            {" "}
            <Link href={"/"}> Head Back </Link>{" "}
          </span>{" "}
          to our home page. <span className="font-bold text-indigo-500"> Thank You !</span>
        </h1>
      </div>
    </div>
  );
};

export default Success;

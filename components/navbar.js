import { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 786 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={"/"}>
          <a className="md:mr-5 mr-2 md:text-xl text-indigo-700 font-medium hover:text-indigo-900">
            Home
          </a>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={"/about"}>
          <a className="md:mr-5 mr-2 md:text-xl text-indigo-700 font-medium hover:text-indigo-900">
            About Us
          </a>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={"/queries"}>
          <a className="md:mr-5 mr-2 md:text-xl text-indigo-700 font-medium hover:text-indigo-900">
            Queries
          </a>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={"https://www.buymeacoffee.com/MomsCorner"}>
          <a
            target="_blank"
            rel="noreferrer"
            className="md:mr-5 mr-2 md:text-xl text-indigo-700 font-medium hover:text-indigo-900"
          >
            BuymeaCoffee
          </a>
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-200">
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 bg-transparent border-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer font-normal"
          >
            <Link href={'/'} className="cursor-pointer">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src="/logo.png" className="md:w-48" width={200} height={120} alt="Logo" />
            </div>
            </Link>
          </Typography>
          <div className="hidden lg:flex">{navList}</div>
          <Link href={"/blogs"}>
            <button className="hidden lg:flex items-center  bg-pink-400 border-0 py-2 px-4 focus:outline-none hover:bg-pink-500 text-white rounded text-base mt-4 md:mt-0 ">
              Blogs &nbsp;
              <AiOutlineArrowRight />
            </button>
          </Link>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        <MobileNav open={openNav}>
          {navList}
          <Link href={"/blogs"}>
            <button className=" inline-flex items-center bg-pink-400 border-0 py-2 px-4 focus:outline-none hover:bg-pink-500 text-white rounded text-base mt-4 md:mt-0 ">
              Blogs &nbsp;
              <AiOutlineArrowRight />
            </button>
          </Link>
        </MobileNav>
      </Navbar>
    </div>
  );
}
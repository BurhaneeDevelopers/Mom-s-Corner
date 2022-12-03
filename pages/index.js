import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Privacy from "../components/privacy-policy";
import Terms from "../components/terms-condition";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState } from "react";
import { SiBuymeacoffee } from "react-icons/si";
import { BsWhatsapp, BsArrowRight } from "react-icons/bs";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";

export default function Home({ blogs }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5575076125990523"
        crossOrigin="anonymous"
        loading="lazy"
      ></Script>
      <div className="main bg-gradient-to-r from-pink-300 to-pink-200">
        <section className="text-gray-600 body-font px-5 mx-10">
          <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center space-y-3">
              <h1 className="title-font sm:text-4xl text-[2rem] md:text-[3rem] mb-4 font-medium text-indigo-700">
                <span className="leading-[3rem]"> Your Best Guide </span> &quot;{" "}
                <span className="text-pink-800 welcome-text mt-2">
                  Mom&apos;s
                </span>{" "}
                Corner &quot;
              </h1>
              <p className="mb-8 leading-relaxed md:text-xl text-black">
                Eager to share everything I learn about raising a healthy, happy
                child !
              </p>

              <div className=" w-full md:justify-start justify-center items-end">
                <p className="text-indigo-700">
                  Explore Everything You Want :)
                </p>
                <span className="flex mt-2 flex-col md:flex-row">
                  <Link href={"#intro-blog"}>
                    <button className="xl:w-1/4 flex mx-auto md:mx-0 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg ">
                      <span className="mx-auto flex">
                        Explore <span>&nbsp;</span>
                        <BsArrowRight className="mt-[0.18rem] text-2xl" />{" "}
                      </span>
                    </button>
                  </Link>
                  <Link href={"/about"}>
                    <button className="xl:w-1/4 mt-3 md:mt-0 flex mx-auto md:mx-0 md:ml-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">
                      <span className="mx-auto flex">About Me</span>
                    </button>
                  </Link>
                </span>
              </div>
              <span className="text-sm mt-2 text-gray-500 mb-8 w-full">
                <Terms />
                and &nbsp;
                <Privacy />
              </span>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-cover bg-center rounded -mt-10">
              <Image
                className="object-cover object-top rounded "
                alt="hero"
                src="/hero-img.png"
                width={500}
                height={500}
                priority
                loading="eager"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center" id="intro-blog">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">
              Explore our <br /> Awesome{" "}
              <span className="text-indigo-500">Blogs</span>
            </h1>

            <div className="mt-2 ">
              <span className="inline-block w-40 h-1 bg-indigo-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-indigo-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-indigo-500 rounded-full"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((item) => {
              return (
                <div
                  key={item.slug.current}
                  className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl"
                >
                  <span className="inline-block rounded-full">
                    <Image
                      src="/logo.png"
                      alt="Mom's corner"
                      width={150}
                      height={100}
                      priority
                    />
                  </span>

                  <h1 className="text-2xl font-semibold text-gray-700 capitalize">
                    {item.title}
                  </h1>

                  <span className="text-gray-500">
                    <PortableText
                      content={item.content}
                      projectId="r6hwcp84"
                      dataset="production"
                      className="h-[9rem] truncate max-w-sm whitespace-normal"
                      serializers={{
                        h1: (props) => <h1 {...props} />,
                        li: ({ children }) => (
                          <li className="list-disc ml-7 mb-1">{children}</li>
                        ),
                      }}
                    />
                  </span>

                  <a
                    href="#"
                    className="flex items-center -mx-1 text-sm text-indigo-500 capitalize transition-colors duration-300 transform  hover:underline hover:text-indigo-600"
                  >
                    <div className="">
                      <Link href={"/blog/" + item.slug.current}>
                        <div className="">
                          <span className="mx-1">Read more</span>{" "}
                        </div>
                      </Link>
                    </div>

                    <svg
                      className="w-4 h-4 mx-1 rtl:-scale-x-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/blogs">
              <button className="btn bg-indigo-600 hover:bg-indigo-800 rounded-md border-0 my-auto">
                {" "}
                See All Blogs{" "}
                <span className="ml-3 -mt-[0.2rem]">
                  <BsArrowRight className="text-xl" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <SiBuymeacoffee className="h-[12vh] w-full lg:w-1/2 lg:h-1/2 text-pink-500" />
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-3xl font-bold tracking-tight text-indigo-700 xl:text-4xl">
              Support Me by buying me a coffee :)
            </h2>

            <p className="block max-w-2xl mt-4 text-xl text-gray-500">
              Support me in my journey of a blog writing by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.buymeacoffee.com/MomsCorner"
                className="underline hover:decoration-double font-bold text-indigo-600"
              >
                {" "}
                buying
              </a>{" "}
              me a coffee. It helps me write more blogs and inspire more and
              more mothers.
            </p>

            <div className="mt-6 sm:-mx-2">
              <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 mt-12">
        <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-3xl font-semibold capitalize lg:text-5xl text-indigo-600">
                Contact Me
              </h1>

              <p className="max-w-xl mt-6">
                Ask us everything and we would love to hear from you
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <AiOutlineMail className="mt-1 text-indigo-600" />
                  <span className="mx-2 text-white truncate w-72">
                    cornersmom53@gmail.com
                  </span>
                </p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-200 ">Follow me</h3>

                <div className="flex mt-4 -mx-1.5 ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-indigo-500"
                    href="https://www.buymeacoffee.com/MomsCorner"
                  >
                    <SiBuymeacoffee className="w-full h-full text-xl" />
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-indigo-500"
                    href=" https://www.instagram.com/sarrah_aliasgar/"
                  >
                    <AiOutlineInstagram className="w-full h-full text-xl" />
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-indigo-500"
                    href="https://twitter.com/sarahbharmal"
                  >
                    <AiOutlineTwitter className="w-full h-full text-xl" />
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-indigo-500"
                    href="https://wa.me/9940611281?text=Hi%20I%20found%20you%20on%20mommscorner.com"
                  >
                    <BsWhatsapp className="w-full h-full text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-pink-50 shadow-2xl rounded-xl lg:max-w-xl">
                <h1 className="text-2xl font-medium text-gray-700">
                  Contact Me
                </h1>

                <form
                  action="https://formsubmit.co/8fdd2ea16623ecc41fc7c2d3a2e5da7e"
                  method="POST"
                  className="mt-6"
                >
                  <input type="hidden" name="_captcha" value="false"></input>
                  <input type="hidden" name="_template" value="table" />
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Your Name"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="YourEmail@example.com"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      name="Message"
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      placeholder="Enter Your Message Here"
                    ></textarea>
                  </div>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://mommscorner.com/success"
                  ></input>
                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-50">
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "blog"][0..5]`;
  const blogs = await client.fetch(query);
  return {
    props: {
      blogs,
    },
  };
}

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SiBuymeacoffee } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";

const Queries = ({ faqs }) => {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
      </Head>
      <section className="min-h-screen bg-white">
        <div className="container px-6 lg:px-28 py-10 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-10">
            <div className="lg:w-1/2 lg:mx-10">
              <h1 className="text-3xl font-semibold capitalize text-indigo-700 lg:text-5xl">
                Let’s talk
              </h1>

              <p className="mt-4 text-gray-500">
                Ask us everything and we would love to hear from you
              </p>

              <form
                action="https://formsubmit.co/cornersmom53@gmail.com"
                method="POST"
                className="mt-12"
              >
                <input type="hidden" name="_captcha" value="false"></input>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Full Name
                    </label>
                    <input
                      name="Name"
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md0  focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Email address
                    </label>
                    <input
                      name="Email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md0  focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Message
                  </label>
                  <textarea
                    name="Message"
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-560  focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>

            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <Image
                width={400}
                height={400}
                className="hidden object-cover object-top mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                src="/whatsapp-img.jpg"
                alt=""
              />

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72">
                    +91 99406 11281
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72">
                    cornersmom53@gmail.com
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600 0 ">Follow me</h3>

                <div className="flex mt-4 -mx-1.5 ">
                  <a
                    target="_blank"
                    className="mx-1.5 text-gray-600 transition-colors duration-300 transform hover:text-indigo-700"
                    href="https://www.buymeacoffee.com/MomsCorner"
                  >
                    <SiBuymeacoffee className="w-full h-full text-xl" />
                  </a>

                  <a
                    target="_blank"
                    className="mx-1.5 text-gray-600 transition-colors duration-300 transform hover:text-indigo-700"
                    href=" https://www.instagram.com/sarrah_aliasgar/"
                  >
                    <AiOutlineInstagram className="w-full h-full text-xl" />
                  </a>

                  <a
                    target="_blank"
                    className="mx-1.5 text-gray-600 transition-colors duration-300 transform hover:text-indigo-700"
                    href="#"
                  >
                    <AiOutlineTwitter className="w-full h-full text-xl" />
                  </a>

                  <a
                    target="_blank"
                    className="mx-1.5 text-gray-600 transition-colors duration-300 transform hover:text-indigo-700"
                    href="tel:99406 11281"
                  >
                    <BsWhatsapp className="w-full h-full text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gradient-to-r from-pink-200 to-pink-100">
        <div class="container px-6 py-12 mx-auto">
          <h1 class="text-2xl font-semibold text-gray-800 lg:text-4xl">
            Frequently asked questions.
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div class="flex p-3 rounded-lg">
                <img src="/logo.png" className="w-1/2" alt="" srcset="" />
              </div>

              <div>
                <h1 class="text-xl font-semibold text-gray-700">
                  What can i expect at my first consultation?
                </h1>

                <p class="mt-2 text-sm text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident placeat, consequatur eveniet veritatis quos
                  dignissimos beatae dolores exercitationem laboriosam officia
                  magnam atque blanditiis illum doloremque magni ex corrupti
                  tempora quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Queries;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "faq"]`;
  const faqs = await client.fetch(query);
  return {
    props: {
      faqs,
    },
  };
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const About = ({ about }) => {
  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5575076125990523"
          crossorigin="anonymous"
        ></script>
      </Head>
      <header className="bg-gradient-to-r from-pink-300 to-pink-200">
        <div className="container px-6 lg:px-12 py-16 mx-auto">
          <div className="items-center lg:flex lg:ml-28">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
                  Subscribe To Our <span className="text-indigo-700">Blog</span>
                </h1>

                <p className="mt-4 text-gray-600">
                  be the first to know when our new{" "}
                  <span className="font-medium text-indigo-600">blog</span>{" "}
                  arrives
                </p>

                <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                  <form
                    action="https://formsubmit.co/8fdd2ea16623ecc41fc7c2d3a2e5da7e"
                    method="POST"
                  >
                    <input type="hidden" name="_template" value="table" />
                    <input
                      type="email"
                      name="Email-Subscriber"
                      className="px-4 py-2 text-gray-700 bg-white border rounded focus:border-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-indigo-300"
                      placeholder="Email Address"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-indigo-600 rounded lg:w-auto lg:mx-4 hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                      Subscribe
                    </button>
                    <input
                      type="hidden"
                      name="_next"
                      value="https://momscorner.netlify.app//success"
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <Image
                width={500}
                height={500}
                className="w-full h-full max-w-md"
                src="/email-campaign-bro.svg"
                alt="Subscribe-us"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          {about.map((item) => {
            return (
              <div key={item.slug.current} className="lg:w-4/6 mx-auto">
                <div className="rounded-lg h-96 overflow-hidden">
                  <Image
                    width={1000}
                    height={600}
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/mother-about.jpg"
                  />
                </div>

                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div
                      className="w-20 h-20 rounded-full bg-cover inline-flex items-center justify-center bg-gray-200 text-gray-400"
                      style={{
                        backgroundImage: `url(${builder
                          .image(item.aboutimage)
                          .width(200)
                          .url()})`,
                      }}
                    ></div>
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                        {item.name}
                      </h2>
                      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                      <p className="text-base">{item.title}</p>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-lg mb-4">
                      {item.metadesc}
                    </p>
                    <Link
                      href={"/blogs"}
                      className="text-indigo-500 inline-flex items-center"
                    >
                      <div className="text-indigo-500 inline-flex items-center cursor-pointer">
                        Read my blogs
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "about"]`;
  const about = await client.fetch(query);
  return {
    props: {
      about,
    },
  };
}

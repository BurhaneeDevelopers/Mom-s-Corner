import React from "react";
import Image from "next/image";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { AiOutlineSearch } from "react-icons/ai";
import Script from "next/script";
import Link from "next/link";

const Blogs = ({ blogs, faqs }) => {
  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  const handleSearch = () => {
    let searchInput = document
      .getElementById("search-input")
      .value.toLowerCase();
    let elements = document.querySelectorAll(".blog-title");
    let blog = document.querySelectorAll(".blog-div");
    let searchNotFound = document.getElementById("searchNotFound");

    for (let i = 0; i < elements.length; i++) {
      let match = blog[i].querySelectorAll(".blog-title")[0];

      if (match) {
        let textvalue = match.innerText || match.textContent;
        if (textvalue.toLowerCase().indexOf(searchInput) > -1) {
          searchNotFound.style.display = "none";
          blog[i].style.display = "";
        } else {
          blog[i].style.display = "none";
          searchNotFound.style.display = "flex";
        }
        if (textvalue.toLowerCase().indexOf(searchInput) > -1) {
          searchNotFound.style.opacity = 0;
        }
        if (searchInput == "") {
          searchNotFound.innerText = "Field Cannot Be Blank !";
        }
      }
    }
  };

  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5575076125990523"
        crossorigin="anonymous"
      ></Script>
      <section className="bg-white lg:px-28 ">
        <div className="md:flex w-full md:justify-start justify-center items-end mt-7 mx-5">
          <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 mb-2 md:mb-0">
            <label
              htmlFor="hero-field"
              className="leading-7 text-sm md:text-lg text-indigo-600"
            >
              Search anything here :)
            </label>
            <input
              type="search"
              id="search-input"
              placeholder="Search Anything You Want !"
              className="w-full mt-2 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-pink-200 focus:bg-transparent focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            onClick={handleSearch}
            className="flex text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg "
          >
            <AiOutlineSearch className="mt-1" /> <span>&nbsp;</span> Search
          </button>
        </div>
        <div className="container px-6 py-10 ">
          <div className="lg:flex lg:-mx-6 ">
            <div className="lg:w-3/4 max-h-[100vh] overflow-y-auto p-5 md:p-0 lg:px-6">
              <div
                className="mt-5 hidden text-center align-middle text-red-400 font-bold"
                id="searchNotFound"
              >
                Search not found ! Try searching from related topics Example:
                &nbsp; &quot;
                <Link href="/blog/pregnancy">
                  <a className="text-indigo-500 hover:underline"> Pregnancy </a>
                </Link>
                &quot;
              </div>
              {blogs.map((item) => {
                return (
                  <div key={item.slug.current} className="mb-16 mt-10 blog-div">
                    <div
                      className=" w-full h-80 xl:h-[28rem] rounded-xl bg-no-repeat bg-contain"
                      style={{
                        backgroundImage: `url(${builder
                          .image(item.blogimage)
                          .width(200)
                          .url()})`,
                      }}
                    ></div>
                    <div>
                      <p className="mt-6 text-sm text-indigo-500 uppercase">
                        Created By Sarrah Bharmal on {item.CreatedAt}
                      </p>

                      <h1 className="mt-4 text-5xl leading-tight text-gray-800 blog-title">
                        {item.title}
                      </h1>

                      <PortableText
                        className="portabletext text-justify"
                        content={item.content}
                        projectId="r6hwcp84"
                        dataset="production"
                        serializers={{
                          h1: (props) => (
                            <h1
                              style={{
                                marginTop: "1rem ",
                                marginBottom: "0.1rem",
                                fontSize: "2.1rem",
                              }}
                              {...props}
                            />
                          ),
                          h2: (props) => (
                            <h2
                              style={{
                                marginTop: "1rem ",
                                marginBottom: "0.1rem",
                                fontSize: "1.7rem",
                              }}
                              {...props}
                            />
                          ),
                          h3: (props) => (
                            <h3
                              style={{
                                marginTop: "1rem",
                                marginBottom: "0.1rem",
                                fontSize: "1.4rem",
                              }}
                              {...props}
                            />
                          ),
                          h4: (props) => (
                            <h4
                              style={{
                                marginTop: "1rem ",
                                marginBottom: "0.1rem",
                                fontSize: "1.2rem",
                              }}
                              {...props}
                            />
                          ),
                          h5: (props) => (
                            <h5
                              style={{
                                marginTop: "1rem ",
                                marginBottom: "0.1rem",
                                fontSize: "1rem",
                              }}
                              {...props}
                            />
                          ),
                          h6: (props) => (
                            <h6
                              style={{
                                marginTop: "1rem ",
                                marginBottom: "0.1rem",
                                fontSize: "0.8rem",
                              }}
                              {...props}
                            />
                          ),
                          li: ({ children }) => (
                            <li className="list-disc ml-7 mb-1">{children}</li>
                          ),
                        }}
                      />

                      <div className="items-start mt-6">
                        {/* <div
                          className="bg-cover w-12 h-12 rounded-full"
                          style={{
                            backgroundImage: `url(${builder
                              .image(item.blogprofileimage)
                              .width(200)
                              .url()})`,
                          }}
                        ></div> */}

                        <div className="">
                          <h1 className="text-sm text-indigo-700">
                            <a href="https://www.instagram.com/sarrah_aliasgar/">
                              {" "}
                              Created by Sarrah Bharmal{" "}
                            </a>
                          </h1>
                          <p className="text-sm text-gray-500">
                            {" "}
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr className="flex bg-pink-500 mt-5" />

            <div className=" mt-8 lg:w-1/4 lg:mt-0 lg:px-6 max-h-[70vh] overflow-y-auto">
              <h1 className="text-indigo-700 text-3xl mb-10">Related Blogs</h1>
              {blogs.map((item) => {
                return (
                  <div key={item.slug.title} className="flex mb-5">
                    <div>
                      <h3 className="text-indigo-500 capitalize">
                        {item.title}
                      </h3>

                      <Link
                        href={"/blog/" + item.slug.current}
                        className="block mt-2 font-medium text-gray-700 hover:text-black-500 "
                      >
                        {item.metadesc}
                      </Link>
                      <hr className="my-6 border-gray-200 dark:border-gray-700" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-pink-200 to-pink-100 mb-16">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl text-center font-semibold text-indigo-700 lg:text-4xl">
            Frequently asked questions.
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {faqs.map((item) => {
              return (
                <div key={item.slug.current}>
                  <div className="grid p-3 rounded-lg">
                    <Image
                      className="object-contain"
                      src="/logo.png"
                      width={200}
                      height={120}
                      alt="logo"
                    />
                  </div>

                  <div>
                    <h1 className="text-xl font-semibold text-center text-indigo-600 mb-5">
                      {item.title}
                    </h1>

                    <span className="text-md text-gray-500 text-center">
                      <PortableText
                        // Pass in block content straight from Sanity.io
                        content={item.content}
                        projectId="r6hwcp84"
                        dataset="production"
                        // Optionally override marks, decorators, blocks, etc. in a flat
                        // structure without doing any gymnastics
                        serializers={{
                          h1: (props) => (
                            <h1 style={{ color: "" }} {...props} />
                          ),
                          li: ({ children }) => (
                            <li className="list-disc ml-7 mb-1">{children}</li>
                          ),
                        }}
                      />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);
  const queries = `*[_type == "faq"]`;
  const faqs = await client.fetch(queries);
  return {
    props: {
      blogs,
      faqs,
    },
  };
}

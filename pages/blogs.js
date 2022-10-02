import React from "react";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

const Blogs = ({ blogs }) => {
  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
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
          blog[i].style.display = "";
          searchNotFound.style.display = "none"
          break;
        } else {
          blog[i].style.display = "none";
          searchNotFound.style.display = "flex"
        }
      }
    }
  };

  return (
    <>
      <section className="bg-white lg:px-28 ">
        <div className="container px-6 py-10 ">
          <div className="md:flex w-full md:justify-start justify-center items-end">
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
              className="flex text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg"
            >
              <AiOutlineSearch className="mt-1" /> <span>&nbsp;</span> Search
            </button>
          </div>

          <div className="lg:flex lg:-mx-6 ">
            <div className="lg:w-3/4 lg:px-6 max-h-[100vh] overflow-y-auto">
              <div
                className="mt-5 hidden text-center align-middle text-red-400 font-bold"
                id="searchNotFound"
              >
                Search not found ! Try searching &nbsp; &quot;
                <Link href="/blog/pregnancy">
                  <a className="text-indigo-500 hover:underline"> Pregnancy </a>
                </Link>
                &quot;
              </div>
              {blogs.map((item) => {
                return (
                  <div key={item.slug.title} className="mb-16 mt-10 blog-div">
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

                      <h1 className="max-w-lg mt-4 text-4xl font-semibold leading-tight text-gray-800 blog-title">
                        {item.title}
                      </h1>

                      <PortableText
                        content={item.content}
                        projectId="r6hwcp84"
                        dataset="production"
                        serializers={{
                          h1: (props) => (
                            <h1 style={{ color: "" }} {...props} />
                          ),
                          li: ({ children }) => (
                            <li className="special-list-item">{children}</li>
                          ),
                        }}
                      />
                      <div className="flex items-center mt-6">
                        <div
                          className="bg-cover w-12 h-12 rounded-full"
                          style={{
                            backgroundImage: `url(${builder
                              .image(item.blogprofileimage)
                              .width(200)
                              .url()})`,
                          }}
                        ></div>

                        <div className="mx-4">
                          <h1 className="text-sm text-gray-700">
                            Sarrah Bharmal
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
                    <div
                      className="bg-cover w-12 h-12 rounded-full m-2"
                      style={{
                        backgroundImage: `url(${builder
                          .image(item.blogimage)
                          .width(200)
                          .url()})`,
                      }}
                    ></div>
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
  return {
    props: {
      blogs,
    },
  };
}

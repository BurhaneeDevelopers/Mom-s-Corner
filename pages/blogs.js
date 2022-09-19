import React from "react";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const Blogs = ({ blogs }) => {
  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  return (
    <div>
      <section className="bg-white lg:px-28">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6 ">
            <div className="lg:w-3/4 lg:px-6 max-h-[100vh] overflow-y-auto">
              {blogs.map((item) => {
                return (
                  <div key={item.slug.title} className="mb-16">
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
                        Updated By Sarrah Bharmal on {item.CreatedAt}
                      </p>

                      <h1 className="max-w-lg mt-4 text-4xl font-semibold leading-tight text-gray-800">
                        {item.title}
                      </h1>

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
                            {item.metadesc}
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
                                <li className="special-list-item">
                                  {children}
                                </li>
                              ),
                            }}
                          />
                          <p className="text-sm text-gray-500">
                            Lead Developer
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
                        className="block mt-2 font-medium text-gray-700 hover:underline hover:text-black-500 "
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
    </div>
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

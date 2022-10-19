import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import { FaTelegramPlane } from "react-icons/fa";
import imageUrlBuilder from "@sanity/image-url";
import Script from "next/script";
import Link from "next/link";

const Slug = ({ blog, blogs }) => {
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
      ></Script>
      <section className="bg-white lg:px-28">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6 max-h-[100vh] overflow-y-auto blog-scroll">
              <div className="">
                <div
                  className=" w-full h-80 xl:h-[28rem] rounded-xl bg-no-repeat bg-contain"
                  style={{
                    backgroundImage: `url(${builder
                      .image(blog.blogimage)
                      .width(200)
                      .url()})`,
                  }}
                ></div>

                <div>
                  <p className="mt-6 text-sm text-indigo-500 uppercase">
                    Updated By Sarrah Bharmal on {blog.CreatedAt}
                  </p>

                  <h1 className="max-w-lg mt-4 text-4xl font-semibold leading-tight text-gray-800">
                    {blog.title}
                  </h1>
                  <PortableText
                    className="portabletext text-justify"
                    content={blog.content}
                    projectId="r6hwcp84"
                    dataset="production"
                    serializers={{
                      h1: (props) => (
                        <h1
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "2.3rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      h2: (props) => (
                        <h2
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1.9rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      h3: (props) => (
                        <h3
                          style={{
                            marginTop: "1rem",
                            marginBottom: "0.1rem",
                            fontSize: "1.6rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      h4: (props) => (
                        <h4
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1.4rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      h5: (props) => (
                        <h5
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      h6: (props) => (
                        <h6
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1rem",
                            fontWeight: "bold",
                          }}
                          {...props}
                        />
                      ),
                      li: ({ children }) => (
                        <li className="list-disc ml-7 mb-1">{children}</li>
                      ),
                    }}
                  />
                  <div className="flex items-center mt-6">
                    {/* gi */}

                    <div className="">
                      <h1 className="text-sm text-start text-indigo-700">
                        <a href="https://www.instagram.com/sarrah_aliasgar/">
                          {" "}
                          Writtern by Sarrah Bharmal{" "}
                        </a>
                      </h1>
                      <p className="text-sm text-gray-500"> {blog.category}</p>
                    </div>
                  </div>
                </div>

                <div className="comment mt-16 px-2">
                  <h1 className="text-indigo-500 text-xl">
                    Comment your feedback or ask any doubts related to this blog
                  </h1>
                  <form
                    action="https://formsubmit.co/8fdd2ea16623ecc41fc7c2d3a2e5da7e"
                    method="POST"
                  >
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false"></input>
                    <div className="flex-1 px-2 md:w-1/2 mt-5">
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Full Name
                      </label>
                      <input
                        name="Name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-pink-100 border border-gray-200 rounded-md0  focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="flex-1 px-2 md:w-1/2 mt-5">
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Email Address
                      </label>
                      <input
                        name="Email"
                        type="email"
                        placeholder="YourEmail@example.com"
                        required
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-pink-100 border border-gray-200 rounded-md0  focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="md:w-1/2 mt-5">
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Feedback/Doubts
                      </label>
                      <textarea
                        name="Feedback/Doubts"
                        required
                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-pink-100 border border-gray-200 rounded-md md:h-560  focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <input
                      type="hidden"
                      name="_next"
                      value="https://mommscorner.com/success"
                    ></input>
                    <button className="w-full md:w-1/2 flex items-center px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                      <span className="mx-auto flex">
                        <FaTelegramPlane className="text-xl" />{" "}
                        <span>&nbsp;</span> Submit Your Message
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <hr className="flex bg-pink-500 mt-5" />

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6 max-h-[70vh] overflow-y-scroll ml-5">
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
                        className="block mt-2 font-medium text-gray-700 hover:text-black-500"
                      >
                        <span className="underline cursor-pointer">
                          {item.metadesc}
                        </span>
                      </Link>
                      <hr className="my-6 border-gray-200 dark:border-gray-700" />
                    </div>
                  </div>
                );
              })}

              <div className="text-center">
                <h1 className="text-lg text-center font-semibold text-indigo-700 lg:text-xl">
                  Frequently asked questions.
                </h1>
                <hr className="bg-black h-[0.1rem] ml-1" />
                <div className="text-md text-pink-600 mt-2 text-center flex space-x-2 justify-center">
                  <PortableText
                    className="portabletext text-justify text-md"
                    content={blog.faq}
                    projectId="r6hwcp84"
                    dataset="production"
                    serializers={{
                      h1: (props) => (
                        <h1
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "2.3rem",
                            fontWeight: "bold",
                            color: "blueviolet",
                          }}
                          {...props}
                        />
                      ),
                      h2: (props) => (
                        <h2
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1.9rem",
                            fontWeight: "bold",
                            color: "blueviolet",
                          }}
                          {...props}
                        />
                      ),
                      h3: (props) => (
                        <h3
                          style={{
                            marginTop: "1rem",
                            marginBottom: "0.1rem",
                            fontSize: "1.6rem",
                            fontWeight: "bold",
                            color: "blueviolet",
                          }}
                          {...props}
                        />
                      ),
                      h4: (props) => (
                        <h4
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1.4rem",
                            fontWeight: "bold",
                            color: "blueviolet",
                          }}
                          {...props}
                        />
                      ),
                      h5: (props) => (
                        <h5
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "blueviolet",
                          }}
                          {...props}
                        />
                      ),
                      h6: (props) => (
                        <h6
                          style={{
                            marginTop: "1rem ",
                            marginBottom: "0.1rem",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "blueviolet",
                          }}
                          {...props}
                        />
                      ),
                      li: ({ children }) => (
                        <li className="list-disc ml-7 mb-1">{children}</li>
                      ),
                    }}
                  />
                </div>
                <div className="text-sm text-indigo-600 mt-5">
                  Your question not answered ? Try sending us your{" "}
                  <Link href="/queries">
                    <span className="text-pink-500 font-bold cursor-pointer">
                      feedback/query
                    </span>
                  </Link>{" "}
                  we will try to answer it very soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'] [0]`;
  const blog = await client.fetch(query);
  const queries = `*[_type == "blog"]`;
  const blogs = await client.fetch(queries);
  return {
    props: {
      blog,
      blogs,
    },
  };
};

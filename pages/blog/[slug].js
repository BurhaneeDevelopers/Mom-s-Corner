import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";

const Slug = ({ blog }) => {
  const client = createClient({
    projectId: "r6hwcp84",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  return (
    <>
      <section className="bg-white lg:px-28">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6 max-h-[100vh] overflow-y-auto">
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
                    Sarrah Bharmal
                  </p>

                  <h1 className="max-w-lg mt-4 text-4xl font-semibold leading-tight text-gray-800">
                    {blog.title}
                  </h1>
                  <PortableText
                    content={blog.content}
                    projectId="r6hwcp84"
                    dataset="production"
                    serializers={{
                      h1: (props) => <h1 style={{ color: "" }} {...props} />,
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
                          .image(blog.blogprofileimage)
                          .width(200)
                          .url()})`,
                      }}
                    ></div>

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700">Sarrah Bharmal</h1>
                      <p className="text-sm text-gray-500">Women</p>
                    </div>
                  </div>
                </div>

                <div className="comment mt-16">
                  <h1 className="text-indigo-500 text-xl">
                    Comment your feedback or ask any doubts related to this blog
                  </h1>
                  <form
                    action="https://formsubmit.co/cornersmom53@gmail.com"
                    method="post"
                  >
                    <input type="hidden" name="_captcha" value="false"></input>
                    <div className="flex-1 px-2 w-1/2 mt-5">
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
                    <div className="flex-1 px-2 w-1/2 mt-5">
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
                    <div className="w-1/2 mt-5">
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
                      value="http://localhost:3000/success"
                    ></input>
                    <button className="w-1/2 px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                      Submit Your Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h3 className="text-indigo-500 capitalize">{blog.title}</h3>

                <a
                  href={"/blog/" + blog.slug.current}
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-black-500 "
                >
                  {blog.metadesc}
                </a>
              </div>

              <hr className="my-6 border-gray-200" />
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
  return {
    props: {
      blog,
    },
  };
};
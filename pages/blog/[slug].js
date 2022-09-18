// import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// const router = useRouter();
// const { slug } = router.query;
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
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700">Sarrah Bharmal</h1>
                      <p className="text-sm text-gray-500">Women</p>
                    </div>
                  </div>
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

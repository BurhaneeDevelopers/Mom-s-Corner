import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
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
      ></Script>
      {/* ---modal-privay-policy---- */}
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <label htmlFor="my-modal-1" className="modal cursor-pointer">
        <label
          className="modal-box relative bg-pink-200 w-11/12 max-w-5xl"
          htmlFor=""
        >
          <label
            htmlFor="my-modal-1"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-pink-400 text-gray-900 border-0 hover:bg-pink-600 hover:text-white"
          >
            <span className="mt-1"> ✕ </span>
          </label>
          <h1 className="text-2xl font-bold text-gray-900">
            Terms And Condition
          </h1>
          <div className="text-gray-900 text-justify mt-5">
            <h3 className="text-lg font-bold mb-2">
              Welcome to Mom&apos;s Corner!
            </h3>

            <p className="mb-2">
              These terms and conditions outline the rules and regulations for
              the use of Mom&apos;s Corner&apos;s Website, located at
              <a href="https://mommscorner.com">Mommscorner.com</a>
            </p>

            <p className="mb-2">
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use Mom&apos;s Corner if you do not
              agree to take all of the terms and conditions stated on this page.
            </p>

            <p className="mb-5">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to
              you, the person log on this website and compliant to the Company’s
              terms and conditions. &quot;The Company&quot;,
              &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and
              &quot;Us&quot;, refers to our Company. &quot;Party&quot;,
              &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client
              and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our
              assistance to the Client in the most appropriate manner for the
              express purpose of meeting the Client’s needs in respect of
              provision of the Company’s stated services, in accordance with and
              subject to, prevailing law of Netherlands. Any use of the above
              terminology or other words in the singular, plural, capitalization
              and/or he/she or they, are taken as interchangeable and therefore
              as referring to same.
            </p>

            <h3 className="text-lg font-bold mb-2">
              <strong>License</strong>
            </h3>

            <p className="mb-2">
              Unless otherwise stated, Mom&apos;s Corner and/or its licensors
              own the intellectual property rights for all material on
              Mom&apos;s Corner. All intellectual property rights are reserved.
              You may access this from Mom&apos;s Corner for your own personal
              use subjected to restrictions set in these terms and conditions.
            </p>

            <p className="mb-2 font-bold">You must not:</p>
            <ul>
              <li>Republish material from Mom&apos;s Corner</li>
              <li>Sell, rent or sub-license material from Mom&apos;s Corner</li>
              <li>
                Reproduce, duplicate or copy material from Mom&apos;s Corner
              </li>
              <li>Redistribute content from Mom&apos;s Corner</li>
            </ul>

            <p className="mb-2">
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              Mom&apos;s Corner does not filter, edit, publish or review
              Comments prior to their presence on the website. Comments do not
              reflect the views and opinions of Mom&apos;s Corner,its agents
              and/or affiliates. Comments reflect the views and opinions of the
              person who post their views and opinions. To the extent permitted
              by applicable laws, Mom&apos;s Corner shall not be liable for the
              Comments or for any liability, damages or expenses caused and/or
              suffered as a result of any use of and/or posting of and/or
              appearance of the Comments on this website.
            </p>

            <p className="mb-2">
              Mom&apos;s Corner reserves the right to monitor all Comments and
              to remove any Comments which can be considered inappropriate,
              offensive or causes breach of these Terms and Conditions.
            </p>

            <p className="mb-2 font-bold">You warrant and represent that:</p>

            <ul className="mb-2">
              <li className="list-disc ml-3">
                You are entitled to post the Comments on our website and have
                all necessary licenses and consents to do so;
              </li>
              <li className="list-disc ml-3">
                The Comments do not invade any intellectual property right,
                including without limitation copyright, patent or trademark of
                any third party;
              </li>
              <li className="list-disc ml-3">
                The Comments do not contain any defamatory, libelous, offensive,
                indecent or otherwise unlawful material which is an invasion of
                privacy
              </li>
              <li className="list-disc ml-3">
                The Comments will not be used to solicit or promote business or
                custom or present commercial activities or unlawful activity.
              </li>
            </ul>

            <p className="mb-5">
              You hereby grant Mom&apos;s Corner a non-exclusive license to use,
              reproduce, edit and authorize others to use, reproduce and edit
              any of your Comments in any and all forms, formats or media.
            </p>

            <h3 className="text-lg font-bold mb-2">
              <strong>Hyperlinking to our Content</strong>
            </h3>

            <p className="mb-2">
              The following organizations may link to our Website without prior
              written approval:
            </p>

            <ul className="mb-2">
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>
                Online directory distributors may link to our Website in the
                same manner as they hyperlink to the Websites of other listed
                businesses; and
              </li>
              <li>
                System wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Web site.
              </li>
            </ul>

            <p className="mb-2">
              These organizations may link to our home page, to publications or
              to other Website information so long as the link: (a) is not in
              any way deceptive; (b) does not falsely imply sponsorship,
              endorsement or approval of the linking party and its products
              and/or services; and (c) fits within the context of the linking
              party’s site.
            </p>

            <p className="mb-2">
              We may consider and approve other link requests from the following
              types of organizations:
            </p>

            <ul className="mb-2">
              <li>
                commonly-known consumer and/or business information sources;
              </li>
              <li>dot.com community sites;</li>
              <li>associations or other groups representing charities;</li>
              <li>online directory distributors;</li>
              <li>internet portals;</li>
              <li>accounting, law and consulting firms; and</li>
              <li>educational institutions and trade associations.</li>
            </ul>

            <p className="mb-2">
              We will approve link requests from these organizations if we
              decide that: (a) the link would not make us look unfavorably to
              ourselves or to our accredited businesses; (b) the organization
              does not have any negative records with us; (c) the benefit to us
              from the visibility of the hyperlink compensates the absence of
              Mom&apos;s Corner; and (d) the link is in the context of general
              resource information.
            </p>

            <p className="mb-2">
              These organizations may link to our home page so long as the link:
              (a) is not in any way deceptive; (b) does not falsely imply
              sponsorship, endorsement or approval of the linking party and its
              products or services; and (c) fits within the context of the
              linking party’s site.
            </p>

            <p className="mb-2">
              If you are one of the organizations listed in paragraph 2 above
              and are interested in linking to our website, you must inform us
              by sending an e-mail to Mom&apos;s Corner. Please include your
              name, your organization name, contact information as well as the
              URL of your site, a list of any URLs from which you intend to link
              to our Website, and a list of the URLs on our site to which you
              would like to link. Wait 2-3 weeks for a response.
            </p>

            <p className="mb-2">
              Approved organizations may hyperlink to our Website as follows:
            </p>

            <ul className="mb-2">
              <li>By use of our corporate name; or</li>
              <li>
                By use of the uniform resource locator being linked to; or
              </li>
              <li>
                By use of any other description of our Website being linked to
                that makes sense within the context and format of content on the
                linking party’s site.
              </li>
            </ul>

            <p className="mb-5">
              No use of Mom&apos;s Corner logo or other artwork will be allowed
              for linking absent a trademark license agreement.
            </p>

            <h3 className="text-lg font-bold mb-2">
              <strong>iFrames</strong>
            </h3>

            <p className="mb-5">
              Without prior approval and written permission, you may not create
              frames around our Webpages that alter in any way the visual
              presentation or appearance of our Website.
            </p>

            <h3 className="text-lg font-bold mb-2">
              <strong>Content Liability</strong>
            </h3>

            <p className="mb-5">
              We shall not be hold responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that is rising on your Website. No link(s) should appear on
              any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>

            <h3 className="text-lg font-bold mb-2">
              <strong>Your Privacy</strong>
            </h3>

            <p className="mb-5">Please read Privacy Policy</p>

            <h3 className="text-lg font-bold mb-2">
              <strong>Reservation of Rights</strong>
            </h3>

            <p className="mb-5">
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amen these terms and conditions and it’s linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>

            <h3 className="text-lg font-bold mb-2">
              <strong>Removal of links from our website</strong>
            </h3>

            <p className="mb-2">
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us any moment. We will
              consider requests to remove links but we are not obligated to or
              so or to respond to you directly.
            </p>

            <p className="mb-5">
              We do not ensure that the information on this website is correct,
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>

            <h3 className="text-lg font-bold mb-2">
              <strong>Disclaimer</strong>
            </h3>

            <p className="mb-2">
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>

            <ul className="mb-2">
              <li>
                limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>

            <p className="mb-2">
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort and
              for breach of statutory duty.
            </p>

            <p className="mb-5">
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
          </div>
        </label>
      </label>
      {/* ---terms--- */}
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <label htmlFor="my-modal-2" className="modal cursor-pointer">
        <label
          className="modal-box relative bg-pink-200 w-11/12 max-w-5xl"
          htmlFor=""
        >
          <label
            htmlFor="my-modal-2"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-pink-400 text-gray-900 border-0 hover:bg-pink-600 hover:text-white"
          >
            <span className="mt-1"> ✕ </span>
          </label>
          <h3 className="text-xl font-bold text-gray-900">Privacy Policy</h3>
          <div className="py-4 text-gray-900 text-justify">
            <h1 className="text-lg mb-2 font-bold">
              Privacy Policy for Mom&apos;s Corner
            </h1>

            <p className="mb-5">
              At Mom&apos;s Corner, accessible from{" "}
              <a
                href="https://mommscorner.com"
                className="text-indigo-700 hover:underline"
              >
                Mommscorner.com
              </a>
              , one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by Mom&apos;s Corner and how we use it. If
              you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <p className="mb-5">
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Mom&apos;s Corner. This policy
              is not applicable to any information collected offline or via
              channels other than this website.
            </p>

            <h2 className="text-xl font-bold mb-2">Consent</h2>

            <p className="mb-5">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>

            <h2 className="text-xl font-bold mb-2">Information we collect</h2>

            <p className="mb-2">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information. If
              you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p className="mb-5">
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>

            <h2 className="text-xl font-bold mb-2">
              How we use your information
            </h2>

            <p>
              We use the information we collect in various ways, including to:
            </p>

            <ul className="mb-5">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="text-xl font-bold mb-2">Log Files</h2>

            <p className="mb-5">
              Mom&apos;s Corner follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users movement on the
              website, and gathering demographic information.
            </p>

            <h2 className="text-xl font-bold mb-2">
              Google DoubleClick DART Cookie
            </h2>

            <p className="mb-5">
              Google is one of a third-party vendor on our site. It also uses
              cookies, known as DART cookies, to serve ads to our site visitors
              based upon their visit to www.website.com and other sites on the
              internet. However, visitors may choose to decline the use of DART
              cookies by visiting the Google ad and content network Privacy
              Policy at the following URL –{" "}
              <a href="https://policies.google.com/technologies/ads">
                https://policies.google.com/technologies/ads
              </a>
            </p>

            <h2 className="text-xl font-bold mb-2">Our Advertising Partners</h2>

            <p>
              Some of advertisers on our site may use cookies and web beacons.
              Our advertising partners are listed below. Each of our advertising
              partners has their own Privacy Policy for their policies on user
              data. For easier access, we hyperlinked to their Privacy Policies
              below.
            </p>

            <ul className="mb-5">
              <li>
                <p>Google</p>
                <p>
                  <a href="https://policies.google.com/technologies/ads">
                    https://policies.google.com/technologies/ads
                  </a>
                </p>
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Advertising Partners Privacy Policies
            </h2>

            <p className="mb-2">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Mom&apos;s Corner. Third-party ad
              servers or ad networks uses technologies like cookies, JavaScript,
              or Web Beacons that are used in their respective advertisements
              and links that appear on Mom&apos;s Corner, which are sent
              directly to users browser. They automatically receive your IP
              address when this occurs. These technologies are used to measure
              the effectiveness of their advertising campaigns and/or to
              personalize the advertising content that you see on websites that
              you visit.
            </p>

            <p className="mb-5">
              Note that Mom&apos;s Corner has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>

            <h2 className="text-xl font-bold mb-2">
              Third Party Privacy Policies
            </h2>

            <p className="mb-2">
              Mom&apos;s Corner Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options.{" "}
            </p>

            <p className="mb-5">
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers
              respective websites.
            </p>

            <h2 className="text-xl font-bold mb-2">
              GDPR Data Protection Rights
            </h2>

            <p className="mb-2">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <li className="mb-2">
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </li>
            <li className="mb-2">
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </li>
            <li className="mb-2">
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </li>
            <li className="mb-2">
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </li>
            <li className="mb-2">
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </li>
            <li className="mb-2">
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </li>
            <li className="mb-5">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </li>

            <h2 className="text-xl font-bold mb-2">
              Children&apos;s Information
            </h2>

            <p className="mb-2">
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p>
              Mom&apos;s Corner does not knowingly collect any Personal
              Identifiable Information from children under the age of 13. If you
              think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately and
              we will do our best efforts to promptly remove such information
              from our records.
            </p>
          </div>
        </label>
      </label>
      {/* ---modal-privay-policy---- */}
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
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                <span className="font-bold hover:underline cursor-pointer">
                  <label htmlFor="my-modal-1">Terms & Condition &nbsp;</label>
                </span>
                and &nbsp;
                <span className="font-bold hover:underline cursor-pointer">
                  <label htmlFor="my-modal-2">Privacy Policy</label>
                </span>
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-cover bg-center rounded -mt-10">
              <Image
                className="object-cover object-top rounded "
                alt="hero"
                src="/hero-img.png"
                width={500}
                height={500}
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
            <button className="btn bg-indigo-600 hover:bg-indigo-800 rounded-md border-0 my-auto">
              See All Blogs{" "}
              <span className="ml-3 -mt-[0.2rem]">
                <BsArrowRight className="text-xl"/>
              </span>
            </button>
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

import "../styles/globals.css";
import Navbar from "../components/navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  });
  return (
    <>
      <Head>
        <title>Mom&apos;s Corner - The best guide for moms</title>
        <meta name="description" content="We provide you blogs on how to take care of your baby. We offer information about the need for a new mother to take care of her baby and tips on what to do in each stage of your child's life." />
        <meta name="keywords" content="baby, parenting tips, baby blog, blog,  baby health blogs, baby health articles, baby health website, best baby health blogs, best baby health websites, baby health sites" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <LoadingBar
        color="#ce1f7e"
        progress={progress}
        height={5}
        className="rounded-full"
        waitingTime = {400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

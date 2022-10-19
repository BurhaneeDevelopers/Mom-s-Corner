import "../styles/globals.css";
import Navbar from "../components/navbar";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import LoadingBar from "react-top-loading-bar";
import { GoogleAnalytics } from "nextjs-google-analytics";

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
        <meta
          name="description"
          content="Mommscorner.com is a website dedicated to moms, moms-to-be, and families. With articles on parenting, family life, and health."
        />
        <meta rel="conanical" content="https://mommscorner.com/blogs" />
        <meta
          name="keywords"
          content="mommscorner, moms corner, parenting, mom, baby health, children health, mother health, pregnancy health, maternal health, pregnancy symptoms, baby, postpartum, mom guide"
        />
        <link rel="shortcut icon" href="favicon.jpg" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="google-site-verification"
          content="PD1qjR5OecZPYeiKxb0xIjC0DO3EJTIEEPIWCkpd4Mg"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5575076125990523"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <LoadingBar
        color="#ce1f7e"
        progress={progress}
        height={5}
        className="rounded-full"
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <GoogleAnalytics gaMeasurementId="G-6ECHNL4VF3" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

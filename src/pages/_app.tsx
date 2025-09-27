import { NextComponentType } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";

interface MyAppProps {
  Component: NextComponentType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Head>
        <title>Oscar Nieto Espitia | Data Analyst & IT Systems Specialist</title>
        <meta name="description" content="Oscar Nieto Espitia - Data Analyst & IT Systems Specialist." />
        <meta name="keywords" content="Oscar Nieto Espitia, Data Analyst, Power BI, Python, Proxmox, Cloudflare, IT Systems Specialist" />
        <meta name="author" content="Oscar Eduardo Nieto Espitia" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div className="grid grid-cols-12 gap-6 px-5 my-10 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-20 ">
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
          <Navbar />
          <Component {...pageProps} />
          <Analytics />
        </div>
        <div className="col-span-12 lg:col-span-3 ">
          <div className="flex flex-col justify-center h-full gap-6 p-4 text-base text-center md:text-center bg-newGray dark:bg-dark-500 rounded-2xl shadow-custom-light dark:shadow-custom-dark min-h-[60vh] md:min-h-[80vh] overflow-y-auto">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
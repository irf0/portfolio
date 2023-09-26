import dynamic from "next/dynamic";
import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import Provider from "./providers";
const Footer = dynamic(() => import("./_components/Footer"));

const inter = Inter({ subsets: ["latin"] });

export const meta = {
  title: "Irfan | Web Developer | Mobile Developer",
  description: "Skilled Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#424242" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mohammad Irfan" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mirfan3053" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>

      <body
        className={`${inter.className}sm:p-2 p-4 selection:bg-[#00e676] selection:dark:text-gray-700 overflow-auto dark:bg-gray-950 dark:text-gray-300 bg-slate-100 text-gray-700`}
      >
        <Provider>
          <header>
            <Navbar />
          </header>
          <main> {children}</main>
        </Provider>
        <footer className="border-t border-gray-300 dark:border-gray-800">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

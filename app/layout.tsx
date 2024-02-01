"use client";

import "./globals.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-toastify/dist/ReactToastify.css";

import { NextSeo } from 'next-seo';
import { Poppins } from "next/font/google";
import { NavBar } from "@/components/layout/NavBar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { ToastContainer, toast } from "react-toastify";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});
import StateProvider from "@/components/provider/StateProvider";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StateProvider>
        <html lang="en">
          <Head>
            <title>
              Nahusenay International Hotel - Luxury Accommodation in Addis
              Ababa, Ethiopia
            </title>
            <meta
              name="google-site-verification"
              content="_4otHB7Gq6ybQ-TtQhIv__Em9NNHdcY-Ew5uGq-_U1g"
            />
            <meta
              name="description"
              content="Experience luxury at Nahusenay International Hotel. Our [location]-based hotel offers top-notch accommodation, excellent amenities, and a memorable stay. Book now for an unforgettable experience."
            ></meta>
            <NextSeo
              title="Nahusenay International Hotel - Luxury Accommodation"
              description="Welcome to Nahusenay International Hotel, where luxury meets comfort. Book your stay for a memorable experience."
              openGraph={{
                type: "website",
                locale: "en_US",
                url: "https://web.nahusenayinternationalhotel.com",
                site_name: "Nahusenay International Hotel",
              }}
              // Include "Hotel" schema markup
              additionalMetaTags={[
                {
                  name: "Hotel Name",
                  content: "Nahusenay International Hotel",
                },
                {
                  name: "description",
                  content: "Luxury Accommodation in [City, Country]",
                },
                {
                  name: "itemprop",
                  content: "Hotel",
                },
                // Add more Hotel schema properties as needed
              ]}
            />
          </Head>
          <body className={`flex flex-col ${inter.className}`}>
            <header>
              <NavBar />
            </header>
            <main className="mt-20 min-h-screen">{children}</main>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <Footer />
          </body>
        </html>
      </StateProvider>
    </LocalizationProvider>
  );
}

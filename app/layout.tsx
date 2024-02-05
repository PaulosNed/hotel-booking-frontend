import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Poppins } from "next/font/google";
import { NavBar } from "@/components/layout/NavBar";

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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Nahusenay International Hotel - Luxury Accommodation in Addis Ababa, Ethiopia",
    template: "%s | Nahusenay International Hotel",
  },
  description:
    "Experience luxury at Nahusenay International Hotel. Our Ethiopia-based hotel offers top-notch accommodation, excellent amenities, and a memorable stay. Book now for an unforgettable experience.",
  verification: {
    google: "_4otHB7Gq6ybQ-TtQhIv__Em9NNHdcY-Ew5uGq-_U1g",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nahusenayhotel",
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StateProvider>
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
      </StateProvider>
    </html>
  );
}

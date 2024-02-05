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
  title: "Nahusenay International Hotel - Luxury Accommodation in Addis Ababa, Ethiopia",
  description: "Experience luxury at Nahusenay International Hotel. Our Ethiopia-based hotel offers top-notch accommodation, excellent amenities, and a memorable stay. Book now for an unforgettable experience.",
  verification: {
    google: "_4otHB7Gq6ybQ-TtQhIv__Em9NNHdcY-Ew5uGq-_U1g",
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <StateProvider>
        <html lang="en">
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
  );
}

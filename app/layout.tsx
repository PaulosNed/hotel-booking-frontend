"use client";

import "./globals.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import 'react-toastify/dist/ReactToastify.css';

import { Poppins } from "next/font/google";
import { NavBar } from "@/components/layout/NavBar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { ToastContainer, toast } from "react-toastify";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});
import StateProvider from "@/components/provider/StateProvider";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StateProvider>
        <html lang="en">
          <head>
            <title>Nahusenay Hotel</title>
          </head>
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

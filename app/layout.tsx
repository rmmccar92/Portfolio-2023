import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Archivo, Handlee } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--archivo-font",
});

// @ts-ignore
const handlee = Handlee({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--handlee-font",
});

export const metadata = {
  title: "McCarthy Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${handlee.variable}`}>
      <body>
        <Navbar />
        <div className={`main`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

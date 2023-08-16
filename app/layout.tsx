import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin-ext"],
  display: "swap",
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
    <html lang="en" className={archivo.className}>
      <body>
        <Navbar />
        <div className="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

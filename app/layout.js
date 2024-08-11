import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "CRUD MERN Stack App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

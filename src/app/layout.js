"use client";
// import 'bootstrap/dist/js/bootstrap';
import "./globals.css";
import { Inter } from "next/font/google";
// import ;
// import Header from './components/Header'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="bg" className={inter.className}>
         {children}
      </body>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" />
    </html>
  );
}
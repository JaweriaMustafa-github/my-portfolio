import { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",  // Ensure this is correct (public folder)
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",  // Ensure this is correct (public folder)
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
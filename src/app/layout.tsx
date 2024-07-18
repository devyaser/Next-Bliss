import React from "react";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  return (
    <html lang="en">
    <body>
      <Navbar />
      <div>{props.children}</div>
      <Footer/>
    </body>
    </html>
  );
};

export default RootLayout;

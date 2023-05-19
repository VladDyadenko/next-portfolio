/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Foter/Footer";
import HeadComponent from "./HeadComponent";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

import React from "react";
import Head from "next/head";
import Navbar from "../header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Martin Drozdik</title>
        <meta
          name="description"
          content="Martin Drozdik is a freelance software developer and researcher based in Vienna."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="relative overflow-x-hidden bg-primary">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;

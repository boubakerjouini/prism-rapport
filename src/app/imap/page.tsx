"use client";
import Rapports from "@/modules/rapports/rapports";
import Head from "next/head";
import React from "react";

const ImapPage = () => {
  return (
    <>
      <Head>
        <title>{1 ? `Page ${1}` : "My Default Title"}</title>
      </Head>
      <Rapports />
    </>
  );
};

export default ImapPage;

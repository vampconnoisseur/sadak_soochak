import Head from 'next/head';
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import '../app/styles/global.css';
import React from 'react';
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400..700&display=swap" rel="stylesheet" />
      </Head>
    </>
  );
}
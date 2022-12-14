import React from 'react';
import Head from 'next/head';

interface Props {}

const Header:React.FC<Props> = () => {
    return (
      <Head>
        <title>Dog Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
}

export default Header;
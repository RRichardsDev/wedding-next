import { NextPage, GetServerSideProps } from 'next/types';
import React, { useState } from 'react';
import { UTApi } from 'uploadthing/server';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import ImageExplorer from './components/ImageExplorer';

type Props = {
  files: File[];
};
type File = {
  id: string;
  key: string;
  status: string;
};

const Gallery: NextPage<Props> = ({ files }) => {
  return (
    <>
      <div className="flex h-screen justify-center items-start">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">GALLERY</h1>
          <p className="text-lg md:text-xl mb-4">7th December 2024</p>
          <h2 className="text-2xl mb-4">🤍</h2>
          <ImageExplorer files={files} />
        </div>
      </div>
    </>
  )
};
export const getServerSideProps: GetServerSideProps = async () => {
  const utApi = new UTApi();
  const res = await utApi.listFiles({ limit: 100 });

  return {
    props: {
      files: res,
    },
  };
};

export default Gallery;

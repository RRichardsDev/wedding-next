import { NextPage, GetServerSideProps } from 'next/types';
import React, { useState } from 'react';
import { UTApi } from 'uploadthing/server';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

type Props = {
  files: File[];
};
type File = {
  id: string;
  key: string;
  status: string;
};

const ImageExplorer: NextPage<Props> = ({ files }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const closeCarousel = () => {
    setSelectedImage(null);
  };

  return (
    <>

      <div className="flex justify-center items-center">
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {files.map((file, index) => (
              <div key={file.id} className="cursor-pointer" onClick={() => handleImageClick(index)}>
                <img src={`https://utfs.io/f/${file.key}`} alt="Gallery Image" className="max-w-full h-auto rounded-lg shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
          <Carousel selectedItem={selectedImage} showThumbs={false} useKeyboardArrows autoPlay infiniteLoop onClickItem={closeCarousel}>
            {files.map((file) => (
              <div key={file.id}>
                <img src={`https://utfs.io/f/${file.key}`} alt="Gallery Image" />
              </div>
            ))}
          </Carousel>
          <button className="absolute top-5 right-5 text-white text-4xl" onClick={closeCarousel}>&times;</button>
        </div>
      )}
    </>
  );
};

export default ImageExplorer;

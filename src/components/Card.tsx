"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RootHeader } from "@/assets/views/layouts/root";
import { useCart } from "@/context/useCart";

type CardSchema = {
  image: string;
  title: string;
  descp: string;
  price: number;
};

const Card = (props: CardSchema) => {
  const { image, title, descp, price } = props;
  const [mainImage, setMainImage] = useState(image);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const { addToCart } = useCart();

  const id = 1;

  // Sample gallery images
  const galleryImages = [
    "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
  ];

  // Function to close the modal
  const closeModal = () => setModalImage(null);

  return (
    <div>
      {/* <RootHeader cartCount={0} cartItems={} /> */}

      <div className="bg-white mx-4 p-6 rounded shadow-lg flex flex-col md:flex-row gap-10">
        {/* Main Image with magnify effect */}
        <div className="relative overflow-hidden w-full h-[500px] md:w-[1000px]">
          <Image
            src={mainImage}
            alt="Main product image"
            width={500}
            height={500}
            quality={75}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">{title}</h2>
          <p className="text-gray-700 text-sm leading-6 mb-4 line-clamp-6">
            {descp}
          </p>
          <p className="text-2xl font-semibold mb-4">
            <span className="relative -top-2 font-medium text-base">$</span>
            {price}
          </p>
          <button
            className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded"
            onClick={() => addToCart({ id, title, price })}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-4 text-center my-3">Gallery</h2>

      {/* Gallery images with click-to-open-modal functionality */}
      <div className="grid grid-cols-6 gap-1 mx-4">
        {galleryImages.map((imgSrc, index) => (
          <div key={index} className="cursor-pointer">
            <Image
              src={imgSrc}
              alt={`Gallery image ${index + 1}`}
              width={100}
              height={100}
              className="h-44 w-44 object-cover"
              onClick={() => setModalImage(imgSrc)}
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying large image */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full p-2"
            >
              &times;
            </button>
            <Image
              src={modalImage}
              alt="Modal enlarged image"
              width={500}
              height={500}
              className="max-w-full max-h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Gallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchImages() {
      await axios
        .get("http://localhost:5000/getImages")
        .then((data) => {
          setImages(data.data);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }

    fetchImages();
  }, []);

  console.log(images[0]);

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {images.map((image) => (
        <div
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
          key={image._id}
        >
          <img
            src={`data:${image.img.contentType};base64,${arrayBufferToBase64(image.img.data)}`}
            alt={image.title}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{image.title}</h1>
            <p className="mt-2 text-sm text-gray-300">{image.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );

  function arrayBufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
}

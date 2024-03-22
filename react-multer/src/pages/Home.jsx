import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="font-bold p-4 text-3xl flex flex-col items-center justify-evenly gap-5">
        <Link className="p-4 bg-green-400 w-full rounded-md" to="/upload">UPLOAD</Link>
        <Link className="p-4 bg-green-400 w-full rounded-md" to="gallery">GALLERY</Link>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { ArrowBigRight } from "lucide-react";
import axios from "axios";

export default function Upload() {
  const fileInputRef = React.useRef();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("desc", formData.desc);
    formDataToSend.append("image", formData.image);

    setFormData({ title: "", desc: "", image: null });
    fileInputRef.current.value = "";

    try {
      await axios.post("http://localhost:5000/upload", formDataToSend);
      console.log("Image sent to backend");
    } catch (error) {
      console.error("Error uploading image:", error.response.data);
    }
  };

  return (
    <section className="h-screen">
      <div className="grid grid-cols-1 h-full">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-12 h-full">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              WALLARENA
            </h2>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="title"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Title{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleInputChange}
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Enter image title"
                      name="title"
                      value={formData.title}
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="desc"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Description{" "}
                  </label>
                  <div className="mt-2">
                    <textarea
                      onChange={handleInputChange}
                      rows={3}
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Write something about the image"
                      name="desc"
                      value={formData.desc}
                    ></textarea>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="image"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Upload Image{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={handleFileChange}
                      className="flex w-full rounded-md border border-gray-300 bg-transparent p-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      name="image"
                      ref={fileInputRef}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-green-500 px-3.5 py-2.5 font-semibold leading-7 hover:bg-green-400"
                  >
                    Submit
                    <ArrowBigRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  console.log(formData)

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <div className="w-2/3 flex flex-col items-center">
        <form className="w-2/3 flex justify-between gap-5 my-10">
          <input
            className="w-4/5 p-3 rounded-md border border-black"
            type="text"
            placeholder="Enter your task..."
            onChange={handleChange}
          />
          <button
            className="w-1/5 p-3 rounded-md bg-green-500 border-none text-xl font-semibold"
            onClick={handleSubmit}
            type="submit"
          >
            Add
          </button>
        </form>
        <ul className="flex flex-col items-start w-full"></ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/notes/noteSlice";

function AddNote() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addNoteHandler = (e) => {
    e.preventDefault();
    dispatch(addNote(input));
    setInput("");
  };

  return (
    <form
      className="p-4 flex justify-center items-center"
      onSubmit={addNoteHandler}
    >
      <input
        className="border-2 border-slate-600 py-2 px-4 mx-2 rounded-md"
        type="text"
        placeholder="Enter Note.."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="border-2 border-slate-600 py-2 px-4 mx-2 rounded-md"
        type="submit"
      >
        <img
          className="w-6"
          src="https://cdn-icons-png.flaticon.com/128/303/303517.png"
          alt="add"
        />
      </button>
    </form>
  );
}

export default AddNote;

import React from "react";
import AddNote from "./components/AddNote";
import { useSelector, useDispatch } from "react-redux";
import { removeNote, updateNote } from "./features/notes/noteSlice";

function App() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start p-3">
      <header className="flex justify-center items-center w-full border-2 border-slate-400 h-16 rounded-lg pt-8 pb-10 mb-4">
        <span className="font-bold text-3xl">Task Manager</span>
      </header>
      <AddNote />
      <div className="p-5 flex w-full justify-start">
        <ul className="flex flex-wrap items-start w-full gap-5">
          {notes.map((note) => (
            <li
              className="flex justify-between gap-10 items-center border-2 border-slate-400 p-4 rounded-md"
              key={note.id}
            >
              <span>{note.text}</span>
              <span className=" flex gap-3 items-center">
                <button
                  className="w-6"
                  onClick={() => {
                    dispatch(
                      updateNote({ id: note.id, newText: "Task Completed" })
                    );
                    setTimeout(() => {
                      dispatch(
                        updateNote({
                          id: note.id,
                          newText: "Deleting Note in 5 Secs!",
                        })
                      );
                    }, 1500);
                    setTimeout(() => {
                      dispatch(removeNote(note.id));
                    }, 5000);
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5290/5290058.png"
                    alt="edit"
                  />
                </button>
                <button
                  className="w-4"
                  onClick={() => {
                    dispatch(removeNote(note.id));
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                    alt="delet"
                  />
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

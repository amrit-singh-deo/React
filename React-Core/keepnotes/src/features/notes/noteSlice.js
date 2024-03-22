import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = {
        id: nanoid(),
        text: action.payload,
      };
      state.notes.push(note);
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const { id, newText } = action.payload;
      const newNote = state.notes.find((note) => note.id === id);
      if (newNote) {
        newNote.text = newText;
      }
    },
  },
});

export const { addNote, removeNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;

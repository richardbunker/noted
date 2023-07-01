import { INote } from "../App";

export const prettyDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
};

export const emptyNote = () => {
  return {
    id: "",
    title: "",
    body: "",
    createdAt: "",
  };
};

export const getNotesFromStorage = () => {
  const notes = localStorage.getItem("notes");
  if (notes) {
    return JSON.parse(notes);
  }
  return [];
};

export const setNotesToStorage = (notes: Array<INote>) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const setDefaultNote = (notes: Array<INote>) => {
  if (notes.length > 0) {
    return notes[0];
  } else {
    return emptyNote();
  }
};

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SidebarContainer from "./components/sidebar/Container";
import EditorContainer from "./components/editor/Container";
import NavbarContainer from "./components/navbar/Container";
import { getNotesFromStorage, prettyDate, setDefaultNote, setNotesToStorage } from "./lib/utils";

export interface INote {
  [key: string]: string;
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

export default function App() {
  const [notes, setNotes] = useState<INote[]>(getNotesFromStorage());

  const [currentNote, setCurrentNote] = useState<INote>(setDefaultNote(notes));

  const handleUpdateNote = (id: string, key: string, value: string) => {
    const updated = notes.map((note) => {
      if (note.id === id) {
        note[key] = value;
        return note;
      } else {
        return note;
      }
    });
    setNotes(updated);
    setNotesToStorage(updated);
  };

  const newNote = () => {
    const note: INote = {
      id: uuidv4(),
      title: "",
      body: "",
      createdAt: prettyDate(new Date()),
    };
    setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
    setNotesToStorage(notes);
    setCurrentNote(note);
  };

  const onNoteSelected = (id: string) => {
    const note: INote | undefined = notes.find((note) => note.id === id);
    if (note) {
      setCurrentNote(note);
    }
  };

  const onDeleteSelected = () => {
    const filtered = notes.filter((note) => {
      return !(note.id === currentNote.id);
    });
    setNotes(filtered);
    setNotesToStorage(filtered);
    if (filtered.length > 0) {
      setCurrentNote(filtered[0]);
    } else {
      setNotes([]);
      setNotesToStorage([]);
    }
  };
  return (
    <main className="min-h-screen bg-stone-900 text-stone-200 flex flex-col">
      <NavbarContainer
        onNewNote={newNote}
        deletable={notes.length > 0}
        deleteSelected={onDeleteSelected}
      />
      <div className="flex-1 flex">
        <SidebarContainer notes={notes} noteSelected={onNoteSelected} currentNote={currentNote} />
        {notes.length > 0 ? (
          <EditorContainer updateNote={handleUpdateNote} note={currentNote} />
        ) : (
          ""
        )}
      </div>
    </main>
  );
}

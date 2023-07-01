import * as React from "react";
import NotePreview from "../sidebar/NotePreview";
import { INote } from "../../App";

export interface INoteSideBarProps {
  notes: Array<INote>;
  noteSelected: Function;
  currentNote: INote;
}

export default function SidebarContainer({ notes, noteSelected, currentNote }: INoteSideBarProps) {
  return (
    <section className="bg-stone-900 flex flex-col w-[250px] shrink-0 border-r border-stone-700">
      {notes.length > 0 ? (
        <section className="p-4 space-y-4">
          {notes.map((note, index) => {
            return (
              <NotePreview
                key={index}
                note={note}
                noteSelected={noteSelected}
                currentlySelected={currentNote.id}
              />
            );
          })}
        </section>
      ) : (
        <section className="w-[250px] flex items-center justify-center h-full text-stone-600 text-2xl border-r border-stone-700">
          No Notes
        </section>
      )}
    </section>
  );
}

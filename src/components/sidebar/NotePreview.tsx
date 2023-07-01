import * as React from "react";
import { INote } from "../../App";

export interface ISideBarNotePreviewProps {
  note: INote;
  noteSelected: Function;
  currentlySelected: string;
}

export default function NotePreview({
  note,
  noteSelected,
  currentlySelected,
}: ISideBarNotePreviewProps) {
  const handleClick = () => {
    noteSelected(note.id);
  };
  return (
    <article
      onClick={handleClick}
      className={`${
        currentlySelected === note.id ? "bg-stone-700" : "bg-stone-900"
      } w-full text-left rounded-md hover:bg-stone-700 cursor-pointer select-none`}
    >
      <div className="border-b border-stone-700 p-2 mx-1.5">
        <div className="whitespace-nowrap overflow-ellipsis overflow-hidden text-base">
          {note.title ? note.title : "New Note"}
        </div>
        {note.body && (
          <div className="whitespace-nowrap overflow-ellipsis overflow-hidden text-sm text-stone-500 pb-1">
            {note.body}
          </div>
        )}
        <div className="text-xs text-stone-400 pb-2">{note.createdAt}</div>
      </div>
    </article>
  );
}

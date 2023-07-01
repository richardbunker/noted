import { MutableRefObject, useEffect, useRef } from "react";
import { INote } from "../../App";

export interface INoteEditorProps {
  updateNote: Function;
  note: INote;
}

export default function EditorContainer({ updateNote, note }: INoteEditorProps) {
  const textArea = useRef<HTMLTextAreaElement>() as MutableRefObject<HTMLTextAreaElement>;
  useEffect(() => {
    if (textArea.current) {
      textArea.current.focus();
    }
  }, [note]);
  return (
    <section className="w-full min-h-full flex flex-col">
      <div className="p-6 space-y-2 flex-1 flex flex-col">
        <input
          type="text"
          name="title"
          id="title"
          value={note.title}
          onChange={(e) => updateNote(note?.id, "title", e.target.value)}
          className="bg-stone-900 focus:outline-none text-xl font-bold"
          placeholder="Title"
        />
        <textarea
          ref={textArea}
          onChange={(e) => updateNote(note?.id, "body", e.target.value)}
          value={note.body}
          id="body"
          name="body"
          className="bg-stone-900 focus:outline-none w-full resize-none flex-1 no-scrollbar"
        ></textarea>
      </div>
    </section>
  );
}

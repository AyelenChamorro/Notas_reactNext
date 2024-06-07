import { NoteButtonsDelete } from "./NoteButtonsDelete";
import { NoteButtonsEdit } from "./NoteButtonsEdit";
import { NoteTitle, WhiteBackgroundBox } from "./useStyles";
import { NoteDataStyle } from "./useStyles";
import { useNotes } from "@/contexts/NoteContext";
import { Note } from "@prisma/client";
import {
  randomBackgroundColorElement,
  randomMarginElement,
  randomRotateElement,
} from "./useStyles";
import { useEffect, useRef } from "react";

export function NoteCard({ note }: { note: Note }) {
  const { deleteNote, setSelectedNote } = useNotes();
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (noteRef.current) {
      const divNote = noteRef.current;
      randomBackgroundColorElement(divNote);
      randomMarginElement(divNote, 0, 1);
      randomRotateElement(divNote, -10, 10);
    }
  }, []);

  return (
    <WhiteBackgroundBox key={note.id} className="divNote" ref={noteRef}>
      <NoteDataStyle>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/14/10/pushpin-147918__340.png"
          width={50}
          height={50}
        />
        <NoteTitle>{note.title}</NoteTitle>
        <p>{note.content}</p>
        <p>{new Date(note.createdAt).toLocaleDateString()}</p>
      </NoteDataStyle>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <NoteButtonsDelete
          onClick={async () => {
            {
              if (confirm("Are you sure you want to delete this note?")) {
                await deleteNote(Number(note.id));
              }
            }
          }}
        />
        <NoteButtonsEdit onClick={() => setSelectedNote(note)} />
      </div>
    </WhiteBackgroundBox>
  );
}

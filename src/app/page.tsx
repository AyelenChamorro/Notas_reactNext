"use client";
import { useEffect, useRef } from "react";
import { NoteForms } from "@/components/NoteForms";
import { useNotes } from "@/contexts/NoteContext";
import { NoteCard } from "@/components/NoteCard";

function HomePage() {
  const { notes, loadNotes } = useNotes();
  const notesContainerRef = useRef<HTMLDivElement>(null);

  console.log(notes);
  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        margin: "40px",
      }}
    >
      <div>
        <NoteForms notesContainerRef={notesContainerRef} />
      </div>
      <div
        ref={notesContainerRef}
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          marginTop: "20px",
        }}
      >
        {notes.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

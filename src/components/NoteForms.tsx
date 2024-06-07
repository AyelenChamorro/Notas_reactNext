"use client";
import { useState, useRef, useEffect } from "react";
import { FloatingActionButton } from "./NoteButtons";
import { useNotes } from "@/contexts/NoteContext";
import { NoteFormStyle, InputStyle, NoteContext } from "./useStyles";
import { NoteButtonsCancel } from "./NoteButtonsCancel";
import { randomBackgroundColorElement, randomMarginElement, randomRotateElement } from "./useStyles";

export function NoteForms({ notesContainerRef }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { createNote, selectedNote, setSelectedNote, updateNote } = useNotes();
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content || "");
    }
  }, [selectedNote]);


  return (
    <NoteFormStyle>
      <h1 className="text-black">ESCRIBE TUS NOTAS</h1>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (selectedNote) {
              await updateNote(selectedNote.id, {
                title,
                content,
              });
              setSelectedNote(null);
            } else {
              await createNote({ title, content });
             
             /*  if (notesContainerRef.current) {
                const divNote = document.createElement('div');
                randomBackgroundColorElement(divNote);
                randomMarginElement(divNote, 0, 1);
                randomRotateElement(divNote, -10, 10);
                divNote.innerHTML = `
                  <h3>${title || `Nota #${notes.length + 1}`}</h3>
                  <textarea cols="14" rows="6" maxlength="72" class="textNote">${content}</textarea>
                  
                `;
                divNote.setAttribute("class", "divNote");
                notesContainerRef.current.appendChild(divNote);
              } */
            }
            setTitle("");
            setContent("");
            titleRef.current?.focus();
          }}
        >
          <InputStyle
            type="text"
            name="title"
            autoFocus
            placeholder="Title"
            className="w-full px-4 py-2 text-black bg-white rounded-md focus:online-none focus:ring-2 focus:ring-bluey-600 my-2 "
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            ref={titleRef}
          /> 
          <NoteContext
            name="title"
            placeholder="Content"
            id=""
            className="w-full px-4 py-2 text-black bg-white rounded-md focus:online-none focus:ring-2 focus:ring-bluey-600 my-2 "
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          ></NoteContext>
          <div className="flex justify-between">
            {selectedNote && (
              <NoteButtonsCancel
                onClick={() => {
                  setSelectedNote(null);
                  setTitle("");
                  setContent("");
                }}
              />
            )}
            
            <FloatingActionButton disabled={!title || !content} type="submit" >
            {selectedNote ? "Update" : "Create"}
            </FloatingActionButton>
           
            
          </div>
        </form>
      </div>
    </NoteFormStyle>
  );
}

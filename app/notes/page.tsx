"use client";

import { ChangeEvent, useState } from "react";

export default function Notes() {
  const notes = [
    { id: 1, content: "Note 1" },
    { id: 2, content: "Note 2" },
    { id: 3, content: "Note 3" },
    { id: 4, content: "Note 4" },
    { id: 5, content: "Note 5" },
    { id: 6, content: "Note 6" },
    { id: 7, content: "Note 7" },
    { id: 8, content: "Note 8" },
    { id: 9, content: "Note 9" },
  ];

  const [filteredNotes, setFilteredNotes] = useState(notes);

  const filterNotes = (e: ChangeEvent<HTMLInputElement>): void => {
    const search = event?.target?.value;
    const filteredNotes = notes.filter((note) =>
      note.content.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredNotes(filteredNotes);
  };

  return (
    <div>
      <h1>Notes Page</h1>
      <form action="">
        <label htmlFor="note">Note</label>
        <textarea name="note" id="note" />
      </form>

      <form action="">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(event) => filterNotes(event)}
        />
      </form>

      <div>
        <ul>
          {filteredNotes.map((note) => (
            <li key={note.id}>{note.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

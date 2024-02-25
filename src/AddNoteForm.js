import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddNoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reminder, setReminder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const createdAt = new Date().toISOString();
    const newNote = { id, title, body, createdAt, reminder };
    onAdd(newNote);
    setTitle('');
    setBody('');
    setReminder('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" required />
      <input type="text" value={reminder} onChange={(e) => setReminder(e.target.value)} placeholder="Reminder (optional)" />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default AddNoteForm;

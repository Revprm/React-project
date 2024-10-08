import React, { useState, useEffect } from "react";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    setNotes([...notes, { title: "", content: "" }]);
  };

  const deleteNote = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirmDelete) {
      const updatedNotes = notes.filter((_, i) => i !== index);
      setNotes(updatedNotes);
    }
  };

  const updateNote = (index, field, value) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, [field]: value } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <button
          className="create bg-orange-400 text-white p-2 rounded mb-4 flex items-center"
          onClick={createNote}
        >
          <img src="image/plus.svg" alt="Plus" className="w-4 mr-2" />
          <p className="font-semibold">New Note</p>
        </button>
        <div className="notes-container space-y-4">
          {notes.map((note, index) => (
            <div key={index} className="relative border border-gray-300 rounded-lg shadow-sm">
              
              <div className="delete-area bg-orange-400 p-2 rounded-t flex items-center justify-between">
                <p
                  className="title bg-transparent outline-none w-full font-semibold text-black"
                  contentEditable="true"
                  onBlur={(e) =>
                    updateNote(index, "title", e.currentTarget.textContent)
                  }
                  suppressContentEditableWarning={true}
                >
                  {note.title || "Title"}
                </p>
                <img
                  src="image/cross.svg"
                  alt="Delete"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => deleteNote(index)}
                />
              </div>
              
              <div className="input-box bg-red-300 p-3 rounded-b">
                <p
                  className="bg-transparent outline-none w-full h-full text-black"
                  contentEditable="true"
                  onBlur={(e) =>
                    updateNote(index, "content", e.currentTarget.textContent)
                  }
                  suppressContentEditableWarning={true}
                >
                  {note.content || "Write your notes here"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
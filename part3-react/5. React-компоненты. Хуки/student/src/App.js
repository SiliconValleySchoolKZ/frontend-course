import axios from "axios";
import { useEffect, useState } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);
  const [search, setSearch] = useState("");

  //   const notesToShow = showAll
  //     ? notes
  //     : notes.filter((note) => note.important === true);

  const filteredNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  const addNote = async (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    axios.put(url, changedNote).then((response) => {
      setNotes(notes.map((n) => (n.id !== id ? n : response.data)));
    });
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await fetch("http://localhost:3001/notes");
      const data = await res.json();
      setNotes(data);
    };
    fetchNotes();
    // axios.get("http://localhost:3001/notes").then((response) => {
    //   setNotes(response.data);
    // });
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {filteredNotes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;

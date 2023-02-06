import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNotes,
  removeNote,
  updateImportance,
} from "../reducers/noteSlice";

const Note = ({ note, handleClick, handleRemove }) => {
  return (
    <>
      <li onClick={handleClick}>
        {note.content}
        <strong> {note.important ? "important" : ""}</strong>
      </li>
      <button onClick={handleRemove}>X</button>
    </>
  );
};

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(({ filter, notes }) => {
    if (filter === "ALL") {
      return notes;
    }
    return filter === "IMPORTANT"
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important);
  });

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(updateImportance(note))}
          handleRemove={() => dispatch(removeNote(note.id))}
        />
      ))}
    </ul>
  );
};

export default Notes;

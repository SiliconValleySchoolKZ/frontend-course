import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

export const addNewNote = createAsyncThunk(
  "notes/addNewNote",
  async (content) => {
    const newNote = {
      content,
      important: false,
    };
    const response = await axios.post(baseUrl, newNote);

    return response.data;
  }
);

export const updateImportance = createAsyncThunk(
  "notes/updateImportance",
  async (note) => {
    const updatedNote = {
      important: !note.important,
    };
    const response = await axios.patch(`${baseUrl}/${note.id}`, updatedNote);

    return response.data;
  }
);

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    removeNote(state, action) {
      const id = action.payload;
      return state.filter((note) => note.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addNewNote.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateImportance.fulfilled, (state, action) => {
        return state.map((note) =>
          note.id !== action.payload.id ? note : action.payload
        );
      });
  },
});
export const { createNote, toggleImportanceOf, removeNote } = noteSlice.actions;
export default noteSlice.reducer;

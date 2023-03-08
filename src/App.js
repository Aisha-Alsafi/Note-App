import './App.css';
import React,{useState} from 'react';


export default function App() {
  const [notes, setNotes] = useState([]);

    const AddNote = () => {
    const noteInput = document.querySelector('input[type="text"]');
    const newNote = noteInput.value;
    setNotes([...notes, newNote]);
    noteInput.value = '';
    };

    const DeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    };

  return (
    <div  class="userInput">
      <h1>My Notes</h1>
      <div>
        <input type="text" placeholder="Add your note" />
       <button onClick={AddNote}>Save</button>
      </div>
      <ul>
        {notes.map((note, noteIndex) => (
          <li key={noteIndex}>
            <span>{note}</span>
            <button onClick={() => DeleteNote(noteIndex)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


import { useEffect } from "react";
import NotesDetails from "../components/NotesDetails";
import Form from "../components/Form";
import { useNotesContext } from "../hooks/useNotesContext";

const Home = () => {
  const { notes, dispatch } = useNotesContext();
  const fetchNotes = async () => {
  const response = await fetch("/api/notes ");
  const json = await response.json();

    if (response.ok) {
      dispatch({ type: "SET_NOTES", payload: json });
    }
  };
  //when the component is rendered,only once
  useEffect(() => {
    fetchNotes();
  }, [dispatch,notes]);

  return (
    <div className="Home">
      <div className="notes">
        {notes &&
          notes.map((note) => <NotesDetails key={notes._id} note={note} />)}
      </div>
      <Form />
    </div>
  );
};

export default Home;

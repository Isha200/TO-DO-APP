import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const Form = () => {
  const { dispatch } = useNotesContext();
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = { title, deadline };

    //sends a post request that needs to be converted into json first
    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json;

    if (!response.ok) {
      // eslint-disable-next-line
      setError = json.error;
    }

    if (response.ok) {
      setTitle("");
      setDeadline("");
      setError(null);
      console.log("new task added", json);
      dispatch({ type: "CREATE_NOTE", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new task</h3>

      <lable>The task to do:</lable>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br></br>
      <lable>Set deadline</lable>
      <input
        type="text"
        onChange={(e) => setDeadline(e.target.value)}
        value={deadline}
      />
      <br></br>
      <button>Add task!</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Form;

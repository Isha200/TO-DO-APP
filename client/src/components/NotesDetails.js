import { useNotesContext } from "../hooks/useNotesContext";


const NotesDetails = ({ note }) => {
  const { dispatch } = useNotesContext();

  const handleClick = async () => {
    const response = await fetch("/api/notes/" + note?._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_NOTE", paylod: json });
    }
  };


  return (
    <div className="notes-details">
      <h4>{note.title}</h4>
      <p>
        Deadline : <strong>{note.deadline}</strong>
      </p>
      
      <p>
        Task created at : <strong>{note.createdAt}</strong>
      </p>

      <span className="material-symbols-outlined" onClick={handleClick} >DELETE</span>
    </div>
  );
};
export default NotesDetails;

//jest - server testing for API
//react testing library
//MSW - testing for APIs, the backend testing 

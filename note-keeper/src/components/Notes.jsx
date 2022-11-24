import { useDispatch } from "react-redux";
import { deleteNote } from "../features/notes/noteSlice";

function Notes({ note }) {
  const dispatch = useDispatch();

  const onClicked = () => {
    dispatch(deleteNote(note._id))
  }

  return (
    <div className="goal">
      <h2>{note.title}</h2>
      <p>{note.message} </p>
      <br /> 
      <div>{new Date(note.createdAt).toLocaleString("en-US")}</div>
      <button onClick={onClicked} className="close">
        X
      </button>
    </div>
  );
} 

export default Notes;

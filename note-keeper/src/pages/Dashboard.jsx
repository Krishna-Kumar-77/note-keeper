import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddNote from "../components/AddNote";
import Notes from "../components/Notes";
import Spinner from "../components/Spinner";
import { getNotes, reset } from "../features/notes/noteSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { notes, isLoading, isError, message } = useSelector(
    (state) => state.notes
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getNotes());

    return () => {
      dispatch(reset());
    }; 
  }, [user, isError,message,navigate,dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Notes Dashboard</p>
      </section>
      <AddNote />

      <section className="content">
        {notes.length > 0 ? (
          <div className="goals">
            {notes.map((note) => (
              <Notes key={note._id} note={note} />
            ))}
          </div>
        ) : (
          <h3>You have not created any notes</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;

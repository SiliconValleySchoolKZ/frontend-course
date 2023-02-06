import { Link } from "react-router-dom";

const Notes = () => {
  return (
    <div>
      <h1>Shiny Notes Page</h1>
      <ul>
        <li>
          <Link to="/notes/1"> 1.To do homework</Link>
        </li>
        <li>
          <Link to="/notes/2"> 2.To do chores</Link>
        </li>
        <li>
          <Link to="/notes/3"> 3.To play with dog</Link>
        </li>
        <li>
          <Link to="/notes/4"> 4.To cook dinner</Link>
        </li>
      </ul>
    </div>
  );
};

export default Notes;

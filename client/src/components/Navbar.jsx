import { Link } from "react-router-dom"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Task Manager</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/add">Add Task</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

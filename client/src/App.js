import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <h1>Barge Solutions Web App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/projects">Projects</Link> | {" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

import { Outlet, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Projects from "./routes/projects";
import User from "./routes/user_new";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;

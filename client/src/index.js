import { createRoot } from "react-dom/client";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import App from "./App";
import Projects from "./routes/projects";
import User from "./routes/user_new"

const rootElement = document.getElementById("root");

const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
    <Route path="projects" element={<Projects />} />
    <Route path="user" element={<User />} />
    </Route>
    </Routes>
  </BrowserRouter>
);
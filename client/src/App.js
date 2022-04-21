import { Outlet, Link } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/L_BargeSolutions.gif'


function App() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;

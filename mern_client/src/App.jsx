import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Foooter from "./components/Foooter";
// import { Footer } from "flowbite-react";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Foooter />
    </div>
  );
}

export default App;

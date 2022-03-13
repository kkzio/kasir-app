import React from "react";
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import "./index.js";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Main />
    </div>
  );
}

export default App;

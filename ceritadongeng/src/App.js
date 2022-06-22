// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Homepage from "./pages/homepages/index";
import Footer from "./component/footer/index";
import "./App.css";
import NavbarHome from "./component/home/navbar/index";
import LibBuku from "./pages/libBuku/index";

function App() {
  return (
    <div className="Container">
      <NavbarHome />
      <LibBuku />
      <Footer />
    </div>
  
  );
}

export default App;

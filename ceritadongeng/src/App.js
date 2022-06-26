import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepages/index";
import "./App.css";
import LibBuku from "./pages/libBuku/index";
import {Route, Routes} from 'react-router-dom';
import DaftarBacaan from "./pages/DaftarBacaan/index";
import Profil from "./pages/Profil/index";
import KelinciKura from "./pages/bacaCerita/KelinciKura";
import Loginn from "./component/home/button/login/index"
import PhoneSignUp from "./component/home/button/SiginPhone";
import Signup from "./component/home/button/Signup";
import ProtectedRoute from "./context/protectRoute";
import { UserAuthContextProvider } from "./context/index";
import KancilBuaya from "./pages/bacaCerita/KancilBuaya";
import BebekBurukRupa from "./pages/bacaCerita/Bebek";
import KancilHarimau from "./pages/bacaCerita/KancilHarimau";


function App() {
  return (
    <>
      <div className="Container">
        
        <UserAuthContextProvider>
          <Routes>
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                   <Homepage />
                </ProtectedRoute>
               
              } 
            />
            <Route path="/" element={<Loginn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/libBuku" element={<LibBuku />} />
            <Route path="/DaftarBacaan" element={<DaftarBacaan />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/bacaCerita/KelinciKura" element={<KelinciKura />} />
            <Route path="/BacaCerita/KancilHarimau" element={<KancilHarimau/>} />
            <Route path="/BacaCerita/KancilBuaya" element={<KancilBuaya/>} />
            <Route path="/BacaCerita/BebekBurukRupa" element={<BebekBurukRupa/>} />
          </Routes>
        </UserAuthContextProvider>
      </div>
  
    </>

  );
}

export default App;


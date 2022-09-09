import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Categorie from "./components/Categorie";
import Movimenti from "./components/Movimenti";

import "./index.css";
import React from "react";
import { render  } from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

const Routing = () => {
    
    return (
        
        <Router>
            <Navbar/>
            <div class="flex bg-slate-200 justify-center h-full">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/categorie" element={<Categorie/>}/>
                <Route path="/movimenti" element={<Movimenti/>}/>
            </Routes>
            </div>
            
        </Router>
    )
}

const RouteDiv = document.getElementById("main");
render(<Routing title={"ciao"} />, RouteDiv);
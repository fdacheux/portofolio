import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";
import Portofolio from "./pages/Portofolio";
import Project from "./pages/Project";
import Curriculum from "./pages/Curriculum";
import About from "./pages/About";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" index element={<LandingPage  />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/project/:projectId" element={<Project />} />
          <Route path="/about" element={<About />}/>
          <Route path="/cv" element={<Curriculum />}/>

        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

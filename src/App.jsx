import { BrowserRouter as Router, Routes, Route } from "react-router";

import Layout from "./Components/Layout/Layout.jsx";

import Home from "./Components/Home/Home.jsx";
import About from "./Components/Aboute/About.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Project from "./Components/Project/Project.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
        </Route>
      </Routes>
    </Router>
  );
}

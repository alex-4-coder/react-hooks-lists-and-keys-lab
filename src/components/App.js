// App.js
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

const projectData = [
  { id: 1, name: "Portfolio", technologies: ["React", "CSS"] },
  { id: 2, name: "To-Do App", technologies: ["JavaScript", "HTML"] },
  { id: 3, name: "Game", technologies: ["React", "Redux", "TypeScript"] },
];

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projectData} />
    </div>
  );
}

export default App;

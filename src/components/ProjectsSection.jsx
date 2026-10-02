import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { ArchitectureModal } from "./ArchitectureModal";

const CATEGORIES = ["All", "Full-Stack & Web", "UX & Product", "Systems & OOP"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="page-container">
        <div className="section-header">
          <h2>Featured Engineering & UX Work</h2>
          <p className="section-desc">
            Production-oriented architectures, research-backed design systems, and object-oriented implementations developed collaboratively across engineering teams.
          </p>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Project categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenArchitecture={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ArchitectureModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

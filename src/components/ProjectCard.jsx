import React from "react";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";
import { Github } from "./GithubIcon";

export function ProjectCard({ project, onOpenArchitecture }) {
  return (
    <article className="project-card">
      <div className="project-image-box">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-category-badge">{project.category}</div>
      </div>

      <div className="project-content">
        <div className="project-team-meta">{project.team} • {project.role}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag-pill">{tag}</span>
          ))}
        </div>

        <div className="project-actions">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => onOpenArchitecture(project)}
            title="Read system architecture and design breakdown"
          >
            <Layers size={15} />
            <span>Architecture</span>
          </button>

          <div className="project-links">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                title="View Live Web Demo"
                aria-label={`View Live Web Demo for ${project.title}`}
              >
                <ExternalLink size={16} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                title="View GitHub Repository"
                aria-label={`View GitHub Repository for ${project.title}`}
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

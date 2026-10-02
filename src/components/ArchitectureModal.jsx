import React, { useEffect } from "react";
import { X, ExternalLink, Layers } from "lucide-react";
import { Github } from "./GithubIcon";

export function ArchitectureModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-card">
        <div className="modal-header">
          <div className="modal-title-group">
            <span style={{ fontSize: "0.85rem", color: "var(--accent-indigo-light)", fontFamily: "var(--font-mono)" }}>
              {project.team} • {project.category}
            </span>
            <h3 id="modal-title" style={{ margin: 0, fontSize: "1.4rem" }}>
              {project.title}
            </h3>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close architecture breakdown"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <h4 className="modal-headline">
            {project.architecture.headline}
          </h4>

          <ul className="modal-points-list">
            {project.architecture.points.map((pt, i) => (
              <li key={i} className="modal-point-item">
                {pt}
              </li>
            ))}
          </ul>

          <div className="modal-tech-box">
            <strong>System Breakdown:</strong>
            <div>{project.architecture.stackDetails}</div>
          </div>
        </div>

        <div className="modal-footer">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <span>Live Prototype</span>
              <ExternalLink size={15} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>View Source on GitHub</span>
              <Github size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

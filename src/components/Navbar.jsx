import React from "react";
import { Terminal, Mail } from "lucide-react";
import { Github } from "./GithubIcon";
import { personalInfo } from "../data/portfolioData";

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="page-container navbar-inner">
        <a href="#" className="nav-brand">
          <Terminal size={20} color="var(--accent-indigo)" />
          <span>{personalInfo.nickname} <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>/ dev</span></span>
        </a>

        <div className="nav-links">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#academic" className="nav-link">Academic</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="nav-actions">
          <div className="nav-status" title={personalInfo.status}>
            <span className="nav-badge-dot"></span>
            <span>Available for Roles</span>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}

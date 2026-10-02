import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp } from "lucide-react";
import { Github } from "./GithubIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" aria-label="Page Footer">
      <div className="page-container footer-inner">
        <div>
          <span>© {new Date().getFullYear()} {personalInfo.name}. Crafted with React & Vanilla CSS.</span>
        </div>

        <div className="footer-links">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>

          <button
            onClick={scrollToTop}
            className="copy-btn footer-link"
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

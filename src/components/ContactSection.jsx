import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, MapPin, Copy, Check, Send } from "lucide-react";
import { Github } from "./GithubIcon";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="page-container">
        <div className="section-header">
          <h2>Connect & Opportunities</h2>
          <p className="section-desc">
            Interested in software engineering roles, internships, or discussing architectural collaboration? Let's connect.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-info">
            <h3 style={{ fontSize: "1.4rem", margin: 0 }}>Direct Communication</h3>
            <p style={{ margin: 0, color: "var(--text-secondary)" }}>
              Feel free to reach out via email or explore my repositories directly on GitHub.
            </p>

            <div className="contact-channels">
              <div className="contact-item">
                <div className="contact-item-left">
                  <Mail size={18} color="var(--accent-indigo)" />
                  <span>{personalInfo.email}</span>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-left">
                  <Github size={18} color="var(--accent-cyan)" />
                  <span>github.com/{personalInfo.githubHandle}</span>
                </div>
                <span style={{ fontSize: "0.85rem", color: "var(--accent-indigo-light)", fontFamily: "var(--font-mono)" }}>
                  Visit →
                </span>
              </a>

              <div className="contact-item">
                <div className="contact-item-left">
                  <MapPin size={18} color="var(--accent-emerald)" />
                  <span>{personalInfo.location} (Open to Hybrid / Remote)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-callout">
            <h4 className="callout-title">Engineering With Product Depth</h4>
            <p className="callout-text">
              Combining 5 years of dual training in Computer Engineering and Business Administration (ADE), I approach development not just as writing code, but as solving real problems with robust architecture, measurable impact, and great user craft.
            </p>
            <div>
              <a
                href={`mailto:${personalInfo.email}?subject=Software%20Engineering%20Opportunity%20-%20Portfolio%20Inquiry`}
                className="btn btn-primary"
              >
                <Send size={16} />
                <span>Send Email Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

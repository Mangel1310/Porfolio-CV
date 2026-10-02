import React from "react";
import { ArrowUpRight, Cpu, LineChart, Code2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export function Hero() {
  return (
    <header className="hero-section">
      <div className="page-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">{personalInfo.name}</h1>
            <p className="hero-subtitle">{personalInfo.role}</p>

            <p className="hero-description">
              {personalInfo.summary}
            </p>

            <div className="hero-badge-strip">
              <span className="badge-tag">Java</span>
              <span className="badge-tag">Python & Django</span>
              <span className="badge-tag">React + Vite</span>
              <span className="badge-tag">Oracle SQL</span>
              <span className="badge-tag">UX Research</span>
              <span className="badge-tag">OOP & MVC</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowUpRight size={18} />
              </a>
              <a href="#academic" className="btn btn-secondary">
                <span>Academic Profile</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Contact</span>
              </a>
            </div>
          </div>

          <div className="dual-profile-panel">
            <div className="dual-card">
              <div className="dual-card-header">
                <div className="dual-card-icon tech">
                  <Cpu size={20} />
                </div>
                <h3 className="dual-card-title">Computer Engineering</h3>
              </div>
              <p className="dual-card-body">
                Systems architecture, strict object-oriented design (OOP), headless full-stack applications with Django and React, and enterprise relational database modeling with Oracle SQL.
              </p>
            </div>

            <div className="dual-card">
              <div className="dual-card-header">
                <div className="dual-card-icon biz">
                  <LineChart size={20} />
                </div>
                <h3 className="dual-card-title">Business & Product Acumen</h3>
              </div>
              <p className="dual-card-body">
                Trained in business strategy, financial management, and quantitative/qualitative UX research. Translating strategic organizational goals into high-impact digital experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="metrics-strip">
          {personalInfo.metrics.map((metric, idx) => (
            <div key={idx} className="metric-item">
              <span className="metric-label">{metric.label}</span>
              <span className="metric-value">{metric.value}</span>
              <span className="metric-detail">{metric.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

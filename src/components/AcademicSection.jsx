import React from "react";
import { educationHistory } from "../data/portfolioData";
import { GraduationCap, CheckCircle2, Users, Compass } from "lucide-react";

export function AcademicSection() {
  const edu = educationHistory[0];

  return (
    <section id="academic" className="section" aria-label="Academic Background">
      <div className="page-container">
        <div className="section-header">
          <h2>Academic Foundation & Profile</h2>
          <p className="section-desc">
            A selective 5-year dual curriculum uniting computer engineering rigor with strategic business administration at Universidad de Granada.
          </p>
        </div>

        <div className="timeline-card">
          <span className="timeline-period">{edu.period}</span>
          <h3 className="timeline-degree">{edu.degree}</h3>
          <div className="timeline-institution">{edu.institution} • {edu.location}</div>

          <p className="timeline-desc">
            {edu.description}
          </p>

          <div className="timeline-highlights-title">Core Academic & Practical Focus</div>
          <div className="timeline-highlights-grid">
            {edu.highlights.map((item, idx) => (
              <div key={idx} className="timeline-highlight-box">
                <CheckCircle2 size={16} color="var(--accent-indigo-light)" style={{ flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--border-subtle)", display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <Users size={16} color="var(--accent-cyan)" />
              <span>Collaborative group engineer (Lasaña Team, Errores404)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <Compass size={16} color="var(--accent-emerald)" />
              <span>Proactive learner, driven by complex technical challenges</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

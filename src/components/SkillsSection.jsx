import React from "react";
import { skillCategories } from "../data/portfolioData";
import { Code2, Globe, Cpu, LineChart } from "lucide-react";

const CATEGORY_ICONS = {
  "Languages & Runtimes": Code2,
  "Web & Frameworks": Globe,
  "Systems & Engineering Practices": Cpu,
  "Business Strategy & UX Research": LineChart,
};

export function SkillsSection() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="page-container">
        <div className="section-header">
          <h2>Technical & Domain Competencies</h2>
          <p className="section-desc">
            A balanced toolkit combining algorithmic thinking, full-stack web engineering, and product-business acumen.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((group, idx) => {
            const IconComponent = CATEGORY_ICONS[group.category] || Code2;

            return (
              <div key={idx} className="skill-category-card">
                <div className="skill-category-header">
                  <div className="dual-card-icon tech" style={{ width: 36, height: 36 }}>
                    <IconComponent size={18} />
                  </div>
                  <div>
                    <h3 className="skill-category-title">{group.category}</h3>
                    <p className="skill-category-desc">{group.description}</p>
                  </div>
                </div>

                <div className="skills-list">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-item-left">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-context">{skill.context}</span>
                      </div>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

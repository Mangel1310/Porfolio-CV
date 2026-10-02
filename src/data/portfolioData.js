export const personalInfo = {
  name: "Miguel Ángel Luque Gómez",
  nickname: "mangel",
  githubHandle: "Mangel1310",
  githubUrl: "https://github.com/Mangel1310",
  email: "mangel.luqueg@gmail.com",
  role: "Software Engineer & Business Technologist",
  status: "Available for Software Engineering Roles & Internships",
  location: "Granada, Spain",
  summary:
    "5th-year Double Degree student in Computer Engineering and Business Administration (ADE) at Universidad de Granada (UGR). I bridge technical systems architecture with business strategy, building production-oriented full-stack applications, robust object-oriented software, and research-driven user experiences. Proactive, curious learner, and dedicated team player.",
  metrics: [
    { label: "Degree", value: "DGIIM (UGR)", detail: "5th Year • Informática + ADE" },
    { label: "Core Projects", value: "3 Featured", detail: "Full-Stack, UX & Systems" },
    { label: "Engineering Mindset", value: "Dual Domain", detail: "Code Craft & Business Value" },
  ]
};

export const projects = [
  {
    id: "casino",
    title: "Casino Online - Headless Platform",
    team: "Lasaña Team",
    category: "Full-Stack & Web",
    image: "/projects/casino.jpg",
    summary:
      "A headless web platform featuring a decoupled Django backend integrated with an Oracle SQL database and a modern React frontend.",
    role: "Full-Stack Developer",
    featured: true,
    github: "https://github.com/LasanaTeam/Casino",
    demo: null,
    tags: ["Django", "Python 3.11", "React", "Vite", "Oracle DB", "Headless", "REST API", "Conda"],
    architecture: {
      headline: "Modular Micro-Apps with Enterprise Relational Database",
      points: [
        "Decoupled headless architecture separating the client SPA (React + Vite) from the server logic (Django REST).",
        "Configured secure connectivity to Universidad de Granada's Oracle Database infrastructure through dedicated networking and environment isolation.",
        "Modular Django application breakdown: 'usuarios' (authentication, player profiles, administrative roles), 'juegos' (game catalog & rules), 'transacciones' (betting ledger and fund balance operations), 'eventos' (tournaments & promo mechanics), and 'sesiones' (responsible gaming session control).",
        "Isolated development environments using Conda and automated dependency lockfiles."
      ],
      stackDetails: "Backend: Python 3.11, Django • Database: Oracle SQL (UGR) • Frontend: React, Vite, JavaScript ES6+ • Environments: Conda, Node.js"
    }
  },
  {
    id: "qarmita",
    title: "La Qarmita - Cultural & Coffee UX Platform",
    team: "Errores404 Team",
    category: "UX & Product",
    image: "/projects/qarmita.jpg",
    summary:
      "Comprehensive UX research, user journey mapping, and mobile-first frontend transformation for a hybrid cultural coffee shop and art bookstore in Granada.",
    role: "UX Researcher & Frontend Architect",
    featured: true,
    github: "https://github.com/jxliian/Errores404_DIU2_2526",
    demo: "https://errores404-laqarmita.surge.sh",
    figmaDemo: "https://crane-boho-90485797.figma.site",
    tags: ["UX Research", "React", "Mobile-First", "User Journeys", "Figma", "Usability Audit", "Surge"],
    architecture: {
      headline: "Empirical User Research & Usability Engineering",
      points: [
        "Conducted a quantitative & qualitative Usability Review diagnosing a 46/100 score on the legacy Blogspot presence due to non-responsive layouts, visual noise, and buried cultural agenda.",
        "Engineered User Research Plans, Empathy Maps, and distinct User Personas (Natalio: university student seeking quiet study spaces; Elena: cultural manager booking exhibitions).",
        "Developed comprehensive User Task Matrices, Task Flows, and a multi-level Information Architecture (Sitemap & Labelling).",
        "Delivered interactive Figma wireframes and a live, responsive production prototype deployed on Surge, featuring event schedules, artisanal menus, and a loyalty rewards model."
      ],
      stackDetails: "Design: Figma, Canva, User Research Plans, Journey Maps • Code: HTML5, CSS3, React, Mobile-First CSS • Deployment: Surge"
    }
  },
  {
    id: "pdoo",
    title: "Labyrinth & Monsters Adventure Game",
    team: "Software Design Lab",
    category: "Systems & OOP",
    image: "/projects/pdoo.jpg",
    summary:
      "A turn-based dungeon crawler and combat adventure game built in Java and Ruby implementing strict Object-Oriented Design (OOP) principles and MVC architecture.",
    role: "Software Engineer / Game Logic Developer",
    featured: true,
    github: "https://github.com/SergiCG10/PDOO",
    demo: null,
    tags: ["Java", "Ruby", "OOP", "MVC Architecture", "Algorithms", "Game Design", "Design Patterns"],
    architecture: {
      headline: "Dual-Stack OOP Modeling & State Separation",
      points: [
        "Implemented the complete domain model in both Java and Ruby to explore object paradigms, type systems, and dynamic vs static dispatch.",
        "Structured with pure Model-View-Controller (MVC) separation: decoupled game loop state from presentation layers (GUI / CLI views).",
        "Engineered game mechanics: weapon & shield durability degradation algorithms, turn-based dice combat calculations, monster encounter AI, and 2D labyrinth graph navigation.",
        "Applied OOP design patterns: encapsulation, polymorphism, inheritance hierarchies for game entities (Players, Monsters, Obstacles, Collectibles), and state management."
      ],
      stackDetails: "Core Languages: Java (Swing / MVC), Ruby • Patterns: MVC, Strategy, State • Core CS: Object-Oriented Modeling, Graph Navigation"
    }
  }
];

export const skillCategories = [
  {
    category: "Languages & Runtimes",
    description: "Core languages used across university curricula, projects, and systems development",
    skills: [
      { name: "Java", level: "Mid-level", context: "OOP, MVC, Data Structures" },
      { name: "Python", level: "Mid-level", context: "Django, Scripting, Data" },
      { name: "C++", level: "Foundational", context: "Memory management, algorithms" },
      { name: "Ruby", level: "Foundational", context: "OOP modeling, dynamic scripts" },
      { name: "JavaScript (ES6+)", level: "Practical", context: "Modern web, React, Vite" },
      { name: "PHP", level: "Foundational", context: "Server-side scripting" },
      { name: "SQL (Oracle / MySQL)", level: "Practical", context: "Relational queries, schema design" }
    ]
  },
  {
    category: "Web & Frameworks",
    description: "Technologies for building scalable full-stack web applications and interfaces",
    skills: [
      { name: "React", level: "Practical", context: "Component architecture, hooks, state" },
      { name: "Vite", level: "Practical", context: "Fast bundling, dev tooling" },
      { name: "Django", level: "Practical", context: "Modular apps, ORM, REST API" },
      { name: "HTML5 & CSS3", level: "Solid", context: "Semantic layout, responsive design" }
    ]
  },
  {
    category: "Systems & Engineering Practices",
    description: "Architectural disciplines and development tools",
    skills: [
      { name: "Object-Oriented Design (OOP)", level: "Solid", context: "Inheritance, polymorphism, encapsulation" },
      { name: "Model-View-Controller (MVC)", level: "Solid", context: "Separation of concerns" },
      { name: "Headless Architecture", level: "Practical", context: "Decoupled frontend & backend services" },
      { name: "Git & GitHub", level: "Solid", context: "Version control, team PRs, collaboration" },
      { name: "Conda / Virtual Envs", level: "Practical", context: "Isolated dependency management" }
    ]
  },
  {
    category: "Business Strategy & UX Research",
    description: "The distinct advantage of the Double Degree: bridging code with business value",
    skills: [
      { name: "User Research & Testing", level: "Practical", context: "Empathy maps, user journeys, task flows" },
      { name: "Usability Audits & Heuristics", level: "Practical", context: "Quantitative & qualitative site analysis" },
      { name: "Business Administration & Strategy", level: "Academic", context: "Financial modeling, operations, marketing" },
      { name: "Figma & Canva", level: "Practical", context: "Wireframing, prototyping, visual assets" },
      { name: "Team Leadership & Collaboration", level: "Core Value", context: "Agile group projects, communication" }
    ]
  }
];

export const educationHistory = [
  {
    period: "2020 — Present (5th Year)",
    degree: "Doble Grado en Ingeniería Informática y Administración y Dirección de Empresas (DGIIM)",
    institution: "Universidad de Granada (UGR)",
    location: "Granada, Spain",
    description:
      "A demanding 5-year combined curriculum combining rigorous computer science foundations with executive business management. Balances technical rigor (algorithms, databases, computer architecture, software design, web development) with strategic business acumen (financial management, strategic direction, operations, and marketing).",
    highlights: [
      "Software engineering projects executed in multi-disciplinary teams",
      "Hands-on database administration using Oracle DB and relational architectures",
      "Object-oriented software systems in Java, C++, and Ruby",
      "Comprehensive product discovery and UX case studies"
    ]
  }
];

"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Project {
  name: string;
  period: string;
  stack: string[];
  bullets: string[];
  link?: string;
}

const projects: Project[] = [
  {
    name: "VandyCourses",
    period: "Dec. 2024 – Feb. 2025",
    stack: ["TypeScript", "React.js", "Next.js", "Node.js", "Express.js", "MySQL", "AWS RDS"],
    bullets: [
      "Full-stack web app serving 5,000+ Vanderbilt students for anonymous grade sharing with Google OAuth2 authentication.",
      "Responsive frontend with CRUD operations for course grade data filterable by multiple parameters.",
      "REST API using Sequelize ORM and MySQL on AWS RDS, following MVC design pattern with secure endpoints.",
      "Cloud deployment via Vercel (frontend), Render (backend), and AWS RDS with a full CI/CD pipeline.",
    ],
  },
  {
    name: "NHL Predictor",
    period: "Dec. 2023 – Jan. 2024",
    stack: ["Python", "Flask", "Pandas", "Scikit-learn", "NumPy"],
    bullets: [
      "Predictive model to determine the most likely recipients of NHL award categories.",
      "Formatted and prepared 15+ years and 3,000+ data points for training using Pandas dataframes.",
      "Trained using a Multi-Output Regressor from Scikit-learn, generating the 5 most likely award recipients with high accuracy.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Things I've built" title="Projects" />
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--color-accent-glow)";
                (e.currentTarget as HTMLElement).style.background =
                  "var(--color-surface-raised)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--color-border)";
                (e.currentTarget as HTMLElement).style.background =
                  "var(--color-surface)";
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {project.period}
                  </p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "var(--color-text-muted)")
                    }
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <ul className="space-y-2 flex-1">
                {project.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="mt-2 shrink-0 w-1 h-1 rounded-full"
                      style={{ background: "var(--color-text-muted)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--color-accent-subtle)",
                      color: "var(--color-accent)",
                      border: "1px solid var(--color-accent-glow)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

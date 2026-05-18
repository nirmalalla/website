"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface SkillGroup {
  category: string;
  items: string[];
}

const groups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "HTML/CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flask",
      "Sequelize",
      "Pandas",
      "Scikit-learn",
      "NumPy",
      "AWS SDK",
      "AWS CDK",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS Lambda", "DynamoDB", "RDS", "IAM", "Vercel", "Render", "Git", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Development Tools",
    items: ["VS Code", "IntelliJ", "Android Studio", "GitHub", "NeoVim"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="What I work with" title="Skills" />
        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl p-6"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg"
                    style={{
                      background: "var(--color-surface-raised)",
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {item}
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

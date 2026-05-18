"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  upcoming?: boolean;
}

const jobs: Job[] = [
  {
    title: "Incoming Software Engineer Intern",
    company: "Capital One",
    location: "Chicago, IL",
    period: "June 2026",
    bullets: [],
    upcoming: true,
  },
  {
    title: "Software Engineer Intern",
    company: "Principal Financial Group",
    location: "Des Moines, IA",
    period: "May 2025 – August 2025",
    bullets: [
      "Built a cross-region health check endpoint and automated disaster recovery system in AWS, enabling API traffic to fail over to a secondary API in an alternate region in case of primary region downtime.",
      "Refactored an API endpoint to use AWS Step Functions and securely transmit encrypted sensitive data between steps, eliminating an intermediate encrypted metadata table and improving security.",
      "Migrated 6 AWS Lambda functions and 2 APIs from Serverless Framework YAML to TypeScript-based AWS CDK, improving deploy stability and code readability in a GitHub Actions CI/CD pipeline.",
      "Developed a real-time data pipeline capturing DynamoDB updates, streaming to S3, and loading into Snowflake via SQL — enabling the analytics team to access up-to-date insights.",
    ],
  },
  {
    title: "Research Assistant",
    company: "Medical-Image Analysis and Statistical Interpretation Lab",
    location: "Nashville, TN",
    period: "Jan. 2025 – May 2025",
    bullets: [
      "Managed and preprocessed 5,800+ CT scans for a comparative study on historical bone density patterns and contemporary osteoporosis trends.",
      "Executed image processing workflows using TotalSegmentator to generate detailed 3D renderings of anatomical structures.",
      "Implemented CT phase determination protocols, standardizing scan analysis procedures across historical and contemporary sample sets.",
    ],
  },
  {
    title: "Engineering Manager",
    company: "ChangePlusPlus",
    location: "Nashville, TN",
    period: "Sep. 2024 – May 2025",
    bullets: [
      "Led and mentored a cross-functional team of 8 developers and 1 designer using agile development practices.",
      "Oversaw end-to-end development of an Android app for a nonprofit, focused on offline data entry and database synchronization.",
      "Managed GitHub workflows including code reviews, PR oversight, and code quality standards across the team.",
      "Defined technical architecture decisions including tech stack selection and database design for an offline-first mobile application.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Vanderbilt University Medical Center",
    location: "Nashville, TN",
    period: "April 2024 – May 2025",
    bullets: [
      "Optimized Clinical Informatics systems, improving runtime by over 25% through extensive testing and research.",
      "Developed a server and user interface enabling clinicians to access critical datasets efficiently.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Where I've worked" title="Experience" />
        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: "var(--color-border)" }}
          />
          <div className="space-y-12 pl-8">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div
                  className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full border-2 translate-x-[-4px]"
                  style={{
                    background: job.upcoming
                      ? "var(--color-background)"
                      : "var(--color-accent)",
                    borderColor: job.upcoming
                      ? "var(--color-accent)"
                      : "var(--color-accent)",
                  }}
                />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className="text-base font-semibold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {job.title}
                      </h3>
                      {job.upcoming && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: "var(--color-accent-subtle)",
                            color: "var(--color-accent)",
                            border: "1px solid var(--color-accent-glow)",
                          }}
                        >
                          Upcoming
                        </span>
                      )}
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span
                    className="text-xs shrink-0 mt-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {job.period}
                  </span>
                </div>
                {job.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
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
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

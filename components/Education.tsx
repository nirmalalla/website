"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Academic background" title="Education" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl p-8 flex flex-col sm:flex-row gap-6"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div
            className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: "var(--color-accent-subtle)",
              border: "1px solid var(--color-accent-glow)",
            }}
          >
            <GraduationCap size={22} style={{ color: "var(--color-accent)" }} />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Vanderbilt University
                </h3>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "var(--color-accent)" }}
                >
                  Bachelor of Science in Computer Science and Mathematics
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Nashville, TN
                </p>
              </div>
              <span
                className="text-xs shrink-0"
                style={{ color: "var(--color-text-muted)" }}
              >
                Expected May 2027
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

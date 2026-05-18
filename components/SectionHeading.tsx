"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-2"
        style={{ color: "var(--color-accent)" }}
      >
        {label}
      </p>
      <h2
        className="text-3xl font-bold"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

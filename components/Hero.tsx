"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowDown } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "309-732-6282",
    href: "tel:3097326282",
  },
  {
    icon: Mail,
    label: "allanirmal@gmail.com",
    href: "mailto:allanirmal@gmail.com",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/nirmalalla",
    href: "https://linkedin.com/in/nirmalalla",
  },
  {
    icon: Github,
    label: "github.com/nirmalalla",
    href: "https://github.com/nirmalalla",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, var(--color-accent-glow), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto w-full pt-24 pb-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Software Engineer
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none"
            style={{ color: "var(--color-text-primary)" }}
          >
            Nirmal
            <br />
            <span style={{ color: "var(--color-accent)" }}>Alla.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            CS &amp; Mathematics student at Vanderbilt University. I build
            full-stack applications, cloud infrastructure, and developer tools —
            with a focus on clean architecture and real-world impact.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-wrap gap-3 pt-2"
          >
            {contacts.map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--color-accent)";
                  el.style.color = "var(--color-text-primary)";
                  el.style.background = "var(--color-accent-subtle)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--color-border)";
                  el.style.color = "var(--color-text-secondary)";
                  el.style.background = "var(--color-surface)";
                }}
              >
                <Icon size={14} />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ color: "var(--color-text-muted)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}

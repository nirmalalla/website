"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 10, 15, 0.85)"
          : "rgba(10, 10, 15, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span
          className="text-sm font-semibold tracking-wide"
          style={{ color: "var(--color-accent)" }}
        >
          NA
        </span>
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "var(--color-text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "var(--color-text-secondary)")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

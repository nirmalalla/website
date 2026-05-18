export default function Footer() {
  return (
    <footer className="px-6 py-10 text-center">
      <div
        className="max-w-5xl mx-auto pt-10"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          Nirmal Alla · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function FooterCtaSection() {
  return (
    <footer className="section-shell px-5 py-8 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center border border-black/10 bg-white/90 text-[10px] font-semibold text-black">
              BL
            </div>
            <p className="font-display text-base text-black">Business Logic</p>
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
            © 2026 Business Logic Agency. Precision in code.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

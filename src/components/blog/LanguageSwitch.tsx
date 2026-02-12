import Link from "next/link";

export default function LanguageSwitch({
  currentLang,
  translationSlug,
}: {
  currentLang: string;
  translationSlug: string;
}) {
  const targetLang = currentLang === "fr" ? "EN" : "FR";

  return (
    <Link
      href={`/blog/${translationSlug}`}
      className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded border border-border text-text-dim hover:border-accent hover:text-accent transition-all"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      Lire en {targetLang}
    </Link>
  );
}

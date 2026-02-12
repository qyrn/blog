export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <h1 className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-accent glitch-hover">
        [pseudo].sh
      </h1>
      <p className="text-text-dim text-sm">
        Blog cybersécurité - Writeups, tutoriels et veille technique
      </p>
    </div>
  );
}

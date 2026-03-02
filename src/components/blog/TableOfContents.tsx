"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".prose h2, .prose h3"));
    const items: TocItem[] = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(items);

    const onScroll = () => {
      let current = "";
      for (const el of elements) {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          current = el.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <p className="text-[10px] text-text-faint uppercase tracking-widest mb-3">
        On this page
      </p>
      <ul className="space-y-1.5">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? "0.75rem" : 0 }}>
            <a
              href={`#${h.id}`}
              className={`text-xs transition-colors block py-0.5 ${
                activeId === h.id
                  ? "text-accent"
                  : "text-text-dim hover:text-text"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

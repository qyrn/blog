"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";
import CopyButton from "./CopyButton";

export default function Pre(props: ComponentPropsWithoutRef<"pre">) {
  const ref = useRef<HTMLPreElement>(null);

  const getText = () => ref.current?.textContent ?? "";

  return (
    <div className="relative group">
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton text={getText()} />
      </div>
      <pre ref={ref} {...props} />
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageZoomProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ImageZoom({ src, alt, width = 800, height = 450 }: ImageZoomProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="my-6 cursor-zoom-in" onClick={() => setOpen(true)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg border border-border transition-opacity hover:opacity-90"
        />
        {alt && <figcaption className="mt-2 text-center text-xs text-text-dim">{alt}</figcaption>}
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-bg/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <Image
            src={src}
            alt={alt}
            width={width * 2}
            height={height * 2}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />
        </div>
      )}
    </>
  );
}

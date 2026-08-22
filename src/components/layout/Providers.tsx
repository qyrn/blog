"use client";

import { HeroUIProvider } from "@heroui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider className="flex-1 flex flex-col">{children}</HeroUIProvider>
  );
}

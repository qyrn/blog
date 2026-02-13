import { Shield } from "lucide-react";
import { DIFFICULTY_STYLES } from "@/lib/constants";
import type { Difficulty as DifficultyType } from "@/lib/types";

interface DifficultyProps {
  level: DifficultyType;
}

export default function Difficulty({ level }: DifficultyProps) {
  const style = DIFFICULTY_STYLES[level];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs ${style}`}>
      <Shield className="h-3 w-3" />
      {level}
    </span>
  );
}

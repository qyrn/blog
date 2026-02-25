"use client";

import {
  POST_TYPES,
  CATEGORIES,
  DIFFICULTIES,
  TYPE_STYLES,
  CATEGORY_STYLES,
  DIFFICULTY_STYLES,
} from "@/lib/constants";
import type { PostFilterState, PostType, Category, Difficulty } from "@/lib/types";

const INACTIVE = "border-border text-text-dim hover:border-accent/30";

export default function PostFilters({
  filters,
  onChange,
}: {
  filters: PostFilterState;
  onChange: (filters: PostFilterState) => void;
}) {
  function toggle<T>(arr: T[], val: T): T[] {
    return arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];
  }



  return (
    <div className="space-y-3 mb-6">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-[10px] text-text-dim uppercase tracking-widest mr-1">type</span>
        {POST_TYPES.map(({ value, label }) => {
          const active = filters.types.includes(value);
          const style = active ? TYPE_STYLES[value] : INACTIVE;
          return (
            <button
              key={value}
              onClick={() => onChange({ ...filters, types: toggle(filters.types, value) })}
              className={`text-[11px] px-2.5 py-1 rounded border transition-all cursor-pointer ${style}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-[10px] text-text-dim uppercase tracking-widest mr-1">cat</span>
        {CATEGORIES.map(({ value, label }) => {
          const active = filters.categories.includes(value);
          const style = active ? CATEGORY_STYLES[value] : INACTIVE;
          return (
            <button
              key={value}
              onClick={() => onChange({ ...filters, categories: toggle(filters.categories, value) })}
              className={`text-[11px] px-2.5 py-1 rounded border transition-all cursor-pointer ${style}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-[10px] text-text-dim uppercase tracking-widest mr-1">diff</span>
        {DIFFICULTIES.map(({ value, label }) => {
          const active = filters.difficulties.includes(value);
          const style = active ? DIFFICULTY_STYLES[value] : INACTIVE;
          return (
            <button
              key={value}
              onClick={() => onChange({ ...filters, difficulties: toggle(filters.difficulties, value) })}
              className={`text-[11px] px-2.5 py-1 rounded border transition-all cursor-pointer ${style}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

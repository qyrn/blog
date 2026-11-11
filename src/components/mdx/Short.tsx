import ShortPlayer from "@/components/blog/ShortPlayer";
import { shorts } from "@/config/shorts";

export default function Short({ id }: { id: string }) {
  const short = shorts.find((candidate) => candidate.id === id);
  if (!short) {
    throw new Error(`Unknown short id "${id}", add it to src/config/shorts.ts`);
  }

  return (
    <figure className="not-prose mx-auto my-8 w-full max-w-[300px]">
      <ShortPlayer id={short.id} title={short.title} />
      <figcaption className="mt-2 text-center text-xs text-text-dim">{short.title}</figcaption>
    </figure>
  );
}

"use client";

import * as runtime from "react/jsx-runtime";
import { useMDXComponents } from "../../../mdx-components";

function getMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

export default function PostBody({ code }: { code: string }) {
  const Component = getMDXComponent(code);
  const components = useMDXComponents({});
  return (
    <div className="prose prose-invert max-w-none">
      <Component components={components} />
    </div>
  );
}

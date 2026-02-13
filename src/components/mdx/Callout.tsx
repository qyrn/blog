import { AlertTriangle, Info, AlertCircle, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

const variants = {
  info: {
    icon: Info,
    border: "border-blue",
    bg: "bg-blue/5",
    iconColor: "text-blue",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-orange",
    bg: "bg-orange/5",
    iconColor: "text-orange",
  },
  danger: {
    icon: AlertCircle,
    border: "border-red",
    bg: "bg-red/5",
    iconColor: "text-red",
  },
  tip: {
    icon: Lightbulb,
    border: "border-green",
    bg: "bg-green/5",
    iconColor: "text-green",
  },
};

interface CalloutProps {
  type?: keyof typeof variants;
  title?: string;
  children: ReactNode;
}

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const v = variants[type];
  const Icon = v.icon;

  return (
    <div className={`my-6 rounded-lg border-l-4 ${v.border} ${v.bg} p-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${v.iconColor}`} />
        <div className="min-w-0">
          {title && <p className="mb-1 font-semibold text-text">{title}</p>}
          <div className="text-sm text-text-dim [&>p]:m-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import type { ClaimKind, ClaimState, Posture } from "@/lib/types";

const STATE_CLASS: Record<ClaimState, string> = {
  supported: "text-ok shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-ok)_40%,transparent)]",
  unproven: "text-warn shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-warn)_40%,transparent)]",
  disputed: "text-bad shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-bad)_40%,transparent)]",
};

const KIND_CLASS: Record<ClaimKind, string> = {
  evidence: "text-muted shadow-[inset_0_0_0_1px_var(--color-rule)]",
  inference: "text-muted shadow-[inset_0_0_0_1px_var(--color-rule)]",
  assumption: "text-faint shadow-[inset_0_0_0_1px_var(--color-rule)]",
};

const POSTURE_CLASS: Record<Posture, string> = {
  "exec-pause": "text-gulf shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-gulf)_35%,transparent)]",
  statute: "text-fg shadow-[inset_0_0_0_1px_var(--color-rule)]",
  bill: "text-warn shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-warn)_35%,transparent)]",
  local: "text-muted shadow-[inset_0_0_0_1px_var(--color-rule)]",
  open: "text-faint shadow-[inset_0_0_0_1px_var(--color-rule)]",
};

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-1 rounded-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ClaimStateBadge({ state }: { state: ClaimState }) {
  return <Badge className={STATE_CLASS[state]}>{state}</Badge>;
}

export function ClaimKindBadge({ kind }: { kind: ClaimKind }) {
  return <Badge className={KIND_CLASS[kind]}>{kind}</Badge>;
}

export function PostureBadge({ posture }: { posture: Posture }) {
  const label: Record<Posture, string> = {
    "exec-pause": "executive pause",
    statute: "ALPR statute",
    bill: "bill this cycle",
    local: "local drops",
    open: "not retrieved",
  };
  return <Badge className={POSTURE_CLASS[posture]}>{label[posture]}</Badge>;
}

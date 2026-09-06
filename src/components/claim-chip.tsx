import { ClaimKindBadge, ClaimStateBadge } from "@/components/ui/badge";
import type { ClaimKind, ClaimState } from "@/lib/types";
import { SOURCE_BY_ID } from "@/lib/data/sources";

export function ClaimRow({
  state,
  kind,
  sourceIds,
  caveat,
}: {
  state: ClaimState;
  kind: ClaimKind;
  sourceIds: string[];
  caveat?: string;
}) {
  return (
    <div className="mt-3 space-y-2">
      <div className="flex flex-wrap gap-1.5">
        <ClaimStateBadge state={state} />
        <ClaimKindBadge kind={kind} />
      </div>
      {sourceIds.length > 0 && (
        <p className="font-mono text-[10px] leading-relaxed text-faint">
          {sourceIds.map((id, i) => {
            const s = SOURCE_BY_ID[id];
            return (
              <span key={id}>
                {i > 0 && " · "}
                {s ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-2 hover:text-muted hover:underline"
                  >
                    {s.title}
                  </a>
                ) : (
                  id
                )}
              </span>
            );
          })}
        </p>
      )}
      {caveat && <p className="text-xs leading-relaxed text-faint">{caveat}</p>}
    </div>
  );
}

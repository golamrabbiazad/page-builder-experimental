import { WithEditor } from "@grapesjs/react";
import { cn } from "@/lib/utils";
import { Preview, ComponentOutline } from "./commands";

export function Topbar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-between py-1 px-16", className)}
    >
      <h2 className="text-2xl font-bold tracking-tighter">M4yours Editor</h2>

      <div className="flex items-center gap-2">
        <WithEditor>
          <Preview />
          <ComponentOutline commandId="core:component-outline" />
        </WithEditor>
      </div>
    </div>
  );
}

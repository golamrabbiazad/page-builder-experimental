import { DevicesProvider, WithEditor } from "@grapesjs/react";
import { TopbarButtons } from "./top-bar-buttons";
import { cn } from "@/lib/utils";
import { SaveToast } from "./commands/save-toast";
import { ComponentOutline } from "./commands/component-outline";
import { Preview } from "./commands/preview";
import { DeviceSelect } from "./device-select";
import { ModeToggle } from "./mode-toggle";

export function Topbar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-200">
        M4yours Editor
      </h2>
      <div className="flex">
        <DevicesProvider>
          {({ selected, select, devices }) => (
            <DeviceSelect
              select={select}
              selected={selected}
              devices={devices}
            />
          )}
        </DevicesProvider>
      </div>
      <div className="flex gap-2 p-2">
        <ModeToggle />
        <WithEditor>
          <ComponentOutline commandId="core:component-outline" />
          <TopbarButtons className="ml-auto px-2" />
          <Preview commandId="core:preview" />
          <SaveToast />
        </WithEditor>
      </div>
    </div>
  );
}

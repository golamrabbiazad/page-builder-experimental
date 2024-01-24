import { DevicesProvider, WithEditor } from "@grapesjs/react";
import { TopbarButtons } from "./top-bar-buttons";
import { cn } from "@/lib/utils";
import { SaveToast } from "./commands/save-toast";
import { ComponentOutline } from "./commands/component-outline";
import { Preview } from "./commands/preview";
import { DeviceSelect } from "./device-select";

export function Topbar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <h2 className="text-2xl font-bold tracking-tighter ml-6">
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
      <div className="flex items-center justify-center gap-2">
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

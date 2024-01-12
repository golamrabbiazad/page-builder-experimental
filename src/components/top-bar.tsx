import { DevicesProvider, WithEditor } from "@grapesjs/react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { TopbarButtons } from "./top-bar-buttons";
import { cn } from "@/lib/utils";
import { SaveToast } from "./commands/save-toast";
import { ComponentOutline } from "./commands/component-outline";
import { Preview } from "./commands/preview";

export function Topbar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "gjs-top-sidebar flex items-center justify-between p-1",
        className
      )}
    >
      <h2 className="text-xl font-bold">M4yours Editor</h2>
      <div className="flex">
        <DevicesProvider>
          {({ selected, select, devices }) => (
            <FormControl size="small">
              <Select
                value={selected}
                onChange={(ev) => select(ev.target.value)}
              >
                {devices.map((device) => (
                  <MenuItem value={device.id} key={device.id}>
                    {device.getName()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </DevicesProvider>
      </div>
      <div className="flex gap-2 p-2">
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

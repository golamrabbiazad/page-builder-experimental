import { DevicesProvider, WithEditor } from "@grapesjs/react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { cx } from "../utils";
import TopbarButtons from "./top-bar-buttons";

export function Topbar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "gjs-top-sidebar flex items-center justify-between p-1",
        className
      )}
    >
      <h2 className="text-xl font-bold p-2">M4yours Editor</h2>
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
      <div className="flex">
        <WithEditor>
          <TopbarButtons className="ml-auto px-2" />
        </WithEditor>
      </div>
    </div>
  );
}

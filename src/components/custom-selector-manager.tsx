import { ElementRef, useRef, useState } from "react";
import { Icon } from "@mdi/react";
import { mdiClose, mdiPlus } from "@mdi/js";
import { SelectorsResultProps } from "@grapesjs/react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { MAIN_BORDER_COLOR, cn } from "@/lib/utils";

export function CustomSelectorManager({
  selectors,
  selectedState,
  states,
  targets,
  setState,
  addSelector,
  removeSelector,
}: Omit<SelectorsResultProps, "Container">) {
  const [newSelector, setNewSelector] = useState({
    name: "",
    label: "",
  });

  const targetStr = targets.join(", ");
  const customInputRef = useRef<ElementRef<"input">>(null);

  return (
    <div className="gjs-custom-selector-manager p-2 flex flex-col gap-2 text-left">
      <div className="flex items-center">
        <div className="flex-grow">Classes</div>
        <FormControl size="small">
          <Select
            value={selectedState}
            onChange={(ev) => setState(ev.target.value)}
            displayEmpty
          >
            <MenuItem value="">- State -</MenuItem>
            {states.map((state) => (
              <MenuItem value={state.id} key={state.id}>
                {state.getName()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div
        className={cn(
          "flex items-center gap-2 flex-wrap p-2 bg-black/30 border rounded min-h-[45px]",
          MAIN_BORDER_COLOR
        )}
      >
        {targetStr ? (
          <button
            type="button"
            onClick={() => {
              customInputRef.current?.classList.toggle("hidden");
            }}
            className={cn("border rounded px-2 py-1")}
          >
            <Icon size={0.7} path={mdiPlus} />
          </button>
        ) : (
          <div className="opacity-70">Select a component</div>
        )}

        <div
          onClick={(ev) => {
            console.log(ev);
          }}
        >
          <input
            type="text"
            ref={customInputRef}
            className="bg-inherit border rounded text-white hidden"
            onChange={(e) => {
              // stored in variable
              setNewSelector({
                name: e.target.value,
                label: e.target.value,
              });
            }}
            onKeyDown={(ev) => {
              // on enter keypress add button
              if (ev.key === "Enter") {
                addSelector(newSelector);
                customInputRef.current?.classList.toggle("hidden");
              }
            }}
          />
        </div>
        {selectors.map((selector) => (
          <div
            key={selector.toString()}
            className="px-2 py-1 flex flex-wrap justify-start items-center w-max gap-1 rounded-md whitespace-nowrap bg-blue-500"
          >
            <div>{selector.getLabel()}</div>
            <button type="button" onClick={() => removeSelector(selector)}>
              <Icon size={0.7} path={mdiClose} />
            </button>
          </div>

          // <EditableSelector
          //   key={selector.toString()}
          //   selector={selector}
          //   addSelector={addSelector}
          //   removeSelector={removeSelector}
          // />
        ))}
      </div>
      <div>
        Selected: <span className="opacity-70">{targetStr || "None"}</span>
      </div>
    </div>
  );
}

import { SelectorsResultProps } from "@grapesjs/react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { MAIN_BORDER_COLOR } from "../utils";
import { mdiClose, mdiPlus } from "@mdi/js";
import { Icon } from "@mdi/react";
import { cx } from "../utils";
import { useState } from "react";

export function CustomSelectorManager({
  selectors,
  selectedState,
  states,
  targets,
  setState,
  addSelector,
  removeSelector,
}: Omit<SelectorsResultProps, "Container">) {
  // const [selectorValue, setSelectorValue] = useState("");

  const addNewSelector = (ev) => {
    const next = selectors.length + 1;
    addSelector({ name: `next-${next}`, label: `next-${next}` });

    console.log(ev);
  };

  // const updateSelector = (ev: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectorValue(ev.target.value);
  //   // setState(sele);
  // };

  const targetStr = targets.join(", ");

  return (
    <div className="gjs-custom-selector-manager p-2 flex flex-col gap-2 text-left">
      <div className="flex items-center">
        <div className="flex-grow">Selectors</div>
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
        className={cx(
          "flex items-center gap-2 flex-wrap p-2 bg-black/30 border rounded min-h-[45px]",
          MAIN_BORDER_COLOR
        )}
      >
        {targetStr ? (
          <button
            type="button"
            onClick={addNewSelector}
            className={cx("border rounded px-2 py-1")}
          >
            <Icon size={0.7} path={mdiPlus} />
          </button>
        ) : (
          <div className="opacity-70">Select a component</div>
        )}
        {selectors.map((selector) => (
          <div
            key={selector.toString()}
            className="px-2 py-1 flex flex-wrap justify-start items-center w-max gap-1 whitespace-nowrap bg-sky-500 rounded"
          >
            <input
              type="text"
              value={selector.getName()}
              // onChange={updateSelector}
              className="text-white bg-inherit border-none focus:outline-none"
            />

            <button type="button" onClick={() => removeSelector(selector)}>
              <Icon size={0.7} path={mdiClose} />
            </button>
          </div>
        ))}
      </div>
      <div>
        Selected: <span className="opacity-70">{targetStr || "None"}</span>
      </div>
    </div>
  );
}

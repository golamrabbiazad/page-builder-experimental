import { ElementRef, useRef, useState } from "react";
import { Icon } from "@mdi/react";
import { mdiClose, mdiPlus } from "@mdi/js";
import { SelectorsResultProps } from "@grapesjs/react";
import { MAIN_BORDER_COLOR } from "@/lib/common";
import { cn } from "@/lib/utils";

export function CustomSelectorManager({
  selectors,
  targets,
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

        <div>
          <input
            type="text"
            ref={customInputRef}
            className="bg-inherit border rounded text-white hidden caret-current p-1"
            placeholder="text-center"
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
                addSelector({
                  name: newSelector.name.toString(),
                  label: newSelector.label.toString(),
                  type: 1,
                });
                if (customInputRef.current) {
                  customInputRef.current.value = "";
                }
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
        ))}
      </div>
      <div>
        Selected: <span className="opacity-70">{targetStr || "None"}</span>
      </div>
    </div>
  );
}

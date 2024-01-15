import { ElementRef, useRef, useState } from "react";
import { SelectorsResultProps } from "@grapesjs/react";
import { SelectorProps } from "grapesjs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, X } from "lucide-react";

export function CustomSelectorManager({
  selectors,
  targets,
  addSelector,
  removeSelector,
}: Omit<SelectorsResultProps, "Container">) {
  const [newSelector, setNewSelector] = useState<SelectorProps>({
    name: "",
    label: "",
  });
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const targetStr = targets.join(", ");
  const customInputRef = useRef<ElementRef<"input">>(null);

  return (
    <div className="gjs-custom-selector-manager p-2 flex flex-col gap-2 text-left">
      <div className="flex items-center">
        <div className="flex-grow text-slate-900 dark:text-slate-200">
          Classes
        </div>
      </div>
      <div>
        {targetStr ? (
          <Button
            type="button"
            onClick={() => {
              customInputRef.current?.classList.toggle("hidden");
              setIsSelectorOpen(!isSelectorOpen);
            }}
            className="px-2 h-6"
          >
            {isSelectorOpen ? <X /> : <Plus />}
          </Button>
        ) : (
          <div className="text-slate-900 dark:text-slate-100 font-bold border border-slate-700 p-4 rounded-md">
            Select a component
          </div>
        )}

        <div>
          <Input
            type="text"
            ref={customInputRef}
            className="hidden text-slate-900 dark:text-slate-100"
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
                  ...newSelector,
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
            className="px-2 h-10 flex flex-wrap justify-start items-center w-max gap-1 rounded-md whitespace-nowrap bg-blue-500"
          >
            <div>{selector.getLabel()}</div>
            <Button
              type="button"
              className="h-6 w-4"
              variant="destructive"
              onClick={() => removeSelector(selector)}
            >
              X{/* this change to <X /> component. */}
            </Button>
          </div>
        ))}
      </div>
      <p className="text-slate-900 dark:text-slate-200">
        Selected: <span className="opacity-70">{targetStr || "None"}</span>
      </p>
    </div>
  );
}

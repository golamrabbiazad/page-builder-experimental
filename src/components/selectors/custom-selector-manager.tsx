import { SelectorProps } from "grapesjs";
import { useRef, useState } from "react";
import { SelectorsResultProps } from "@grapesjs/react";

import { Button, Input, InputRef } from "antd";

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

  const customInputRef = useRef<InputRef>(null);

  return (
    <div className="gjs-custom-selector-manager p-2 flex flex-col gap-2 text-left">
      <div className="flex items-center">
        <div className="flex-grow">Classes</div>
      </div>
      <div>
        {targetStr ? (
          <Button
            onClick={() => {
              customInputRef.current?.input?.classList.toggle("hidden");
              setIsSelectorOpen(!isSelectorOpen);
            }}
            className="px-2 h-6 my-2"
          >
            {isSelectorOpen ? (
              <i className="fa-solid fa-xmark h-4 w-4" />
            ) : (
              <i className="fa-solid fa-plus h-4 w-4" />
            )}
          </Button>
        ) : (
          <div className="font-bold text-xl p-4 rounded-md flex items-center gap-2 border border-categoryCardBg shadow-md">
            <i className="h-6 w-8 fa-solid fa-mouse-pointer" />
            Select a component
          </div>
        )}

        <div>
          <Input
            ref={customInputRef}
            type="text"
            className="hidden mb-2"
            placeholder="text-center"
            onChange={(e) => {
              setNewSelector({
                name: e.target.value,
                label: e.target.value,
              });
            }}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                addSelector({
                  ...newSelector,
                  type: 1,
                });

                if (customInputRef.current?.input) {
                  customInputRef.current.input.value = "";
                }
              }
            }}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {selectors.map((selector) => (
            <div
              key={selector.toString()}
              className="bg-mantis-500 rounded-md w-max p-1 items-center flex gap-2"
            >
              <p>{selector.getLabel()}</p>

              <i
                className="fa-solid fa-xmark h-4 w-4"
                onClick={() => removeSelector(selector)}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-slate-900 dark:text-slate-200">
        Selected: <span className="opacity-70">{targetStr || "None"}</span>
      </p>
    </div>
  );
}

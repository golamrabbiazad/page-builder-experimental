import { SelectorProps } from "grapesjs";
import { useRef, useState } from "react";
import { SelectorsResultProps } from "@grapesjs/react";

import { Button, Flex, Input, InputRef } from "antd";

export function SelectorManager({
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
    <Flex
      style={{
        padding: "0.5rem",
        gap: "0.5rem",
        height: "100%",
      }}
      vertical
    >
      <h3>Classes</h3>

      <div>
        {targetStr ? (
          <Button
            onClick={() => {
              customInputRef.current?.input?.classList.toggle("hidden");
              setIsSelectorOpen(!isSelectorOpen);
            }}
            style={{
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              height: "2rem",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            {isSelectorOpen ? (
              <i className="fa-solid fa-xmark" />
            ) : (
              <i className="fa-solid fa-plus" />
            )}
          </Button>
        ) : (
          <Flex
            align="center"
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: "8px",
              padding: "1rem",
              border: "1px dashed white",
            }}
            gap="1rem"
          >
            <i className="fa-solid fa-mouse-pointer" />
            Select a component
          </Flex>
        )}

        <div>
          <Input
            ref={customInputRef}
            type="text"
            style={{
              marginBottom: "0.5rem",
            }}
            className="hidden"
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
        <Flex gap="0.2rem" wrap="wrap">
          {selectors.map((selector) => (
            <Button
              type="primary"
              key={selector.toString()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                borderRadius: "8px",
                padding: "8px",
              }}
              className="bg-mantis-500 rounded-md w-max p-1 items-center flex gap-2"
            >
              <p>{selector.getLabel()}</p>

              <i
                className="fa-solid fa-xmark h-4 w-4"
                onClick={() => removeSelector(selector)}
              />
            </Button>
          ))}
        </Flex>
      </div>
      <p>
        Selected: <span style={{ opacity: 0.5 }}>{targetStr || "None"}</span>
      </p>
    </Flex>
  );
}

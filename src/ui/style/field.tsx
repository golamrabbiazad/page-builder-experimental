import * as React from "react";
import { useEditor } from "@grapesjs/react";
import type {
  Property,
  PropertyComposite,
  PropertyRadio,
  PropertySelect,
  PropertySlider,
  PropertyStack,
} from "grapesjs";

import { cn } from "@/lib/utils";
import { ROUND_BORDER_COLOR } from "@/lib/common";
import { Input, Button, Slider, Radio, Select, ColorPicker, Flex } from "antd";

interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
  prop: Property;
}

export function StylePropertyField({ prop, ...rest }: StylePropertyFieldProps) {
  const editor = useEditor();

  const handleChange = (value: string) => {
    prop.upValue(value);
  };

  const openAssets = () => {
    const { Assets } = editor;
    Assets.open({
      select: (asset, complete) => {
        prop.upValue(asset.getSrc(), { partial: !complete });
        complete && Assets.close();
      },
      types: ["image"],
      accept: "image/*",
    });
  };

  const type = prop.getType();
  const defValue = prop.getDefaultValue();
  const canClear = prop.canClear();
  const hasValue = prop.hasValue();
  const value = prop.getValue();
  const valueString = hasValue ? value : "";
  const valueWithDef = hasValue ? value : defValue;

  let inputToRender = (
    <Input
      placeholder={defValue}
      value={valueString}
      onChange={(ev) => handleChange(ev.target.value)}
    />
  );

  switch (type) {
    case "radio":
      {
        const radioProp = prop as PropertyRadio;
        inputToRender = (
          <Radio.Group
            value={value}
            onChange={(ev) => handleChange(ev.target.value)}
          >
            {radioProp.getOptions().map((option) => (
              <Radio
                value={radioProp.getOptionId(option)}
                key={radioProp.getOptionId(option)}
              >
                {radioProp.getOptionId(option)}
              </Radio>
            ))}
          </Radio.Group>
        );
      }
      break;
    case "select":
      {
        const selectProp = prop as PropertySelect;
        inputToRender = (
          <Select
            style={{ width: "50%" }}
            defaultValue="Select"
            onChange={(ev) => handleChange(ev)}
            options={selectProp.getOptions().map((option) => ({
              value: selectProp.getOptionId(option),
              label: selectProp.getOptionLabel(option),
            }))}
          />
        );
      }
      break;
    case "color":
      {
        inputToRender = (
          <ColorPicker
            onChange={(ev) => handleChange(ev.toHexString())}
            defaultValue={valueString}
          />
        );
      }
      break;
    case "slider":
      {
        const sliderProp = prop as PropertySlider;
        inputToRender = (
          <Slider
            defaultValue={valueWithDef}
            value={parseFloat(value)}
            min={sliderProp.getMin()}
            max={sliderProp.getMax()}
            step={sliderProp.getStep()}
            onChange={(v) => handleChange(v.toString())}
          />
        );
      }
      break;
    case "file":
      {
        inputToRender = (
          <Flex vertical align="center" gap="1.5rem">
            {value && value !== defValue && (
              <div
                style={{
                  backgroundImage: `url("${value}")`,
                  width: "50px",
                  height: "50px",
                  borderRadius: "4px",
                  display: "inline-block",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleChange("")}
              />
            )}
            <Button onClick={openAssets}>Select Image</Button>
          </Flex>
        );
      }
      break;
    case "composite":
      {
        const compositeProp = prop as PropertyComposite;
        inputToRender = (
          <Flex
            wrap="wrap"
            style={{
              padding: "0.5rem",
              backgroundColor: "#0a0a0a",
              opacity: "0.3",
            }}
          >
            {compositeProp.getProperties().map((prop) => (
              <StylePropertyField key={prop.getId()} prop={prop} />
            ))}
          </Flex>
        );
      }
      break;
    case "stack":
      {
        const stackProp = prop as PropertyStack;
        const layers = stackProp.getLayers();
        const isTextShadow = stackProp.getName() === "text-shadow";
        inputToRender = (
          <Flex
            style={{
              display: "flex",
              padding: "0.5rem",
              backgroundColor: "#0a0a0a",
              minHeight: "54px",
              border: "1px solid #faf5f5",
              borderRadius: "4px",
            }}
            gap="0.5rem"
            vertical
          >
            {layers.map((layer) => (
              <div key={layer.getId()} className={ROUND_BORDER_COLOR}>
                <Flex
                  gap="0.5rem"
                  style={{
                    padding: "0.3rem 0.5rem",
                    backgroundColor: "#0a0a0a",
                  }}
                  align="center"
                >
                  <Button onClick={() => layer.move(layer.getIndex() - 1)}>
                    <i className="fa-solid fa-chevron-up w-4 h-4" />
                  </Button>
                  <Button onClick={() => layer.move(layer.getIndex() + 1)}>
                    <i className="fa-solid fa-chevron-down h-4 w-4" />
                  </Button>
                  <Button className="flex-grow" onClick={() => layer.select()}>
                    {layer.getLabel()}
                  </Button>
                  <Flex
                    className={cn(
                      "bg-white min-w-[17px] min-h-[17px] text-black text-sm flex justify-center",
                      ROUND_BORDER_COLOR
                    )}
                    style={layer.getStylePreview({
                      number: { min: -3, max: 3 },
                      camelCase: true,
                    })}
                  >
                    {isTextShadow && "T"}
                  </Flex>
                  <Button onClick={() => layer.remove()}>
                    <i className="fa-solid fa-trash" />
                  </Button>
                </Flex>
                {layer.isSelected() && (
                  <div className="p-2 flex flex-wrap">
                    {stackProp.getProperties().map((prop) => (
                      <StylePropertyField key={prop.getId()} prop={prop} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Flex>
        );
      }
      break;
  }

  return (
    <div
      {...rest}
      style={{
        marginBottom: "1rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        width: prop.isFull() ? "100%" : "50%",
      }}
    >
      <Flex
        style={{
          marginBottom: "0.5rem",
          color: canClear ? "limegreen" : "inherit",
        }}
        align="center"
      >
        <div style={{ flexGrow: 1, textTransform: "uppercase" }}>
          {prop.getLabel()}
        </div>
        {canClear && (
          <Button onClick={() => prop.clear()}>
            <i className="fa-solid fa-xmark" />
          </Button>
        )}
        {type === "stack" && (
          <Button
            style={{ marginLeft: "0.5rem" }}
            onClick={() => (prop as PropertyStack).addLayer({}, { at: 0 })}
          >
            <i className="fa-solid fa-plus" />
          </Button>
        )}
      </Flex>
      {inputToRender}
    </div>
  );
}

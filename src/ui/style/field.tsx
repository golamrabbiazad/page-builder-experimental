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

  console.log(value);
  console.log(defValue);
  console.log(valueString);
  console.log(hasValue);

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
          <div className="flex flex-col items-center gap-3">
            {value && value !== defValue && (
              <div
                className="w-[50px] h-[50px] rounded inline-block bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url("${value}")` }}
                onClick={() => handleChange("")}
              />
            )}
            <Button onClick={openAssets}>Select Image</Button>
          </div>
        );
      }
      break;
    case "composite":
      {
        const compositeProp = prop as PropertyComposite;
        inputToRender = (
          <div
            className={cn("flex flex-wrap p-2 bg-black/20", ROUND_BORDER_COLOR)}
          >
            {compositeProp.getProperties().map((prop) => (
              <StylePropertyField key={prop.getId()} prop={prop} />
            ))}
          </div>
        );
      }
      break;
    case "stack":
      {
        const stackProp = prop as PropertyStack;
        const layers = stackProp.getLayers();
        const isTextShadow = stackProp.getName() === "text-shadow";
        inputToRender = (
          <div
            className={cn(
              "flex flex-col p-2 gap-2 bg-black/20 min-h-[54px]",
              ROUND_BORDER_COLOR
            )}
          >
            {layers.map((layer) => (
              <div key={layer.getId()} className={ROUND_BORDER_COLOR}>
                <div className="flex gap-1 bg-slate-800 px-2 py-1 items-center">
                  <Button onClick={() => layer.move(layer.getIndex() - 1)}>
                    <i className="fa-solid fa-chevron-up w-4 h-4" />
                  </Button>
                  <Button onClick={() => layer.move(layer.getIndex() + 1)}>
                    <i className="fa-solid fa-chevron-down h-4 w-4" />
                  </Button>
                  <Button className="flex-grow" onClick={() => layer.select()}>
                    {layer.getLabel()}
                  </Button>
                  <div
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
                  </div>
                  <Button onClick={() => layer.remove()}>
                    <i className="fa-solid fa-trash" />
                  </Button>
                </div>
                {layer.isSelected() && (
                  <div className="p-2 flex flex-wrap">
                    {stackProp.getProperties().map((prop) => (
                      <StylePropertyField key={prop.getId()} prop={prop} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
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
        <div className="flex-grow capitalize">{prop.getLabel()}</div>
        {canClear && (
          <Button onClick={() => prop.clear()}>
            <i className="fa-solid fa-xmark" />
          </Button>
        )}
        {type === "stack" && (
          <Button
            className="!ml-2"
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

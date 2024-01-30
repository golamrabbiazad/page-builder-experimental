import { Trait } from "grapesjs";
import { useEditor } from "@grapesjs/react";
import { Input, Button, Checkbox, Select, Flex, ColorPicker } from "antd";

interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
  trait: Trait;
}

export function TraitPropertyField({
  trait,
  ...rest
}: StylePropertyFieldProps) {
  const editor = useEditor();
  const handleChange = (value: string) => {
    trait.setValue(value);
  };

  const onChange = (ev: any) => {
    handleChange(ev.target.value);
  };

  const handleButtonClick = () => {
    const command = trait.get("command");
    if (command) {
      typeof command === "string"
        ? editor.runCommand(command)
        : command(editor, trait);
    }
  };

  const type = trait.getType();
  const defValue = trait.getDefault() || trait.attributes.placeholder;
  const value = trait.getValue();
  const valueWithDef = typeof value !== "undefined" ? value : defValue;

  let inputToRender = (
    <Input
      type="text"
      placeholder={defValue}
      value={value}
      onChange={onChange}
      className="text-slate-900 dark:text-slate-100"
    />
  );

  switch (type) {
    case "block":
      {
        inputToRender = <h1>Coming Soon</h1>;
      }
      break;
    case "select":
      {
        inputToRender = (
          <Select
            style={{ width: "100%" }}
            defaultValue="Select"
            onChange={(ev) => trait.setValue(ev)}
            options={trait.getOptions().map((option) => ({
              value: trait.getOptionId(option),
              label: trait.getOptionLabel(option),
            }))}
          />
        );
      }
      break;
    case "color":
      inputToRender = (
        <ColorPicker
          onChange={(ev) => handleChange(ev.toHexString())}
          defaultValue={valueWithDef}
        />
      );
      break;
    case "checkbox":
      {
        inputToRender = (
          <Checkbox
            id="checkbox"
            checked={value}
            onChange={(ev) => trait.setValue(ev.target.checked)}
          />
        );
      }
      break;
    case "button":
      {
        inputToRender = (
          <Button onClick={handleButtonClick}>{trait.getLabel()}</Button>
        );
      }
      break;
  }

  return (
    <div {...rest}>
      <Flex>
        <div style={{ flexGrow: 1, textTransform: "capitalize" }}>
          {trait.getLabel()}
        </div>
      </Flex>

      {inputToRender}
    </div>
  );
}

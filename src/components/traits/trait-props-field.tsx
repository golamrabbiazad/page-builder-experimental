import { ROUND_BORDER_COLOR } from "@/lib/common";
import { cn } from "@/lib/utils";
import { useEditor } from "@grapesjs/react";
import { TextField, InputAdornment, Checkbox, Button } from "@mui/material";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Trait } from "grapesjs";

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
    case "select":
      {
        inputToRender = (
          <Select onValueChange={(ev) => trait.setValue(ev)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue
                className="text-slate-900 dark:text-slate-100"
                placeholder="Select Category"
              />
            </SelectTrigger>
            <SelectContent>
              {trait.getOptions().map((option) => (
                <SelectItem
                  key={trait.getOptionId(option)}
                  value={trait.getOptionId(option)}
                >
                  {trait.getOptionLabel(option)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }
      break;
    case "color":
      {
        inputToRender = (
          <TextField
            fullWidth
            placeholder={defValue}
            value={value}
            onChange={onChange}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <div
                    className={`w-[15px] h-[15px] ${ROUND_BORDER_COLOR}`}
                    style={{ backgroundColor: valueWithDef }}
                  >
                    <Input
                      type="color"
                      className="w-[15px] h-[15px] cursor-pointer opacity-0"
                      value={valueWithDef}
                      onChange={(ev) => handleChange(ev.target.value)}
                    />
                  </div>
                </InputAdornment>
              ),
            }}
          />
        );
      }
      break;
    case "checkbox":
      {
        inputToRender = (
          <Checkbox
            checked={value}
            onChange={(ev) => trait.setValue(ev.target.checked)}
            size="small"
          />
        );
      }
      break;
    case "button":
      {
        inputToRender = (
          <Button fullWidth onClick={handleButtonClick}>
            {trait.getLabel()}
          </Button>
        );
      }
      break;
  }

  return (
    <div {...rest} className={cn("mb-3 px-1 w-full")}>
      <div className={cn("flex mb-2 items-center")}>
        <div className="flex-grow capitalize dark:text-slate-100 text-slate-900">
          {trait.getLabel()}
        </div>
      </div>
      {inputToRender}
    </div>
  );
}

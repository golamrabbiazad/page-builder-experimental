import { Trait } from "grapesjs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

export function SelectType({ trait }: { trait: Trait }) {
  return (
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

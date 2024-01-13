import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Device } from "grapesjs";

{
  /* <FormControl size="small">
<Select
  value={selected}
  onChange={(ev) => select(ev.target.value)}
>
  {devices.map((device) => (
    <MenuItem value={device.id} key={device.id}>
      {device.getName()}
    </MenuItem>
  ))}
</Select>
</FormControl> */
}

interface DeviceSelectProps {
  selected: string;
  select: (deviceId: string) => void;
  devices: Device[];
}

export function DeviceSelect({ selected, select, devices }: DeviceSelectProps) {
  return (
    <Select onValueChange={(ev) => select(ev)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue defaultValue={selected} placeholder="Desktop" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Screen</SelectLabel>
          {devices.map((device) => (
            <SelectItem key={device.id.toString()} value={device.id.toString()}>
              {device.getName()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

import { Device } from "grapesjs";
import { MonitorSmartphone, Smartphone } from "lucide-react";

interface DeviceSelectProps {
  selected: string;
  select: (deviceId: string) => void;
  devices: Device[];
}

export function DeviceSelect({ selected, select }: DeviceSelectProps) {
  return selected === "desktop" ? (
    <Smartphone
      className="w-4 h-4 cursor-pointer"
      onClick={() => select("mobilePortrait")}
    />
  ) : (
    <MonitorSmartphone
      className="w-4 h-4 cursor-pointer"
      onClick={() => select("desktop")}
    />
  );
}

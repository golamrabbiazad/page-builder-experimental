import { Device } from "grapesjs";

interface DeviceSelectProps {
  selected: string;
  select: (deviceId: string) => void;
  devices: Device[];
}

export function DeviceSelect({ selected, select }: DeviceSelectProps) {
  return selected === "desktop" ? (
    <i
      className="fa-solid fa-mobile-screen w-4 h-4 cursor-pointer"
      onClick={() => select("mobilePortrait")}
    />
  ) : (
    <i
      className="fa-solid fa-desktop w-4 h-4 cursor-pointer"
      onClick={() => select("desktop")}
    />
  );
}

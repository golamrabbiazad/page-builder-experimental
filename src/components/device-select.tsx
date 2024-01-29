import { Device } from "grapesjs";

interface DeviceSelectProps {
  selected: string;
  select: (deviceId: string) => void;
  devices: Device[];
}

export function DeviceSelect({ selected, select }: DeviceSelectProps) {
  return selected === "desktop" ? (
    <i
      className="fa-solid fa-mobile-screen"
      onClick={() => select("mobilePortrait")}
      style={{ color: "white", cursor: "pointer" }}
    />
  ) : (
    <i
      className="fa-solid fa-desktop"
      onClick={() => select("desktop")}
      style={{ color: "white", cursor: "pointer" }}
    />
  );
}

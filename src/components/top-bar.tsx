import { WithEditor } from "@grapesjs/react";
import { Preview, ComponentOutline } from "./commands";
import { LayoutGrid } from "lucide-react";

export function Topbar({
  showPanel,
  setPanelShow,
}: {
  showPanel: boolean;
  setPanelShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center justify-between py-1 px-16">
      <h2 className="text-2xl font-bold tracking-tighter">M4yours Editor</h2>

      <div className="flex items-center gap-2">
        <WithEditor>
          <Preview />
          <ComponentOutline commandId="core:component-outline" />
        </WithEditor>
        <LayoutGrid
          className="h-4 w-4"
          onClick={() => setPanelShow(!showPanel)}
        />
      </div>
    </div>
  );
}

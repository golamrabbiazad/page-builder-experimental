import { WithEditor } from "@grapesjs/react";
import { Preview, ComponentOutline } from "./commands";
import { CodePreview } from "./commands/code-preview";

export function Topbar({
  showPanel,
  setShowPanel,
}: {
  showPanel: boolean;
  setShowPanel: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center justify-between py-1 px-16 bg-blocksBackground">
      <h2 className="text-2xl font-bold tracking-tighter">M4yours Editor</h2>

      <div className="flex items-center gap-2">
        <WithEditor>
          <CodePreview />
          <Preview />
          <ComponentOutline commandId="core:component-outline" />
        </WithEditor>

        <i
          className="fa-solid fa-grip cursor-pointer"
          onClick={() => setShowPanel(!showPanel)}
        />
      </div>
    </div>
  );
}

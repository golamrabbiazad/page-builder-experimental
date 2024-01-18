import { BlocksProvider } from "@grapesjs/react";
import { CustomBlockManager } from "./blocks/custom-block-manager";

export function LeftSidbar() {
  return (
    <div className="flex flex-col">
      <BlocksProvider>
        {(props) => <CustomBlockManager {...props} />}
      </BlocksProvider>
    </div>
  );
}

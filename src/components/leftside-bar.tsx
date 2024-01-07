import { BlocksProvider } from "@grapesjs/react";
import { CustomBlockManager } from "./custom-block-manger";
import { MAIN_BORDER_COLOR, cn } from "@/lib/utils";

export function LeftSidbar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("gjs-left-sidebar flex flex-col", className)}>
      <div
        className={cn(
          "overflow-y-auto flex-grow border-t border-r",
          MAIN_BORDER_COLOR
        )}
      >
        <BlocksProvider>
          {(props) => <CustomBlockManager {...props} />}
        </BlocksProvider>
      </div>
    </div>
  );
}

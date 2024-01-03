import { MAIN_BORDER_COLOR, cx } from "../utils";
import { BlocksProvider } from "@grapesjs/react";
import { CustomBlockManager } from "./custom-block-manger";

export function LeftSidbar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx("gjs-left-sidebar flex flex-col", className)}>
      <div
        className={cx(
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

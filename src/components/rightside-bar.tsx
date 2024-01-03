import { MAIN_BORDER_COLOR, cx } from "../utils";
import { SelectorsProvider, StylesProvider } from "@grapesjs/react";
import { CustomSelectorManager } from "./custom-selector-manager";
import { CustomStyleManager } from "./custom-style-manager";

export function RightSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx("gjs-right-sidebar flex flex-col", className)}>
      <div
        className={cx(
          "overflow-y-auto flex-grow border-t border-r",
          MAIN_BORDER_COLOR
        )}
      >
        <>
          <SelectorsProvider>
            {(props) => <CustomSelectorManager {...props} />}
          </SelectorsProvider>
          <StylesProvider>
            {(props) => <CustomStyleManager {...props} />}
          </StylesProvider>
        </>
      </div>
    </div>
  );
}

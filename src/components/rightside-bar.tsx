import { SelectorsProvider, StylesProvider } from "@grapesjs/react";
import { CustomSelectorManager } from "./custom-selector-manager";
import { CustomStyleManager } from "./custom-style-manager";
import { MAIN_BORDER_COLOR, cn } from "@/lib/utils";

export function RightSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("gjs-right-sidebar flex flex-col", className)}>
      <div
        className={cn(
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

import {
  LayersProvider,
  PagesProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from "@grapesjs/react";
import { CustomSelectorManager } from "./custom-selector-manager";
import { CustomStyleManager } from "./custom-style-manager";
import { MAIN_BORDER_COLOR } from "@/lib/common";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import Icon from "@mdi/react";
import { mdiBrush, mdiCog, mdiLayers, mdiTextBoxMultiple } from "@mdi/js";
import { CustomTraitManager } from "./custom-trait-manger";
import { CustomPageManager } from "./custom-page-manger";
import { CustomLayerManager } from "./custom-layer-manager";

const defaultTabProps = {
  className: "!min-w-0",
};

export function RightSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={cn("gjs-right-sidebar flex flex-col", className)}>
      <Tabs
        value={selectedTab}
        onChange={(_, v) => setSelectedTab(v)}
        variant="fullWidth"
      >
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiBrush} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiCog} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiLayers} />} />
        <Tab
          {...defaultTabProps}
          label={<Icon size={1} path={mdiTextBoxMultiple} />}
        />
      </Tabs>
      <div
        className={cn(
          "overflow-y-auto flex-grow border-t border-r",
          MAIN_BORDER_COLOR
        )}
      >
        {selectedTab === 0 && (
          <>
            <SelectorsProvider>
              {(props) => <CustomSelectorManager {...props} />}
            </SelectorsProvider>
            <StylesProvider>
              {(props) => <CustomStyleManager {...props} />}
            </StylesProvider>
          </>
        )}
        {selectedTab === 1 && (
          <TraitsProvider>
            {(props) => <CustomTraitManager {...props} />}
          </TraitsProvider>
        )}
        {selectedTab === 2 && (
          <LayersProvider>
            {(props) => <CustomLayerManager {...props} />}
          </LayersProvider>
        )}
        {selectedTab === 3 && (
          <PagesProvider>
            {(props) => <CustomPageManager {...props} />}
          </PagesProvider>
        )}
      </div>
    </div>
  );
}

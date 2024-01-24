import {
  BlocksProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from "@grapesjs/react";
import { CustomStyleManager } from "./style/custom-style-manager";
import { CustomTraitManager } from "./traits/custom-trait-manager";
import { CustomSelectorManager } from "./selectors/custom-selector-manager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomBlockManager } from "./blocks/custom-block-manager";

export function RightSidebar() {
  return (
    <div className="gjs-right-sidebar h-dvh w-[460px] p-2 overflow-auto">
      <Tabs defaultValue="blocks">
        <TabsList className="h-84 flex items-center justify-between">
          <TabsTrigger className="flex flex-col w-1/3" value="blocks">
            <p className="uppercase">Blocks</p>
          </TabsTrigger>
          <TabsTrigger className="flex flex-col w-1/3" value="customize">
            <p className="uppercase">Customize</p>
          </TabsTrigger>
          <TabsTrigger className="flex flex-col w-1/3" value="theme">
            <p className="uppercase">Theme</p>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="blocks">
          <BlocksProvider>
            {(props) => <CustomBlockManager {...props} />}
          </BlocksProvider>
        </TabsContent>

        <TabsContent value="customize">
          <TraitsProvider>
            {(props) => <CustomTraitManager {...props} />}
          </TraitsProvider>
        </TabsContent>

        <TabsContent value="theme">
          <>
            <SelectorsProvider>
              {(props) => <CustomSelectorManager {...props} />}
            </SelectorsProvider>
            <StylesProvider>
              {(props) => <CustomStyleManager {...props} />}
            </StylesProvider>
          </>
        </TabsContent>
      </Tabs>

      {/* <Tabs defaultValue="navigator">
        <TabsList className="h-84 flex items-center">
          <TabsTrigger className="flex flex-col w-full" value="navigator">
            <Layers />
            <p>Navigator</p>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="navigator" className="overflow-auto">
          <LayersProvider>
            {(props) => <CustomLayerManager {...props} />}
          </LayersProvider>
        </TabsContent>
      </Tabs> */}
    </div>
  );
}

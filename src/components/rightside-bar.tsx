import {
  BlocksProvider,
  DevicesProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
  WithEditor,
} from "@grapesjs/react";
import { DeviceSelect } from "./device-select";
import { CustomBlockManager } from "./blocks/custom-block-manager";
import { CustomTraitManager } from "./traits/custom-trait-manager";
import { CustomStyleManager } from "./style/custom-style-manager";
import { CustomSelectorManager } from "./selectors/custom-selector-manager";
import { UndoTask, RedoTask, DiscardButton, SaveToast } from "./commands";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RightSidebar() {
  return (
    <div className="gjs-right-sidebar w-[460px] h-dvh overflow-auto bg-blocksBackground">
      <div className="flex justify-between border border-b-gray-500">
        <div className="flex items-center">
          <WithEditor>
            <UndoTask />
            <RedoTask />
          </WithEditor>
        </div>
        <div className="flex items-center">
          <DevicesProvider>
            {({ selected, select, devices }) => (
              <DeviceSelect
                select={select}
                selected={selected}
                devices={devices}
              />
            )}
          </DevicesProvider>
          <WithEditor>
            <DiscardButton />
            <SaveToast />
          </WithEditor>
        </div>
      </div>
      <Tabs defaultValue="blocks" className="mt-2">
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
          <SelectorsProvider>
            {(props) => <CustomSelectorManager {...props} />}
          </SelectorsProvider>
          <StylesProvider>
            {(props) => <CustomStyleManager {...props} />}
          </StylesProvider>
          <TraitsProvider>
            {(props) => <CustomTraitManager {...props} />}
          </TraitsProvider>
        </TabsContent>

        <TabsContent value="theme">
          <>
            <h1>Implementing Soon!</h1>
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

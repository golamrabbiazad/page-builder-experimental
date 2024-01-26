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
import { TabsProps, Tabs } from "antd";

const items: TabsProps["items"] = [
  {
    key: "blocks-tab",
    label: "Blocks",
    children: (
      <BlocksProvider>
        {(props) => <CustomBlockManager {...props} />}
      </BlocksProvider>
    ),
  },
  {
    key: "customize-tab",
    label: "Customize",
    children: (
      <>
        <SelectorsProvider>
          {(props) => <CustomSelectorManager {...props} />}
        </SelectorsProvider>
        <StylesProvider>
          {(props) => <CustomStyleManager {...props} />}
        </StylesProvider>
        <TraitsProvider>
          {(props) => <CustomTraitManager {...props} />}
        </TraitsProvider>
      </>
    ),
  },
  {
    key: "theme-tab",
    label: "Theme",
    children: <h1>Implementing Soon!</h1>,
  },
];

export function RightSidebar() {
  const handleChange = (key: string) => {
    console.log(key);
  };
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

      <Tabs
        defaultActiveKey="blocks-tab"
        items={items}
        onChange={handleChange}
      />

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

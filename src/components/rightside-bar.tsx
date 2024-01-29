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
import { TabsProps, Tabs, Flex } from "antd";

const items: TabsProps["items"] = [
  {
    key: "blocks-tab",
    label: "Blocks",
    style: {},

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

const rawCSS = `
.toggle-siderbar {
  display: hidden;
}
`;

export function RightSidebar() {
  const handleChange = (key: string) => {
    console.log(key);
  };
  return (
    <div
      style={{ width: "500px", height: "100dvh", overflow: "auto" }}
      className="toggle-sidebar"
    >
      <Flex
        style={{
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
        }}
      >
        <Flex align="center">
          <WithEditor>
            <UndoTask />
            <RedoTask />
          </WithEditor>
        </Flex>

        <Flex align="center">
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
        </Flex>
      </Flex>

      <Tabs
        defaultActiveKey="blocks-tab"
        items={items}
        onChange={handleChange}
        style={{
          backgroundColor: "#2B2B33",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          color: "white",
        }}
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

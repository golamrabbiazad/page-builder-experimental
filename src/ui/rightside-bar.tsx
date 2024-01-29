import { TabsProps, Tabs, Flex } from "antd";
import {
  BlocksProvider,
  DevicesProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
  WithEditor,
} from "@grapesjs/react";

import { BlockManager } from "@/ui/blocks/manager";
import { StyleManager } from "@/ui/style/manager";
import { TraitManager } from "@/ui/traits/manager";
import { DeviceSelect } from "@/ui/device-select";
import { SelectorManager } from "@/ui/selectors/manager";
import { DiscardButton, RedoTask, SaveToast, UndoTask } from "@/ui/commands";

const items: TabsProps["items"] = [
  {
    key: "blocks-tab",
    label: "Blocks",

    children: (
      <BlocksProvider>{(props) => <BlockManager {...props} />}</BlocksProvider>
    ),
  },
  {
    key: "customize-tab",
    label: "Customize",
    style: {
      height: "100dvh",
      overflow: "auto",
    },
    children: (
      <>
        <SelectorsProvider>
          {(props) => <SelectorManager {...props} />}
        </SelectorsProvider>
        <StylesProvider>
          {(props) => <StyleManager {...props} />}
        </StylesProvider>
        <TraitsProvider>
          {(props) => <TraitManager {...props} />}
        </TraitsProvider>
      </>
    ),
  },
  {
    key: "navigator-tab",
    label: "Navigator",
    // children: (
    //   <LayersProvider>{(props) => <LayerManager {...props} />}</LayersProvider>
    // ),
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
    </div>
  );
}

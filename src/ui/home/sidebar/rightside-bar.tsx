import { TabsProps, Tabs } from "antd";
import {
  BlocksProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from "@grapesjs/react";
import { BlockManager } from "@/ui/blocks/manager";
import { StyleManager } from "@/ui/style/manager";
import { TraitManager } from "@/ui/traits/manager";
import { SelectorManager } from "@/ui/selectors/manager";

const items: TabsProps["items"] = [
  {
    key: "blocks-tab",
    label: "BLOCKS",
    children: (
      <BlocksProvider>{(props) => <BlockManager {...props} />}</BlocksProvider>
    ),
  },
  {
    key: "customize-tab",
    label: "CUSTOMIZE",
    children: (
      <>
        <TraitsProvider>
          {(props) => <TraitManager {...props} />}
        </TraitsProvider>
        <SelectorsProvider>
          {(props) => <SelectorManager {...props} />}
        </SelectorsProvider>
        <StylesProvider>
          {(props) => <StyleManager {...props} />}
        </StylesProvider>
      </>
    ),
  },
  // {
  //   key: "navigator-tab",
  //   label: "NAVIGATOR",
  //   children: (
  //     <LayersProvider>{(props) => <LayerManager {...props} />}</LayersProvider>
  //   ),
  // },
];

export function RightSidebar() {
  return (
    <div className="gjs-right-sidebar" style={{ borderTop: "1px solid gray" }}>
      <Tabs
        defaultActiveKey="blocks-tab"
        items={items}
        style={{
          backgroundColor: "#2B2B33",
          color: "white",
        }}
        tabBarStyle={{
          marginLeft: "1rem",
        }}
      />
    </div>
  );
}

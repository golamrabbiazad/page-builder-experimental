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
import { SelectorManager } from "@/ui/selectors/manager";
import { DiscardButton, RedoTask, SaveToast, UndoTask } from "@/ui/commands";

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
    <div className="gjs-right-sidebar">
      <Flex
        justify="space-between"
        style={{
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
            {({ selected, select }) => (
              <div>
                {selected === "desktop" ? (
                  <i
                    className="fa-solid fa-mobile-screen"
                    onClick={() => select("mobilePortrait")}
                    style={{ color: "white", cursor: "pointer" }}
                  />
                ) : (
                  <i
                    className="fa-solid fa-desktop"
                    onClick={() => select("desktop")}
                    style={{ color: "white", cursor: "pointer" }}
                  />
                )}
              </div>
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

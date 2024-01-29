import { WithEditor } from "@grapesjs/react";
import { Preview, ComponentOutline } from "./commands";
import { CodePreview } from "./commands/code-preview";
import { Flex } from "antd";

const EDITOR_STATUS = "Expermental";

export function Topbar({ showDrawer }: { showDrawer: () => void }) {
  return (
    <Flex
      justify="space-between"
      style={{
        paddingLeft: "4rem",
        paddingRight: "4rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        background: "#2B2B33",
      }}
    >
      <Flex>
        <h2
          style={{
            color: "white",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            fontWeight: "bold",
            marginRight: "0.5rem",
          }}
        >
          M4yours Editor
        </h2>

        {/* <Badge
          count={
            <p
              style={{
                backgroundColor: "#faad14",
                padding: "0.3rem",
                borderRadius: "0.5rem",
              }}
            >
              Experimental
            </p>
          }
          style={{ color: "#000" }}
        /> */}
      </Flex>

      <Flex gap="middle" align="center">
        <WithEditor>
          <CodePreview />
          <Preview />
          <ComponentOutline commandId="core:component-outline" />
        </WithEditor>

        <i
          style={{ cursor: "pointer", color: "white" }}
          className="fa-solid fa-grip fa-lg"
          onClick={showDrawer}
        />
      </Flex>
    </Flex>
  );
}

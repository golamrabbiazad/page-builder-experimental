import { Badge, Flex } from "antd";
import { WithEditor } from "@grapesjs/react";
import { ComponentOutline, Preview, CodePreview } from "./commands";

const EDITOR_STATUS = "Expermental";

export function Topbar({ showDrawer }: { showDrawer: () => void }) {
  return (
    <Flex
      justify="space-between"
      style={{
        padding: "0.5rem 4rem",
        background: "#2B2B33",
      }}
    >
      <Flex>
        <h2
          style={{
            color: "white",
            fontSize: "1.1rem",
            lineHeight: "2rem",
            fontWeight: "bold",
            letterSpacing: "-0.05em",
            marginRight: "0.5rem",
          }}
        >
          M4yours Editor
        </h2>

        <Badge
          count={
            <p
              style={{
                backgroundColor: "#faad14",
                fontSize: "0.5rem",
                padding: "0.2rem",
                borderRadius: "0.8rem",
              }}
            >
              {EDITOR_STATUS}
            </p>
          }
          style={{ color: "#000" }}
        />
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

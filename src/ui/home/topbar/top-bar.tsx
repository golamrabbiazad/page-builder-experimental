import { Badge, Flex } from "antd";
import { WithEditor } from "@grapesjs/react";
import {
  ComponentOutline,
  Preview,
  CodePreview,
  LoadProject,
} from "../../commands";
import styles from "./topbar.module.css";

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
        <a href="/">
          <img src="/assets/logo/editor.svg" alt="m4yours editor" />
        </a>

        <Badge
          count={<p className={styles.experimentalBadge}>{EDITOR_STATUS}</p>}
          style={{ color: "#000" }}
        />
      </Flex>

      <Flex gap="middle" align="center">
        <WithEditor>
          <LoadProject />
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

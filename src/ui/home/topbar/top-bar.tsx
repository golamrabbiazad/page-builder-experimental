import { Badge, Flex } from "antd";
import { DevicesProvider, WithEditor } from "@grapesjs/react";
import {
  Preview,
  CodePreview,
  LoadProject,
  UndoTask,
  RedoTask,
  DiscardButton,
  SaveToast,
} from "@/ui/commands";
import styles from "./topbar.module.css";
import { Image } from "antd";

const EDITOR_STATUS = "Expermental";

export function Topbar() {
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{
        padding: "0.5rem 4rem",
        background: "#2B2B33",
      }}
    >
      <Flex>
        <a href="/" target="_self">
          <Image
            preview={false}
            src="/assets/logo/editor.svg"
            alt="m4yours editor"
            loading="lazy"
            height="18px"
            width="125px"
          />
        </a>

        <Badge
          count={<p className={styles.experimentalBadge}>{EDITOR_STATUS}</p>}
          style={{ color: "#000" }}
        />
      </Flex>

      <Flex align="center" gap={8}>
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
      </Flex>

      <Flex gap="middle" align="center">
        <WithEditor>
          <Flex>
            <UndoTask />
            <RedoTask />
          </Flex>

          <LoadProject />
          <CodePreview />
          <Preview />
          <DiscardButton />
          <SaveToast />
        </WithEditor>
      </Flex>
    </Flex>
  );
}
